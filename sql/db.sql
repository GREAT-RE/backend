CREATE DATABASE greater;

USE greater;

CREATE TABLE client (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    firstName varchar(255) NOT NULL,
    lastName varchar(255) NOT NULL,
    email varchar(255) UNIQUE NOT NULL,
    password varchar(25) NOT NULL,
    preferences TEXT NOT NULL,
    client_type char(1) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb3;

INSERT INTO 
    client (firstName, lastName, email, password, preferences, client_type)
VALUES
    (
        'Antonio',
        'Gonçalves',
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
        '2023-05-04 09:58:30',
        'e',
        true
    )

CREATE TABLE company (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,   
    host_id INT NOT NULL,
    name varchar(255) NOT NULL,
    nif INT NOT NULL,
    number_of_reviews INT NOT NULL,
    number_of_reviews_l30d INT NOT NULL,
    host_verifications TEXT NOT NULL,
    address varchar(255) NOT NULL,
    postalcode varchar(8) NOT NULL,
    city varchar(20) NOT NULL,
    country varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3; 

INSERT INTO 
    company (host_id, name, nif, number_of_reviews, number_of_reviews_l30d, host_verifications, address, postalcode, city, country)
VALUES 
    (
        107347,
        'Ellie',
        245473768,
        127,
        2,
        "['email', 'phone', 'reviews', 'jumio', 'offline_government_id', 'government_id']",
        'Rua de Santo Estevão',
        '1100-615',
        'Lisboa',
        'Portugal'
    ),
    (
        128075,
        'Francisco',
        272121432,
        64,
        1,
        "['email', 'phone', 'reviews']",
        "Rua dos Navegantes, 32",
        "1200-780",
        'Lisboa',
        'Portugal'
    ), 
    (
        136230,
        'David',
        276522602,
        145,
        1,
        "['email', 'phone', 'google', 'reviews', 'offline_government_id', 'selfie', 'government_id']",
        'Travessa do Alcaide',
        '1200-115',
        'Lisboa',
        'Portugal'
    )

    CREATE TABLE listing (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    picture_url BLOB NOT NULL,
    name varchar(100) NOT NULL,
    description TEXT NOT NULL,
    latitude FLOAT NOT NULL,
    longitude FLOAT NOT NULL,
    price_in_eur FLOAT(5, 2) NOT NULL,
    amenities TEXT NOT NULL,
    room_type varchar(255) NOT NULL,
    host_id INT NOT NULL,
    bathrooms_text TEXT NOT NULL,
    cancellation_policy varchar(255) NOT NULL,
    reviews_score_rating FLOAT NOT NULL,
    for_students BOOLEAN NOT NULL, 
    host_identity_verified BOOLEAN NOT NULL,
    priority varchar(255) NOT NULL,
    number_of_reviews INT NOT NULL,
    review_scores_value INT NOT NULL,
    FOREIGN KEY (host_id) REFERENCES company(host_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3; 

INSERT INTO
    listing (picture_url, name, description, latitude, longitude, price_in_eur, amenities, room_type, host_id, bathrooms_text, cancellation_policy, reviews_score_rating, for_students, host_identity_verified, priority, number_of_reviews, review_scores_value)
VALUES
    (
        'https://a0.muscache.com/pictures/a4c86b5f-ceaf-4cf4-a661-78822342dea4.jpg',
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
        true,
        true,
        true,
        127,
        4.82
    ),
    (
        'https://a0.muscache.com/pictures/7c977dcc-57d0-427e-a510-409037e0be91.jpg',
        'TheHOUSE - Your luxury home',
        "A house at the top of an anonimous building, TheHOUSE has numerous points of interest (marble fireplace, Saint Anthony's stain glass window, main stairs...) but it's terrace steals the show. You need to see for yourself! Gather a group and book!<br /><br /><b>The space</b><br />The size, the decoration and, especially, our unique terrace. No one picture does it justice.<br /><br /><b>Guest access</b><br />All of it, except the kitchen which can be used upon previous request.<br /><br /><b>License number</b><br />55695/AL",
        38.71108,
        -9.15979,
        871,
        '[\"Indoor fireplace\", \"Dishwasher\", \"Cooking basics\", \"Breakfast\", \"Refrigerator\", \"TV with standard cable\", \"Air conditioning\", \"Iron\", \"Elevator\", \"Paid parking off premises\", \"First aid kit\", \"Kitchen\", \"Hair dryer\", \"Dedicated workspace\", \"Heating\", \"Host greets you\", \"Washer\", \"Coffee maker\", \"Cable TV\", \"Stove\", \"Wifi\", \"Essentials\", \"Shampoo\", \"Long term stays allowed\", \"Luggage dropoff allowed\", \"Crib\", \"Dishes and silverware\", \"High chair\", \"Microwave\", \"Hot water\", \"Hangers\", \"Oven\"]',
        'Entire home/apt',
        128075,
        '8',
        'moderate',
        4.92,
        true,
        true,
        true,
        64,
        4.6
    ),
    (
        'https://a0.muscache.com/pictures/fbe0c64b-ea1a-4096-a8b1-cb896dff995e.jpg',
        'Nice Apart.BAIRRO ALTO (ADAMASTOR) 6-1\u00ba',
        "This apartment is the best choice for those who want to live Lisbon in one of its most typical and old neighborhoods, Bairro Alto.<br />A bohemian, vibrant and picturesque neighborhood, our apartment is located in one of its quietest areas, close to the Santa Catarina viewpoint where you can enjoy one of the most beautiful views of Lisbon.<br /><br /><b>The space</b><br />This apartment offers you a living room to rest and socialize, an equipped kitchen, a double bedroom and a bathroom with shower. Here you can relax, with all the comfort after your days discovering Lisbon.<br /><br /><b>Guest access</b><br />Guests will have access to the entire apartment, enjoy all the space and relax whenever they need.<br /><br /><b>License number</b><br />81551/AL",
        38.71062,
        -9.149,
        46,
        '[\"Dishwasher\", \"Cooking basics\", \"Refrigerator\", \"TV with standard cable\", \"Patio or balcony\", \"Iron\", \"Paid parking off premises\", \"Pack \\u2019n play/Travel crib\", \"First aid kit\", \"Kitchen\", \"Hair dryer\", \"Washer\", \"Coffee maker\", \"Cable TV\", \"Building staff\", \"Stove\", \"Wifi\", \"Essentials\", \"Shampoo\", \"Long term stays allowed\", \"Paid parking on premises\", \"Luggage dropoff allowed\", \"Cleaning before checkout\", \"Dishes and silverware\", \"High chair\", \"Fire extinguisher\", \"Microwave\", \"Hot water\", \"Hangers\", \"Oven\"]',
        'Entire home/apt',
        136230,
        '1',
        'strict',
        4.44,
        true,
        true,
        true,
        120,
        4.5
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
    

    

