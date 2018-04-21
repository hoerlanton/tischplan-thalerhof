"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var NavigationComponent = (function () {
    function NavigationComponent(mainService, http, _flashMessagesService, authService, router) {
        this.mainService = mainService;
        this.http = http;
        this._flashMessagesService = _flashMessagesService;
        this.authService = authService;
        this.router = router;
        this.filesToUpload = [];
        this.newInformationElements = [];
        this.newInformationEmployees = [];
        this.tablesTempDeparture = [];
        this.umsetzenExport = new core_1.EventEmitter();
        this.departuresExportExport = new core_1.EventEmitter();
        this.termExport = new core_1.EventEmitter();
        this.getTablesExport = new core_1.EventEmitter();
        this.reloadLists = new core_1.EventEmitter();
        this.transformExport = new core_1.EventEmitter();
        this.date = [];
        this.parts = [];
        this.parsedDate = [];
        this.tableInformation = [];
        this.printToCart1Button = "ffffff";
        this.printToCart2Button = "ffffff";
        this.printToCart3Button = "ffffff";
        this.departureAbortButton = "ffffff";
        this.departureExecuteButton = "ff0000";
        this.departureExecuteTomorrowButton = "ff0000";
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent.prototype.delete = function (informationElement, j, event) {
        var _this = this;
        console.log(informationElement);
        console.log(j);
        event.stopPropagation();
        this.mainService.deleteInformationElement(informationElement)
            .subscribe(function (informationElement) {
            _this.newInformationElements.splice(j, 1);
        });
    };
    NavigationComponent.prototype.printToCart1 = function (printSectionId1) {
        var popupWinindow;
        var innerContents = document.getElementById(printSectionId1).innerHTML;
        popupWinindow = window.open('', '_blank', 'width=600,height=700,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
        popupWinindow.document.open();
        popupWinindow.document.write('<html><head><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">\n' +
            '<script src="node_modules/core-js/client/shim.min.js"></script>\n' +
            '<script src="<your-libs-directory>/object-assign.min.js"></script></head><body onload="window.print()">' + innerContents + '</html>');
        popupWinindow.document.close();
    };
    NavigationComponent.prototype.printToCart2 = function (printSectionId2) {
        var popupWinindow;
        var innerContents = document.getElementById(printSectionId2).innerHTML;
        popupWinindow = window.open('', '_blank', 'width=1000,height=1000,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
        popupWinindow.document.open();
        popupWinindow.document.write('<html><head><style> .row .t1 { width: 30px; height: 60px; position: absolute; border: solid 1px #0a7a74; } .row .t2 { width: 30px; height: 60px; position: absolute; border: solid 1px #0a7a74; } .row .t3 { width: 30px; height: 60px; position: absolute; border: solid 1px #0a7a74; } .row .t4 { width: 30px; height: 60px; position: absolute; border: solid 1px #0a7a74; } .row .t5 { width: 30px; height: 80px; border: solid 1px #0a7a74; position: absolute; } .row .t6 { width: 30px; height: 80px; border: solid 1px #0a7a74; position: absolute; } .row .t7 { width: 30px; height: 80px; border: solid 1px #0a7a74; position: absolute; } .row .t8 { width: 100px; height: 90px; border: solid 1px #0a7a74; position: absolute; } .row .t9 { width: 40px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t10 { width: 40px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t11 { width: 30px; height: 80px; border: solid 1px #0a7a74; position: absolute; } .row .t12 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t13 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t14 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t15 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t16 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t17 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t18 { position: absolute; } .row .t19 { position: absolute; }.row .t20 { position: absolute; } .row .t21 { position: absolute; }  .row .t22 { position: absolute; } .row .t23 { position: absolute; } .row .t24 { position: absolute; } .row .t40 { width: 60px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t41 { width: 60px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t42 { width: 80px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t43 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t44 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t45 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t46 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t47 { width: 80px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t48 { width: 60px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t49 { width: 60px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t50 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t51 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t52 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t53 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t54 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t55 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t56 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t57 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t58 { width: 60px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t59 { width: 60px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t60 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t61 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t62 { width: 30px; height: 60px; position: absolute; border: solid 1px #0a7a74; } .row .t63 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t64 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t65 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t66 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t67 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t68 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t69 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t70 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t71 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t72 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t73 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t74 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t75 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t76 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t77 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t78 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t79 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t80 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t81 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t82 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t83 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t84 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t85 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t86 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t87 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t88 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t89 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t501 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t502 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t503 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; transform: rotate(45deg); } .row .t504 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; transform: rotate(45deg); } .row .t505 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; transform: rotate(45deg); } .row .t506 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; transform: rotate(45deg); } .row .t507 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; border-radius: 50%; } .row .t508 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; border-radius: 50%; } .row .t509 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; border-radius: 50%; } .row .t510 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; border-radius: 50%; } .row .t511 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; border-radius: 50%; } .row .t512 { width: 80px; height: 45px; border: solid 1px #0a7a74; position: absolute; } .row .t513 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; border-radius: 50%; } .row .t514 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; border-radius: 50%; } .row .t515 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; transform: rotate(45deg); } .row .t516 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; transform: rotate(45deg); } .row .t517 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; transform: rotate(10deg); } .row .t518 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; transform: rotate(30deg); } .row .t519 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; transform: rotate(50deg); } .row .t520 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; transform: rotate(70deg); } .row .t521 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; transform: rotate(90deg); } .row .t522 { width: 80px; height: 45px; border: solid 1px #0a7a74; position: absolute; } .row .t523 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; transform: rotate(45deg); } .row .t524 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; transform: rotate(45deg); } .row .t525 { width: 40px; height: 40px; position: absolute; transform: rotate(45deg); } </style></head><body onload="window.print()">' + innerContents + '</html>');
        popupWinindow.document.close();
    };
    NavigationComponent.prototype.printToCart3 = function (data) {
        console.log('This method is calld from the parent component via ViewChild');
        var popupWinindow;
        var innerContents = document.getElementById(data).innerHTML;
        console.log(innerContents);
        popupWinindow = window.open('', '_blank', 'width=1000,height=1000,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
        popupWinindow.document.open();
        popupWinindow.document.write('<html><head><style></style></head><body onload="window.print()">' + innerContents + '</html>');
        popupWinindow.document.close();
    };
    NavigationComponent.prototype.none = function (event) {
        event.stopPropagation();
    };
    NavigationComponent.prototype.brandClick = function () {
        window.location.reload();
    };
    NavigationComponent.prototype.fileChangeEvent = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
    };
    NavigationComponent.prototype.upload = function () {
        var _this = this;
        var formData = new FormData();
        var files = this.filesToUpload;
        formData.append('uploads[]', files[0], files[0]['name']);
        this.http.post('/upload', formData)
            .map(function (files) { return files.json(); }).map(function (res) {
            // 1st parameter is a flash message text
            // 2nd parameter is optional. You can pass object with options.
            if (res[0].originalname) {
                _this._flashMessagesService.show('Erfolgreich ' + JSON.stringify(res[0].originalname) + " hochgeladen", {
                    cssClass: 'alert-success',
                    timeout: 10000
                });
            }
            else {
                _this._flashMessagesService.show(JSON.stringify(res), {
                    cssClass: 'alert-danger',
                    timeout: 10000
                });
            }
        })
            .subscribe(function (files) { return console.log("files", files); });
        setTimeout(function () {
            _this.reloadLists.emit();
        }, 3000);
    };
    NavigationComponent.prototype.dispenseIfDepartureToday = function () {
        this.dateTodayGenerated = new Date(); //Today
        this.dispenseIfDeparture();
    };
    NavigationComponent.prototype.dispenseIfDepartureTomorrow = function () {
        console.log("dispenseIfDepartureTomorrow");
        this.dateTodayGenerated = new Date(new Date().getTime() + 24 * 60 * 60 * 1000); //Tomorrow
        this.dispenseIfDeparture();
        console.log(this.dateTodayGenerated);
    };
    NavigationComponent.prototype.dispenseIfDeparture = function () {
        var _this = this;
        var tables = this.tablesTempDeparture;
        var departuresExport = [];
        var b = 0;
        console.log('dispenseIfDeparture');
        //Tomorrow new Date().getTime() + 24 * 60 * 60 * 1000
        for (var a = 0; a < tables.length; a++) {
            for (var b_1 = 0; b_1 < tables[a].tables.length; b_1++) {
                if (tables[a].tables[b_1].groups) {
                    var departuresExportObject = {
                        table: tables[a].tables[b_1],
                        group: [],
                        date: String(this.dateTodayGenerated).substring(0, 15)
                    };
                    for (var c = 0; c < tables[a].tables[b_1].groups.length; c++) {
                        if (tables[a].tables[b_1].groups[c].departureValue) {
                            this.parts[0] = tables[a].tables[b_1].groups[c].departureValue.match(/(\d+)/g);
                        }
                        else {
                            this.parts[0] = "undefined";
                        }
                        if (this.parts[0]) {
                            this.date[0] = new Date(2018, this.parts[0][1] - 1, this.parts[0][0]);
                            this.parsedDate[0] = String(this.date[0]).substring(0, 15);
                        }
                        var dateToday = String(this.dateTodayGenerated).substring(0, 15);
                        if (dateToday.indexOf(this.parsedDate[0]) !== -1 || tables[a].tables[b_1].groups[c].newTraceText) {
                            departuresExportObject.group.push(c);
                        }
                        if (c === (tables[a].tables[b_1].groups.length - 1) && (typeof departuresExportObject.group !== 'undefined' && departuresExportObject.group.length > 0)) {
                            console.log("EEEEMMMMMMIIIIIIITTT");
                            departuresExport.push(departuresExportObject);
                        }
                    }
                }
            }
        }
        console.log(departuresExport);
        setTimeout(function () {
            _this.departuresExportExport.emit({ departuresExport: departuresExport, b: b });
        }, 100);
        this.getTablesExport.emit();
    };
    NavigationComponent.prototype.umsetzen = function () {
        var _this = this;
        event.preventDefault();
        console.log("UMSETZTEN CALLED");
        var quellTable = this.quellTable;
        var zielTable = this.zielTable;
        this.tableInformation = [];
        //let targetTable = this.quellTable;
        //let quellTableNumber = this.quellTable;
        //let targetTableNumber = Number(this.quellTable.zielTable);
        //let quellTableNumberNumber = Number(this.quellTable.quellTable);
        console.log('targetTable' + zielTable);
        console.log('quellTableNumber' + quellTable);
        var tableToMove = { department: "Empty", number: "0", targetTable: "0", targetDepartment: "Empty" };
        var j = 0;
        if (Number(this.quellTable) >= 40 && Number(this.quellTable) <= 59) {
            tableToMove.department = "Sonnberg-Zirbn";
            j = 0;
        }
        else if (Number(this.quellTable) >= 60 && Number(this.quellTable) <= 89) {
            tableToMove.department = "Panorama";
            j = 1;
        }
        else if (Number(this.quellTable) >= 1 && Number(this.quellTable) <= 24) {
            tableToMove.department = "Restaurant";
            j = 3;
        }
        else if (Number(this.quellTable) >= 501 && Number(this.quellTable) <= 524) {
            tableToMove.department = "Wintergarten";
            j = 2;
        }
        if (Number(this.zielTable) >= 40 && Number(this.zielTable) <= 59) {
            tableToMove.targetDepartment = "Sonnberg-Zirbn";
        }
        else if (Number(this.zielTable) >= 60 && Number(this.zielTable) <= 89) {
            tableToMove.targetDepartment = "Panorama";
        }
        else if (Number(this.zielTable) >= 1 && Number(this.zielTable) <= 24) {
            tableToMove.targetDepartment = "Restaurant";
        }
        else if (Number(this.zielTable) >= 501 && Number(this.zielTable) <= 524) {
            tableToMove.targetDepartment = "Wintergarten";
        }
        var indexZiel = 0;
        var indexQuell = 0;
        tableToMove.number = this.quellTable;
        tableToMove.targetTable = this.zielTable;
        console.log(tableToMove);
        this.mainService.getTables()
            .subscribe(function (tables) {
            for (var a = 0; a < tables.length; a++) {
                for (var b = 0; b < tables[a].tables.length; b++) {
                    if (tables[a].department === tableToMove.department) {
                        console.log("YEEEES BEFORE");
                        if (tables[a].tables[b].number === tableToMove.number) {
                            console.log("YEEEEEEEESSSSS AFFFTEEEER!!!");
                            console.log(tables[a].tables[b]);
                            _this.tableInformation.push(tables[a].tables[b]);
                            console.log(_this.tableInformation);
                            _this.tableInformation.push(tableToMove);
                            console.log(_this.tableInformation);
                        }
                    }
                }
            }
            for (var a = 0; a < tables.length; a++) {
                for (var b = 0; b < tables[a].tables.length; b++) {
                    if (tables[a].department === tableToMove.targetDepartment) {
                        if (tables[a].tables[b].number === tableToMove.targetTable) {
                            indexZiel = b;
                        }
                    }
                }
            }
            for (var a = 0; a < tables.length; a++) {
                for (var b = 0; b < tables[a].tables.length; b++) {
                    if (tables[a].department === tableToMove.department) {
                        if (tables[a].tables[b].number === tableToMove.number) {
                            indexQuell = b;
                        }
                    }
                }
            }
            console.log("this.tableInformation IIIIIIIII");
            var tableInformationExport = _this.tableInformation;
            _this.umsetzenExport.emit({ tableToMove: tableToMove, indexZiel: indexZiel, indexQuell: indexQuell, tableInformationExport: tableInformationExport });
        });
    };
    NavigationComponent.prototype.keyDownFunction = function (event) {
        if (event.keyCode == 13) {
            //alert('you just clicked enter');
            this.termExport.emit(this.term);
        }
    };
    NavigationComponent.prototype.onKey = function (event) {
        this.term = event.target.value;
        console.log(this.term);
        this.termExport.emit(this.term);
        this.transformExport.emit(this.term);
    };
    NavigationComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        //this._flashMessagesService.show('You are logged out', {
        //  cssClass: 'alert-success',
        //  timeout: 3000
        //});
        this.router.navigate(['/login']);
        return false;
    };
    NavigationComponent.prototype.mouseEnterprintToCart1Button = function () {
        //console.log("mouse enter : ");
        if (this.printToCart1Button === "ffffff") {
            //console.log('mouse enter1 :');
            this.printToCart1Button = "cfcfcf";
        }
    };
    NavigationComponent.prototype.mouseLeaveprintToCart1Button = function () {
        if (this.printToCart1Button === "cfcfcf") {
            //console.log('mouse leave1 :');
            this.printToCart1Button = "ffffff";
        }
    };
    NavigationComponent.prototype.mouseEnterprintToCart2Button = function () {
        //console.log("mouse enter : ");
        if (this.printToCart2Button === "ffffff") {
            //console.log('mouse enter1 :');
            this.printToCart2Button = "cfcfcf";
        }
    };
    NavigationComponent.prototype.mouseLeaveprintToCart2Button = function () {
        if (this.printToCart2Button === "cfcfcf") {
            //console.log('mouse leave1 :');
            this.printToCart2Button = "ffffff";
        }
    };
    NavigationComponent.prototype.mouseEnterprintToCart3Button = function () {
        //console.log("mouse enter : ");
        if (this.printToCart3Button === "ffffff") {
            //console.log('mouse enter1 :');
            this.printToCart3Button = "cfcfcf";
        }
    };
    NavigationComponent.prototype.mouseLeaveprintToCart3Button = function () {
        if (this.printToCart3Button === "cfcfcf") {
            //console.log('mouse leave1 :');
            this.printToCart3Button = "ffffff";
        }
    };
    NavigationComponent.prototype.mouseEnterDepartureExecuteButton = function () {
        //console.log("mouse enter : ");
        if (this.departureExecuteButton === "ff0000") {
            //console.log('mouse enter1 :');
            this.departureExecuteButton = "a00000";
        }
    };
    NavigationComponent.prototype.mouseLeaveDepartureExecuteButton = function () {
        if (this.departureExecuteButton === "a00000") {
            //console.log('mouse leave1 :');
            this.departureExecuteButton = "ff0000";
        }
    };
    NavigationComponent.prototype.mouseEnterDepartureTomorrowExecuteButton = function () {
        //console.log("mouse enter : ");
        if (this.departureExecuteTomorrowButton === "ff0000") {
            //console.log('mouse enter1 :');
            this.departureExecuteTomorrowButton = "a00000";
        }
    };
    NavigationComponent.prototype.mouseLeaveDepartureTomorrowExecuteButton = function () {
        if (this.departureExecuteTomorrowButton === "a00000") {
            //console.log('mouse leave1 :');
            this.departureExecuteTomorrowButton = "ff0000";
        }
    };
    NavigationComponent.prototype.mouseEnterDepartureAbortButton = function () {
        //console.log("mouse enter : ");
        if (this.departureAbortButton === "ffffff") {
            //console.log('mouse enter1 :');
            this.departureAbortButton = "cfcfcf";
        }
    };
    NavigationComponent.prototype.mouseLeaveDepartureAbortButton = function () {
        if (this.departureAbortButton === "cfcfcf") {
            //console.log('mouse leave1 :');
            this.departureAbortButton = "ffffff";
        }
    };
    return NavigationComponent;
}());
__decorate([
    core_1.Input('newInformationElements')
], NavigationComponent.prototype, "newInformationElements", void 0);
__decorate([
    core_1.Input('newInformationEmployees')
], NavigationComponent.prototype, "newInformationEmployees", void 0);
__decorate([
    core_1.Input('tablesOccupied')
], NavigationComponent.prototype, "tablesOccupied", void 0);
__decorate([
    core_1.Input('tablesTempDeparture')
], NavigationComponent.prototype, "tablesTempDeparture", void 0);
__decorate([
    core_1.Output()
], NavigationComponent.prototype, "umsetzenExport", void 0);
__decorate([
    core_1.Output()
], NavigationComponent.prototype, "departuresExportExport", void 0);
__decorate([
    core_1.Output()
], NavigationComponent.prototype, "termExport", void 0);
__decorate([
    core_1.Output()
], NavigationComponent.prototype, "getTablesExport", void 0);
__decorate([
    core_1.Output()
], NavigationComponent.prototype, "reloadLists", void 0);
__decorate([
    core_1.Output()
], NavigationComponent.prototype, "transformExport", void 0);
NavigationComponent = __decorate([
    core_1.Component({
        selector: 'app-navigation',
        templateUrl: 'navigation.component.html',
        styleUrls: ['navigation.component.css']
    })
], NavigationComponent);
exports.NavigationComponent = NavigationComponent;
