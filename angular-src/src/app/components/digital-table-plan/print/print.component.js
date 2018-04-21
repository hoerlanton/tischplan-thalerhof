"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var PrintComponent = (function () {
    function PrintComponent() {
        this.getTablesOccupied = new core_1.EventEmitter();
        this.getTablesforAzListe = new core_1.EventEmitter();
        this.tempTablesArray = [];
        this.tempTablesArray2 = [];
        this.tempTablesArray1 = [];
        this.tempTablesArray3 = [];
        this.uniqueTables = [];
        this.tableNumbers = [];
        this.tableTemp = [];
        this.trace = false;
    }
    PrintComponent.prototype.ngOnInit = function () {
    };
    PrintComponent.prototype.formatAzListe = function (tables) {
        this.tables = tables;
        this.tableNumbers = [];
        this.uniqueTables = [];
        this.tableTemp = [];
        //(<any>Object).assign( this.photos, photos )
        for (var i = 0; i < this.tables.length; i++) {
            if (this.tables[i].groups) {
                for (var j = 0; j < this.tables[i].groups.length; j++) {
                    var tempObject = {
                        number: this.tables[i].number,
                        department: this.tables[i].department,
                        bgColor: this.tables[i].bgColor,
                        isOccupied: this.tables[i].isOccupied,
                        placeholder: this.tables[i].placeholder,
                        border: this.tables[i].border,
                    };
                    if (this.tables[i].groups[j]) {
                        //console.log(this.tables[i].number);
                        this.object = Object.assign(this.tables[i].groups[j], tempObject);
                        //console.log("this.object");
                        //console.log(this.object);
                        this.tableTemp.push(this.object);
                    }
                }
            }
        }
        //console.log("this.tableTemp");
        //console.log(this.tableTemp);
        this.tables = this.tableTemp.sort(function (a, b) {
            var nameA = "";
            var nameB = "";
            if (typeof a.nameValue !== "undefined" && a.nameValue !== null) {
                nameA = a.nameValue.toUpperCase(); // ignore upper and lowercase
            }
            if (typeof b.nameValue !== "undefined" && b.nameValue !== null) {
                nameB = b.nameValue.toUpperCase(); // ignore upper and lowercase
            }
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            // names must be equal
            return 0;
            //}
        });
        for (var i = 0; i < this.tables.length; i++) {
            //console.log(i);
            if ("nameValue" in this.tables[i]) {
                //console.log("--->" + i);
                this.tableNumbers.push(this.tables[i].number);
            }
        }
        function onlyUnique(value, index, self) {
            return self.indexOf(value) === index;
        }
        this.uniqueTables = this.tableNumbers.filter(onlyUnique);
        this.tablesOccupied = this.uniqueTables.length;
        this.getTablesOccupied.emit(this.tablesOccupied);
        this.getTablesforAzListe.emit(this.tables);
    };
    PrintComponent.prototype.getStyle = function (a) {
        //console.log("a");
        //console.log(a);
        if (typeof a === "undefined") {
            return "solid 3px rgb(243, 239, 228)";
        }
        else {
            for (var b = 0; b < a.length; b++) {
                //console.log("LOOOOOOOOOOOOOOP");
                //console.log(a[b].traceValue);
                if (a[b].traceValue != "Empty" || a[b].newTraceText) {
                    this.trace = true;
                }
            }
            if (this.trace) {
                this.trace = false;
                return "solid 3px red";
            }
            else {
                return "solid 3px rgb(243, 239, 228)";
            }
        }
    };
    return PrintComponent;
}());
__decorate([
    core_1.Input('tables')
], PrintComponent.prototype, "tables", void 0);
__decorate([
    core_1.Input('dateGeneratedListe')
], PrintComponent.prototype, "dateGeneratedListe", void 0);
__decorate([
    core_1.Input('tablesPanorama')
], PrintComponent.prototype, "tablesPanorama", void 0);
__decorate([
    core_1.Input('showPanoramaBool')
], PrintComponent.prototype, "showPanoramaBool", void 0);
__decorate([
    core_1.Input('showRestaurantBool')
], PrintComponent.prototype, "showRestaurantBool", void 0);
__decorate([
    core_1.Input('tablesRestaurant')
], PrintComponent.prototype, "tablesRestaurant", void 0);
__decorate([
    core_1.Input('showSonnbergZirbnBool')
], PrintComponent.prototype, "showSonnbergZirbnBool", void 0);
__decorate([
    core_1.Input('tablesSonnbergZirbn')
], PrintComponent.prototype, "tablesSonnbergZirbn", void 0);
__decorate([
    core_1.Input('showWintergartenBool')
], PrintComponent.prototype, "showWintergartenBool", void 0);
__decorate([
    core_1.Input('tablesWintergarten')
], PrintComponent.prototype, "tablesWintergarten", void 0);
__decorate([
    core_1.Input('adultPanorama')
], PrintComponent.prototype, "adultPanorama", void 0);
__decorate([
    core_1.Input('adultRestaurant')
], PrintComponent.prototype, "adultRestaurant", void 0);
__decorate([
    core_1.Input('adultSonnbergZirbn')
], PrintComponent.prototype, "adultSonnbergZirbn", void 0);
__decorate([
    core_1.Input('adultWintergarten')
], PrintComponent.prototype, "adultWintergarten", void 0);
__decorate([
    core_1.Input('childPanorama')
], PrintComponent.prototype, "childPanorama", void 0);
__decorate([
    core_1.Input('childRestaurant')
], PrintComponent.prototype, "childRestaurant", void 0);
__decorate([
    core_1.Input('childSonnbergZirbn')
], PrintComponent.prototype, "childSonnbergZirbn", void 0);
__decorate([
    core_1.Input('childWintergarten')
], PrintComponent.prototype, "childWintergarten", void 0);
__decorate([
    core_1.Output()
], PrintComponent.prototype, "getTablesOccupied", void 0);
__decorate([
    core_1.Output()
], PrintComponent.prototype, "getTablesforAzListe", void 0);
PrintComponent = __decorate([
    core_1.Component({
        selector: 'app-print',
        templateUrl: 'print.component.html',
        styleUrls: ['../main.component.css']
    })
], PrintComponent);
exports.PrintComponent = PrintComponent;
