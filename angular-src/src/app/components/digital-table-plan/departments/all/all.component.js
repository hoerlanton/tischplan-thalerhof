"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
var AllComponent = (function () {
    function AllComponent() {
        this.occupied = new core_1.EventEmitter();
        console.log("this.tables in allcomponent");
        //console.log(this.tables);
        console.log("this.tablesTempDeparture in allcomponent");
        console.log(this.tablesTempDeparture);
    }
    AllComponent.prototype.ngOnInit = function () {
    };
    AllComponent.prototype.occupy = function (table, j) {
        this.occupied.emit({ table: table, j: j });
    };
    AllComponent.prototype.getStyle = function (j) {
        if (j != "-") {
            return "solid 3px red";
        }
        else {
            return "";
        }
    };
    AllComponent.prototype.transform = function (tables, term) {
        console.log("term");
        console.log(term);
        if (Array.isArray(tables) && tables.length && term && term.length) {
            this.tables = tables.filter(function (item) {
                console.log(item);
                var keys = Object.keys(item);
                console.log(keys);
                if (Array.isArray(keys) && keys.length) {
                    for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                        var key = keys_1[_i];
                        if (item.hasOwnProperty(key) && item[key] && item[key].length && (item[key].toString().toLowerCase().replace(/ /g, '')).includes((term.toString().toLowerCase().replace(/ /g, '')))) {
                            return true;
                        }
                    }
                    return false;
                }
                else {
                    return false;
                }
            });
        }
        else {
            return tables;
        }
    };
    return AllComponent;
}());
__decorate([
    core_1.Input('showAllBool')
], AllComponent.prototype, "showAllBool", void 0);
__decorate([
    core_1.Input('term')
], AllComponent.prototype, "term", void 0);
__decorate([
    core_1.Input('tables')
], AllComponent.prototype, "tables", void 0);
__decorate([
    core_1.Input('tablesTempDeparture')
], AllComponent.prototype, "tablesTempDeparture", void 0);
__decorate([
    core_1.Output()
], AllComponent.prototype, "occupied", void 0);
AllComponent = __decorate([
    core_2.Pipe({
        name: 'filter',
    }),
    core_1.Component({
        selector: 'app-all',
        templateUrl: 'all.component.html',
        styleUrls: ['../../main.component.css']
    })
], AllComponent);
exports.AllComponent = AllComponent;
