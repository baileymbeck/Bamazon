DROP DATABASE IF EXISTS bamazon_DB;
CREATE database bamazon_DB;

USE bamazon_DB;

CREATE TABLE products (
  item_id INT AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(100) NULL,
  department_name VARCHAR(100) NULL,
  price INT NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("apple", "grocer", 100, 5000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("banana", "grocer", 100, 5000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("orange", "grocer", 100, 5000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("pinapple", "grocer", 100, 5000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("bread", "grocer", 100, 5000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("paper", "office_supply", 100, 5000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("pens", "office_supply", 100, 5000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("pencil", "office_supply", 100, 5000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("ruler", "office_supply", 100, 5000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("calender", "office_supply", 100, 5000);



SELECT * FROM products;
