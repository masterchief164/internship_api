require('dotenv').config();
const cors = require('cors');
const express = require('express');

const app = express();
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const Router = require('./routes/router');
const swaggerConfig = require('./swaggerConfig');

const swagger = swaggerJsDoc(swaggerConfig);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swagger));

app.use('/api', Router);

app.listen(process.env.PORT || 8000, () => {
  console.log('Server started on port 8000');
});
