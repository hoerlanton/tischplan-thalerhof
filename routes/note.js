/**
 * Created by antonhorl on 11.01.18.
 */

module.exports = {
    getNote: function (req, res, db) {
        console.log("tables get called");
        //Get guests from Mongo DB
        db.thalerhofNotes.find(function (err, information) {
            if (err) {
                res.send(err);
            }
            res.json(information);
        });
    },
    newNote: function (req, res, db) {
        console.log("newNote post called");
        //Get guests from Mongo DB
        console.log(req.body);
        let newInformation = req.body;
        db.thalerhofNotes.update(
            {
                departmentNoteInput: newInformation.departmentNoteInput,
            },
            {
                $set: {
                    "noteInput": newInformation.noteInput,
                    "date": newInformation.date,
                }
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("newNote Update successful");
            });

        setTimeout(function () {
            db.thalerhofNotes.find(
                function (err, note) {
                    if (err) {
                        res.send(err);
                    }
                    res.json(note);
                    console.log('response note ->' + JSON.stringify(note));
                });
        }, 400);
    }
};