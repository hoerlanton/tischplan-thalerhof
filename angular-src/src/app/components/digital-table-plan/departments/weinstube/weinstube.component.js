"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var PanoramaComponent = (function () {
    function PanoramaComponent() {
        this.occupied = new core_1.EventEmitter();
        this.dateGenerated = new Date();
    }
    PanoramaComponent.prototype.ngOnInit = function () {
    };
    PanoramaComponent.prototype.occupy = function (table, j) {
        this.occupied.emit({ table: table, j: j });
    };
    PanoramaComponent.prototype.getStyle = function (j) {
        //console.log(j);
        if (j != "-") {
            return "solid 3px red";
        }
        else {
            return "";
        }
    };
    PanoramaComponent.prototype.transform = function (tables, term) {
        console.log("term");
        console.log(term);
        if (term == "") {
            this.tablesPanorama = tables;
        }
        else {
            if (Array.isArray(tables) && tables.length && term && term.length) {
                this.tablesPanorama = tables.filter(function (item) {
                    console.log(item);
                    var keys = Object.keys(item);
                    if (item.groups) {
                        var keysGroups = Object.keys(item.groups);
                        console.log(keys);
                        console.log(keysGroups);
                        console.log();
                        if (Array.isArray(keys) && keys.length) {
                            for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                                var key = keys_1[_i];
                                if (item.hasOwnProperty(key) && item[key] && item[key].length && (item[key].toString().toLowerCase().replace(/ /g, '')).includes((term.toString().toLowerCase().replace(/ /g, '')))) {
                                    return true;
                                }
                                else if (item.groups) {
                                    for (var _a = 0, keysGroups_1 = keysGroups; _a < keysGroups_1.length; _a++) {
                                        var keyGroups = keysGroups_1[_a];
                                        var keysGroupsGroups = Object.keys(item.groups[keyGroups]);
                                        for (var _b = 0, keysGroupsGroups_1 = keysGroupsGroups; _b < keysGroupsGroups_1.length; _b++) {
                                            var keyGroupsGroups = keysGroupsGroups_1[_b];
                                            if (item.groups[keyGroups][keyGroupsGroups]) {
                                                if (item.groups[keyGroups][keyGroupsGroups].toString().toLowerCase().replace(/ /g, '').includes((term.toString().toLowerCase().replace(/ /g, '')))) {
                                                    return true;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            return false;
                        }
                        else {
                            return false;
                        }
                    }
                });
            }
            else {
                return tables;
            }
        }
    };
    return PanoramaComponent;
}());
__decorate([
    core_1.Input('tablesPanorama')
], PanoramaComponent.prototype, "tablesPanorama", void 0);
__decorate([
    core_1.Input('showPanoramaBool')
], PanoramaComponent.prototype, "showPanoramaBool", void 0);
__decorate([
    core_1.Input('term')
], PanoramaComponent.prototype, "term", void 0);
__decorate([
    core_1.Output()
], PanoramaComponent.prototype, "occupied", void 0);
PanoramaComponent = __decorate([
    core_1.Component({
        selector: 'app-panorama',
        templateUrl: 'weinstube.component.html',
        styleUrls: ['../../main.component.css']
    })
], PanoramaComponent);
exports.PanoramaComponent = PanoramaComponent;
