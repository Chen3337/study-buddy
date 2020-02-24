const express = require('express');
const router = express.Router();
const ShoppingList = require('../models/vocab');
const User = require('../models/passport/user');
const passport = require('../models/passport/passportuser');

router.post('/', (req, res) => {
    // add a new user route
    const { username, password } = req.body
    // ADD VALIDATION 
    User.findOne({ username: username }, (err, user) => {
        // see if the username already taken
        if (err) {
            console.log('User.js post error: ', err)
        } else if (user) {
            res.json({
                error: `Sorry, already a user with the username: ${username}`
            })
        }
        else {
            // create new user
            const newUser = new User({
                username: username,
                password: password
            })
            // schema function define in user.js checks for password change to hash
            newUser.save((err, savedUser) => {
                if (err) return res.json(err)
                res.json(savedUser)
            })
        }
    })
})
// log in
router.post(
    '/login',
    passport.authenticate('local'),
    (req, res) => {
        var userInfo = {
            username: req.user.username
        };
        res.send(userInfo);
    }
)

router.get('/', (req, res, next) => {
    if (req.user) {
        res.json({ user: req.user })
    } else {
        res.json({ user: null })
    }
})

router.post('/logout', (req, res) => {
    if (req.user) {
        req.logout()
        res.send({ msg: 'logging out' })
    } else {
        res.send({ msg: 'no user to log out' })
    }
})

module.exports = router