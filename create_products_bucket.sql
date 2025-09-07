-- Create products storage bucket and policies
-- Run this in your Supabase SQL Editor

-- Create the products bucket
INSERT INTO storage.buckets (id, name, public)
VALUES ('products', 'products', true)
ON CONFLICT (id) DO NOTHING;

-- Products storage policies
CREATE POLICY "Public Access" ON storage.objects FOR SELECT USING (bucket_id = 'products');
CREATE POLICY "Authenticated users can upload products" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'products' AND auth.role() = 'authenticated');
CREATE POLICY "Users can update their own product images" ON storage.objects FOR UPDATE USING (bucket_id = 'products' AND auth.uid()::text = (storage.foldername(name))[1]);
CREATE POLICY "Users can delete their own product images" ON storage.objects FOR DELETE USING (bucket_id = 'products' AND auth.uid()::text = (storage.foldername(name))[1]);

-- Also include policies for photos, mentorship, waitlist from fix_photos_rls_policy.sql
CREATE POLICY "Authenticated users can insert photos" ON photos
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can update photos" ON photos
  FOR UPDATE USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can delete photos" ON photos
  FOR DELETE USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can read mentorship inquiries" ON mentorship_inquiries
  FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can read waitlist entries" ON waitlist_entries
  FOR SELECT USING (auth.role() = 'authenticated');