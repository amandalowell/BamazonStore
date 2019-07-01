DROP DATABASE IF EXISTS bamazon;
 CREATE DATABASE bamazon;

USE bamazon; 

CREATE TABLE products(
  itme_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NULL,
  department_name VARCHAR(100) NULL,
  price int,
  stock_quantity INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (id)	
);

