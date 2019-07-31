const express = require('express');
const cors = require('cors');
const app = express();
const mysql = require('mysql');

const SELECT_ALL_EMPLOYEE_QUERY = 'SELECT * FROM Employee';
const SELECT_ALL_CUSTOMER_QUERY = 'SELECT * FROM Customer';
const SELECT_ALL_VENDOR_QUERY = 'SELECT * FROM Vendor';
const SELECT_ALL_PAYROLL_QUERY = 'SELECT * FROM PayRoll';
const SELECT_ALL_INVENTORY = 'SELECT * FROM Inventory';
const SELECT_ALL_INVOICEHISTORY = 'SELECT * FROM InvoiceHistory';
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

app.get('/ViewPayRoll', (req, res) => {
    pool.query(SELECT_ALL_PAYROLL_QUERY, (err, results) => {
        if (err) {
            return res.send(err);
        }
        else {
            return res.json({ data: results });
        }
    });
});

app.get('/ViewInventory', (req, res) => {
    pool.query(SELECT_ALL_INVENTORY, (err, results) => {
        if (err) {
            return res.send(err);
        }
        else {
            return res.json({ data: results });
        }
    });
});

app.get('/ViewInventory_1', (req, res) => {
    pool.query(SELECT_ALL_INVENTORY, (err, results) => {
        if (err) {
            return res.send(err);
        }
        else {
            return res.json({ amount: results });
        }
    });
});

app.get('/ViewInvoiceHistory', (req, res) => {
    pool.query(SELECT_ALL_INVOICEHISTORY, (err, results) => {
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

app.get('/PayEmployee', (req, res) => {
    const { name } = req.query;
    console.log(name);
    PAY_EMPLOYEE_QUERY = `UPDATE Employee SET now = now + 1 WHERE name = '${name}' AND now > 0`
    pool.query(PAY_EMPLOYEE_QUERY, (err, results) => {
        if (err) {
            return res.send(err);
        }
        else {
            return res.send('successfully paid employee');
        }
    });
});

app.get('/CreateInvoice', (req, res) => {
    const { quantity } = req.query;
    console.log(quantity);
    CREATE_INVOICE_QUERY = `UPDATE Inventory SET quantity = quantity - ${quantity} WHERE part = 'the product' AND quantity > ${quantity}`
    pool.query(CREATE_INVOICE_QUERY, (err, results) => {
        if (err) {
            return res.send(err);
        }
        else {
            return res.send('successfully create invoice');
        }
    });
});


app.get('/AddPayRoll', (req, res) => {
    const { name, date, salary } = req.query;
    console.log(name, date, salary);
    const ADD_PAYMENT_ROLL_QUERY = `INSERT INTO PayRoll (date,name,salary,ftax,stax,sstax,mtax,paid) VALUES('${date}','${name}',${salary},${salary}*0.14,${salary}*0.048,${salary}*0.062,${salary}*0.014,${salary}*0.736)`;
    pool.query(ADD_PAYMENT_ROLL_QUERY, (err, results) => {
        if (err) {
            return res.send(err);
        }
        else {
            return res.send('successfully add payment roll');
        }
    });
});

app.get('/AddHistory', (req, res) => {
    const {date, comp_name,quantity,ppu,total } = req.query;
    console.log(date, comp_name,quantity,ppu,total);
    const ADD_HISTORY_QUERY = `INSERT INTO InvoiceHistory (date,comp_name,quantity,ppu,total) VALUES('${date}','${comp_name}',${quantity},${ppu},${total})`;
    pool.query(ADD_HISTORY_QUERY, (err, results) => {
        if (err) {
            return res.send(err);
        }
        else {
            return res.send('successfully add history');
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
