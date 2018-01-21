"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var print_component_1 = require("./print/print.component");
var departmentmenu_component_1 = require("./departmentmenu/departmentmenu.component");
var form_component_1 = require("./form/form.component");
var im_haus_liste_component_1 = require("./im-haus-liste/im-haus-liste.component");
var navigation_component_1 = require("./navigation/navigation.component");
var tableplan_component_1 = require("./tableplan/tableplan.component");
var anreise_liste_component_1 = require("./anreise-liste/anreise-liste.component");
var traces_liste_component_1 = require("./traces-liste/traces-liste.component");
var upload_component_1 = require("./upload/upload.component");
var departments_component_1 = require("./departments/departments.component");
var TischplanComponent = (function () {
    function TischplanComponent(tischplanService, dragulaService) {
        var _this = this;
        this.tischplanService = tischplanService;
        this.dragulaService = dragulaService;
        this.topValues = [];
        this.tablesTemp = [];
        this.tempTablesArray = [];
        this.tempTablesArray2 = [];
        this.tempTablesArray1 = [];
        this.tempTablesArray3 = [];
        this.tracesListeElemente = [];
        this.tables = [];
        this.uniqueTables = [];
        this.tablesSonnbergZirbn = [];
        this.tablesPanorama = [];
        this.tablesRestaurant = [];
        this.tablesWintergarten = [];
        this.filesToUpload = [];
        this.isDropped = [];
        this.newInformationElements = [];
        this.tableNumbers = [];
        this.dateGeneratedListe = new Date();
        this.buttonBgColor1 = "0a7a74";
        this.buttonBgColor2 = "0a7a74";
        this.buttonBgColor3 = "0a7a74";
        this.buttonBgColor4 = "0a7a74";
        this.fontColor1 = "f3efe4";
        this.fontColor2 = "f3efe4";
        this.fontColor3 = "f3efe4";
        this.fontColor4 = "f3efe4";
        this.tablesOccupied = 0;
        this.backgroundColor = "ffffff";
        this.showSonnbergZirbnBool = false;
        this.showPanoramaBool = false;
        this.showRestaurantBool = false;
        this.showWintergartenBool = false;
        this.tischplanService.getImHausListe()
            .subscribe(function (imHausListeElemente) {
            if (imHausListeElemente === null) {
                return;
            }
            else {
                imHausListeElemente.sort(function (a, b) {
                    if (a.name < b.name)
                        return -1;
                    if (a.name > b.name)
                        return 1;
                    return 0;
                });
                _this.imHausListeElemente = imHausListeElemente;
                console.log(_this.imHausListeElemente);
            }
        });
        this.tischplanService.getAnreiseListe()
            .subscribe(function (anreiseListeElemente) {
            if (anreiseListeElemente === null) {
                return;
            }
            else {
                anreiseListeElemente.sort(function (a, b) {
                    if (a.name < b.name)
                        return -1;
                    if (a.name > b.name)
                        return 1;
                    return 0;
                });
                _this.anreiseListeElemente = anreiseListeElemente;
                console.log(_this.anreiseListeElemente);
            }
        });
        this.tischplanService.getInformationElements()
            .subscribe(function (informationElemente) {
            if (informationElemente === null) {
                return;
            }
            else {
                _this.newInformationElements = informationElemente;
                console.log(_this.newInformationElements);
            }
        });
        this.tischplanService.getTables()
            .subscribe(function (tables) {
            if (tables === null) {
                return;
            }
            else {
                console.log("TABLES LENGTH: " + tables.length);
                tables[2].tables.sort(function (a, b) {
                    if (Number(a.number) < Number(b.number))
                        return -1;
                    if (Number(a.number) > Number(b.number))
                        return 1;
                    return 0;
                });
                var sorted = tables.sort();
                console.log('sorted:');
                console.log(sorted);
                for (var a = 0; a < tables.length; a++) {
                    if (tables[a].department === "Panorama") {
                        _this.tablesPanorama = tables[a].tables;
                    }
                    else if (tables[a].department === "Wintergarten") {
                        _this.tablesWintergarten = tables[a].tables;
                        console.log('Test' + JSON.stringify(_this.tablesWintergarten));
                    }
                    else if (tables[a].department === "Sonnberg-Zirbn") {
                        _this.tablesSonnbergZirbn = tables[a].tables;
                    }
                    else if (tables[a].department === "Restaurant") {
                        _this.tablesRestaurant = tables[a].tables;
                    }
                }
            }
            console.log(_this.tablesPanorama);
            console.log(_this.tablesWintergarten);
            console.log(_this.tablesSonnbergZirbn);
            console.log(_this.tablesRestaurant);
            _this.tables = _this.tables.concat(_this.tablesWintergarten).concat(_this.tablesRestaurant).concat(_this.tablesPanorama).concat(_this.tablesSonnbergZirbn);
            _this.printComponent.formatAzListe(tables);
        });
        this.tischplanService.getTracesListe()
            .subscribe(function (tracesListeElemente) {
            if (tracesListeElemente === null) {
                return;
            }
            else {
                tracesListeElemente.sort(function (a, b) {
                    if (a.name < b.name)
                        return -1;
                    if (a.name > b.name)
                        return 1;
                    return 0;
                });
                console.log('92' + JSON.stringify(tracesListeElemente));
                //console.log("2:" + tracesListeElemente[0].data[0]);
                //console.log(tracesListeElemente[0].data.length);
                //this.tracesListeElemente = tracesListeElemente[0].data;
                _this.tracesListeElemente = tracesListeElemente;
                //this.formatTracesListeElements(tracesListeElemente);
            }
        });
        dragulaService.drag.subscribe(function (value) {
            console.log("drag: " + value[0]);
            _this.onDrag(value.slice(1));
        });
        dragulaService.drop.subscribe(function (value) {
            console.log("drop: " + value[0]);
            _this.onDrop(value.slice(1));
        });
        dragulaService.over.subscribe(function (value) {
            console.log("over: " + value[0]);
            _this.onOver(value.slice(1));
        });
        dragulaService.out.subscribe(function (value) {
            console.log("out: " + value[0]);
            _this.onOut(value.slice(1));
        });
    }
    TischplanComponent.prototype.onDrag = function (args) {
        var e = args[0], el = args[1];
    };
    TischplanComponent.prototype.onDrop = function (args) {
        var e = args[0], el = args[1];
        //console.log("Args = ");
        var information = args[0].innerText;
        //console.log("information: " + information);
        var informationElements = information.split(/\n/);
        //console.log(informationElements);
        var informationElements2 = [];
        for (var s = 0; s < informationElements.length; s++) {
            informationElements2.push(informationElements[s].split(/:(.+)/)[1]);
            if (informationElements2[s] === undefined) {
                informationElements2[s] = informationElements[s];
            }
        }
        //console.log(informationElements2);
        var department = JSON.stringify(args[1].id);
        //console.log("departement" + department);
        var departementSubstring = department.substring(1, department.length - 1);
        //console.log("departementSubstring" + departementSubstring);
        var tableNumber = args[1].innerText;
        var numbers = tableNumber.match(/\d+/g);
        //console.log("numbers: " + numbers);
        var arrayIndex = numbers[1];
        //console.log("arrayIndex: " + arrayIndex);
        var tableNumberSubstring = "";
        //console.log("tableNumber" + tableNumber);
        tableNumberSubstring = tableNumber.toString().match(/\d+/);
        //console.log("tableNumberSubstring" + tableNumberSubstring);
        var dataString = [];
        dataString.push(information + departementSubstring + tableNumberSubstring);
        //console.log(dataString);
        this.departmentsComponent.addInformationToTable(dataString, arrayIndex);
        this.departmentsComponent.occupyTableOnDrop(dataString, arrayIndex);
        this.imHausListeComponent.updateImHausListeElement(informationElements2);
        this.anreiseListeComponent.updateAnreiseListeElement(informationElements2);
        this.tracesListeComponent.updateTracesListeElement(informationElements2);
    };
    TischplanComponent.prototype.onOver = function (args) {
        var e = args[0], el = args[1], container = args[2];
    };
    TischplanComponent.prototype.onOut = function (args) {
        var e = args[0], el = args[1], container = args[2];
    };
    TischplanComponent.prototype.ngOnInit = function () {
    };
    TischplanComponent.prototype.upload = function () {
        this.uploadComponent.upload();
    };
    TischplanComponent.prototype.fileChangeEvent = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
    };
    TischplanComponent.prototype.showWintergarten = function () {
        this.departmentmenuComponent.showWintergarten();
    };
    TischplanComponent.prototype.showRestaurant = function () {
        this.departmentmenuComponent.showRestaurant();
    };
    TischplanComponent.prototype.showSonnbergZirbn = function () {
        this.departmentmenuComponent.showWintergarten();
    };
    TischplanComponent.prototype.showPanorama = function () {
        this.departmentmenuComponent.showPanorama();
    };
    TischplanComponent.prototype.moveTable = function (table, j) {
        this.departmentsComponent.moveTable(table, j);
    };
    TischplanComponent.prototype.sendInformation = function (event) {
        this.formComponent.sendInformation(event);
    };
    TischplanComponent.prototype.delete = function (informationElement, j, event) {
        this.navigationComponent.delete(informationElement, j, event);
    };
    TischplanComponent.prototype.none = function (event) {
        event.stopPropagation();
    };
    /*
    printToCart1(printSectionId1: string) {
      this.printComponent.printToCart1(printSectionId1);
    }
    printToCart2(printSectionId2: string) {
      this.tableplanComponent.printToCart2(printSectionId2);
    }
    printToCart3(data) {
      this.printComponent.printToCart3(data);
    }
    */
    TischplanComponent.prototype.showSonnbergZirbnBoolChange = function () {
        this.showSonnbergZirbnBool = true;
        this.showPanoramaBool = false;
        this.showWintergartenBool = false;
        this.showRestaurantBool = false;
    };
    TischplanComponent.prototype.showPanoramaBoolChange = function () {
        this.showPanoramaBool = true;
        this.showWintergartenBool = false;
        this.showRestaurantBool = false;
        this.showSonnbergZirbnBool = false;
    };
    TischplanComponent.prototype.showWintergartenBoolChange = function () {
        this.showWintergartenBool = true;
        this.showRestaurantBool = false;
        this.showSonnbergZirbnBool = false;
        this.showPanoramaBool = false;
    };
    TischplanComponent.prototype.showRestaurantBoolChange = function () {
        this.showRestaurantBool = true;
        this.showPanoramaBool = false;
        this.showWintergartenBool = false;
        this.showSonnbergZirbnBool = false;
    };
    return TischplanComponent;
}());
__decorate([
    core_1.ViewChild(print_component_1.PrintComponent)
], TischplanComponent.prototype, "printComponent", void 0);
__decorate([
    core_1.ViewChild(departmentmenu_component_1.DepartmentmenuComponent)
], TischplanComponent.prototype, "departmentmenuComponent", void 0);
__decorate([
    core_1.ViewChild(form_component_1.FormComponent)
], TischplanComponent.prototype, "formComponent", void 0);
__decorate([
    core_1.ViewChild(departments_component_1.DepartmentsComponent)
], TischplanComponent.prototype, "departmentsComponent", void 0);
__decorate([
    core_1.ViewChild(im_haus_liste_component_1.ImHausListeComponent)
], TischplanComponent.prototype, "imHausListeComponent", void 0);
__decorate([
    core_1.ViewChild(navigation_component_1.NavigationComponent)
], TischplanComponent.prototype, "navigationComponent", void 0);
__decorate([
    core_1.ViewChild(tableplan_component_1.TableplanComponent)
], TischplanComponent.prototype, "tableplanComponent", void 0);
__decorate([
    core_1.ViewChild(anreise_liste_component_1.AnreiseListeComponent)
], TischplanComponent.prototype, "anreiseListeComponent", void 0);
__decorate([
    core_1.ViewChild(traces_liste_component_1.TracesListeComponent)
], TischplanComponent.prototype, "tracesListeComponent", void 0);
__decorate([
    core_1.ViewChild(upload_component_1.UploadComponent)
], TischplanComponent.prototype, "uploadComponent", void 0);
TischplanComponent = __decorate([
    core_1.Component({
        selector: 'tischplan',
        templateUrl: 'tischplan.component.html',
        styleUrls: ['tischplan.component.css']
    })
], TischplanComponent);
exports.TischplanComponent = TischplanComponent;
