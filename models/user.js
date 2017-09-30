const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/sequelize_practice', { logging: false });

const User = db.define('user', {
// YOUR CODE HERE...
  first:{
    type: Sequelize.STRING,
    allowNull: false,
  },
  last:{
    type: Sequelize.STRING,
    allowNull: false,
  },
  age:{
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 18
      }
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  bio: {
    type: Sequelize.TEXT
  }
}, {
// getters
  getterMethods :{
    fullName() {
      return this.first + ' ' + this.last;
    }
  }

});

User.prototype.haveBirthday = function(){

}

module.exports = User;
