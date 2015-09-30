create table posts (
  id serial primary key,
  user_id int not null references users (id),
  created_at timestamp default now() not null,
  updated_at timestamp default now() not null,
  title varchar(255) default '' not null,
  body text default '' not null
);
