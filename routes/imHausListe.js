/**
 * Created by antonhorl on 11.01.18.
 */

module.exports = {
    saveImHausListe: function (req, res, db) {

//JSON string is parsed to a JSON object
        console.log("Post request made to /imHausListe");

        let imHausListeData = {
            data: "",
        };

        let imHausListe = [];

        imHausListeData.data = req.body;

        //console.log(imHausListeData.data);
        //console.log(imHausListe[0].name);
        //console.log(imHausListe[1]);

        for (let i = 0; i < imHausListeData.data.length; i++) {
            console.log(i);
            console.log(imHausListeData.data[i][22]);

            imHausListe.push({
                "name": imHausListeData.data[i][23],
                "zimmernummer": imHausListeData.data[i][26],
                "anreise": imHausListeData.data[i][29],
                "abreise": imHausListeData.data[i][30],
                "personenAnzahl": imHausListeData.data[i][31],
                "notiz2": imHausListeData.data[i][33],
            });
        }
        ;

        console.log(imHausListe);

        //console.log('req.body' + req.body);
        //console.log('imHausListe' +  imHausListe);
        //imHausListe.data = req.body;

        db.imHausListe.remove({});
        setTimeout(function () {
            db.imHausListe.save(imHausListe, function (err, imHausListe) {
                if (err) {
                    res.send(err);
                }
                res.json(imHausListe);
                console.log("imHausListe save called");
            });
        }, 500);
    },
    getImHausListe: function (req, res, db) {
        console.log("imHausListe get called");
        //Get guests from Mongo DB
        db.imHausListe.find(function (err, imHausListe) {
            if (err) {
                res.send(err);
            }
            res.json(imHausListe);
        });
    },
    updateImHausListe: function (req, res, db) {

        console.log("Post request made to /updateImHausListeElement");

        let informationElements = req.body;


        let nameValue = informationElements[0].substring(1, informationElements[0].length);
        let zimmernummerValue = informationElements[1].substring(1, informationElements[1].length);

        console.log(nameValue);
        console.log(zimmernummerValue);


        db.imHausListe.update(
            {
                name: nameValue,
                "zimmernummer": zimmernummerValue
            },
            {
                $set: {
                    "bgColor": "f3efe4",
                }
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("occupyTable Update successful");
            });


        setTimeout(function () {
            db.imHausListe.findOne(
                {
                    name: nameValue,
                    "zimmernummer": zimmernummerValue
                },
                function (err, imHausListe) {
                    if (err) {
                        res.send(err);
                    }
                    res.json(imHausListe);
                    console.log('imHausListe');
                    console.log(JSON.stringify(imHausListe));
                });
        }, 700);
    },
};