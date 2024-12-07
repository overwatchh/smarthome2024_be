-- Sample data for the customer table
INSERT INTO customer (email, phone, name, dob) VALUES
('nguyenvan@gmail.com', '09012345678', 'Văn', '1985-05-12'),
('tranhoang@yahoo.com', '09123456789', 'Hoàng', '1992-08-22'),
('phamthithu@gmail.com', '09234567890', 'Thu', '1989-11-30'),
('leminh@gmail.com', '09345678901', 'Minh', '1995-02-14'),
('nguyenhuong@outlook.com', '09456789012', 'Hương', '1987-09-10'),
('dangkhoa@yahoo.com', '09567890123', 'Khoa', '1990-01-27'),
('tranthao@gmail.com', '09678901234', 'Thảo', '1993-12-19'),
('phamquoc@outlook.com', '09789012345', 'Quốc','1988-04-07'),
('buiduc@gmail.com', '09890123456', 'Đức', '1994-06-15'),
('levinh@gmail.com', '09901234567', 'Vinh', '1991-03-03');


INSERT INTO product (id, name, price) VALUES
(1, 'thiết bị điều khiển cửa cuốn từ xa bằng wifi', 450000),
(2, 'công tắc cửa cuốn điều khiển từ xa bằng wifi', 350000);

-- Insert data into the invoice table
INSERT INTO invoice (id, created, phone) VALUES
(1,'2023-11-01 14:23:11', '09012345678'),
(2,'2023-11-03 09:30:22', '09123456789'),
(3,'2023-11-04 11:45:35', '09234567890'),
(4,'2023-11-05 15:50:12', '09345678901'),
(5,'2023-11-06 08:10:57', '09456789012');

-- Insert data into the invoice_product table
INSERT INTO invoice_product (invoice_id,product_id, quantity) VALUES
(1, 1, 2),
(1, 2, 1),
(2, 1, 1),
(3, 2, 3),
(4, 1, 1),
(5, 2, 2);

-- Sample data for the installation table
INSERT INTO installation (phone, product_id, booking_date, install_date) VALUES
('09012345678', 1, '2023-11-02 09:00:00', '2023-11-03 15:00:00'),
('09123456789', 2, '2023-11-02 09:00:00', '2023-11-03 15:00:00'),
('09234567890', 2, '2023-11-04 14:30:00', '2023-11-05 10:00:00'),
('09345678901', 1, '2023-11-05 16:00:00', '2023-11-06 12:00:00'),
('09456789012', 1, '2023-11-07 14:00:00', '2023-11-08 09:30:00');
