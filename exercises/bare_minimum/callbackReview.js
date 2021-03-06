/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, cb) {
  
  fs.readFile(filePath, (err, data) => {
    
    if (err) { cb(err); }

    var dataArray = data.toString().split('\n');

    cb(err, dataArray[0]);    

  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, cb) {
  
  request(url, function(error, response) {

    if (response === undefined) {
      cb(error, response);
    } else {
      cb(error, response.statusCode);
    }

  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
