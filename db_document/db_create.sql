CREATE TABLE customer(
    email VARCHAR(200) NOT NULL,
    phone DECIMAL(13,0),
    fname VARCHAR(120) NOT NULL,
    lname VARCHAR(120) NOT NULL,
    dob date,
    CONSTRAINT customer_pk PRIMARY KEY(email)
);

CREATE TABLE invoice(
    id INT(10) NOT NULL AUTO_INCREMENT, 
    created TIMESTAMP NOT NULL,
    email VARCHAR(200) NOT NULL,
    CONSTRAINT invoice_pk PRIMARY KEY (id),
    CONSTRAINT invoice_kf_1 FOREIGN KEY (email) 
    REFERENCES customer(email)
);

CREATE TABLE product(
    id INT(5) NOT NULL AUTO_INCREMENT, 
    name VARCHAR(200) NOT NULL,
    price DECIMAL(12),
    CONSTRAINT product_pk PRIMARY KEY (id)
);

CREATE TABLE invoice_product(
    invoice_id INT(10) NOT NULL,
    product_id INT(5) NOT NULL,    
    quantity INT(3) NOT NULL,
    CONSTRAINT invoice_product_pk PRIMARY KEY(invoice_id, product_id),
    CONSTRAINT invoice_product_fk_1 FOREIGN KEY (invoice_id) 
    REFERENCES invoice(id),
    CONSTRAINT invoice_product_fk_2 FOREIGN KEY (product_id) 
    REFERENCES product(id)
);

CREATE TABLE installation(
    email VARCHAR(200), 
    product_id INT(5),     
    booking_date datetime,
    install_date datetime,
    CONSTRAINT installation_pk PRIMARY KEY(email, product_id, booking_date),
    CONSTRAINT installation_fk_1 FOREIGN KEY (email)
    REFERENCES customer(email),
    CONSTRAINT installation_fk_2 FOREIGN KEY (product_id)
    REFERENCES product(id)
);