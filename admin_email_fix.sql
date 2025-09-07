-- ADMIN EMAIL VERIFICATION FIX
-- Copy and paste these commands into your Supabase SQL Editor

-- Step 1: Verify the admin email (only update email_confirmed_at)
UPDATE auth.users
SET email_confirmed_at = NOW()
WHERE email = 'carthiganelectronics@gmail.com';

-- Step 2: Alternative method - update user metadata
UPDATE auth.users
SET raw_user_meta_data = raw_user_meta_data || '{"email_verified": true}'::jsonb
WHERE email = 'carthiganelectronics@gmail.com';

-- Step 3: Check if it worked
SELECT
  email,
  email_confirmed_at,
  raw_user_meta_data
FROM auth.users
WHERE email = 'carthiganelectronics@gmail.com';

-- That's it! Your admin email should now be verified.