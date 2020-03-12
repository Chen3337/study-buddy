const express = require('express');
const router = express.Router();
const VocabList = require('../models/vocab');
const User = require('../models/passport/user');
const passport = require('../models/passport/passportuser');
// adding new vocabList
// need to send in a object {name: ""} need to be login
var username;
router.post("/newlist", (req, res) => {
    console.log("hello");
    var listName = req.body.name;
    var newList = {
        user: req.user.username,
        name: listName,
        vocab: []
    }
    if (req.user.username && listName) {
        VocabList.create(newList)
            .then(data => res.json(data))
            .catch(console.log("Error !!!!"));
    }
    else {
        res.json({ error: "The item field is empty" })
    }
});
// adding new vocab words after making a new vocablist
// need to send in a object with the vocablist id and
//  the words with definition in a array of objects {id: "", vocab: {word: "", definition: ""}}
router.put("/newvocab", (req, res) => {
    var newListId = req.body.id;
    var { word, definition } = req.body.vocab;
    VocabList.findByIdAndUpdate(
        newListId,
        { $push: { "vocab": { word: word, definition: definition } } },
        function (err, result) {
            if (err) {
                res.json(err);
            }
            else {
                res.json(result);
            }
        }
    );
});
// gets all the information about a set of vocab words
// need id in url
router.get("/vocablistinfo/:id", (req, res) => {
    var id = req.params.id;
    VocabList.findById(id)
        .then(data => res.json(data))
        .catch(console.log("Error !!!!"));
});
// deleting a word from a set of vocabs
router.delete("/vocabword", (req, res) => {
    var { vocabListId, vocabWordId } = req.body;
    VocabList.update({ _id: vocabListId }, { $pull: { vocab: { _id: vocabWordId } } })
        .then(data => res.json(data))
        .catch(console.log("Error !!!!"));
});
// if there is a user name in the url it will return all the vocab list made by that user
// if there is no user name in the url it will return all vocab list in the database
router.get("/allvocablist/:user", (req, res) => {
    var user = req.params.user;
    if (user) {
        VocabList.find({user : user})
            .then(data => res.json(data))
            .catch(console.log("Error !!!!"));
    }
    else {
        VocabList.find({})
            .then(data => res.json(data))
            .catch(console.log("Error !!!!"));
    }
});


// add a new user route
router.post('/', (req, res) => {
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
// log in and check the password
router.post(
    '/login',
    passport.authenticate('local'),
    (req, res) => {
        var userInfo = {
            username: req.user.username
        };
        username = userInfo;
        res.send(userInfo);
    }
)
// get the username
router.get('/', (req, res, next) => {
    if (username) {
        res.json({ user: username })
    } else {
        res.json({ user: null })
    }
})
// logout
router.post('/logout', (req, res) => {
    if (req.user) {
        req.logout()
        res.send({ msg: 'logging out' })
    } else {
        res.send({ msg: 'no user to log out' })
    }
})

module.exports = router