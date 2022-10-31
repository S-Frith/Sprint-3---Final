const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql');


const db = mysql.createPool({
    host: "localhost",
    user: 'root',
    password: 'password',
    database: 'Bookings'
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get('/api/retrive', (req, res)=> {
    
    
    let bookingDate= req.query.bookingDate
    
    
    // let bookingDate= 'Thu Oct 20 2022'
    
    
    const sqlSelect = 'SELECT * FROM saved_bookings WHERE date = ?'
    
    
    db.query(sqlSelect, [bookingDate], (err, result) => {
        console.log(bookingDate);
        res.send(result)
    });
})
//test

app.post('/api/insert', (req, res)=>{
    
    const userId = req.body.userId;
    const deskId = req.body.deskId;
    const bookingDate = req.body.bookingDate

    const sqlInsert = 'INSERT INTO saved_bookings (user_id, desk_id, date) VALUES (?,?,?)'

    
    db.query(sqlInsert, [userId, deskId, bookingDate], (err, result)=>{
        console.log(result);
    });
    
    res(()=>{
        alert("this desk is not available")
    })
});


app.listen(3001, () => {
    console.log('running on port 3001')
}); 