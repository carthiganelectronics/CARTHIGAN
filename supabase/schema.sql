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

-- Create community_posts table
create table community_posts (
  id uuid default uuid_generate_v4() primary key,
  title varchar(255) not null,
  content text not null,
  author_name varchar(255) not null,
  category varchar(100) not null,
  approved boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Set up Row Level Security (RLS)
alter table products enable row level security;
alter table mentorship_inquiries enable row level security;
alter table blog_posts enable row level security;
alter table comments enable row level security;
alter table community_posts enable row level security;

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

-- Allow public insert access to community posts
create policy "Public insert access to community posts" on community_posts
  for insert with check (true);

-- Allow public read access to approved community posts
create policy "Public read access to approved community posts" on community_posts
  for select using (approved = true);

-- Create indexes for better performance
create index idx_products_category on products(category);
create index idx_blog_posts_category on blog_posts(category);
create index idx_blog_posts_published on blog_posts(published);
create index idx_comments_post_id on comments(post_id);
create index idx_community_posts_category on community_posts(category);
create index idx_community_posts_approved on community_posts(approved);