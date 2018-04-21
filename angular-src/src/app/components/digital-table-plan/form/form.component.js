"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var FormComponent = (function () {
    function FormComponent(mainService, _flashMessagesService) {
        this.mainService = mainService;
        this._flashMessagesService = _flashMessagesService;
        this.newInformationElements = [];
        this.noteResponse = new core_1.EventEmitter();
        this.changeColorIfAnreiseExport = new core_1.EventEmitter();
        this.parts = [];
        this.departments = [];
        this.employees = [];
        this.departments = ["Sonnberg-Zirbn", "Restaurant", "Wintergarten", "Panorama"];
        this.employees = ["Alexandra Lopion", "Julia Ackermann", "Torsten Streit", "Sabrina Schrötwieser", "Loreen Kumpfert", "Aylin Fiedler", "Julia Laue", "Richard Klöffel", "Tino Deisenroth", "Stefan Scheiber", "Dominic Mugambi", "Ralf Rohsmann", "Florian Thurner"];
    }
    FormComponent.prototype.ngOnInit = function () {
    };
    FormComponent.prototype.sendInformation = function (event) {
        var _this = this;
        event.preventDefault();
        this.dateGenerated = new Date();
        var newInformation = {
            text: this.title,
            roomNumber: this.roomNumber,
            tableNumber: this.tableNumber,
            date: this.dateGenerated,
            name: this.nameTraceInput,
            employee: this.employee
        };
        if (newInformation.text === undefined) {
            this._flashMessagesService.show('Die Nachricht ist leer ... ', { cssClass: 'alert-danger', timeout: 20000 });
            return;
        }
        else {
            this._flashMessagesService.show('Erfolgreich Information gespeichert ... ', { cssClass: 'alert-success', timeout: 20000 });
        }
        console.log(newInformation.tableNumber);
        if (newInformation.tableNumber) {
            this.mainService.sendInformation(newInformation)
                .subscribe(function (Information) {
                //console.log('Information: ' + JSON.stringify(Information.tables[0].tableNumber));
                console.log('Information: ' + JSON.stringify(Information));
                //console.log(Information.tables[0]);
                console.log("------");
                //console.log(Information[0].tables);
                if (Information === null) {
                    return;
                }
                else {
                    if (Information.tables[0].department === "Sonnberg-Zirbn") {
                        for (var i = 0; i < _this.tablesSonnbergZirbn.length; i++) {
                            if (_this.tablesSonnbergZirbn[i].number === Information.tables[0].number) {
                                _this.tablesSonnbergZirbn[i] = Information.tables[0];
                            }
                        }
                    }
                    else if (Information.tables[0].department === "Panorama") {
                        for (var i = 0; i < _this.tablesPanorama.length; i++) {
                            if (_this.tablesPanorama[i].number === Information.tables[0].number) {
                                _this.tablesPanorama[i] = Information.tables[0];
                            }
                        }
                    }
                    else if (Information.tables[0].department === "Restaurant") {
                        for (var i = 0; i < _this.tablesRestaurant.length; i++) {
                            if (_this.tablesRestaurant[i].number === Information.tables[0].number) {
                                _this.tablesRestaurant[i] = Information.tables[0];
                            }
                        }
                    }
                    else if (Information.tables[0].department === "Wintergarten") {
                        for (var i = 0; i < _this.tablesWintergarten.length; i++) {
                            if (_this.tablesWintergarten[i].number === Information.tables[0].number) {
                                _this.tablesWintergarten[i] = Information.tables[0];
                            }
                        }
                    }
                }
            });
            this.changeColorIfAnreiseExport.emit();
        }
        this.mainService.sendInformationToBox(newInformation)
            .subscribe(function (Information) {
            //console.log('Information: ' + JSON.stringify(Information.tables[0].tableNumber));
            console.log('Information: ' + JSON.stringify(Information));
            //console.log(Information.tables[0]);
            //console.log("------");
            //console.log(Information[0].tables);
            _this.newInformationElements.push(Information);
            console.log('this.newInformationElements' + _this.newInformationElements);
        });
    };
    FormComponent.prototype.sendNote = function (event) {
        var _this = this;
        event.preventDefault();
        this.noteDate = String(new Date()).substring(0, 15);
        console.log(this.noteDate);
        var newNote = {
            noteInput: this.noteInput,
            departmentNoteInput: this.departmentNoteInput,
            date: this.noteDate
        };
        if (newNote.noteInput === undefined) {
            this._flashMessagesService.show('Die Nachricht ist leer ... ', { cssClass: 'alert-danger', timeout: 20000 });
            return;
        }
        else {
            this._flashMessagesService.show('Erfolgreich Information gespeichert ... ', { cssClass: 'alert-success', timeout: 20000 });
        }
        this.mainService.sendInformationToNoteBlock(newNote)
            .subscribe(function (Note) {
            //console.log('Information: ' + JSON.stringify(Information.tables[0].tableNumber));
            console.log('Information: ' + JSON.stringify(Note));
            //console.log(Information.tables[0]);
            //console.log("------");
            //console.log(Information[0].tables);
            _this.noteResponse.emit(Note);
            _this.noteElements = Note;
            console.log(_this.noteElements);
            //console.log('this.newInformationElements' + this.newInformationElements);
        });
    };
    return FormComponent;
}());
__decorate([
    core_1.Input('newInformationElements')
], FormComponent.prototype, "newInformationElements", void 0);
__decorate([
    core_1.Input('dateGenerated')
], FormComponent.prototype, "dateGenerated", void 0);
__decorate([
    core_1.Input('title')
], FormComponent.prototype, "title", void 0);
__decorate([
    core_1.Input('roomNumber')
], FormComponent.prototype, "roomNumber", void 0);
__decorate([
    core_1.Input('tableNumber')
], FormComponent.prototype, "tableNumber", void 0);
__decorate([
    core_1.Input('nameTraceInput')
], FormComponent.prototype, "nameTraceInput", void 0);
__decorate([
    core_1.Input('employee')
], FormComponent.prototype, "employee", void 0);
__decorate([
    core_1.Input('tablesRestaurant')
], FormComponent.prototype, "tablesRestaurant", void 0);
__decorate([
    core_1.Input('tablesPanorama')
], FormComponent.prototype, "tablesPanorama", void 0);
__decorate([
    core_1.Input('tablesWintergarten')
], FormComponent.prototype, "tablesWintergarten", void 0);
__decorate([
    core_1.Input('tablesSonnbergZirbn')
], FormComponent.prototype, "tablesSonnbergZirbn", void 0);
__decorate([
    core_1.Input('showInfoFormBool')
], FormComponent.prototype, "showInfoFormBool", void 0);
__decorate([
    core_1.Input('showNoteFormBool')
], FormComponent.prototype, "showNoteFormBool", void 0);
__decorate([
    core_1.Input('noteElements')
], FormComponent.prototype, "noteElements", void 0);
__decorate([
    core_1.Input('showWintergartenBool')
], FormComponent.prototype, "showWintergartenBool", void 0);
__decorate([
    core_1.Input('showSonnbergZirbnBool')
], FormComponent.prototype, "showSonnbergZirbnBool", void 0);
__decorate([
    core_1.Input('showPanoramaBool')
], FormComponent.prototype, "showPanoramaBool", void 0);
__decorate([
    core_1.Input('showRestaurantBool')
], FormComponent.prototype, "showRestaurantBool", void 0);
__decorate([
    core_1.Input('showAllBool')
], FormComponent.prototype, "showAllBool", void 0);
__decorate([
    core_1.Output()
], FormComponent.prototype, "noteResponse", void 0);
__decorate([
    core_1.Output()
], FormComponent.prototype, "changeColorIfAnreiseExport", void 0);
FormComponent = __decorate([
    core_1.Component({
        selector: 'app-form',
        templateUrl: 'form.component.html',
        styleUrls: ['../main.component.css']
    })
], FormComponent);
exports.FormComponent = FormComponent;
