
module.exports = {
    removeTable: function (db, tableNumber, departmentValue, topValue, leftValue, height, width) {
         if (tableNumber === '501' && topValue === '115' && leftValue === '430' && width === '80') {
            db.tables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.width": "40",
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
                                "arrayIndex": "1",
                                "department": "Wintergarten",
                                "number": "502",
                                "topValue": "115",
                                "leftValue": "500",
                                "bgColor": "#ffffff",
                                "isBesetzt": "false",
                                "placeholder": "true",
                                "border": "solid 3px #f3efe4",
                                "width": "40",
                                "height": "40"
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
        } else if (tableNumber === '503' && topValue === '115' && leftValue === '590' && width === '80') {
            db.tables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.width": "40",
                        "tables.$.transformValue": "rotate(45deg)",
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
                                "arrayIndex": "3",
                                "department": "Wintergarten",
                                "number": "504",
                                "topValue": "115",
                                "leftValue": "680",
                                "bgColor": "#ffffff",
                                "isBesetzt": "false",
                                "placeholder": "true",
                                "border": "solid 3px #f3efe4",
                                "width": "40",
                                "height": "40",
                                "transformValue": "rotate(45deg)"
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
        } else if (tableNumber === '505' && topValue === '215' && leftValue === '590' && width === '80') {
            db.tables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.width": "40",
                        "tables.$.transformValue": "rotate(45deg)",
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
                                "arrayIndex": "5",
                                "department": "Wintergarten",
                                "number": "506",
                                "topValue": "215",
                                "leftValue": "690",
                                "bgColor": "#ffffff",
                                "isBesetzt": "false",
                                "placeholder": "true",
                                "border": "solid 3px #f3efe4",
                                "width": "40",
                                "height": "40",
                                "transformValue": "rotate(45deg)"
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
        } else if (tableNumber === '515' && topValue === '380' && leftValue === '250' && width === '80') {
            db.tables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.width": "40",
                        "tables.$.leftValue": "280",
                        "tables.$.transformValue": "rotate(45deg)",
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
                                "arrayIndex": "15",
                                "department": "Wintergarten",
                                "number": "516",
                                "topValue": "380",
                                "leftValue": "200",
                                "bgColor": "#ffffff",
                                "isBesetzt": "false",
                                "placeholder": "true",
                                "border": "solid 3px #f3efe4",
                                "width": "40",
                                "height": "40",
                                "transformValue": "rotate(45deg)"
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
        } else if (tableNumber === '517' && topValue === '290' && leftValue === '150' && width === '60') {
            db.tables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.width": "30",
                        "tables.$.transformValue": "rotate(40deg)",
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
                            $each: [ {
                                "arrayIndex": "17",
                                "department": "Wintergarten",
                                "number": "518",
                                "topValue": "280",
                                "leftValue": "110",
                                "bgColor": "#ffffff",
                                "isBesetzt": "false",
                                "placeholder": "true",
                                "border": "solid 3px #f3efe4",
                                "width": "30",
                                "height": "60",
                                "transformValue": "rotate(30deg)"
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
         } else if (tableNumber === '519' && topValue === '190' && leftValue === '70' && height === '60') {
             db.tables.update(
                 {
                     department: departmentValue,
                     "tables.number": tableNumber
                 },
                 {
                     $set: {
                         "tables.$.height": "30",
                         "tables.$.topValue": "230",
                         "transformValue": "rotate(-40deg)"
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
                             $each: [ {
                                 "arrayIndex": "19",
                                 "department": "Wintergarten",
                                 "number": "520",
                                 "topValue": "180",
                                 "leftValue": "50",
                                 "bgColor": "#ffffff",
                                 "isBesetzt": "false",
                                 "placeholder": "true",
                                 "border": "solid 3px #f3efe4",
                                 "width": "60",
                                 "height": "30",
                                 "transformValue": "rotate(-20deg)"
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
        } else if (tableNumber === '519' && topValue === '130' && leftValue === '70' && height === '90') {
            db.tables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "60",
                        "tables.$.topValue": "190"
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
                            $each: [ {
                                "arrayIndex": "20",
                                "department": "Wintergarten",
                                "number": "521",
                                "topValue": "130",
                                "leftValue": "40",
                                "bgColor": "#ffffff",
                                "isBesetzt": "false",
                                "placeholder": "true",
                                "border": "solid 3px #f3efe4",
                                "width": "60",
                                "height": "30",
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

         } else if (tableNumber === '520' && topValue === '130' && leftValue === '50' && height === '60') {
             db.tables.update(
                 {
                     department: departmentValue,
                     "tables.number": tableNumber
                 },
                 {
                     $set: {
                         "tables.$.height": "30",
                         "tables.$.topValue": "180",
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
                                 "arrayIndex": "20",
                                 "department": "Wintergarten",
                                 "number": "521",
                                 "topValue": "130",
                                 "leftValue": "40",
                                 "bgColor": "#ffffff",
                                 "isBesetzt": "false",
                                 "placeholder": "true",
                                 "border": "solid 3px #f3efe4",
                                 "width": "60",
                                 "height": "30",
                                 "transformValue": "rotate(0deg)"
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
         } else if (tableNumber === '523' && topValue === '110' && leftValue === '260' && width === '80' && height === '40') {
             db.tables.update(
                 {
                     department: departmentValue,
                     "tables.number": tableNumber
                 },
                 {
                     $set: {
                         "tables.$.width": "40",
                         "tables.$.height": "40",
                         "tables.$.transformValue": "rotate(45deg)",
                         "tables.$.topValue": "180"
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
                                 "arrayIndex": "23",
                                 "department": "Wintergarten",
                                 "number": "524",
                                 "topValue": "115",
                                 "leftValue": "300",
                                 "bgColor": "#ffffff",
                                 "isBesetzt": "false",
                                 "placeholder": "true",
                                 "border": "solid 3px #f3efe4",
                                 "width": "40",
                                 "height": "40",
                                 "transformValue": "rotate(45deg)"
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
        } else if (tableNumber === '523' && topValue === '110' && leftValue === '260' && height === '120' && width === '40') {
            db.tables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.topValue": "110",
                        "tables.$.leftValue": "260",
                        "tables.$.width": "80",
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
                            $each: [  {
                                "arrayIndex": "24",
                                "department": "Wintergarten",
                                "number": "525",
                                "topValue": "180",
                                "leftValue": "330",
                                "bgColor": "#ffffff",
                                "isBesetzt": "false",
                                "placeholder": "true",
                                "border": "solid 3px #f3efe4",
                                "width": "40",
                                "height": "40",
                                "transformValue": "rotate(45deg)"
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









