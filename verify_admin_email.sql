-- Admin Email Verification for Carthigan
-- Run these commands in your Supabase SQL Editor

-- Method 1: Verify the existing user's email
UPDATE auth.users
SET email_confirmed_at = NOW(),
    confirmed_at = NOW()
WHERE email = 'carthiganelectronics@gmail.com';

-- Method 2: Alternative - Update user metadata to mark as verified
UPDATE auth.users
SET raw_user_meta_data = raw_user_meta_data || '{"email_verified": true}'::jsonb
WHERE email = 'carthiganelectronics@gmail.com';

-- Method 3: If you need to create a new verified admin user
-- (Only run this if the above doesn't work)
/*
INSERT INTO auth.users (
  instance_id,
  id,
  aud,
  role,
  email,
  encrypted_password,
  email_confirmed_at,
  confirmed_at,
  created_at,
  updated_at,
  raw_user_meta_data
) VALUES (
  '00000000-0000-0000-0000-000000000000',
  gen_random_uuid(),
  'authenticated',
  'authenticated',
  'carthiganelectronics@gmail.com',
  crypt('carthigan123', gen_salt('bf')),
  NOW(),
  NOW(),
  NOW(),
  NOW(),
  '{"email_verified": true}'::jsonb
);
*/

-- Check if the user is now verified
SELECT
  email,
  email_confirmed_at,
  confirmed_at,
  raw_user_meta_data
FROM auth.users
WHERE email = 'carthiganelectronics@gmail.com';