import { createClient } from '@supabase/supabase-js'

// These would typically come from environment variables
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://your-supabase-url.supabase.co'
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'your-anon-key'

console.log('Supabase URL:', SUPABASE_URL)
console.log('Supabase Key:', SUPABASE_ANON_KEY ? 'Set' : 'Not set')

// Create a single supabase client for client-side operations
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)