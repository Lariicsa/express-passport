const passport = require('passport')
const User = require('../models/User')
//configuracion de passport
passport.use(User.createStrategy()) //estrategia usar para crear user
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

//is the same like this:
// var passport = require('passport')
//   , LocalStrategy = require('passport-local').Strategy;

// passport.use(new LocalStrategy(
//   function(username, password, done) {
//     User.findOne({ username: username }, function (err, user) {
//       if (err) { return done(err); }
//       if (!user) {
//         return done(null, false, { message: 'Incorrect username.' });
//       }
//       if (!user.validPassword(password)) {
//         return done(null, false, { message: 'Incorrect password.' });
//       }
//       return done(null, user);
//     });
//   }
// ));

module.exports = passport