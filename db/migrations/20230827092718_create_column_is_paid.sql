-- migrate:up
 alter table reservations add is_paid boolean not null after end_date;

-- migrate:down

alter table reservations drop is_paid;