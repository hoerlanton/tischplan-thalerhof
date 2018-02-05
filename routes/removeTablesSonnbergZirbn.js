/**
 * Created by antonhorl on 06.01.18.
 */

module.exports = {
    removeTable: function (db, tableNumber, departmentValue, topValue, leftValue, height, width) {
         if (tableNumber === '40' && topValue === '260' && leftValue === '630' && height === '80') {
            db.tables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.topValue": "340",
                        "tables.$.leftValue": "630",
                        "tables.$.height": "40",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.tables.update(
                {
                    department: departmentValue,
                }, {
                    $push: {
                        tables: {
                            $each: [{
                                "arrayIndex": 1,
                                "department": "Sonnberg-Zirbn",
                                "number": "41",
                                "topValue": "220",
                                "leftValue": "630",
                                "bgColor": "#ffffff",
                                "isBesetzt": "false",
                                "placeholder": "true",
                                "border": "solid 3px #f3efe4",
                                "width": "60",
                                "height": "40",
                            }],
                            $sort: {number: 1}
                        }
                    }
                },
                {multi: true},
                function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("addTable Update successful");
                });
        } else if (tableNumber === '48' && topValue === '260' && leftValue === '400' && height === '80') {
            db.tables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.topValue": "220",
                        "tables.$.leftValue": "400",
                        "tables.$.height": "40",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.tables.update(
                {
                    department: departmentValue,
                }, {
                    $push: {
                        tables: {
                            $each: [{
                                "arrayIndex": 9,
                                "department": "Sonnberg-Zirbn",
                                "number": "49",
                                "topValue": "340",
                                "leftValue": "400",
                                "bgColor": "#ffffff",
                                "isBesetzt": "false",
                                "placeholder": "true",
                                "border": "solid 3px #f3efe4",
                                "width": "60",
                                "height": "40"
                            }],
                            $sort: {number: 1}
                        }
                    }
                },
                {multi: true},
                function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("addTable Update successful");
                });
        } else if (tableNumber === '50' && topValue === '430') {
            db.tables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.topValue": "460",
                        "tables.$.height": "30",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });

            db.tables.update(
                {
                    department: departmentValue,
                }, {
                    $push: {
                        tables: {
                            $each: [{
                                "arrayIndex": 11,
                                "department": "Sonnberg-Zirbn",
                                "number": "51",
                                "topValue": "400",
                                "leftValue": "200",
                                "bgColor": "#ffffff",
                                "isBesetzt": "false",
                                "placeholder": "true",
                                "width": "60",
                                "height": "30",
                                "border": "solid 3px #f3efe4"
                            }],
                            $sort: {number: 1}
                        }
                    }
                },
                {multi: true},
                function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("addTable Update successful");
                });
        } else if (tableNumber === '52' && topValue === '280' && leftValue === '200') {
            db.tables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.leftValue": "230",
                        "tables.$.width": "30",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.tables.update(
                {
                    department: departmentValue,
                }, {
                    $push: {
                        tables: {
                            $each: [{
                                "arrayIndex": 13,
                                "department": "Sonnberg-Zirbn",
                                "number": "53",
                                "topValue": "280",
                                "leftValue": "170",
                                "bgColor": "#ffffff",
                                "isBesetzt": "false",
                                "placeholder": "true",
                                "border": "solid 3px #f3efe4",
                                "width": "30",
                                "height": "60"
                            }],
                            $sort: {number: 1},
                        }
                    }
                },
                {
                    multi: true
                }, function (err, tables) {
                    if (err) {
                        console.log(err);
                    }
                    console.log("addTable Update successful");
                });
         } else if (tableNumber === '54' && topValue === '290' && leftValue === '50' && height === '60') {
             db.tables.update(
                 {
                     department: departmentValue,
                     "tables.number": tableNumber
                 },
                 {
                     $set: {
                         "tables.$.topValue": "320",
                         "tables.$.height": "30",
                     }
                 }, function (err, tables) {
                     if (err) {
                         console.log("Error");
                     }
                     console.log("moveTable Update successful");
                 });
             db.tables.update(
                 {
                     department: departmentValue,
                 }, {
                     $push: {
                         tables: {
                             $each: [{
                                 "arrayIndex": 15,
                                 "department": "Sonnberg-Zirbn",
                                 "number": "55",
                                 "topValue": "260",
                                 "leftValue": "50",
                                 "bgColor": "#ffffff",
                                 "isBesetzt": "false",
                                 "placeholder": "true",
                                 "border": "solid 3px #f3efe4",
                                 "width": "60",
                                 "height": "30"
                             }],
                             $sort: {number: 1}
                         }
                     }
                 },
                 {
                     multi: true
                 }, function (err, tables) {
                     if (err) {
                         console.log("Error");
                     }
                     console.log("addTable Update successful");
                 });
         } else if (tableNumber === '54' && topValue === '260' && leftValue === '50' && height === '90') {
             db.tables.update(
                 {
                     department: departmentValue,
                     "tables.number": tableNumber
                 },
                 {
                     $set: {
                         "tables.$.topValue": "290",
                         "tables.$.height": "60",
                     }
                 }, function (err, tables) {
                     if (err) {
                         console.log("Error");
                     }
                     console.log("moveTable Update successful");
                 });
             db.tables.update(
                 {
                     department: departmentValue,
                 }, {
                     $push: {
                         tables: {
                             $each: [{
                                 "arrayIndex": 16,
                                 "department": "Sonnberg-Zirbn",
                                 "number": "56",
                                 "topValue": "200",
                                 "leftValue": "50",
                                 "bgColor": "#ffffff",
                                 "isBesetzt": "false",
                                 "placeholder": "true",
                                 "border": "solid 3px #f3efe4",
                                 "width": "60",
                                 "height": "30"
                             }],
                             $sort: {number: 1}
                         }
                     }
                 },
                 {
                     multi: true
                 }, function (err, tables) {
                     if (err) {
                         console.log("Error");
                     }
                     console.log("addTable Update successful");
                 });
        } else if (tableNumber === '54' && topValue === '200' && leftValue === '50' && height === '120') {
            db.tables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.topValue": "260",
                        "tables.$.leftValue": "50",
                        "tables.$.height": "90",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });


            db.tables.update(
                {
                    department: departmentValue,
                }, {
                    $push: {
                        tables: {
                            $each: [{
                                "arrayIndex": 17,
                                "department": "Sonnberg-Zirbn",
                                "number": "57",
                                "topValue": "140",
                                "leftValue": "50",
                                "bgColor": "#ffffff",
                                "isBesetzt": "false",
                                "placeholder": "true",
                                "border": "solid 3px #f3efe4",
                                "width": "60",
                                "height": "30"
                            }],
                            $sort: {number: 1}
                        }
                    }
                },
                {
                    multi: true
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("addTable Update successful");
                });
         } else if (tableNumber === '55' && topValue === '230' && leftValue === '50' && height === '60') {
             db.tables.update(
                 {
                     department: departmentValue,
                     "tables.number": tableNumber
                 },
                 {
                     $set: {
                         "tables.$.topValue": "260",
                         "tables.$.leftValue": "50",
                         "tables.$.height": "30",
                     }
                 }, function (err, tables) {
                     if (err) {
                         console.log("Error");
                     }
                     console.log("moveTable Update successful");
                 });
             db.tables.update(
                 {
                     department: departmentValue,
                 }, {
                     $push: {
                         tables: {
                             $each: [{
                                 "arrayIndex": 16,
                                 "department": "Sonnberg-Zirbn",
                                 "number": "56",
                                 "topValue": "200",
                                 "leftValue": "50",
                                 "bgColor": "#ffffff",
                                 "isBesetzt": "false",
                                 "placeholder": "true",
                                 "border": "solid 3px #f3efe4",
                                 "width": "60",
                                 "height": "30"
                             }],
                             $sort: {number: 1}
                         }
                     }
                 },
                 {
                     multi: true
                 }, function (err, tables) {
                     if (err) {
                         console.log("Error");
                     }
                     console.log("addTable Update successful");
                 });
        } else if (tableNumber === '55' && topValue === '200' && leftValue === '50' && height === '90') {
            db.tables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.topValue": "260",
                        "tables.$.leftValue": "50",
                        "tables.$.height": "30",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });

            db.tables.update(
                {
                    department: departmentValue,
                }, {
                    $push: {
                        tables: {
                            $each: [{
                                "arrayIndex": 17,
                                "department": "Sonnberg-Zirbn",
                                "number": "57",
                                "topValue": "140",
                                "leftValue": "50",
                                "bgColor": "#ffffff",
                                "isBesetzt": "false",
                                "placeholder": "true",
                                "border": "solid 3px #f3efe4",
                                "width": "60",
                                "height": "30"
                            }],
                            $sort: {number: 1}
                        }
                    }
                },
                {
                    multi: true
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("addTable Update successful");
                });
        } else if (tableNumber === '56' && topValue === '170' && leftValue === '50') {
            db.tables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.topValue": "200",
                        "tables.$.leftValue": "50",
                        "tables.$.height": "30",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.tables.update(
                {
                    department: departmentValue,
                }, {
                    $push: {
                        tables: {
                            $each: [{
                                "arrayIndex": 17,
                                "department": "Sonnberg-Zirbn",
                                "number": "57",
                                "topValue": "140",
                                "leftValue": "50",
                                "bgColor": "#ffffff",
                                "isBesetzt": "false",
                                "placeholder": "true",
                                "border": "solid 3px #f3efe4",
                                "width": "60",
                                "height": "30"
                            }],
                            $sort: {number: 1}
                        }
                    }
                },
                {
                    multi: true
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("addTable Update successful");
                });
        } else if (tableNumber === '58' && topValue === '140' && leftValue === '170' && width === '60') {
            db.tables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.topValue": "140",
                        "tables.$.leftValue": "170",
                        "tables.$.width": "30",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.tables.update(
                {
                    department: departmentValue,
                }, {
                    $push: {
                        tables: {
                            $each: [{
                                "arrayIndex": 19,
                                "department": "Sonnberg-Zirbn",
                                "number": "59",
                                "topValue": "140",
                                "leftValue": "230",
                                "bgColor": "#ffffff",
                                "isBesetzt": "false",
                                "placeholder": "true",
                                "border": "solid 3px #f3efe4",
                                "width": "30",
                                "height": "60"
                            }],
                            $sort: {number: 1}
                        }
                    }
                },
                {
                    multi: true
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("addTable Update successful");
                });
        }
    }
};