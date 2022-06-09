-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data

CREATE TABLE "list" (
"id" SERIAL PRIMARY KEY,
"name" VARCHAR(80) NOT NULL,
"quantity" INTEGER NOT NULL,
"unity" VARCHAR(20),
"purchaseStatus" BOOLEAN

);

INSERT INTO "list" ( "name","quantity", "unity", "purchaseStatus")
VALUES ('Apples', 5,'lbs',false), ('Bread',1,'loaf',false), ('Milk',1,'gal',false)