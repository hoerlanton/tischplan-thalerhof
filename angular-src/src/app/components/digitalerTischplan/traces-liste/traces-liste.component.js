"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TracesListeComponent = (function () {
    function TracesListeComponent(tischplanService) {
        this.tischplanService = tischplanService;
    }
    TracesListeComponent.prototype.ngOnInit = function () {
    };
    TracesListeComponent.prototype.updateTracesListeElement = function (informationElements2) {
        this.tischplanService.updateTracesListeElement(informationElements2)
            .subscribe(function (response) {
            //this.imHausListeElemente = response;
            console.log('updateTracesListeElement response: ');
            console.log(response);
        });
    };
    return TracesListeComponent;
}());
__decorate([
    core_1.Input('tracesListeElemente')
], TracesListeComponent.prototype, "tracesListeElemente", void 0);
TracesListeComponent = __decorate([
    core_1.Component({
        selector: 'app-traces-liste',
        templateUrl: 'traces-liste.component.html',
        styleUrls: ['../tischplan.component.css']
    })
], TracesListeComponent);
exports.TracesListeComponent = TracesListeComponent;
