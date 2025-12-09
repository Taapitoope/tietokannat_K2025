const db = require('../database');

const opintojakso = {
  getAll: function(callback) {
    return db.query('select * from opintojakso', callback);
  },
  getOne: function(id, callback) {
    return db.query('select * from opintojakso where idOpintojakso=?', [id], callback);
  },
  add: function(opintojakso, callback) {
    return db.query(
      'insert into opintojakso (Nimi, Tunnus, Laajuus) values(?,?,?)',
      [opintojakso.Nimi, opintojakso.Tunnus, opintojakso.Laajuus],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from opintojakso where idOpintojakso=?', [id], callback);
  },
  update: function(id, opintojakso, callback) {
    return db.query(
      'update opintojakso set Nimi= ?, Tunnus = ?, Laajuus = ? where idOpintojakso=?',
      [opintojakso.Nimi, opintojakso.Tunnus, opintojakso.Laajuus, id],
      callback
    );
  }
};
module.exports = opintojakso;