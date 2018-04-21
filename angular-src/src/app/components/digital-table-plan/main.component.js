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
var departments_component_1 = require("./departments/departments.component");
var MainComponent = (function () {
    function MainComponent(mainService, dragulaService) {
        var _this = this;
        this.mainService = mainService;
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
        this.notizElements = [];
        this.date = [];
        this.parts = [];
        this.parsedDate = [];
        this.tableInformation = [];
        this.tablesTempDeparture = [];
        this.newInformationEmployees = [];
        this.history = [];
        this.adultSonnbergZirbn = [];
        this.childSonnbergZirbn = [];
        this.adultPanorama = [];
        this.childPanorama = [];
        this.adultRestaurant = [];
        this.childRestaurant = [];
        this.adultWintergarten = [];
        this.childWintergarten = [];
        this.buttonBgColorInfoForm = "0a7a74";
        this.buttonBgColorNotizForm = "0a7a74";
        this.buttonBgColorShowTablePlan = "0a7a74";
        this.fontColorInfoForm = "f3efe4";
        this.fontColorNoteForm = "f3efe4";
        this.fontColorShowTablePlan = "f3efe4";
        this.dateGeneratedListe = new Date();
        this.buttonBgColor1 = "0a7a74";
        this.buttonBgColor2 = "0a7a74";
        this.buttonBgColor3 = "0a7a74";
        this.buttonBgColor4 = "0a7a74";
        this.buttonBgColor5 = "0a7a74";
        this.fontColor1 = "f3efe4";
        this.fontColor2 = "f3efe4";
        this.fontColor3 = "f3efe4";
        this.fontColor4 = "f3efe4";
        this.fontColor5 = "f3efe4";
        this.tablesOccupied = 0;
        this.backgroundColor = "ffffff";
        this.showSonnbergZirbnBool = false;
        this.showPanoramaBool = false;
        this.showRestaurantBool = false;
        this.showWintergartenBool = false;
        this.showAllBool = false;
        this.term = "";
        this.mainService.getInformationElements()
            .subscribe(function (informationElemente) {
            if (informationElemente === null) {
                return;
            }
            else {
                _this.newInformationElements = informationElemente;
                console.log(_this.newInformationElements);
            }
        });
        this.mainService.getInformationEmployees()
            .subscribe(function (informationElemente) {
            if (informationElemente === null) {
                return;
            }
            else {
                informationElemente.sort(function (a, b) { return 0 - (a.numberOfTraces > b.numberOfTraces ? 1 : -1); });
                _this.newInformationEmployees = informationElemente;
                console.log(_this.newInformationEmployees);
            }
        });
        this.mainService.getNoteElements()
            .subscribe(function (informationElemente) {
            if (informationElemente === null) {
                return;
            }
            else {
                _this.notizElements = informationElemente;
                console.log(_this.notizElements);
            }
        });
        this.getTables();
        this.reloadLists();
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
    MainComponent.prototype.onDrag = function (args) {
        var e = args[0], el = args[1];
    };
    MainComponent.prototype.onDrop = function (args) {
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
        console.log('dataString' + dataString);
        this.departmentsComponent.addInformationToTable(dataString, arrayIndex);
        this.departmentsComponent.occupyTableOnDrop(dataString, arrayIndex);
        this.updateImHausListElement(informationElements2);
        this.tableplanComponent.sumUpPersonenAnzahl();
    };
    MainComponent.prototype.onOver = function (args) {
        var e = args[0], el = args[1], container = args[2];
    };
    MainComponent.prototype.onOut = function (args) {
        var e = args[0], el = args[1], container = args[2];
    };
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent.prototype.showWintergarten = function () {
        this.departmentmenuComponent.showWintergarten();
    };
    MainComponent.prototype.transform = function (term) {
        this.departmentsComponent.transform(term);
    };
    MainComponent.prototype.showRestaurant = function () {
        this.departmentmenuComponent.showRestaurant();
    };
    MainComponent.prototype.showSonnbergZirbn = function () {
        this.departmentmenuComponent.showWintergarten();
    };
    MainComponent.prototype.showPanorama = function () {
        this.departmentmenuComponent.showPanorama();
    };
    MainComponent.prototype.sendInformation = function (event) {
        this.formComponent.sendInformation(event);
    };
    MainComponent.prototype.delete = function (informationElement, j, event) {
        this.navigationComponent.delete(informationElement, j, event);
    };
    MainComponent.prototype.changeBgColorIfAnreise = function () {
        this.departmentsComponent.changeBgColorIfAnreise();
    };
    MainComponent.prototype.departuresRemoval = function () {
        this.departmentsComponent.occupy(this.departureTablePlusIndex.departuresExport, this.departureTablePlusIndex.b);
    };
    MainComponent.prototype.updateImHausListElement = function (x) {
        this.imHausListComponent.updateImHausListElement(x);
    };
    MainComponent.prototype.umsetzen = function () {
        var _this = this;
        this.departmentsComponent.addInformationToTable(this.umsetzenInfoVar.tableInformationExport, this.umsetzenInfoVar.indexZiel);
        this.departmentsComponent.occupyTableOnDrop(this.umsetzenInfoVar.tableToMove, this.umsetzenInfoVar.indexZiel);
        setTimeout(function () {
            _this.departmentsComponent.occupy(_this.umsetzenInfoVar.tableToMove, _this.umsetzenInfoVar.indexQuell);
        }, 2000);
    };
    MainComponent.prototype.reloadLists = function () {
        var _this = this;
        this.mainService.getImHausList()
            .subscribe(function (imHausListElemente) {
            if (imHausListElemente === null) {
                return;
            }
            else {
                imHausListElemente.sort(function (a, b) {
                    if (a.name < b.name)
                        return -1;
                    if (a.name > b.name)
                        return 1;
                    return 0;
                });
                _this.imHausListElemente = imHausListElemente;
                console.log(_this.imHausListElemente);
                setTimeout(function () {
                    _this.imHausListComponent.sortList();
                }, 3000);
            }
        });
    };
    MainComponent.prototype.updateAzList = function () {
        var _this = this;
        setTimeout(function () {
            _this.getTables();
            setTimeout(function () {
                //console.log('this.tablesWintergarten:');
                //console.log(this.tablesWintergarten);
                _this.tables = _this.tablesWintergarten.concat(_this.tablesRestaurant).concat(_this.tablesPanorama).concat(_this.tablesSonnbergZirbn);
                //console.log('this.tables: in updateAzList');
                //console.log(this.tables);
                _this.printComponent.formatAzListe(_this.tables);
            }, 3000);
        }, 1000);
    };
    MainComponent.prototype.getTables = function () {
        var _this = this;
        console.log('getTables calld');
        this.mainService.getTables()
            .subscribe(function (tables) {
            if (tables === null) {
                return;
            }
            else {
                //console.log("tables[3].tables");
                //console.log(JSON.parse(tables[3].tables));
                for (var x = 0; x < tables.length; x++) {
                    //console.log("tables[x].department");
                    //console.log(tables[x].department);
                    if (tables[x].department === "Restaurant") {
                        tables[x].tables.sort(function (a, b) {
                            //console.log(a.number);
                            //console.log(b.number);
                            if (Number(a.number) < Number(b.number))
                                return -1;
                            if (Number(a.number) > Number(b.number))
                                return 1;
                            return 0;
                        });
                    }
                }
                for (var a = 0; a < tables.length; a++) {
                    if (tables[a].department === "Panorama") {
                        _this.tablesPanorama = tables[a].tables;
                    }
                    else if (tables[a].department === "Wintergarten") {
                        _this.tablesWintergarten = tables[a].tables;
                        //console.log('Test' + JSON.stringify(this.tablesWintergarten));
                    }
                    else if (tables[a].department === "Sonnberg-Zirbn") {
                        _this.tablesSonnbergZirbn = tables[a].tables;
                    }
                    else if (tables[a].department === "Restaurant") {
                        _this.tablesRestaurant = tables[a].tables;
                    }
                }
                _this.changeBgColorIfAnreise();
            }
            _this.tablesTempDeparture = tables;
            _this.tables = _this.tablesWintergarten.concat(_this.tablesRestaurant).concat(_this.tablesPanorama).concat(_this.tablesSonnbergZirbn);
            _this.printComponent.formatAzListe(_this.tables);
            setTimeout(function () {
                _this.tableplanComponent.sumUpPersonenAnzahl();
            }, 1000);
        });
    };
    return MainComponent;
}());
__decorate([
    core_1.ViewChild(print_component_1.PrintComponent)
], MainComponent.prototype, "printComponent", void 0);
__decorate([
    core_1.ViewChild(departmentmenu_component_1.DepartmentmenuComponent)
], MainComponent.prototype, "departmentmenuComponent", void 0);
__decorate([
    core_1.ViewChild(form_component_1.FormComponent)
], MainComponent.prototype, "formComponent", void 0);
__decorate([
    core_1.ViewChild(departments_component_1.DepartmentsComponent)
], MainComponent.prototype, "departmentsComponent", void 0);
__decorate([
    core_1.ViewChild(im_haus_liste_component_1.ImHausListComponent)
], MainComponent.prototype, "imHausListComponent", void 0);
__decorate([
    core_1.ViewChild(navigation_component_1.NavigationComponent)
], MainComponent.prototype, "navigationComponent", void 0);
__decorate([
    core_1.ViewChild(tableplan_component_1.TableplanComponent)
], MainComponent.prototype, "tableplanComponent", void 0);
MainComponent = __decorate([
    core_1.Component({
        selector: 'main',
        templateUrl: 'main.component.html',
        styleUrls: ['main.component.css']
    })
], MainComponent);
exports.MainComponent = MainComponent;
