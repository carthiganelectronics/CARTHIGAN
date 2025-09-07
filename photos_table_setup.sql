-- Photos Table Setup for Carthigan Admin App
-- Copy and paste this entire file into your Supabase SQL Editor

-- Create the photos table
CREATE TABLE IF NOT EXISTS photos (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT,
  description TEXT,
  image_url TEXT NOT NULL,
  category TEXT,
  uploaded_by TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security for photos table
ALTER TABLE photos ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read access to photos
CREATE POLICY "Public read access to photos" ON photos
  FOR SELECT USING (true);

-- Optional: Create index for better performance
CREATE INDEX IF NOT EXISTS idx_photos_category ON photos(category);

-- Success message
-- After running this, your photos will sync between Android app and website!