const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models');
const userRoutes = require('./routes/user.routes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api', userRoutes);

db.sequelize.sync({ alter: true }).then(() => {
  console.log("Database connected & schema updated.");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});

