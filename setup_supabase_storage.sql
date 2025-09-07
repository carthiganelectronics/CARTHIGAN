-- Supabase Storage Setup for Photo Uploads
-- Run these commands in your Supabase SQL Editor

-- Create the storage bucket for photos
INSERT INTO storage.buckets (id, name, public)
VALUES ('photos', 'photos', true);

-- Set up RLS policies for the photos bucket
CREATE POLICY "Public Access" ON storage.objects FOR SELECT USING (bucket_id = 'photos');
CREATE POLICY "Authenticated users can upload photos" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'photos' AND auth.role() = 'authenticated');
CREATE POLICY "Users can update their own photos" ON storage.objects FOR UPDATE USING (bucket_id = 'photos' AND auth.uid()::text = (storage.foldername(name))[1]);
CREATE POLICY "Users can delete their own photos" ON storage.objects FOR DELETE USING (bucket_id = 'photos' AND auth.uid()::text = (storage.foldername(name))[1]);

-- Alternative: Allow all authenticated users to manage photos
-- Uncomment these if the above policies are too restrictive

/*
CREATE POLICY "Allow all authenticated operations on photos" ON storage.objects
FOR ALL USING (bucket_id = 'photos' AND auth.role() = 'authenticated');
*/

-- Check if bucket was created successfully
SELECT * FROM storage.buckets WHERE id = 'photos';