const mongoose = require('mongoose');
const crypto = require('crypto');
const { v4: uuidv4 } = require('uuid');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 52,
    trim: true,
    validate: {
      validator: function(v) {
        // First Name must start with a capital letter
        var re = /^[A-Z]([a-z])+$/;
        return re.test(v);
      },
      message: props => `${props.value} is not a valid name!`
    }
  },
  email: {
    type: String,
    trim: true,
    required: true,
    unique: true,
    validate: {
      validator: function(v) {
        // @gmail.com/@yahoo.com is required
        var re = /^[a-z0-9](\.?[a-z0-9]){5,}(@gmail\.com)|(@yahoo\.com)$/;
        return re.test(v);
      },
      message: props => `${props.value} is not a valid email!`
    }
  },
  phone: {
    type: Number,
    required: true,
    validate: {
      validator: function(v) {
        // Must be of 10 Digits & should not start with zero
        var re = /^[1-9]\d{9}$/;
        return re.test(v);
      },
      message: props => `${props.value} is not a valid phone number!`
    }
  },
  encry_password: {
    type: String,
    required: true
  },
  salt: String,
  role: {
    type: Number,
    default: 0
  }
}, {timestamps: true});

// Hashing
userSchema
  .virtual('password')
  .set(function(password) {
    // Must Contain One Capital, One Small, Numerical Value
    // & a Special Character & minimum length is 8 Characters
    var re = /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[@!#$%&? "]).*$/;
    var p = re.test(password);
    if (p) {
      this._password = password;
      this.salt = uuidv4();
      this.encry_password = this.securePassword(password);
    } else {
      console.log("Invalid Format");
    }
  })
  .get(function() {
    return this._password;
  });

userSchema.methods = {
  authenticate: function(plainpassword) {
    return this.securePassword(plainpassword) === this.encry_password;
  },
  securePassword: function(plainpassword) {
    if (!plainpassword) return '';
    try {
      return crypto
      .createHmac('sha256', this.salt)
      .update(plainpassword)
      .digest('hex');
    } catch (err) {
      return '';
    }
  }
};

module.exports = mongoose.model('User', userSchema);
