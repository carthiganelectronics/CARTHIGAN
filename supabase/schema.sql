-- Create products table
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

-- Create mentorship_inquiries table
create table mentorship_inquiries (
  id uuid default uuid_generate_v4() primary key,
  name varchar(255) not null,
  email varchar(255) not null,
  phone varchar(50),
  interest varchar(100) not null,
  message text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create blog_posts table
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

-- Create comments table
create table comments (
  id uuid default uuid_generate_v4() primary key,
  post_id uuid references blog_posts(id) on delete cascade,
  author_name varchar(255) not null,
  content text not null,
  approved boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create waitlist_entries table
create table waitlist_entries (
  id uuid default uuid_generate_v4() primary key,
  name varchar(255) not null,
  email varchar(255) not null,
  phone varchar(50),
  app_name varchar(255) not null,
  message text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create orders table
create table orders (
  id uuid default uuid_generate_v4() primary key,
  customer_name varchar(255) not null,
  customer_email varchar(255) not null,
  customer_phone varchar(50),
  customer_location text,
  items jsonb not null,
  total_amount integer not null,
  status varchar(50) default 'pending',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create photos table
create table photos (
  id uuid default uuid_generate_v4() primary key,
  title varchar(255),
  description text,
  image_url text not null,
  category varchar(100),
  uploaded_by varchar(255),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Set up Row Level Security (RLS)
alter table products enable row level security;
alter table mentorship_inquiries enable row level security;
alter table blog_posts enable row level security;
alter table comments enable row level security;
alter table waitlist_entries enable row level security;
alter table orders enable row level security;
alter table photos enable row level security;

-- Allow public read access to products
create policy "Public read access to products" on products
  for select using (true);

-- Allow public insert access to mentorship inquiries
create policy "Public insert access to mentorship inquiries" on mentorship_inquiries
  for insert with check (true);

-- Allow public read access to published blog posts
create policy "Public read access to published blog posts" on blog_posts
  for select using (published = true);

-- Allow public insert access to comments (for anonymous users)
create policy "Public insert access to comments" on comments
  for insert with check (true);

-- Allow public read access to approved comments
create policy "Public read access to approved comments" on comments
  for select using (approved = true);

-- Allow public insert access to waitlist entries
create policy "Public insert access to waitlist entries" on waitlist_entries
  for insert with check (true);

-- Allow public insert access to orders
create policy "Public insert access to orders" on orders
  for insert with check (true);

-- Allow public read access to photos
create policy "Public read access to photos" on photos
  for select using (true);

-- Create indexes for better performance
create index idx_products_category on products(category);
create index idx_blog_posts_category on blog_posts(category);
create index idx_blog_posts_published on blog_posts(published);
create index idx_comments_post_id on comments(post_id);
create index idx_waitlist_entries_app_name on waitlist_entries(app_name);
create index idx_orders_status on orders(status);
create index idx_photos_category on photos(category);