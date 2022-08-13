var admin = require('firebase-admin');
var serviceAccount = require('../config/authenticaionhat7-firebase-adminsdk-cfmog-2391a75cda.json');

admin.initializeApp({credential: admin.credential.cert(serviceAccount)})

module.exports = admin;