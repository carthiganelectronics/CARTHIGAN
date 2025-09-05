# Carthigan Setup Guide

This guide will help you set up the Carthigan platform for local development and deployment.

## Prerequisites

1. Node.js 18+ installed
2. npm or yarn package manager
3. Git installed
4. Supabase account
5. Paystack account (for production)
6. Vercel account (for deployment)

## Local Development Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd carthigan
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Paystack Configuration (for production)
NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY=your_paystack_public_key
PAYSTACK_SECRET_KEY=your_paystack_secret_key

# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 4. Supabase Setup

1. Create a new Supabase project at https://app.supabase.com
2. Copy your Project URL and anon key from the API settings
3. Run the schema.sql file in the Supabase SQL editor:
   - Go to SQL Editor in your Supabase dashboard
   - Copy the contents of `supabase/schema.sql`
   - Run the SQL to create tables and set up RLS

### 5. Run Development Server

```bash
npm run dev
```

The application will be available at http://localhost:3000

## Supabase Functions Deployment

To deploy Supabase Edge Functions:

1. Install Supabase CLI:
   ```bash
   npm install -g supabase
   ```

2. Link your project:
   ```bash
   supabase link --project-ref YOUR_PROJECT_REF
   ```

3. Deploy functions:
   ```bash
   supabase functions deploy
   ```

## Production Deployment

### Vercel Deployment

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set the environment variables in Vercel dashboard
4. Deploy!

### Supabase Production Setup

1. Update your Supabase environment variables in Vercel:
   - NEXT_PUBLIC_SUPABASE_URL
   - NEXT_PUBLIC_SUPABASE_ANON_KEY

2. Set up Row Level Security policies as needed

### Paystack Integration

1. Create a Paystack account at https://paystack.com
2. Get your public and secret keys from the dashboard
3. Update the environment variables:
   - NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY
   - PAYSTACK_SECRET_KEY

4. Set up webhooks in your Paystack dashboard:
   - URL: https://yourdomain.com/api/paystack/webhook
   - Events: charge.success, charge.failed, refund.completed

## Project Structure Overview

```
├── app/                    # Next.js app router pages
│   ├── api/               # API routes
│   ├── admin/             # Admin panel
│   └── [page]/            # Individual pages
├── components/            # Reusable UI components
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions
├── public/                # Static assets
├── supabase/
│   ├── functions/         # Edge Functions
│   └── schema.sql         # Database schema
└── .github/workflows/     # CI/CD workflows
```

## Customization Guide

### Color Scheme

The color scheme is defined in `tailwind.config.js`:
- Primary: Dark Slate (#2D3748)
- Background: Off White (#F7FAFC)
- Accents: Uganda Yellow (#FCD34D), Uganda Red (#EF4444)

### Adding New Pages

1. Create a new directory in `app/` for your page
2. Add a `page.tsx` file with your page content
3. The route will automatically be available at `/your-directory-name`

### Adding New Components

1. Create a new file in `components/`
2. Export your component as default
3. Import and use in pages: `import ComponentName from '@/components/ComponentName'`

## Troubleshooting

### Common Issues

1. **Supabase connection errors**:
   - Verify your SUPABASE_URL and SUPABASE_ANON_KEY
   - Check that your Supabase project is not paused

2. **Environment variables not loading**:
   - Ensure variables are in `.env.local` (not committed to git)
   - Restart the development server

3. **Build errors**:
   - Check TypeScript errors
   - Ensure all dependencies are installed

### Getting Help

- Check the README.md for project overview
- Review the code documentation
- Contact the development team