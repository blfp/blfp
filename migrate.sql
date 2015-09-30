create table users (
  id integer primary key,
  created_at timestamp default now() not null,
  updated_at timestamp default now() not null,
  email varchar(255) not null,
  password varchar(255) not null,
  first varchar(255) default '' not null,
  last varchar(255) default '' not null
);

create table tokens (
  id varchar(255) primary key,
  expires_at timestamp not null,
  user_id int not null references users (id) on delete cascade
);

create unique index users_lower_case_email_index on users using btree (lower((email)::text));
