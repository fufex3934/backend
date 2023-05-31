const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const app = require('./app');

// Connect to the database
mongoose
  .connect(process.env.LOCAL_CONN_STR, {
    useUnifiedTopology: true, // Add this option for new versions of Mongoose
  })
  .then(() => {
    console.log('Db Successfully Connected');
  })
  .catch((error) => {
    console.error('Database connection error:', error);
  });



// Create server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Server has started');
});
