-- Create products storage bucket and policies
-- Run this in your Supabase SQL Editor

-- Create the products bucket
INSERT INTO storage.buckets (id, name, public)
VALUES ('products', 'products', true)
ON CONFLICT (id) DO NOTHING;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Public Access" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can upload products" ON storage.objects;
DROP POLICY IF EXISTS "Users can update their own product images" ON storage.objects;
DROP POLICY IF EXISTS "Users can delete their own product images" ON storage.objects;

-- Products storage policies
CREATE POLICY "Public Access" ON storage.objects FOR SELECT USING (bucket_id = 'products');
CREATE POLICY "Authenticated users can upload products" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'products' AND auth.role() = 'authenticated');
CREATE POLICY "Users can update their own product images" ON storage.objects FOR UPDATE USING (bucket_id = 'products' AND auth.uid()::text = (storage.foldername(name))[1]);
CREATE POLICY "Users can delete their own product images" ON storage.objects FOR DELETE USING (bucket_id = 'products' AND auth.uid()::text = (storage.foldername(name))[1]);

-- Blog storage bucket
INSERT INTO storage.buckets (id, name, public)
VALUES ('blog', 'blog', true)
ON CONFLICT (id) DO NOTHING;

-- Blog storage policies
CREATE POLICY "Public Access" ON storage.objects FOR SELECT USING (bucket_id = 'blog');
CREATE POLICY "Authenticated users can upload blog files" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'blog' AND auth.role() = 'authenticated');
CREATE POLICY "Users can update their own blog files" ON storage.objects FOR UPDATE USING (bucket_id = 'blog' AND auth.uid()::text = (storage.foldername(name))[1]);
CREATE POLICY "Users can delete their own blog files" ON storage.objects FOR DELETE USING (bucket_id = 'blog' AND auth.uid()::text = (storage.foldername(name))[1]);

-- Drop existing table policies if they exist
DROP POLICY IF EXISTS "Authenticated users can insert photos" ON photos;
DROP POLICY IF EXISTS "Authenticated users can update photos" ON photos;
DROP POLICY IF EXISTS "Authenticated users can delete photos" ON photos;
DROP POLICY IF EXISTS "Authenticated users can read mentorship inquiries" ON mentorship_inquiries;
DROP POLICY IF EXISTS "Authenticated users can read waitlist entries" ON waitlist_entries;

-- Table policies
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

-- Blog posts table updates
ALTER TABLE blog_posts ADD COLUMN IF NOT EXISTS image_urls jsonb DEFAULT '[]'::jsonb;
ALTER TABLE blog_posts ADD COLUMN IF NOT EXISTS docx_url text;

-- Blog bucket
INSERT INTO storage.buckets (id, name, public)
VALUES ('blog', 'blog', true)
ON CONFLICT (id) DO NOTHING;

-- Blog storage policies
CREATE POLICY "Public Access" ON storage.objects FOR SELECT USING (bucket_id = 'blog');
CREATE POLICY "Authenticated users can upload blog files" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'blog' AND auth.role() = 'authenticated');
CREATE POLICY "Users can update their own blog files" ON storage.objects FOR UPDATE USING (bucket_id = 'blog' AND auth.uid()::text = (storage.foldername(name))[1]);
CREATE POLICY "Users can delete their own blog files" ON storage.objects FOR DELETE USING (bucket_id = 'blog' AND auth.uid()::text = (storage.foldername(name))[1]);

-- Blog posts policies
CREATE POLICY "Authenticated users can insert blog posts" ON blog_posts
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can update blog posts" ON blog_posts
  FOR UPDATE USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can delete blog posts" ON blog_posts
  FOR DELETE USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can read blog posts" ON blog_posts
  FOR SELECT USING (auth.role() = 'authenticated');