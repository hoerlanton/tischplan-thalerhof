const   express = require('express'),
        router = express.Router(),
        bodyParser = require('body-parser'),
        mongojs = require('mongojs'),
        cors = require('cors'),
        db = mongojs('mongodb://anton:b2d4f6h8@ds127132.mlab.com:27132/servicio', ['tracesListe', 'anreiseListe', 'imHausListe', 'tables']);

//Bodyparser middleware
router.use(bodyParser.urlencoded({ extended: false}));

router.use(bodyParser.json());

//Cors middleware
router.use(cors());

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
        console.log(anreiseListe);
        console.log("anreiseListe save called");
    }, 10000));
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
        console.log("imHausListe save called");
    }, 10000));
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
        console.log("tracesListe save called");
        }, 10000));
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

//Get Tables
router.get('/tables', function(req, res, next) {
    console.log("tables get called");
    //Get guests from Mongo DB
    db.tables.find(function(err, tables){
        if (err){
            res.send(err);
        }
        res.json(tables);
    });
});

//occupyTable
router.post('/occupyTable', function(req, res, next) {
//JSON string is parsed to a JSON object
    console.log("occupyTable request made to /occupyTable");
    let occupyTable = req.body;
    //console.log(occupyTable);

    db.tables.update(
        {department: occupyTable.department,
            "tables.number": occupyTable.number} ,
        {$set: {"tables.$.bgColor": "#0a7a74"}}, function (err, tables) {
            if (err) {
                console.log("OI");
            }
            console.log("HOI");
        });

        setTimeout(function() {
            db.tables.find(
                {
                    department: occupyTable.department,
                    "tables.number": occupyTable.number
                }, function (err, tables) {
                    if (err) {
                        res.send(err);
                    }
                    res.json(tables);
                    console.log(JSON.stringify(tables));
                });
        }, 100);

});

//dispenseTable
router.post('/dispenseTable', function(req, res, next) {
//JSON string is parsed to a JSON object
    console.log("dispenseTable request made to /dispenseTable");
    let dispenseTable = req.body;
    //console.log(dispenseTable);

    db.tables.findAndModify({
            query: {department: dispenseTable.department, "tables.number": dispenseTable.number},
            update: {$set: {"tables.$.bgColor": "#ffffff"} },
            new: false
        }, function (err, tables) {
        if (err) {
            console.log("OI");
        }
        console.log("HOI");
    });

    setTimeout(function() {
        db.tables.find(
            {
                department: dispenseTable.department,
                "tables.number": dispenseTable.number
            }, function (err, tables) {
                if (err) {
                    res.send(err);
                }
                res.json(tables);
                console.log(JSON.stringify(tables));
            });
    }, 100);

});


module.exports = router;