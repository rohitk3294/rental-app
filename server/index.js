const express = require('express'); 
const mongoose  = require('mongoose');
const FakeDb = require('./fake-db');
const config = require('./config/dev');
const Rentals = require('./models/rental');
const bodyParser = require('body-parser')

const rentalRoutes = require('./routes/rentals'),
 userRoutes = require('./routes/users');


mongoose.connect(config.DB_URI, { useNewUrlParser: true }).then(() => {
    const fakeDb = new FakeDb();
      fakeDb.seedDb();
});
 const app = express();   

 app.use(bodyParser.json())
 app.use('/api/v1/rentals', rentalRoutes);
 app.use('/api/v1/users', userRoutes);



const PORT = process.env.PORT || 3001;

app.listen(PORT ,function()
    {
console.log('App is running');
    }
);


