DROP DATABASE IF EXISTS bamazon;
 CREATE DATABASE bamazon;

USE bamazon; 

CREATE TABLE products(
  itme_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NULL,
  department_name VARCHAR(100) NULL,
  price int,
  stock_quantity INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (item_id)	
);


insert into products (product_name, department_name, price, stock_quantity) 
values ("socks", "clothes", 100, 40);

insert into products (product_name, department_name, price, stock_quantity) 
values ("mascara", "makeup", 12, 99);

insert into products (product_name, department_name, price, stock_quantity) 
values ("chocolate", "candy", 2, 20);

insert into products (product_name, department_name, price, stock_quantity) 
values ("watermelon", "fruit", 6, 88);

insert into products (product_name, department_name, price, stock_quantity) 
values ("pants", "clothes", 200, 66);

insert into products (product_name, department_name, price, stock_quantity) 
values ("eyeliner", "makeup", 22, 50);

insert into products (product_name, department_name, price, stock_quantity) 
values ("dresses", "clothes", 150, 5);

insert into products (product_name, department_name, price, stock_quantity) 
values ("strawberries", "fruit", 5, 35);

insert into products (product_name, department_name, price, stock_quantity) 
values ("skirts", "clothes", 20, 88);

select * from products
