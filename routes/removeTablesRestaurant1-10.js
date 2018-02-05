module.exports = {
    removeTable: function (db, tableNumber, departmentValue, topValue, leftValue, height, width) {
     if (tableNumber === '1' && topValue === '500' && leftValue === '30' && width === '90') {
            db.tables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.width": "60",
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
                             "department": "Restaurant",
                             "number": "2",
                             "topValue": "500",
                             "leftValue": "120",
                             "bgColor": "#b7b7b7",
                             "isBesetzt": "true",
                             "placeholder": "true",
                             "border": "solid 3px #f3efe4",
                             "width": "30",
                             "height": "50",
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
        } else if (tableNumber === '1' && topValue === '500' && leftValue === '30' && width === '120') {
            db.tables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.width": "90",
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
                             "arrayIndex": "2",
                             "department": "Restaurant",
                             "number": "3",
                             "topValue": "500",
                             "leftValue": "180",
                             "bgColor": "#b7b7b7",
                             "isBesetzt": "true",
                             "placeholder": "true",
                             "border": "solid 3px #f3efe4",
                             "width": "30",
                             "height": "50",
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
    } else if (tableNumber === '1' && topValue === '500' && leftValue === '30' && width === '150') {
            db.tables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.width": "120",
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
                                "department": "Restaurant",
                                "number": "4",
                                "topValue": "500",
                                "leftValue": "240",
                                "bgColor": "#b7b7b7",
                                "isBesetzt": "true",
                                "placeholder": "true",
                                "border": "solid 3px #f3efe4",
                                "width": "30",
                                "height": "50",
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
     } else if (tableNumber === '2' && topValue === '500' && leftValue === '120' && width === '60') {
         db.tables.update(
             {
                 department: departmentValue,
                 "tables.number": tableNumber
             },
             {
                 $set: {
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
                             "arrayIndex": "2",
                             "department": "Restaurant",
                             "number": "3",
                             "topValue": "500",
                             "leftValue": "180",
                             "bgColor": "#b7b7b7",
                             "isBesetzt": "true",
                             "placeholder": "true",
                             "border": "solid 3px #f3efe4",
                             "width": "30",
                             "height": "50",
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
     } else if (tableNumber === '2' && topValue === '500' && leftValue === '120' && width === '90') {
         db.tables.update(
             {
                 department: departmentValue,
                 "tables.number": tableNumber
             },
             {
                 $set: {
                     "tables.$.width": "60",
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
                             "department": "Restaurant",
                             "number": "4",
                             "topValue": "500",
                             "leftValue": "240",
                             "bgColor": "#b7b7b7",
                             "isBesetzt": "true",
                             "placeholder": "true",
                             "border": "solid 3px #f3efe4",
                             "width": "30",
                             "height": "50",
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
        } else if (tableNumber === '2' && topValue === '500' && leftValue === '120' && width === '120') {
            db.tables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.width": "90",
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
                                "arrayIndex": "4",
                                "department": "Restaurant",
                                "number": "5",
                                "topValue": "500",
                                "leftValue": "300",
                                "bgColor": "#b7b7b7",
                                "isBesetzt": "true",
                                "placeholder": "true",
                                "border": "solid 3px #f3efe4",
                                "width": "30",
                                "height": "50",
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

     } else if (tableNumber === '3' && topValue === '500' && leftValue === '180' && width === '60') {
         db.tables.update(
             {
                 department: departmentValue,
                 "tables.number": tableNumber
             },
             {
                 $set: {
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
                             "arrayIndex": "3",
                             "department": "Restaurant",
                             "number": "4",
                             "topValue": "500",
                             "leftValue": "240",
                             "bgColor": "#b7b7b7",
                             "isBesetzt": "true",
                             "placeholder": "true",
                             "border": "solid 3px #f3efe4",
                             "width": "30",
                             "height": "50",
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
     } else if (tableNumber === '3' && topValue === '500' && leftValue === '180' && width === '90') {
         db.tables.update(
             {
                 department: departmentValue,
                 "tables.number": tableNumber
             },
             {
                 $set: {
                     "tables.$.width": "60",
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
                             "arrayIndex": "4",
                             "department": "Restaurant",
                             "number": "5",
                             "topValue": "500",
                             "leftValue": "300",
                             "bgColor": "#b7b7b7",
                             "isBesetzt": "true",
                             "placeholder": "true",
                             "border": "solid 3px #f3efe4",
                             "width": "30",
                             "height": "50",
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
        } else if (tableNumber === '3' && topValue === '500' && leftValue === '180' && width === '120') {
            db.tables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.width": "90",
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
                                "department": "Restaurant",
                                "number": "6",
                                "topValue": "500",
                                "leftValue": "360",
                                "bgColor": "#b7b7b7",
                                "isBesetzt": "true",
                                "placeholder": "true",
                                "border": "solid 3px #f3efe4",
                                "width": "30",
                                "height": "50",
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
     } else if (tableNumber === '4' && topValue === '500' && leftValue === '240' && width === '60') {
         db.tables.update(
             {
                 department: departmentValue,
                 "tables.number": tableNumber
             },
             {
                 $set: {
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
                             "arrayIndex": "4",
                             "department": "Restaurant",
                             "number": "5",
                             "topValue": "500",
                             "leftValue": "300",
                             "bgColor": "#b7b7b7",
                             "isBesetzt": "true",
                             "placeholder": "true",
                             "border": "solid 3px #f3efe4",
                             "width": "30",
                             "height": "50",
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
     } else if (tableNumber === '4' && topValue === '500' && leftValue === '240' && width === '90') {
         db.tables.update(
             {
                 department: departmentValue,
                 "tables.number": tableNumber
             },
             {
                 $set: {
                     "tables.$.width": "60",
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
                             "department": "Restaurant",
                             "number": "6",
                             "topValue": "500",
                             "leftValue": "360",
                             "bgColor": "#b7b7b7",
                             "isBesetzt": "true",
                             "placeholder": "true",
                             "border": "solid 3px #f3efe4",
                             "width": "30",
                             "height": "50",
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
        } else if (tableNumber === '4' && topValue === '500' && leftValue === '240' && width === '120') {
            db.tables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.width": "90",
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
                                "arrayIndex": "6",
                                "department": "Restaurant",
                                "number": "7",
                                "topValue": "500",
                                "leftValue": "420",
                                "bgColor": "#b7b7b7",
                                "isBesetzt": "true",
                                "placeholder": "true",
                                "border": "solid 3px #f3efe4",
                                "width": "60",
                                "height": "50",
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
     } else if (tableNumber === '5' && topValue === '500' && leftValue === '300' && width === '60') {
         db.tables.update(
             {
                 department: departmentValue,
                 "tables.number": tableNumber
             },
             {
                 $set: {
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
                             "arrayIndex": "5",
                             "department": "Restaurant",
                             "number": "6",
                             "topValue": "500",
                             "leftValue": "360",
                             "bgColor": "#b7b7b7",
                             "isBesetzt": "true",
                             "placeholder": "true",
                             "border": "solid 3px #f3efe4",
                             "width": "30",
                             "height": "50",
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
        } else if (tableNumber === '5' && topValue === '500' && leftValue === '300' && width === '90') {
            db.tables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
                        "tables.$.width": "60",
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
                                "arrayIndex": "6",
                                "department": "Restaurant",
                                "number": "7",
                                "topValue": "500",
                                "leftValue": "420",
                                "bgColor": "#b7b7b7",
                                "isBesetzt": "true",
                                "placeholder": "true",
                                "border": "solid 3px #f3efe4",
                                "width": "60",
                                "height": "50",
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
        } else if (tableNumber === '6' && topValue === '500' && leftValue === '360' && width === '90') {
            db.tables.update(
                {
                    department: departmentValue,
                    "tables.number": tableNumber
                },
                {
                    $set: {
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
                                "arrayIndex": "6",
                                "department": "Restaurant",
                                "number": "7",
                                "topValue": "500",
                                "leftValue": "420",
                                "bgColor": "#b7b7b7",
                                "isBesetzt": "true",
                                "placeholder": "true",
                                "border": "solid 3px #f3efe4",
                                "width": "60",
                                "height": "50",
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
        }
    }
};