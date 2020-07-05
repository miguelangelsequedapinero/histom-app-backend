const { pool } = require('./db-connector');

const getAllDatafromDB = () => {
    return (
        pool.query('SELECT * FROM histom_db')
    );
};

const getDatafromDBbyId = (id) => {
    return (
        pool.query('SELECT * FROM histom_db WHERE id=$1', [id])
    );
};

module.exports = { getAllDatafromDB, getDatafromDBbyId };