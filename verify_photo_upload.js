// Photo Upload Verification Script
// Run this in browser console to verify photo upload functionality

async function verifyPhotoUpload() {
  console.log('🔍 Verifying Photo Upload System...');

  const SUPABASE_URL = 'https://mzchfqekwljzcsdtdefh.supabase.co';
  const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im16Y2hmcWVrd2xqemNzZHRkZWZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY5OTkxMzUsImV4cCI6MjA3MjU3NTEzNX0.xsJJi2a0dO86hmDGgj7SjrhcMGLYjjJR2HUpypnRzDg';

  try {
    // Test 1: Check if photos table exists and has data
    console.log('📊 Checking photos table...');
    const photosResponse = await fetch(`${SUPABASE_URL}/rest/v1/photos?select=*&order=created_at.desc`, {
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        'Content-Type': 'application/json'
      }
    });

    if (!photosResponse.ok) {
      console.error('❌ Photos table access failed:', photosResponse.status);
      return;
    }

    const photos = await photosResponse.json();
    console.log(`✅ Photos table accessible. Found ${photos.length} photos.`);

    if (photos.length > 0) {
      console.log('📸 Recent photos:');
      photos.slice(0, 3).forEach((photo, index) => {
        console.log(`${index + 1}. ${photo.title || 'Untitled'} - ${photo.image_url}`);
      });
    }

    // Test 2: Check if storage bucket exists
    console.log('🗄️ Checking storage bucket...');
    const storageResponse = await fetch(`${SUPABASE_URL}/storage/v1/bucket/photos`, {
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
      }
    });

    if (storageResponse.ok) {
      console.log('✅ Photos storage bucket exists and is accessible.');
    } else {
      console.error('❌ Photos storage bucket issue:', storageResponse.status);
    }

    // Test 3: Check storage files
    console.log('📁 Checking storage files...');
    const filesResponse = await fetch(`${SUPABASE_URL}/storage/v1/object/list/photos`, {
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
      }
    });

    if (filesResponse.ok) {
      const files = await filesResponse.json();
      console.log(`✅ Storage has ${files.length} files.`);
    } else {
      console.log('⚠️ Could not check storage files (might be empty).');
    }

    // Summary
    console.log('\n📋 SUMMARY:');
    console.log(`- Photos in database: ${photos.length}`);
    console.log(`- Storage bucket: ${storageResponse.ok ? '✅ Working' : '❌ Issue'}`);
    console.log(`- System status: ${photosResponse.ok && storageResponse.ok ? '✅ Ready' : '❌ Needs fixing'}`);

    if (photos.length > 0) {
      console.log('\n🎉 SUCCESS! Your photo upload system is working!');
      console.log('📸 Uploaded photos should appear on your website.');
    } else {
      console.log('\n📝 No photos uploaded yet. Try uploading from your Android app.');
    }

  } catch (error) {
    console.error('❌ Verification failed:', error);
  }
}

// Auto-run the verification
verifyPhotoUpload();

// Also provide manual test functions
window.testPhotos = () => {
  fetch('https://mzchfqekwljzcsdtdefh.supabase.co/rest/v1/photos?select=count', {
    headers: {
      'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im16Y2hmcWVrd2xqemNzZHRkZWZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY5OTkxMzUsImV4cCI6MjA3MjU3NTEzNX0.xsJJi2a0dO86hmDGgj7SjrhcMGLYjjJR2HUpypnRzDg',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im16Y2hmcWVrd2xqemNzZHRkZWZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY5OTkxMzUsImV4cCI6MjA3MjU3NTEzNX0.xsJJi2a0dO86hmDGgj7SjrhcMGLYjjJR2HUpypnRzDg'
    }
  }).then(r => r.json()).then(d => console.log('Photo count:', d));
};