CREATE TABLE client (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    firstName varchar(255) NOT NULL,
    lastName varchar(255) NOT NULL,
    email varchar(255) UNIQUE NOT NULL,
    password varchar(255) NOT NULL,
    preferences TEXT,
    client_type char(1) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

CREATE TABLE company (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    host_id INT UNIQUE NOT NULL,
    host_name varchar(255) NOT NULL,
    nif INT NOT NULL,
    number_of_reviews INT NOT NULL,
    number_of_reviews_l30d INT NOT NULL,
    host_verifications TEXT NOT NULL,
    address varchar(255) NOT NULL,
    postalcode varchar(8) NOT NULL,
    city varchar(20) NOT NULL,
    country varchar(50) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

CREATE TABLE listing (
    listing_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    id INT NOT NULL,
    picture_url BLOB NOT NULL,
    name varchar(255) NOT NULL,
    description TEXT NOT NULL,
    latitude FLOAT NOT NULL,
    longitude FLOAT NOT NULL,
    price_in_eur FLOAT NOT NULL,
    amenities TEXT NOT NULL,
    room_type varchar(255) NOT NULL,
    host_id INT NOT NULL,
    bathrooms_text TEXT NOT NULL,
    cancellation_policy varchar(255) NOT NULL,
    review_scores_rating FLOAT NOT NULL,
    for_students BOOLEAN NOT NULL,
    host_identity_verified char(1) NOT NULL,
    priority varchar(255) NOT NULL,
    number_of_reviews INT NOT NULL,
    review_scores_value FLOAT NOT NULL,
    FOREIGN KEY (host_id) REFERENCES company(host_id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

-- CREATE TABLE interest (
--     studId INT NOT NULL,
--     listId INT NOT NULL,
--     timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--     interest_type CHAR(1) NOT NULL,
--     email_sent BOOLEAN NOT NULL DEFAULT TRUE
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4; 
-- INSERT INTO 
--     interest (studId, listId, timestamp, interest_type, email_sent)
-- VALUES
--     (
--         543211,
--         499001,
--         '2023-05-04 09:58:30',
--         'e',
--         true
--     )

-- CREATE TABLE website_data (
--     id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
--     ip varchar(255) NOT NULL,
--     page_heatmap TEXT/JSON NOT NULL,
--     filters TEXT/JSON NOT NULL,
-- )
-- INSERT INTO 
--     website_data (ip, page_heatmap, filters)
-- VALUES 
--     (
--     )
    

    

