# Carthigan - Uganda's Leading Tech Hub

A full-stack e-commerce and community platform for electronics, embedded systems, software technology, and creative resources.

## Tech Stack

- **Frontend**: Next.js 15.5 with App Router
- **Styling**: Tailwind CSS with custom Ugandan-inspired color palette
- **UI Components**: Aceternity UI with Framer Motion animations
- **State Management**: Zustand for client-side state
- **Data Fetching**: TanStack Query for server state management
- **Backend**: Supabase (PostgreSQL, Storage, Edge Functions)
- **Payments**: Paystack integration
- **Deployment**: Vercel for frontend, Supabase for backend
- **Internationalization**: next-intl for multilingual support

## Color Palette

- Primary Text: `#2D3748` (Dark Slate)
- Background: `#F7FAFC` (Off White)
- Accent 1: `#FCD34D` (Uganda Yellow)
- Accent 2: `#EF4444` (Uganda Red)
- Accent 3: `#000000` (Uganda Black)

## Project Structure

```
├── app/                 # Next.js app router pages
│   ├── about/           # About page
│   ├── blog/            # Blog section
│   ├── checkout/        # Checkout flow
│   ├── community/       # Community forum
│   ├── mentorship/      # Mentorship programs
│   ├── products/        # Product catalog
│   ├── admin/           # Admin panel
│   └── layout.tsx       # Root layout
├── components/          # Reusable UI components
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions and Supabase client
├── public/              # Static assets
├── supabase/            # Supabase schema and functions
├── .github/workflows/   # CI/CD workflows
└── docs/                # Project documentation
```

## Getting Started

1. **Run the setup script**:
   ```bash
   ./setup.sh
   ```

2. **Set up environment variables**:
   Update the `.env.local` file with your credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY=your_paystack_public_key
   PAYSTACK_SECRET_KEY=your_paystack_secret_key
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Set up Supabase**:
   - Create a new Supabase project
   - Run the schema.sql file in the Supabase SQL editor
   - Deploy the Edge Functions
   - Update your environment variables with the project credentials

## Features

- **Product Catalog**: Browse and search electronics, software, and creative tools
- **Shopping Cart**: Add items to cart with local storage persistence
- **Guest Checkout**: Secure payment processing with Paystack
- **Mentorship Programs**: Connect with industry professionals
- **Blog & Resources**: Technical articles and tutorials
- **Community Forum**: Anonymous discussions and knowledge sharing
- **Admin Panel**: Content and order management dashboard
- **Responsive Design**: Mobile-first approach for Ugandan users
- **Dark Mode**: Adaptive theme based on system preferences
- **Multilingual Support**: English and Luganda language options

## Deployment

1. **Frontend (Vercel)**:
   - Connect your GitHub repository to Vercel
   - Set environment variables in Vercel dashboard
   - Deploy!

2. **Backend (Supabase)**:
   - Create a Supabase project
   - Run the database schema
   - Configure Row Level Security policies
   - Deploy Edge Functions
   - Set up Storage buckets for images

## Documentation

- [Setup Guide](SETUP.md)
- [Testing Guide](TESTING.md)
- [Platform Documentation](DOCUMENTATION.md)
- [Project Summary](SUMMARY.md)

## Development Guidelines

- Follow the established color palette and design system
- Use Tailwind CSS for styling with custom classes from tailwind.config.js
- Implement responsive design for all components
- Maintain accessibility standards (WCAG compliance)
- Write unit tests for critical functionality
- Use TypeScript for type safety

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a pull request

## License

This project is proprietary to Carthigan and not available for public use without explicit permission.