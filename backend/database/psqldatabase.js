var pgp = require('pg-promise')(/*options*/)
const cn = {
  host: 'localhost',
  port: 5432,
  database: 'grocerylist',
  user: 'postgres',
  password: 'placeholderval'
};


var db = pgp(cn)


function insert(items){
    db.none(`INSERT INTO listitems(itemsreal) VALUES($1:csv)`, [items])
    .then(function () {
      console.log('success');
    })
    .catch(function (error) {
      console.log('ERROR:', error);
    })

}

  
  module.exports = {insert}