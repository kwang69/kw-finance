const express = require('express');
const cors = require('cors');
const app = express();
const mysql = require('mysql');

const SELECT_ALL_EMPLOYEE_QUERY = 'SELECT * FROM Employee';
const SELECT_ALL_CUSTOMER_QUERY = 'SELECT * FROM Customer';
const SELECT_ALL_VENDOR_QUERY = 'SELECT * FROM Vendor';
app.use(cors());

var pool = mysql.createPool({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '234',
    database: 'kw-finance'
});

app.get('/', (req, res) => {
    res.send('go to /ViewEmployee to see employee')
});

app.get('/ViewEmployee', (req, res) => {
    pool.query(SELECT_ALL_EMPLOYEE_QUERY, (err, results) => {
        if (err) {
            return res.send(err);
        }
        else {
            return res.json({ data: results });
        }
    });
});

app.get('/ViewCustomer', (req, res) => {
    pool.query(SELECT_ALL_CUSTOMER_QUERY, (err, results) => {
        if (err) {
            return res.send(err);
        }
        else {
            return res.json({ data: results });
        }
    });
});

app.get('/ViewVendor', (req, res) => {
    pool.query(SELECT_ALL_VENDOR_QUERY, (err, results) => {
        if (err) {
            return res.send(err);
        }
        else {
            return res.json({ data: results });
        }
    });
});

app.get('/AddEmployee', (req, res) => {
    const { name, age, address, snn, now, salary } = req.query;
    console.log(name, age, address, snn, now, salary);
    const INSERT_EMPLOYEE_QUERY = `INSERT INTO Employee (name, age, address, snn, now, salary) VALUES('${name}',${age},'${address}',${snn},${now},${salary})`;
    pool.query(INSERT_EMPLOYEE_QUERY, (err, results) => {
        if (err) {
            return res.send(err);
        }
        else {
            return res.send('successfully added employee');
        }
    });
});

app.get('/AddCustomer', (req, res) => {
    const { comp_name, name, address, price } = req.query;
    console.log(comp_name, name, address, price);
    const INSERT_CUSTOMER_QUERY = `INSERT INTO Customer (comp_name, name, address, price) VALUES('${comp_name}','${name}','${address}',${price})`;
    pool.query(INSERT_CUSTOMER_QUERY, (err, results) => {
        if (err) {
            return res.send(err);
        }
        else {
            return res.send('successfully added customer');
        }
    });
});

app.get('/AddVendor', (req, res) => {
    const { comp_name, part, ppu, address } = req.query;
    console.log(comp_name, part, ppu, address);
    const INSERT_VENDOR_QUERY = `INSERT INTO Vendor (comp_name, part, ppu, address) VALUES('${comp_name}','${part}',${ppu},'${address}')`;
    pool.query(INSERT_VENDOR_QUERY, (err, results) => {
        if (err) {
            return res.send(err);
        }
        else {
            return res.send('successfully added vendor');
        }
    });
});

app.listen(4000, () => {
    console.log('Server listening on port 4000')
});
