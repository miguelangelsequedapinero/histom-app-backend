var express = require('express');
var router = express.Router();
const jsonData = require('./histom_fake_data_v0.0.json');

/* GET single id data with complete data from json-file. */
router.get('/:id', function (req, res, next) {
  const idAsNumber = parseInt(req.params.id,10);

  let sendJsonData;
  if (jsonData.length >= idAsNumber){
    sendJsonData = jsonData.filter((data) => {
      return data.id === idAsNumber;
    });
  }else{
    sendJsonData = {
      error: 'no data for this id / route'
    }
  }

  res.send(sendJsonData);
});

/* GET root data with id, name, short-description and decade. */
router.get('/', function (req, res, next) {

  const sendJsonData = [];
  jsonData.map((data) => {
    const shortDescription = data.description.slice(0, 100) + ' ...';
    const dataObj = {
      id: data.id,
      name: data.name,
      description: shortDescription,
      decade: data.decade
    }
    sendJsonData.push(dataObj);
  });

  res.send(sendJsonData);
});

module.exports = router;
