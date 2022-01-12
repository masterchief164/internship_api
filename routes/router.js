const express = require('express');
const controller = require('../controllers/controller');

const router = express.Router();

/**
 * @swagger
 * /api/getData:
 *  get:
 *   description: Use it to get the required data.
 *                The API will return the data in JSON format.
 *   responses:
 *     '200':
 *        description: Successfull! Server serves the data
 *     '404':
 *        description: Data not found
 *   parameters:
 *         - in: query
 *           name: offset
 *           schema:
 *             type: integer
 *             minimum: 0
 *             default: 0
 *           required: false
 *           description: The number of items to skip before starting to collect the result set.
 *         - in: query
 *           name: limit
 *           schema:
 *             type: integer
 *             minimum: 1
 *             default: 10
 *           required: false
 *           description: The number of items to return.
 */
router.get('/getData', controller.getData);
module.exports = router;
