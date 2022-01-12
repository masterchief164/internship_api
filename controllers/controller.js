const fs = require('fs');// // File System to read json files
/*
 * GET the data
 * @query: offset and limit
 * @return: json data
 */

/*
 *  read the json file and parse it
 *  slice the array according to the offset and limit
 *  return the sliced array
 */

const getData = async (req, res) => {
  const offset = parseInt(req.query.offset ? req.query.offset : 0);// default offset is 0
  const limit = parseInt(req.query.limit ? req.query.limit : 10);// default limit is 10
  fs.readFile('./data/data.json', 'utf8', (err, data) => {
    if (err) {
      console.log(err);
      res.status(404).send({
        message: 'data not found',
      });
    } else {
      const jsonData = JSON.parse(data);// parse the json data
      const dataToSend = jsonData.slice(offset, offset + limit);// slicing the array
      console.log(dataToSend.length);
      res.send(dataToSend);
    }
  });
};

module.exports = {
  getData,
};
