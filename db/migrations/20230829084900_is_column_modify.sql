-- migrate:up
ALTER TABLE reservations MODIFY is_paid default(0);
ALTER TABLE room_amenities MODIFY amenities TINYINT;

-- migrate:down

ALTER TABLE reservations MODIFY is_paid default(null);
ALTER TABLE room_amenities MODIFY amenities INT;