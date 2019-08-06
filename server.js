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
const SELECT_ALL_POHISTORY = 'SELECT * FROM POHistory';
const SELECT_ALL_BALANCESHEET = 'SELECT * FROM BalanceSheet';
const SELECT_ALL_IP = 'SELECT * FROM IncomeStatement';
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

app.get('/ViewVendor_1', (req, res) => {
    pool.query(SELECT_ALL_VENDOR_QUERY, (err, results) => {
        if (err) {
            return res.send(err);
        }
        else {
            return res.json({ vendor: results });
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

app.get('/ViewPOHistory', (req, res) => {
    pool.query(SELECT_ALL_POHISTORY, (err, results) => {
        if (err) {
            return res.send(err);
        }
        else {
            return res.json({ data: results });
        }
    });
});

app.get('/ViewBalanceSheet', (req, res) => {
    pool.query(SELECT_ALL_BALANCESHEET, (err, results) => {
        if (err) {
            return res.send(err);
        }
        else {
            return res.json({ data: results });
        }
    });
});

app.get('/ViewIP', (req, res) => {
    pool.query(SELECT_ALL_IP, (err, results) => {
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
    PAY_EMPLOYEE_QUERY = `UPDATE Employee SET now = now + 1 WHERE name = '${name}'`
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

app.get('/updateBalance', (req, res) => {
    const { salary } = req.query;
    console.log(salary);
    UPDATE_BS_QUERY = `UPDATE BalanceSheet SET value = value - ${salary} WHERE name = 'Cash'`
    pool.query(UPDATE_BS_QUERY, (err, results) => {
        if (err) {
            return res.send(err);
        }
        else {
            return res.send('successfully update');
        }
    });
});

app.get('/updateIS', (req, res) => {
    const { salary } = req.query;
    console.log(salary);
    UPDATE_IS_QUERY = `UPDATE IncomeStatement SET value = value + ${salary} WHERE name = 'Payroll'`
    pool.query(UPDATE_IS_QUERY, (err, results) => {
        if (err) {
            return res.send(err);
        }
        else {
            return res.send('successfully update');
        }
    });
});


app.get('/updateIS_1', (req, res) => {
    const { sale } = req.query;
    console.log(sale);
    UPDATE_BS_QUERY = `UPDATE IncomeStatement SET value = value + ${sale} WHERE name = 'Sales'`
    pool.query(UPDATE_BS_QUERY, (err, results) => {
        if (err) {
            return res.send(err);
        }
        else {
            return res.send('successfully update');
        }
    });
});
app.get('/updateIS_2', (req, res) => {
    const { cost } = req.query;
    console.log(cost);
    UPDATE_BS_QUERY = `UPDATE IncomeStatement SET value = value + ${cost} WHERE name = 'COGS'`
    pool.query(UPDATE_BS_QUERY, (err, results) => {
        if (err) {
            return res.send(err);
        }
        else {
            return res.send('successfully update');
        }
    });
});
app.get('/updateBS_1', (req, res) => {
    const { ac } = req.query;
    console.log(ac);
    UPDATE_BS_QUERY = `UPDATE BalanceSheet SET value = value + ${ac} WHERE name = 'Accounts Receivable'`
    pool.query(UPDATE_BS_QUERY, (err, results) => {
        if (err) {
            return res.send(err);
        }
        else {
            return res.send('successfully update');
        }
    });
});

app.get('/updateBS_2', (req, res) => {
    const { total } = req.query;
    console.log(total);
    UPDATE_BS_QUERY = `UPDATE BalanceSheet SET value = value + ${total} WHERE name = 'Inventory' OR name ='Accounts Payable'`
    pool.query(UPDATE_BS_QUERY, (err, results) => {
        if (err) {
            return res.send(err);
        }
        else {
            return res.send('successfully update');
        }
    });
});

app.get('/updateBS_3', (req, res) => {
    const { total } = req.query;
    console.log(total);
    UPDATE_BS_QUERY = `UPDATE BalanceSheet SET value = value - ${total} WHERE name = 'Inventory'`
    pool.query(UPDATE_BS_QUERY, (err, results) => {
        if (err) {
            return res.send(err);
        }
        else {
            return res.send('successfully update');
        }
    });
});

app.get('/update', (req, res) => {
    const { ar } = req.query;
    console.log(ar);
    UPDATE_QUERY = `UPDATE BalanceSheet SET value = value + ${ar} WHERE name = 'Cash'`
    pool.query(UPDATE_QUERY, (err, results) => {
        if (err) {
            return res.send(err);
        }
        else {
            return res.send('successfully update');
        }
    });
});

app.get('/update_1', (req, res) => {
    const { ar } = req.query;
    console.log(ar);
    UPDATE_1_QUERY = `UPDATE BalanceSheet SET value = 0 WHERE name = 'Accounts Receivable'`
    pool.query(UPDATE_1_QUERY, (err, results) => {
        if (err) {
            return res.send(err);
        }
        else {
            return res.send('successfully update');
        }
    });
});
app.get('/update_2', (req, res) => {
    const { ap } = req.query;
    console.log(ap);
    UPDATE_2_QUERY = `UPDATE BalanceSheet SET value = value - ${ap} WHERE name = 'Cash'`
    pool.query(UPDATE_2_QUERY, (err, results) => {
        if (err) {
            return res.send(err);
        }
        else {
            return res.send('successfully update');
        }
    });
});
app.get('/update_3', (req, res) => {
    UPDATE_3_QUERY = `UPDATE BalanceSheet SET value = 0 WHERE name = 'Accounts Payable'`
    pool.query(UPDATE_3_QUERY, (err, results) => {
        if (err) {
            return res.send(err);
        }
        else {
            return res.send('successfully update');
        }
    });
});

app.get('/CreatePO', (req, res) => {
    const { part, quantity, comp_name } = req.query;
    console.log(part, quantity, comp_name);
    CREATE_PO_QUERY = `UPDATE Inventory SET quantity = quantity + ${quantity} WHERE part = '${part}'`
    pool.query(CREATE_PO_QUERY, (err, results) => {
        if (err) {
            return res.send(err);
        }
        else {
            return res.send('successfully create PO');
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
    const { date, comp_name, quantity, ppu, total } = req.query;
    console.log(date, comp_name, quantity, ppu, total);
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

app.get('/AddPOHistory', (req, res) => {
    const { date, comp_name, part, quantity, ppu, total } = req.query;
    console.log(date, comp_name,part, quantity, ppu, total);
    const ADD_POHISTORY_QUERY = `INSERT INTO POHistory (date,comp_name,part,quantity,ppu,total) VALUES('${date}','${comp_name}','${part}',${quantity},${ppu},${total})`;
    pool.query(ADD_POHISTORY_QUERY, (err, results) => {
        if (err) {
            return res.send(err);
        }
        else {
            return res.send('successfully add POhistory');
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
