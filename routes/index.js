'use strict';

const   express = require('express'),
        router = express.Router(),
        bodyParser = require('body-parser'),
        mongojs = require('mongojs'),
        db = mongojs('mongodb://anton:b2d4f6h8@ds127132.mlab.com:27132/servicio', ['tracesListe', 'anreiseListe', 'imHausListe']);

//Bodyparser middleware
router.use(bodyParser.urlencoded({ extended: false}));


//----->REST-FUL API<------//


//Save AnreiseListe
router.post('/anreiseListe', function(req, res, next) {
    //JSON string is parsed to a JSON object
    console.log("Post request made to /anreiseListe");
    let anreiseListe = {
        data: "",};
    anreiseListe.data = req.body;

    db.anreiseListe.remove({});

    db.anreiseListe.save(anreiseListe, setTimeout(function (err, anreiseListe) {
        if (err) {
            res.send(err);
        }
        res.json(anreiseListe);
    }, 5000));
});

//Save ImHausListe
router.post('/imHausListe', function(req, res, next) {
    //JSON string is parsed to a JSON object
    console.log("Post request made to /imHausListe");
    let imHausListe = {
        data: "",
    };
    imHausListe.data = req.body;

    db.imHausListe.remove({});

    db.imHausListe.save(imHausListe, setTimeout(function (err, imHausListe) {
        if (err) {
            res.send(err);
        }
        res.json(imHausListe);
    }, 5000));
});

//Save TracesListe
router.post('/tracesListe', function(req, res, next) {
    //JSON string is parsed to a JSON object
    console.log("Post request made to /tracesListe");
    let tracesListe = {
        data: "",
    };
    tracesListe.data = req.body;

    db.tracesListe.remove({});

    db.tracesListe.save(tracesListe, setTimeout(function (err, tracesListe) {
        if (err) {
            res.send(err);
        }
        res.json(tracesListe);
        }, 5000));
});

//Get anreiseListe
router.get('/anreiseListe', function(req, res, next) {
    console.log("anreiseListe get called");
    //Get guests from Mongo DB
    db.anreiseListe.find(function(err, anreiseListe){
        if (err){
            res.send(err);
        }
        res.json(anreiseListe);
    });
});

//Get imHausListe
router.get('/imHausListe', function(req, res, next) {
    console.log("imHausListe get called");
    //Get guests from Mongo DB
    db.imHausListe.find(function(err, imHausListe){
        if (err){
            res.send(err);
        }
        res.json(imHausListe);
    });
});

//Get TracesListe
router.get('/tracesListe', function(req, res, next) {
    console.log("tracesListe get called");
    //Get guests from Mongo DB
    db.tracesListe.find(function(err, tracesListe){
        if (err){
            res.send(err);
        }
        res.json(tracesListe);
    });
});

module.exports = router;