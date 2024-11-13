-- Sample data for the customer table
INSERT INTO customer (email, phone, fname, lname, dob) VALUES
('nguyenvan@gmail.com', 849012345678, 'Văn', 'Nguyễn', '1985-05-12'),
('tranhoang@yahoo.com', 849123456789, 'Hoàng', 'Trần', '1992-08-22'),
('phamthithu@gmail.com', 849234567890, 'Thu', 'Phạm', '1989-11-30'),
('leminh@gmail.com', 849345678901, 'Minh', 'Lê', '1995-02-14'),
('nguyenhuong@outlook.com', 849456789012, 'Hương', 'Nguyễn', '1987-09-10'),
('dangkhoa@yahoo.com', 849567890123, 'Khoa', 'Đặng', '1990-01-27'),
('tranthao@gmail.com', 849678901234, 'Thảo', 'Trần', '1993-12-19'),
('phamquoc@outlook.com', 849789012345, 'Quốc', 'Phạm', '1988-04-07'),
('buiduc@gmail.com', 849890123456, 'Đức', 'Bùi', '1994-06-15'),
('levinh@gmail.com', 849901234567, 'Vinh', 'Lê', '1991-03-03');


INSERT INTO product (id, name, price) VALUES
(1, 'thiết bị điều khiển cửa cuốn từ xa bằng wifi', 450000),
(2, 'công tắc cửa cuốn điều khiển từ xa bằng wifi', 350000);

-- Insert data into the invoice table
INSERT INTO invoice (id, created, email) VALUES
(1,'2023-11-01 14:23:11', 'nguyenvan@gmail.com'),
(2,'2023-11-03 09:30:22', 'tranhoang@yahoo.com'),
(3,'2023-11-04 11:45:35', 'phamthithu@gmail.com'),
(4,'2023-11-05 15:50:12', 'leminh@gmail.com'),
(5,'2023-11-06 08:10:57', 'nguyenhuong@outlook.com');

-- Insert data into the invoice_product table
INSERT INTO invoice_product (invoice_id,product_id, quantity) VALUES
(1, 1, 2),
(1, 2, 1),
(2, 1, 1),
(3, 2, 3),
(4, 1, 1),
(5, 2, 2);

-- Sample data for the installation table
INSERT INTO installation (email, product_id, booking_date, install_date) VALUES
('nguyenvan@gmail.com', 1, '2023-11-02 09:00:00', '2023-11-03 15:00:00'),
('nguyenvan@gmail.com', 2, '2023-11-02 09:00:00', '2023-11-03 15:00:00'),
('tranhoang@yahoo.com', 2, '2023-11-04 14:30:00', '2023-11-05 10:00:00'),
('phamthithu@gmail.com', 1, '2023-11-05 16:00:00', '2023-11-06 12:00:00'),
('leminh@gmail.com', 2, '2023-11-06 10:00:00', '2023-11-07 13:00:00'),
('nguyenhuong@outlook.com', 1, '2023-11-07 14:00:00', '2023-11-08 09:30:00');
