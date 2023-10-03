-- Your SQL goes here
CREATE TABLE events (
    id VARCHAR NOT NULL PRIMARY KEY,
    title VARCHAR NOT NULL,
    image_url VARCHAR NOT NULL,
    event_date VARCHAR NOT NULL,
    details TEXT
)
