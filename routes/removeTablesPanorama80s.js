module.exports = {
    removeTable: function (db, tableNumber, departmentValue, topValue, leftValue, height, width) {
        //console.log(db, tableNumber, departmentValue, topValue, leftValue, height, width);
         if (tableNumber === '80' && topValue === '250' && leftValue === '220' && height === '60') {
            db.thalerhofTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.topValue": "280",
                        "tables.$.height": "30",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
             db.thalerhofTables.update(
                 {
                     department: departmentValue,
                 }, {
                     $push: {
                         tables: {
                             $each: [{
                                 "arrayIndex": "21",
                                 "department": "Panorama",
                                 "number": "81",
                                 "topValue": "220",
                                 "leftValue": "220",
                                 "bgColor": "#ffffff",
                                 "isOccupied": "false",
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
    } else if (tableNumber === '80' && topValue === '220' && leftValue === '220' && height === '90') {
            db.thalerhofTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.topValue": "250",
                        "tables.$.height": "60",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });

            db.thalerhofTables.update(
                {
                    department: departmentValue,
                }, {
                    $push: {
                        tables: {
                            $each: [{
                                "arrayIndex": "22",
                                "department": "Panorama",
                                "number": "82",
                                "topValue": "160",
                                "leftValue": "220",
                                "bgColor": "#ffffff",
                                "isOccupied": "false",
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
        } else if (tableNumber === '81' && topValue === '190' && leftValue === '220' && height === '60') {
            db.thalerhofTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.topValue": "220",
                        "tables.$.height": "30",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.thalerhofTables.update(
                {
                    department: departmentValue,
                }, {
                    $push: {
                        tables: {
                            $each: [{
                                "arrayIndex": "22",
                                "department": "Panorama",
                                "number": "82",
                                "topValue": "160",
                                "leftValue": "220",
                                "bgColor": "#ffffff",
                                "isOccupied": "false",
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
         } else if (tableNumber === '83' && topValue === '160' && leftValue === '60' && height === '60') {
             db.thalerhofTables.update(
                 {
                     department: departmentValue,
                     "tables.number": tableNumber
                 },
                 {
                     $set: {
                         "tables.$.topValue": "160",
                         "tables.$.height": "30",
                     }
                 }, function (err, tables) {
                     if (err) {
                         console.log("Error");
                     }
                     console.log("moveTable Update successful");
                 });
             db.thalerhofTables.update(
                 {
                     department: departmentValue,
                 }, {
                     $push: {
                         tables: {
                             $each: [{
                                 "arrayIndex": "24",
                                 "department": "Panorama",
                                 "number": "84",
                                 "topValue": "220",
                                 "leftValue": "60",
                                 "bgColor": "#ffffff",
                                 "isOccupied": "false",
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
         } else if (tableNumber === '83' && topValue === '160' && leftValue === '60' && height === '90') {
             db.thalerhofTables.update(
                 {
                     department: departmentValue,
                     "tables.number": tableNumber
                 },
                 {
                     $set: {
                         "tables.$.topValue": "160",
                         "tables.$.height": "60",
                     }
                 }, function (err, tables) {
                     if (err) {
                         console.log("Error");
                     }
                     console.log("moveTable Update successful");
                 });
             db.thalerhofTables.update(
                 {
                     department: departmentValue,
                 }, {
                     $push: {
                         tables: {
                             $each: [{
                                 "arrayIndex": "25",
                                 "department": "Panorama",
                                 "number": "85",
                                 "topValue": "280",
                                 "leftValue": "60",
                                 "bgColor": "#ffffff",
                                 "isOccupied": "false",
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
        } else if (tableNumber === '83' && topValue === '160' && leftValue === '60' && height === '120') {
            db.thalerhofTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.topValue": "160",
                        "tables.$.height": "90",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });


            db.thalerhofTables.update(
                {
                    department: departmentValue,
                }, {
                    $push: {
                        tables: {
                            $each: [{
                                "arrayIndex": "26",
                                "department": "Panorama",
                                "number": "86",
                                "topValue": "340",
                                "leftValue": "60",
                                "bgColor": "#ffffff",
                                "isOccupied": "false",
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
         } else if (tableNumber === '84' && topValue === '220' && leftValue === '60' && height === '60') {
             db.thalerhofTables.update(
                 {
                     department: departmentValue,
                     "tables.number": tableNumber
                 },
                 {
                     $set: {
                         "tables.$.height": "30",
                     }
                 }, function (err, tables) {
                     if (err) {
                         console.log("Error");
                     }
                     console.log("moveTable Update successful");
                 });
             db.thalerhofTables.update(
                 {
                     department: departmentValue,
                 }, {
                     $push: {
                         tables: {
                             $each: [{
                                 "arrayIndex": "25",
                                 "department": "Panorama",
                                 "number": "85",
                                 "topValue": "280",
                                 "leftValue": "60",
                                 "bgColor": "#ffffff",
                                 "isOccupied": "false",
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
         } else if (tableNumber === '84' && topValue === '220' && leftValue === '60' && height === '90') {
             db.thalerhofTables.update(
                 {
                     department: departmentValue,
                     "tables.number": tableNumber
                 },
                 {
                     $set: {
                         "tables.$.height": "60",
                     }
                 }, function (err, tables) {
                     if (err) {
                         console.log("Error");
                     }
                     console.log("moveTable Update successful");
                 });
             db.thalerhofTables.update(
                 {
                     department: departmentValue,
                 }, {
                     $push: {
                         tables: {
                             $each: [{
                                 "arrayIndex": "26",
                                 "department": "Panorama",
                                 "number": "86",
                                 "topValue": "340",
                                 "leftValue": "60",
                                 "bgColor": "#ffffff",
                                 "isOccupied": "false",
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
        } else if (tableNumber === '84' && topValue === '220' && leftValue === '60' && height === '120') {
            db.thalerhofTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "90",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });


            db.thalerhofTables.update(
                {
                    department: departmentValue,
                }, {
                    $push: {
                        tables: {
                            $each: [{
                                "arrayIndex": "27",
                                "department": "Panorama",
                                "number": "87",
                                "topValue": "400",
                                "leftValue": "60",
                                "bgColor": "#ffffff",
                                "isOccupied": "false",
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
         } else if (tableNumber === '85' && topValue === '280' && leftValue === '60' && height === '60') {
             db.thalerhofTables.update(
                 {
                     department: departmentValue,
                     "tables.number": tableNumber
                 },
                 {
                     $set: {
                         "tables.$.height": "30",
                     }
                 }, function (err, tables) {
                     if (err) {
                         console.log("Error");
                     }
                     console.log("moveTable Update successful");
                 });
             db.thalerhofTables.update(
                 {
                     department: departmentValue,
                 }, {
                     $push: {
                         tables: {
                             $each: [{
                                 "arrayIndex": "26",
                                 "department": "Panorama",
                                 "number": "86",
                                 "topValue": "340",
                                 "leftValue": "60",
                                 "bgColor": "#ffffff",
                                 "isOccupied": "false",
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
         } else if (tableNumber === '85' && topValue === '280' && leftValue === '60' && height === '90') {
             db.thalerhofTables.update(
                 {
                     department: departmentValue,
                     "tables.number": tableNumber
                 },
                 {
                     $set: {
                         "tables.$.height": "60",
                     }
                 }, function (err, tables) {
                     if (err) {
                         console.log("Error");
                     }
                     console.log("moveTable Update successful");
                 });
             db.thalerhofTables.update(
                 {
                     department: departmentValue,
                 }, {
                     $push: {
                         tables: {
                             $each: [{
                                 "arrayIndex": "27",
                                 "department": "Panorama",
                                 "number": "87",
                                 "topValue": "400",
                                 "leftValue": "60",
                                 "bgColor": "#ffffff",
                                 "isOccupied": "false",
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
        } else if (tableNumber === '85' && topValue === '280' && leftValue === '60' && height === '120') {
            db.thalerhofTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "90",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.thalerhofTables.update(
                {
                    department: departmentValue,
                }, {
                    $push: {
                        tables: {
                            $each: [{
                                "arrayIndex": "28",
                                "department": "Panorama",
                                "number": "88",
                                "topValue": "460",
                                "leftValue": "60",
                                "bgColor": "#ffffff",
                                "isOccupied": "false",
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
         } else if (tableNumber === '86' && topValue === '340' && leftValue === '60' && height === '60') {
             db.thalerhofTables.update(
                 {
                     department: departmentValue,
                     "tables.number": tableNumber
                 },
                 {
                     $set: {
                         "tables.$.height": "30",
                     }
                 }, function (err, tables) {
                     if (err) {
                         console.log("Error");
                     }
                     console.log("moveTable Update successful");
                 });
             db.thalerhofTables.update(
                 {
                     department: departmentValue,
                 }, {
                     $push: {
                         tables: {
                             $each: [{
                                 "arrayIndex": "27",
                                 "department": "Panorama",
                                 "number": "87",
                                 "topValue": "400",
                                 "leftValue": "60",
                                 "bgColor": "#ffffff",
                                 "isOccupied": "false",
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

         } else if (tableNumber === '86' && topValue === '340' && leftValue === '60' && height === '90') {
             db.thalerhofTables.update(
                 {
                     department: departmentValue,
                     "tables.number": tableNumber
                 },
                 {
                     $set: {
                         "tables.$.height": "60",
                     }
                 }, function (err, tables) {
                     if (err) {
                         console.log("Error");
                     }
                     console.log("moveTable Update successful");
                 });
             db.thalerhofTables.update(
                 {
                     department: departmentValue,
                 }, {
                     $push: {
                         tables: {
                             $each: [{
                                 "arrayIndex": "28",
                                 "department": "Panorama",
                                 "number": "88",
                                 "topValue": "460",
                                 "leftValue": "60",
                                 "bgColor": "#ffffff",
                                 "isOccupied": "false",
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
        } else if (tableNumber === '86' && topValue === '340' && leftValue === '60' && height === '120') {
            db.thalerhofTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "90",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });

            db.thalerhofTables.update(
                {
                    department: departmentValue,
                }, {
                    $push: {
                        tables: {
                            $each: [{
                                "arrayIndex": "29",
                                "department": "Panorama",
                                "number": "89",
                                "topValue": "520",
                                "leftValue": "60",
                                "bgColor": "#ffffff",
                                "isOccupied": "false",
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
         } else if (tableNumber === '87' && topValue === '400' && leftValue === '60' && height === '60') {
             db.thalerhofTables.update(
                 {
                     department: departmentValue,
                     "tables.number": tableNumber
                 },
                 {
                     $set: {
                         "tables.$.height": "30",
                     }
                 }, function (err, tables) {
                     if (err) {
                         console.log("Error");
                     }
                     console.log("moveTable Update successful");
                 });
             db.thalerhofTables.update(
                 {
                     department: departmentValue,
                 }, {
                     $push: {
                         tables: {
                             $each: [{
                                 "arrayIndex": "28",
                                 "department": "Panorama",
                                 "number": "88",
                                 "topValue": "460",
                                 "leftValue": "60",
                                 "bgColor": "#ffffff",
                                 "isOccupied": "false",
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
        } else if (tableNumber === '87' && topValue === '400' && leftValue === '60' && height === '90') {
            db.thalerhofTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "60",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });

            db.thalerhofTables.update(
                {
                    department: departmentValue,
                }, {
                    $push: {
                        tables: {
                            $each: [{
                                "arrayIndex": "29",
                                "department": "Panorama",
                                "number": "89",
                                "topValue": "520",
                                "leftValue": "60",
                                "bgColor": "#ffffff",
                                "isOccupied": "false",
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
        } else if (tableNumber === '88' && topValue === '460' && leftValue === '60' && height === '60') {
            db.thalerhofTables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.height": "30",
                    }
                }, function (err, tables) {
                    if (err) {
                        console.log("Error");
                    }
                    console.log("moveTable Update successful");
                });
            db.thalerhofTables.update(
                {
                    department: departmentValue,
                }, {
                    $push: {
                        tables: {
                            $each: [{
                                "arrayIndex": "29",
                                "department": "Panorama",
                                "number": "89",
                                "topValue": "520",
                                "leftValue": "60",
                                "bgColor": "#ffffff",
                                "isOccupied": "false",
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
        }
    }
};