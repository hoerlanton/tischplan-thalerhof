/**
 * Created by antonhorl on 09.01.18.
 */

module.exports = {
    saveImHausList: function (req, res, db) {
        //JSON string is parsed to a JSON object
        console.log("Post request made to /saveImHausListeGastrodat");
        //console.log(JSON.stringify(req.body));
        let imHausListeData = {
            data: "",
        };

        let imHausListe = [];
        let imHausListeDataArray = [];
        imHausListeData.data = req.body;
        console.log("imHausListeData.data");
        console.log(imHausListeData.data);
        //console.log(imHausListe[0].name);
        //console.log(imHausListe[1]);

        for (let i = 1; i < imHausListeData.data.length; i++) {
            let imHausListeDataArrayConcat = [];
            let imHausListeDataArrayConcatSplit = [];
            imHausListeDataArray = imHausListeData.data[i];
            for (let j = 0; j < imHausListeDataArray.length; j++) {
                imHausListeDataArrayConcat += imHausListeDataArray[j];
            }
            console.log("imHausListeDataArrayConcat");
            console.log(imHausListeDataArrayConcat);
            imHausListeDataArrayConcatSplit = imHausListeDataArrayConcat.split(";");
            //console.log(imHausListeDataArrayConcatSplit);
            imHausListe.push({
                "name": imHausListeDataArrayConcatSplit[7],
                "nation": imHausListeDataArrayConcatSplit[20],
                "roomNumber": imHausListeDataArrayConcatSplit[3],
                "arrival": imHausListeDataArrayConcatSplit[8],
                "departure": imHausListeDataArrayConcatSplit[9],
                "numberOfPersons": imHausListeDataArrayConcatSplit[16] + '/' + imHausListeDataArrayConcatSplit[29] + '/' + imHausListeDataArrayConcatSplit[14] + '/' + imHausListeDataArrayConcatSplit[15] + '/' + imHausListeDataArrayConcatSplit[27] + '/' + imHausListeDataArrayConcatSplit[28],
                "bgColor": 'ffffff'
            });
        }
        console.log(imHausListe);
        db.thalerhofList.remove({});
        setTimeout(function () {
            db.thalerhofList.save(imHausListe, function (err, imHausListe) {
                if (err) {
                    res.send(err);
                }
                res.json(imHausListe);
                console.log("imHausListe save called");
            });
        }, 500);
    },
    updateImHausList: function (req, res, db) {
        console.log("Post request made to /updatelistElement");
        let informationElements = req.body;
        console.log(req.body);
        let nameValueArray = [];
        let roomNumberValueArray = [];
        let informationElementsString = JSON.stringify(informationElements);
        if (informationElementsString.indexOf("targetTable") != -1) {
            console.log("BUG I GONNA KILL YOU !!!!")
        } else {
            if (informationElementsString.indexOf("leftValue") != -1) {
                for (let i = 0; i < informationElements.groups.length; i++) {
                    nameValueArray.push(informationElements.groups[i].nameValue);
                    roomNumberValueArray.push(informationElements.groups[i].roomNumberValue);

                    db.thalerhofList.update(
                        {
                            name: nameValueArray[i],
                            "roomNumber": roomNumberValueArray[i],
                            "bgColor": "0a7a74"
                        },
                        {
                            $set: {
                                "bgColor": "ffffff",
                            }
                        }, function (err, tables) {
                            if (err) {
                                console.log("Error");
                            }
                            console.log("occupyTable Update successful");
                        });

                }
            } else {
                nameValueArray.push(informationElements[0].substring(1, informationElements[0].length));
                roomNumberValueArray.push(informationElements[2].substring(1, informationElements[2].length));

                console.log(nameValueArray[0]);
                console.log(roomNumberValueArray[0]);

                db.thalerhofList.update(
                    {
                        name: nameValueArray[0],
                        "roomNumber": roomNumberValueArray[0],
                        "bgColor": "ffffff"
                    },
                    {
                        $set: {
                            "bgColor": "0a7a74",
                        }
                    }, function (err, tables) {
                        if (err) {
                            console.log("Error");
                        }
                        console.log("occupyTable Update successful");
                    });
            }}
        setTimeout(function () {
            db.thalerhofList.find(
                {},
                function (err,list) {
                    if (err) {
                        res.send(err);
                    }
                    res.json(list);
                    console.log('list');
                    //console.log(JSON.stringify(list));
                });
        }, 700);
    },
    getImHausList: function (req, res, db) {
        console.log("list get called");
        //Get guests from Mongo DB
        db.thalerhofList.find(function (err,list) {
            if (err) {
                res.send(err);
            }
            res.json(list);
        });
    }
};