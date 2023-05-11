CREATE TABLE client (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    firstName varchar(255) NOT NULL,
    lastName varchar(255) NOT NULL,
    email varchar(255) UNIQUE NOT NULL,
    password varchar(255) NOT NULL,
    newsletter BOOLEAN NOT NULL DEFAULT VALUE FALSE,
    privacy_policies BOOLEAN NOT NULL DEFAULT TRUE,
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
    picture_url LONGTEXT NOT NULL,
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
    distance_1 FLOAT NOT NULL,
    distance_2 FLOAT NOT NULL,
    distance_3 FLOAT NOT NULL,    
    distance_4 FLOAT NOT NULL,
    distance_5 FLOAT NOT NULL,    
    FOREIGN KEY (host_id) REFERENCES company(host_id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;


CREATE TABLE universities (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    latitude FLOAT NOT NULL,
    longitude FLOAT NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb3;