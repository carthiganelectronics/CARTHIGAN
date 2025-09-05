/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'github.com'],
  },
  // Exclude supabase functions from the build
  outputFileTracingExcludes: {
    '**/*': ['./supabase/functions/**/*']
  },
  // Set the outputFileTracingRoot to the current directory
  outputFileTracingRoot: __dirname,
}

module.exports = nextConfig