create table photos (
  id serial primary key,
  image_updated_at timestamp with time zone,
  image_ext varchar(255),
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);
