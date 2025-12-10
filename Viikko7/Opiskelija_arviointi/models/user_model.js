const db = require('../database');
const bcrypt = require('bcryptjs');

const saltRounds=10;
const user={
  getAll: function(callback) {
    return db.query('select * from user', callback);
  },
  getOne: function(username, callback) {
    return db.query('select * from user where username=?', [username], callback);
  },
  add: function(user, callback) {
    bcrypt.hash(user.password, saltRounds, function(err, hash) {
      return db.query('insert into user (username, fname, password) values(?,?,?)',
      [user.username, user.fname, hash], callback);
    });
  },
  delete: function(username, callback) {
    return db.query('delete from user where username=?', [username], callback);
  },
  update: function(username, user, callback) {
    bcrypt.hash(user.password, saltRounds, function(err, hash) {
      return db.query('update user set username=?, password=? where username=?',
      [user.username, hash, username], callback);
    });
  }

}
          
module.exports = user;