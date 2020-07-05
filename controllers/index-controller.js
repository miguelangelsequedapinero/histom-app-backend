const jsonData = require('../histom_fake_data_v0.0.json');
const indexModel = require('../models/index-model');

const getGenreListItemById = async (req, res, next) => {
  const idAsNumber = parseInt(req.params.id, 10);

  try {
    const dbData = await indexModel.getDatafromDBbyId(idAsNumber);

    if (dbData.rows.length === 0) {
      res.send({ error: 'no DB-data for this id' });
    }

    res.send(dbData.rows[0]);

  } catch (err) {
    res.send({ error: err.message });
  }
}


const getGenreList = async (req, res, next) => {

  try {
    const dbData = await indexModel.getAllDatafromDB();

    // console.log(dbData.rows);

    const sendJsonData = [];
    dbData.rows.map((data) => {
      const shortDescription = data.description.slice(0, 70) + ' ...';
      const dataObj = {
        id: data.id,
        name: data.name,
        description: shortDescription,
        decade: data.decade
      }
      sendJsonData.push(dataObj);
    });

    res.send(sendJsonData);

  } catch (err) {

    res.send({ error: 'something wrong with the db-connection' });

  }
}

module.exports = { getGenreListItemById, getGenreList };

