"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AnreiseListeComponent = (function () {
    function AnreiseListeComponent(tischplanService) {
        this.tischplanService = tischplanService;
    }
    AnreiseListeComponent.prototype.ngOnInit = function () {
    };
    AnreiseListeComponent.prototype.updateAnreiseListeElement = function (informationElements2) {
        this.tischplanService.updateAnreiseListeElement(informationElements2)
            .subscribe(function (response) {
            //this.imHausListeElemente = response;
            console.log('updateAnreiseListeElement response: ');
            console.log(response);
        });
    };
    return AnreiseListeComponent;
}());
__decorate([
    core_1.Input('anreiseListeElemente')
], AnreiseListeComponent.prototype, "anreiseListeElemente", void 0);
AnreiseListeComponent = __decorate([
    core_1.Component({
        selector: 'app-anreise-liste',
        templateUrl: 'anreise-liste.component.html',
        styleUrls: ['../tischplan.component.css']
    })
], AnreiseListeComponent);
exports.AnreiseListeComponent = AnreiseListeComponent;
