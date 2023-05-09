require("dotenv").config();
const fs = require("fs");
const mysql = require("mysql2/promise");

const migrate = async () => {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    multipleStatements: true,
  });
  await connection.query(`drop database if exists ${process.env.DB_DATABASE}`);
  await connection.query(`create database ${process.env.DB_DATABASE}`);
  await connection.query(`use ${process.env.DB_DATABASE}`);
  const sql = fs.readFileSync("./sql/db.sql", "utf8");
  await connection.query(sql);
  connection.end();
};

try {
  migrate();
} catch (err) {
  console.error(err);
}