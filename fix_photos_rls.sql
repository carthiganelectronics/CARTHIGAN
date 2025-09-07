-- Allow authenticated users to insert photos
create policy "Authenticated users can insert photos" on photos
  for insert with check (auth.role() = 'authenticated');
