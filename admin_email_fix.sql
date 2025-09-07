-- ADMIN EMAIL VERIFICATION FIX
-- Copy and paste these commands into your Supabase SQL Editor

-- Step 1: Verify the admin email
UPDATE auth.users
SET email_confirmed_at = NOW(),
    confirmed_at = NOW()
WHERE email = 'carthiganelectronics@gmail.com';

-- Step 2: Check if it worked
SELECT
  email,
  email_confirmed_at,
  confirmed_at
FROM auth.users
WHERE email = 'carthiganelectronics@gmail.com';

-- That's it! Your admin email should now be verified.