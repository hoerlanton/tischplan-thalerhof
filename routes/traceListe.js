/**
 * Created by antonhorl on 11.01.18.
 */

module.exports = {
    saveTraceListe: function (req, res, db) {

        //JSON string is parsed to a JSON object
        console.log("Post request made to /tracesListe");

        let tracesListeElemente = {
            data: "",
        };

        let tracesListe = [];

        tracesListeElemente.data = req.body;

        for (let o = 0; o < tracesListeElemente.data.length; o++) {
            if (tracesListeElemente.data[o].length === 7) {
                tracesListeElemente.data[o].splice(0, 5);
                tracesListeElemente.data[o].splice(6, 7);
            }
        }
        for (let o = 0; o < tracesListeElemente.data.length; o++) {
            if (tracesListeElemente.data[o].length === 8) {
                tracesListeElemente.data.splice(o, 1);
            }
        }
        for (let o = 0; o < tracesListeElemente.data.length; o++) {
            if (tracesListeElemente.data[o].length === 24) {
                tracesListeElemente.data[o].splice(0, 12);
            }
        }
        for (let o = 0; o < tracesListeElemente.data.length; o++) {
            if (tracesListeElemente.data[o].length === 13) {
                tracesListeElemente.data.splice(o, 1);
            }
        }
        for (let o = 0; o < tracesListeElemente.data.length; o++) {
            if (tracesListeElemente.data[o].length === 19) {
                tracesListeElemente.data[o].splice(0, 17);
            }
        }
        for (let o = 0; o < tracesListeElemente.data.length; o++) {
            if (tracesListeElemente.data[o].length === 1) {
                tracesListeElemente.data.splice(o, 1);
            }
        }
        for (let o = 0; o < tracesListeElemente.data.length; o++) {
            if (tracesListeElemente.data[o].length === 12) {
                tracesListeElemente.data[o].splice(8, 12);
            }
        }
        for (let o = 0; o < tracesListeElemente.data.length; o++) {
            if (tracesListeElemente.data[o].length === 2) {
                tracesListeElemente.data[o].splice(1, 2);
            }
        }
        for (let o = 0; o < tracesListeElemente.data.length; o++) {
            console.log(o + tracesListeElemente.data[o]);
        }

        let trace = [];

        for (let o = 0; o < tracesListeElemente.data.length; o++) {
            trace[o] = [];
        }

        for (let o = 0; o < tracesListeElemente.data.length; o++) {
            if (tracesListeElemente.data[o] !== undefined) {
                if (tracesListeElemente.data[o].length === 8) {
                    trace[o] = tracesListeElemente.data[o].concat(tracesListeElemente.data[o + 1]);
                    console.log('tracesListeElemente.data[o + 2] : ');
                    console.log(tracesListeElemente.data[o + 2]);
                    if (tracesListeElemente.data[o + 2] !== undefined) {
                        if (tracesListeElemente.data[o + 2].length === 1) {
                            trace[o] = tracesListeElemente.data[o].concat(tracesListeElemente.data[o + 1]).concat(tracesListeElemente.data[o + 2]);
                            if (tracesListeElemente.data[o + 3] !== undefined) {
                                if (tracesListeElemente.data[o + 3].length === 1) {
                                    trace[o] = tracesListeElemente.data[o].concat(tracesListeElemente.data[o + 1]).concat(tracesListeElemente.data[o + 2]).concat(tracesListeElemente.data[o + 3]);
                                }
                            }
                        }
                    }
                }
            }
        }
        for (let o = 0; o < tracesListeElemente.data.length; o++) {
            let traceTemp = [];
            if (trace[o].length === 10) {
                traceTemp = trace[o].splice(trace[o].length - 2, trace[o].length);
            } else if (trace[o].length === 11) {
                traceTemp = trace[o].splice(trace[o].length - 3, trace[o].length);
            }
            console.log('traceTemp' + traceTemp);
            let traceTempJoined = traceTemp.join(" ");
            console.log('traceTempJoined' + traceTempJoined);
            trace[o].push(traceTempJoined);
        }

        /*

        for (let o = 0; o < tracesListeElemente.data.length; o++) {
            if (trace[o].length > 8) {
                tracesListeElemente.push(trace[o]);
            }
        }
        */
        console.log('tracesListeElemente.data: ');
        console.log(tracesListeElemente.data);
        console.log('tracesListeElemente: ');
        console.log(tracesListeElemente);
        console.log("trace: ");
        console.log(trace);

        /*
        for (let o = 0; o < tracesListeData.data.length; o++) {
            if (tracesListeData.data[o].length === 7) {
                tracesListeData.data[o].splice(0, 4);
                tracesListeData.data[o].splice(6, 7);
            }
        }
        for (let o = 0; o < tracesListeData.data.length; o++) {
            if (tracesListeData.data[o].length === 8) {
                tracesListeData.data.splice(o, 1);
            }
        }
        for (let o = 0; o < tracesListeData.data.length; o++) {
            if (tracesListeData.data[o].length === 1) {
                tracesListeData.data.splice(o, 1);
            }
        }

        for (let o = 0; o < tracesListeData.data.length; o++) {
            if (tracesListeData.data[o].length === 19) {
                tracesListeData.data[o] = tracesListeData.data[o].splice(17, tracesListeData.data[o].length);
            }
        }

        for (let o = 0; o < tracesListeData.data.length; o++) {
            if (tracesListeData.data[o].length === 13) {
                tracesListeData.data[o].splice(8, 12);
            }
        }

        for (let o = 0; o < tracesListeData.data.length; o++) {
            console.log(o + tracesListeData.data[o]);
            console.log('length of : ' + o + tracesListeData.data[o].length);
        }

        let trace = [];

        for (let o = 0; o < tracesListeData.data.length; o++) {
            trace[o] = [];
        }

        for (let o = 1; o < tracesListeData.data.length; o++) {
            if (tracesListeData.data[o] !== undefined) {
                if (tracesListeData.data[o].length === 28) {
                    trace[o] = tracesListeData.data[o];
                }
                if (tracesListeData.data[o].length === 25) {
                    trace[o] = tracesListeData.data[o].concat(tracesListeData.data[o + 1]);
                    console.log('Trace before ->>' + trace[o]);
                }
                if (tracesListeData.data[o].length === 2) {
                    trace[o] = tracesListeData.data[o].concat(tracesListeData.data[o - 1]).concat(tracesListeData.data[o - 2]);
                    console.log('Trace before 2222222222222222222222 ------------------------------>>' + trace[o]);
                }
            }
        }

        trace[0] = tracesListeData.data[0].concat(tracesListeData.data[1]).concat(tracesListeData.data[2]);
        trace[0].unshift("", "", "", "");
        trace[0].splice(20, 0, "");
        trace[0].splice(20, 0, "");
        trace[0].splice(20, 0, "");
        trace[0].splice(20, 0, "");
        trace[0].splice(20, 0, "");

        tracesListeElemente.push(trace[0]);

        for (let o = 0; o < tracesListeData.data.length; o++) {
            if (trace[o].length === 30) {
                trace[o].splice(1, 2);
                let traceTemp = [];
                traceTemp = trace[o].splice(0, 3);
                console.log('traceTemp' + traceTemp);
                trace[o].push(traceTemp[0]);
                trace[o].push(traceTemp[1]);
                trace[o].splice(24, 0, " ");
            }
        }

            for (let o = 1; o < tracesListeData.data.length; o++) {
            if (trace[o].length > 26) {
            tracesListeElemente.push(trace[o]);
                }
                }
            console.log('263' + tracesListeData.data);
            console.log('264 ' + tracesListeElemente);
            console.log(tracesListeElemente);
            for (let o = 0; o < tracesListeElemente.length; o++) {
            if (trace[o].length === 25 || trace[o].length === 14) {
                }
                }

            console.log(imHausListeData.data);
            console.log(imHausListe[0].name);
            console.log(imHausListe[1]);
            */

        for (let i = 0; i < trace.length; i++) {
            if (trace[i].length > 8) {
                console.log(i);
                console.log(trace[i][0]);

                tracesListe.push({
                    "name": trace[i][1],
                    "zimmernummer": trace[i][0],
                    "anreise": trace[i][3],
                    "abreise": trace[i][4],
                    "trace": trace[i][8]
                });
            }
        }

        db.tracesListe.remove({});
        setTimeout(function () {
            db.tracesListe.save(tracesListe, function (err, tracesListe) {
                if (err) {
                    res.send(err);
                }
                res.json(tracesListe);
                console.log("tracesListe save called");
            });
        }, 100);
    },
    getTraceListe: function (req, res, db) {

        console.log("tracesListe get called");
//Get guests from Mongo DB
        db.tracesListe.find(function (err, tracesListe) {
            if (err) {
                res.send(err);
            }
            res.json(tracesListe);
        });
    },

    updateTraceListe: function (req, res, db) {

        console.log("Post request made to /updateTracesListeElement");

        let informationElements = req.body;
        let nameValue = informationElements[1].substring(1, informationElements[1].length);
        let zimmernummerValue = informationElements[0].substring(1, informationElements[0].length);

        console.log(nameValue);
        console.log(zimmernummerValue);

        db.tracesListe.update(
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
            db.tracesListe.findOne(
                {
                    name: nameValue,
                    "zimmernummer": zimmernummerValue
                },
                function (err, tracesListe) {
                    if (err) {
                        res.send(err);
                    }
                    res.json(tracesListe);
                    console.log('tracesListe');
                    console.log(JSON.stringify(tracesListe));
                });
        }, 700);
    },
};
