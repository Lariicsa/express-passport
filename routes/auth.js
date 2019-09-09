const router = require('express').Router()
const User = require('../models/User')
const passport = require('../config/passport')
//const catchErrors = (fn) => (req, res, next)

router.get('/signup', (req,res,next) => {
	const config = {
		title: 'Sign up',
		action: '/signup',
		button: 'Sign up',
		register: true
	}
	res.render('auth/form', config) //info dinámica en auth/form
})

//manejo de creación de usuarios
router.post('/signup', async (req,res, next) => {
	try {
		const user = await User.register({ ...req.body }, req.body.password) //thnks to PLM
		console.log(user)
		res.redirect('/login')
	} catch (err) {
		console.log(err)
		res.send('El usuario ya existe')
	}
})

router.get('/login', (req,res, next) => {
	const config = {
		title: 'Log in',
		action: '/login',
		button: 'Log in'
	}
	res.render('auth/form', config)
})

router.post('/login', passport.authenticate('local'), (req,res, next) => {
	res.redirect('/profile')
})

router.get('/profile',isLoggedIn, (req, res, next) => {
  res.render('auth/profile', { user: req.user });
});

function isLoggedIn (req, res, next) {
	if(req.isAuthenticated()) {
		next()
	} else {
		res.redirect('/login')
	}
}

module.exports = router