/**
 * Created by antonhorl on 11.01.18.
 */

module.exports = {
    addPlaceholder: function (req, res, db) {
        console.log("addPlaceholder request made to /addPlaceholder");
        //JSON string is parsed to a JSON object
        let addPlaceholder = req.body;
        //console.log(occupyTable);
        new Promise(function(resolve, reject) {
        db.thalerhofTables.update(
            {
                department: addPlaceholder.department,
                "tables.number": addPlaceholder.number
            },
            {
                $set: {
                    "tables.$.placeholder": "true",
                }
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("No Error");
                resolve(); // (*)

            });
        }).then(function() { // (**)
        setTimeout(function () {
            db.thalerhofTables.find(
                {
                    department: addPlaceholder.department,
                    "tables.number": addPlaceholder.number
                }, function (err, tables) {
                    if (err) {
                        res.send(err);
                    }
                    res.json(tables);
                    //console.log(JSON.stringify(tables));
                });
        }, 100);
        });
    },
    removePlaceholder: function (req, res, db) {
        console.log("removePlaceholder request made to /removePlaceholder");
        let data = JSON.stringify(req.body);
        let splitted = data.split("\\");
        let departmentValue = "";
        let tableValue = "";
        let departmentValueDB = "";
        let informationElements2 = [];
        for (let s = 0; s < splitted.length; s++) {
            informationElements2.push(splitted[s].split(":"));
        }
        if (informationElements2.length >= 10) {
            console.log("Im-Haus-Liste");
            departmentValue = informationElements2[9][0].substring(1, informationElements2[9][0].length - 1).replace(new RegExp("[0-9]", "g"), "").replace(/\W/g, '');
            tableValue = informationElements2[9][0].toString().match(/\d+/);
        } else if (informationElements2.length === 9) {
            console.log("Anreise");
            departmentValue = informationElements2[8][0].substring(1, informationElements2[8][0].length - 1).replace(new RegExp("[0-9]", "g"), "").replace(/\W/g, '');
            tableValue = informationElements2[8][0].toString().match(/\d+/);
        } else {
            console.log("Trace");
            departmentValue = informationElements2[informationElements2.length - 1][0].substring(1, informationElements2[informationElements2.length - 1][0].length - 1).replace(new RegExp("[0-9]", "g"), "").replace(/\W/g, '');
            tableValue = informationElements2[informationElements2.length - 1][0].toString().match(/\d+/);
        }
        if (departmentValue === "SonnbergZirbn") {
            departmentValueDB = "Sonnberg-Zirbn";
        }
        else if (departmentValue === "Panorama") {
            departmentValueDB = "Panorama";
        }
        else if (departmentValue === "Restaurant") {
            departmentValueDB = "Restaurant";
        }
        else if (departmentValue === "Wintergarten") {
            departmentValueDB = "Wintergarten";
        }
        db.thalerhofTables.update(
            {
                department: departmentValueDB,
                "tables.number": tableValue[0]
            },
            {
                $set: {
                    "tables.$.placeholder": "false",
                }
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("Updated successfully removePlaceholder");
            });
        setTimeout(function () {
            db.thalerhofTables.findOne(
                {
                    department: departmentValueDB,
                    "tables.number": tableValue[0]
                }, {
                    "tables.$": 1,
                }, function (err, tables) {
                    if (err) {
                        res.send(err);
                    }
                    res.json(tables);
                });
        }, 100);
    },
};






