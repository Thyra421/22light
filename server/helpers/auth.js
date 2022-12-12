const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
// credential
const credentialSchema = require('../models/credential');
const credentialCollection = mongoose.model('Credential-Collection', credentialSchema);
// user
const userSchema = require('../models/user');
const userCollection = mongoose.model('Data-Collection', userSchema);

// Login function
async function userLogin(req, res) {
    let user = await credentialCollection.findOne({
        email: req.body.email
    });
    if (!user) {
        return res.status(500).send('Incorrect email or password.');
    }

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) {
        return res.status(500).send('Incorrect password.');
    }
    //   create JWT token
    let token = jwt.sign({
            userId: user._id,
            userEmail: user.email,
        },
        "RANDOM-TOKEN", {
            expiresIn: "24h"
        }
    );

    let data = await userCollection.findOne({
        uid: user._id.toString(),
    });
    console.log('logged' + token)
    return res.status(200).send({
        data,
        token
    })
};

// Register
async function userRegister(req, res) {
    let credentials = await credentialCollection.findOne({
        email: req.body.email
    })
    if (credentials) {
        console.log("already registered")
        return res.status(500).send('Cet utilisateur existe déjà!');
    } else {
        const newCredential = new credentialCollection({
            email: req.body.email,
            password: req.body.password,
        })
        const salt = await bcrypt.genSalt(10);
        newCredential.password = await bcrypt.hash(newCredential.password, salt);
        await newCredential.save();
        console.log("User has been created");

        // create data-collection from credential:
        let user = await credentialCollection.findOne({
            email: req.body.email
        })
        if (user) {
            const newUser = new userCollection({
                uid: user._id,
                name: req.body.name,
            });
            await newUser.save();
            console.log("User Data has been created");
        }
        // data
        let data = await userCollection.findOne({
            uid: user._id.toString(),
        });
        return res.status(200).send(data)
    }
};

module.exports = {
    userLogin,
    userRegister,
};