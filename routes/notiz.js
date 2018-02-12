/**
 * Created by antonhorl on 11.01.18.
 */

module.exports = {
    getNotiz: function (req, res, db) {
        console.log("tables get called");
        //Get guests from Mongo DB
        db.newNotizDb.find(function (err, information) {
            if (err) {
                res.send(err);
            }
            res.json(information);
        });
    },
    newNotiz: function (req, res, db) {

        console.log("newNotiz post called");
        //Get guests from Mongo DB

        console.log(req.body);
        let newInformation = req.body;
        db.newNotizDb.update(
            {
                departmentNotizInput: newInformation.departmentNotizInput,
            },
            {
                $set: {
                    "notizInput": newInformation.notizInput,
                    "date": newInformation.date,
                }
            }, function (err, tables) {
                if (err) {
                    console.log("Error");
                }
                console.log("newNotiz Update successful");
            });

        setTimeout(function () {
            db.newNotizDb.find(
                function (err, notiz) {
                    if (err) {
                        res.send(err);
                    }
                    res.json(notiz);
                    console.log('response notiz ->' + JSON.stringify(notiz));
                });
        }, 400);
    }
};