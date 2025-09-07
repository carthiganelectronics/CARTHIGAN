// Debug script to test Supabase connection
// Run this in browser console on your website

// Replace with your actual Supabase credentials
const SUPABASE_URL = 'https://mzchfqekwljzcsdtdefh.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im16Y2hmcWVrd2xqemNzZHRkZWZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY5OTkxMzUsImV4cCI6MjA3MjU3NTEzNX0.xsJJi2a0dO86hmDGgj7SjrhcMGLYjjJR2HUpypnRzDg';

async function testSupabaseConnection() {
  console.log('🔍 Testing Supabase connection...');

  try {
    // Test basic connection
    const response = await fetch(`${SUPABASE_URL}/rest/v1/photos?select=count`, {
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      console.error('❌ Connection failed:', response.status, response.statusText);
      return;
    }

    const countData = await response.json();
    console.log('✅ Connection successful!');

    // Test fetching photos
    console.log('📸 Fetching photos...');
    const photosResponse = await fetch(`${SUPABASE_URL}/rest/v1/photos?select=*&order=created_at.desc`, {
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        'Content-Type': 'application/json'
      }
    });

    if (!photosResponse.ok) {
      console.error('❌ Photos fetch failed:', photosResponse.status, photosResponse.statusText);
      return;
    }

    const photos = await photosResponse.json();
    console.log('📊 Photos found:', photos.length);
    console.log('📋 Photo details:', photos);

    if (photos.length === 0) {
      console.log('⚠️ No photos in database. Check if Android app is uploading correctly.');
    }

  } catch (error) {
    console.error('❌ Error:', error);
  }
}

// Run the test
testSupabaseConnection();