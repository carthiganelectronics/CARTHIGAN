# Carthigan Platform Documentation

## Overview

Carthigan is a full-stack e-commerce and community platform designed for Uganda's tech ecosystem. The platform serves multiple purposes:

1. **E-commerce**: Selling electronics, embedded systems, software tools, and creative resources
2. **Education**: Providing mentorship programs and educational content
3. **Community**: Facilitating discussions and knowledge sharing
4. **Innovation**: Supporting semiconductor research and development

## Architecture

### Frontend

- **Framework**: Next.js 15.5 with App Router
- **Styling**: Tailwind CSS with custom configuration
- **UI Components**: Aceternity UI with Framer Motion animations
- **State Management**: Zustand for client-side state
- **Data Fetching**: TanStack Query for server state management
- **Internationalization**: next-intl for multilingual support

### Backend

- **Database**: Supabase PostgreSQL
- **Authentication**: Supabase Auth (minimal, primarily for admin)
- **Storage**: Supabase Storage for images and files
- **Serverless Functions**: Supabase Edge Functions
- **Realtime**: Supabase Realtime (minimal usage)

### Payment Processing

- **Provider**: Paystack
- **Integration**: Server-side processing via Edge Functions
- **Webhooks**: For payment confirmation and order processing

### Deployment

- **Frontend**: Vercel
- **Backend**: Supabase
- **CI/CD**: GitHub Actions

## Project Structure

```
├── app/                    # Next.js app router
│   ├── (site)/            # Main site pages
│   │   ├── about/
│   │   ├── blog/
│   │   ├── checkout/
│   │   ├── community/
│   │   ├── mentorship/
│   │   ├── products/
│   │   └── page.tsx       # Homepage
│   ├── admin/             # Admin panel
│   ├── api/               # API routes
│   └── layout.tsx         # Root layout
├── components/            # Reusable UI components
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions and clients
├── public/                # Static assets
├── supabase/              # Supabase configuration
│   ├── functions/         # Edge Functions
│   └── schema.sql         # Database schema
├── .github/workflows/     # CI/CD workflows
└── docs/                  # Project documentation
```

## Key Features

### 1. Product Catalog

The product catalog allows users to browse and purchase electronics, software tools, and creative resources.

**Key Components**:
- Product listing with search and filtering
- Product detail pages
- Shopping cart with local storage persistence
- Guest checkout flow

**Data Model**:
```sql
create table products (
  id uuid default uuid_generate_v4() primary key,
  name varchar(255) not null,
  description text,
  price integer not null,
  category varchar(100) not null,
  image_url text,
  in_stock boolean default true,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);
```

### 2. Mentorship Programs

The mentorship system connects learners with industry professionals.

**Key Components**:
- Mentor profiles and expertise areas
- Interest form for mentorship programs
- Community discussion forums

**Data Model**:
```sql
create table mentorship_inquiries (
  id uuid default uuid_generate_v4() primary key,
  name varchar(255) not null,
  email varchar(255) not null,
  phone varchar(50),
  interest varchar(100) not null,
  message text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);
```

### 3. Blog & Resources

The blog section provides technical articles and educational content.

**Key Components**:
- Article listing with categories
- Article detail pages
- Comment system with moderation

**Data Model**:
```sql
create table blog_posts (
  id uuid default uuid_generate_v4() primary key,
  title varchar(255) not null,
  excerpt text,
  content text,
  author varchar(255) not null,
  category varchar(100) not null,
  image_url text,
  published boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

create table comments (
  id uuid default uuid_generate_v4() primary key,
  post_id uuid references blog_posts(id) on delete cascade,
  author_name varchar(255) not null,
  content text not null,
  approved boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);
```

### 4. Community Forum

The community forum allows anonymous discussions on various topics.

**Key Components**:
- Category-based discussion threads
- Post creation form
- Like and comment functionality

**Data Model**:
```sql
create table community_posts (
  id uuid default uuid_generate_v4() primary key,
  title varchar(255) not null,
  content text not null,
  author_name varchar(255) not null,
  category varchar(100) not null,
  approved boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);
```

### 5. Admin Panel

The admin panel provides tools for managing content and orders.

**Key Sections**:
- Dashboard with analytics
- Product management
- Order processing
- Mentorship inquiry management
- Blog post management
- Community post moderation

## Security

### Data Protection

- All sensitive data is stored encrypted
- Passwords are hashed using industry-standard algorithms
- SSL/TLS encryption for all data transmission

### Access Control

- Public read access to most content
- Write access restricted through Row Level Security (RLS)
- Admin panel protected with authentication

### Input Validation

- All user inputs are validated on both client and server
- Sanitization of HTML content
- Protection against SQL injection and XSS attacks

## Performance

### Optimization Techniques

- Server-side rendering for improved SEO and initial load
- Static site generation for static content
- Image optimization with Next.js Image component
- Code splitting for reduced bundle sizes
- Caching with TanStack Query

### Monitoring

- Performance monitoring with Vercel Analytics
- Error tracking with Sentry (planned)
- Database performance monitoring with Supabase

## Internationalization

The platform supports multiple languages:

- **Primary**: English
- **Secondary**: Luganda (planned)
- **Implementation**: next-intl library

## Accessibility

The platform follows WCAG 2.1 guidelines:

- Proper semantic HTML structure
- ARIA attributes for interactive components
- Keyboard navigation support
- Screen reader compatibility
- Color contrast compliance

## Deployment

### Environment Variables

Required environment variables:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY=your_paystack_public_key
PAYSTACK_SECRET_KEY=your_paystack_secret_key
NEXT_PUBLIC_SITE_URL=your_site_url
```

### CI/CD Pipeline

GitHub Actions workflow:

1. Run tests on every push
2. Deploy to Vercel on main branch pushes
3. Deploy Supabase migrations and functions

### Monitoring and Maintenance

- Regular dependency updates
- Security vulnerability scanning
- Performance monitoring
- Backup and disaster recovery procedures

## API Documentation

### Public APIs

1. **Product Listing**
   - Endpoint: `/api/products`
   - Method: GET
   - Response: List of products with pagination

2. **Product Details**
   - Endpoint: `/api/products/[id]`
   - Method: GET
   - Response: Detailed product information

3. **Submit Mentorship Inquiry**
   - Endpoint: `/api/mentorship`
   - Method: POST
   - Request: Name, email, phone, interest, message
   - Response: Success confirmation

### Admin APIs

1. **Order Management**
   - Endpoint: `/api/admin/orders`
   - Method: GET, PUT, DELETE
   - Authentication: Required

2. **Product Management**
   - Endpoint: `/api/admin/products`
   - Method: GET, POST, PUT, DELETE
   - Authentication: Required

## Supabase Edge Functions

### Contact Submission

- Function: `contact-submission`
- Trigger: HTTP POST request
- Purpose: Handle mentorship inquiry submissions
- Security: Validates input and inserts into database

### Payment Processing

- Function: `process-payment`
- Trigger: HTTP POST request from Paystack webhook
- Purpose: Update order status and send notifications
- Security: Verifies webhook signature

## Troubleshooting

### Common Issues

1. **Supabase Connection Errors**
   - Verify environment variables
   - Check Supabase project status
   - Ensure network connectivity

2. **Payment Processing Failures**
   - Check Paystack credentials
   - Verify webhook configuration
   - Review function logs

3. **Performance Issues**
   - Check database query performance
   - Optimize image sizes
   - Review bundle sizes

### Support

For issues not covered in this documentation:

1. Check GitHub Issues
2. Contact development team
3. Review Supabase and Vercel documentation