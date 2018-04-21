/**
 * Created by antonhorl on 09.01.18.
 */

module.exports = {
    saveImHausList: function (req, res, db) {
        //JSON string is parsed to a JSON object
        console.log("JSON.stringify(req.body)");
        //console.log(JSON.stringify(req.body));
        let listData = {
            data: "",
        };
        let list = [];
        listData.data = req.body;
        let name = [];
        let nation = [];
        let language = [];
        let roomNumber = [];
        let category = [];
        let typeOfPrice = [];
        let arrival = [];
        let departure  = [];
        let numberOfPersons = [];
        let source = [];
        let note2 = [];
        let trace = [];
        let counter = 0;
        console.log(listData.data.length);
        //console.log(listData.data);
        for (let row = 22; row < 10000; row += 3 ) {
            let accessorNameA = "A" + row;
            let accessorNameC = "C" + row;
            let accessorNameD = "D" + row;
            let accessorNameE = "E" + row;
            let accessorNameF = "F" + row;
            let accessorNameG = "G" + row;
            let accessorNameH = "H" + row;
            let accessorNameI = "I" + row;
            let accessorNameJ = "J" + row;
            let accessorNameK = "K" + row;
            let accessorNameL = "L" + row;
            if (listData.data[accessorNameA] == null) {
                break;
            } else if (listData.data[accessorNameA].w === "Traces:" && listData.data[accessorNameH] == null) {
                console.log(row + "continue");
                console.log(listData.data[accessorNameA].w);
                console.log(listData.data[accessorNameH]);
                continue;
            } else if (listData.data[accessorNameA].w === "Traces:" &&listData.data[accessorNameH]) {
                console.log(listData.data[accessorNameH]);
                console.log(listData.data[accessorNameA].w);
                trace[counter - 1] =listData.data[accessorNameH].w;
                console.log("listData.data[accessorNameH].w");
                console.log(listData.data[accessorNameH].w);
                console.log("listData.data[H + (row + 1)]");
                console.log(listData.data["H" + (row + 1)]);
                console.log("listData.data[A + (row + 1)]");
                console.log(listData.data["A" + (row + 1)]);
                let forLoopCounter = 0;
                    for (row; row < 10000; row++) {
                        console.log("Loop for subtraces");
                        console.log(row);
                        console.log(listData.data["H" + (row + 1)] +listData.data["A" + (row + 1)]);

                        forLoopCounter++;
                        if (listData.data["H" + (row + 1)] != null &&listData.data["A" + (row + 1)] == null) {
                            trace[counter - 1] += ", " +listData.data["H" + (row + 1)].w;
                        }
                        if (listData.data["D" + (row + 1)] != null &&listData.data["A" + (row + 1)] == null  &&listData.data["F" + (row + 1)] != null) {
                            trace[counter - 1] += ", " +listData.data["D" + (row + 1)].w;
                        }
                        if (listData.data["D" + (row  + 1)] == null &&listData.data["A" + (row + 1)] == null  &&listData.data["H" + (row + 1)] == null) {
                            if (forLoopCounter > 1) {
                                row--;
                            }
                            break;
                        }
                    }
                continue;
            } else {
                if (listData.data[accessorNameA]) {
                    name.push(listData.data[accessorNameA].w)
                } else {
                    name.push("-");
                }
                if (listData.data[accessorNameC]) {
                    nation.push(listData.data[accessorNameC].w)
                } else {
                    nation.push("-");
                }
                if (listData.data[accessorNameD]) {
                    language.push(listData.data[accessorNameD].w)
                } else {
                    language.push("-");
                }
                if (listData.data[accessorNameE]) {
                    roomNumber.push(listData.data[accessorNameE].w)
                } else {
                    roomNumber.push("-");
                }
                if (listData.data[accessorNameF]) {
                    category.push(listData.data[accessorNameF].w)
                } else {
                    category.push("-");
                }
                if (listData.data[accessorNameG]) {
                    typeOfPrice.push(listData.data[accessorNameG].w)
                } else {
                    typeOfPrice.push("-");
                }
                if (listData.data[accessorNameH]) {
                    arrival.push(listData.data[accessorNameH].w)
                } else {
                    arrival.push("-");
                }
                if (listData.data[accessorNameI]) {
                    departure.push(listData.data[accessorNameI].w)
                } else {
                    departure.push("-");
                }
                if (listData.data[accessorNameJ]) {
                    numberOfPersons.push(listData.data[accessorNameJ].w)
                } else {
                    numberOfPersons.push("-");
                }
                if (listData.data[accessorNameK]) {
                    source.push(listData.data[accessorNameK].w)
                } else {
                    source.push("-");
                }
                if (listData.data[accessorNameL]) {
                    //console.log("listData.data[accessorNameL]" + row + "=");
                    //console.log(listData.data[accessorNameL]);
                    note2.push(listData.data[accessorNameL].w)
                } else {
                    note2.push("-");
                }
                trace.push("-");
            }
            counter++;
        }
        console.log("trace");
        //console.log(JSON.stringify(name));
        console.log(JSON.stringify(trace));
        //console.log(nation);
        for (let i = 0; i < counter; i++) {
            //console.log(i);
            //console.log(listData.data[i]);

           list.push({
                "name": name[i],
                "nation": nation[i],
                "language": language[i],
                "roomNumber": roomNumber[i],
                "category": category[i],
                "typeOfPrice": typeOfPrice[i],
                "arrival": arrival[i],
                "departure": departure[i],
                "numberOfPersons": numberOfPersons[i],
                "source": source[i],
                "note2": note2[i],
                "trace": trace[i]
            });
        }
        db.list.remove({});
        setTimeout(function () {
            db.list.save(list, function (err,list) {
                if (err) {
                    res.send(err);
                }
                res.json(list);
                console.log("list save called");
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

                    db.list.update(
                        {
                            name: nameValueArray[i],
                            "roomNumber": roomNumberValueArray[i]
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
                roomNumberValueArray.push(informationElements[4].substring(1, informationElements[4].length));

                console.log(nameValueArray[0]);
                console.log(roomNumberValueArray[0]);

                db.list.update(
                    {
                        name: nameValueArray[0],
                        "roomNumber": roomNumberValueArray[0]
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
            db.list.find(
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
        db.list.find(function (err,list) {
            if (err) {
                res.send(err);
            }
            res.json(list);
        });
    }
};