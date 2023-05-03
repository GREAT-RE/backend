CREATE DATABASE greater;

USE greater;

CREATE TABLE client (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    email varchar(255) NOT NULL,
    password varchar(255) NOT NULL,
    preferences TEXT NOT NULL,
    client_type char(1) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb3;

INSERT INTO 
    client (email, password, preferences, client_type)
VALUES
    (
        'test1@gmail.com',
        'test1',
        'T1',
        'S'
    )

CREATE TABLE interest (
    studId INT NOT NULL,
    listId INT NOT NULL,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    interest_type CHAR(1) NOT NULL,
    email_sent BOOLEAN NOT NULL DEFAULT TRUE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3; 

INSERT INTO 
    interest (studId, listId, timestamp, interest_type, email_sent)
VALUES
    (
        543211,
        499001,
        '1970-01-01 00:00:00',
        'e',
        'true'
    )

CREATE TABLE listing (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name varchar(100) NOT NULL,
    description TEXT NOT NULL,
    latitude FLOAT NOT NULL,
    longitude FLOAT NOT NULL,
    price_in_eur FLOAT(5, 2) NOT NULL,
    amenities TEXT NOT NULL,
    room_type varchar(255) NOT NULL,
    host_id INT NOT NULL,
    bathroom TEXT NOT NULL,
    cancellation_policy varchar(255) NOT NULL,
    rating FLOAT NOT NULL,
    for_students BOOLEAN NOT NULL, 
    trusted_tick BOOLEAN NOT NULL DEFAULT FALSE,
    priority varchar(255) NOT NULL,
    review_tot INT NOT NULL,
    review_avg INT NOT NULL,
    FOREIGN KEY (host_id) REFERENCES company(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3; 

INSERT INTO
    listing (name, description, latitude, longitude, price_in_eur, amenities, room_type, host_id, bathroom, cancellation_policy, rating, for_students, trusted_tick, priority, review_tot, review_avg)
VALUES
    (
        'Heart of Alfama Lisbon Center',
        '*** 100% Covid 19 cleaning protocols <br />NON SMOKING APARTMENT <br /><br />Entire Alfama apartment . <br />The apartment is on the 2nd floor.  Suitable for  2 -3 people. TV cable - Wi-fi- <br />There is one bedroom with a double bed and a sofa bed in living room. Washing machine. Full bathroom and full kitchen (no oven)<br />3 minutes to metro Santa Apolonia - shops and supermarkets nearby. <br />Safe and clean.<br /><br /><b>The space</b><br />Charming, sunny, cozy apartment. It is an old, 19th century house in the heart of Alfama, the ancient Moorish quarter of Lisbon with Moorish style streets.  Apartment size 350 sq. ft. /   32m\u00b2<br />We provide all linens. Sheets, towel, duvets. Bathroom with large shower. Liquid soap, shower gel.  <br />Comfortable,  separate bedroom with double bed. Living room has single sofa bed. <br />There is Wi-Fi, Cable TV (English, French, Portuguese, German, CNN, BBC). Fully equipped kitchen ( oil, vinegar, salt, pepper, coffee, sugar) with pots and pa',
        38.71241,
        -9.12706,
        46,
        '[\"Cooking basics\", \"Smoke alarm\", \"Refrigerator\", \"TV with standard cable\", \"Paid parking off premises\", \"Iron\", \"Kitchen\", \"Bed linens\", \"Hair dryer\", \"Heating\", \"Dedicated workspace\", \"Host greets you\", \"Washer\", \"Coffee maker\", \"Cable TV\", \"Carbon monoxide alarm\", \"Extra pillows and blankets\", \"Stove\", \"Wifi\", \"Essentials\", \"Shampoo\", \"Luggage dropoff allowed\", \"Dishes and silverware\", \"Fire extinguisher\", \"Microwave\", \"Hot water\", \"Hangers\"]',
        'Entire home/apt',
        107347,
        '1',
        'firm',
        4.81,
        'true',
        'true',
        'true',
        127,
        1
    )

CREATE TABLE company (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,   
    name varchar(255) NOT NULL,
    nif INT NOT NULL,
    address varchar(255) NOT NULL,
    postal_code varchar(8) NOT NULL,
    city varchar(20) NOT NULL,
    country varchar(50) NOT NULL,
    review_tot INT NOT NULL,
    reviews_avg INT NOT NULL,
    additional TEXT NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3; 

INSERT INTO 
    company (name, nif, address, postal_code, city, country, review_tot, reviews_avg, additional)
VALUES 
    (
        'Ellie',
        '245473768',
        'Rua de Santo Estevão',
        '1100-615',
        'Lisboa',
        'Portugal',
        127,
        1
    )

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
    

    

