const fs = require('fs');// File System to write json files
const axios = require('axios');
// axios to make http requests
const baseUrl = 'https://crmapi.upgrad.com/consumer/v2/profile/list';// the base url for the api

const data = []; // the array to store the data
let page = 1; // the page number default is 1
/*
* loop until the page data array is empty
* push the data to the data array
* increment the page number
* and then finally write the data to the json file
 */

const getData = async () => {
  while (true) {
    console.log(`page ${page}`);
    const response = await axios.get(`${baseUrl}?page=${page}`).catch((err) => {
     console.log(err);
    });
    if (response.data.length === 0) {
      break;// break the loop if the data array is empty
    }

    data.push(...response.data);
    page++;
  }
  fs.writeFileSync('./data/data.json', JSON.stringify(data, null, 4), (err) => {
    if (err) {
      console.log(err);// log the error
    } else { console.log('File successfully written!'); }// log the success
  });
};

getData().then(() => {
  console.log('Done');
});// call the scraper function
