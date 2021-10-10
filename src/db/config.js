const sqlite3 = require('sqlite3');
//pegar a funcionalidade open dentro do sqlite
const {open} = require('sqlite');

// o open precisa estar dentro dessa estrutura ()=>{}
module.exports = () => 
open({
  filename: './database.sqlite',
  driver: sqlite3.Database
});
