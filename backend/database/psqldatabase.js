var pgp = require('pg-promise')(/*options*/)
const cn = {
  host: 'localhost',
  port: 5432,
  database: 'grocerylist',
  user: '',
  password: ''
};


var db = pgp(cn)


function insert(items){
  db.none(`INSERT INTO listitems (items) VALUES $(items)`)
  .then(function () {
    console.log('success');
  })
  .catch(function (error) {
    console.log('ERROR:', error);
  })
}

  
  module.exports = {insert}