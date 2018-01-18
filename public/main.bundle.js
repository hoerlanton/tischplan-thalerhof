webpackJsonp(["main"],{

/***/ "../../../../../Table.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Table; });
var Table = (function () {
    function Table() {
    }
    return Table;
}());

//# sourceMappingURL=Table.js.map

/***/ }),

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<flash-messages></flash-messages>\n<tischplan></tischplan>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_tischplan_service__ = __webpack_require__("../../../../../src/app/services/tischplan.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = (function () {
    function AppComponent() {
        this.title = 'App works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_tischplan_service__["a" /* TischplanService */]],
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_digitalerTischplan_tischplan_component__ = __webpack_require__("../../../../../src/app/components/digitalerTischplan/tischplan.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_dragula__ = __webpack_require__("../../../../ng2-dragula/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_dropdown__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_5__components_digitalerTischplan_tischplan_component__["a" /* TischplanComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__["FlashMessagesModule"],
            __WEBPACK_IMPORTED_MODULE_7_ng2_dragula__["DragulaModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */].forRoot()
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/tischplan.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html, body {\n  padding: 0;\n  margin: 0;\n  height: 100%;\n  background-color: #0a7a74;\n}\n\n.row {\n  height: 100%;\n}\n\n.line{\n  width: 100%;\n  height: 20px;\n  border-bottom: solid 10px #0a7a74;\n  position: absolute;\n  right: 0px;\n  top: 100px;\n}\n\n@media (min-width: 1200px) {\n  .printTwo {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    background-color: #0a7a74;\n    min-height: calc(100vh - 390px);\n  }\n}\n\n@media (min-width: 800px) {\n  .printTwo {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    background-color: #0a7a74;\n    min-height: 580px;\n  }\n}\n\n.printTwo {\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n  background-color: #0a7a74;\n  min-height: 580px;\n}\n\n\n.row .inner-table {\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n  max-height: calc(100vh - 100px);\n}\n\n\n.row4 {\n  margin-top: 80px;\n}\n\n@media (min-width: 1200px) {\n  .row4 {\n    margin-top: 350px;\n  }\n}\n\n.row .table-col {\n  min-height: 100vh;\n  max-height: 100vh;\n  background-color: #f3efe4;\n  padding: 20px 10px 20px 10px;\n  border-left: 5px solid #0a7a74;\n  border-right: 5px solid #0a7a74;\n  border-bottom: 20px solid #0a7a74;\n  box-sizing: border-box;\n}\n\n@media (min-width: 800px) {\n  .row .table-col {\n    min-height: calc(100vh +  375px);\n    background-color: #f3efe4;\n    padding: 20px 10px 20px 10px;\n    border-left: 5px solid #0a7a74;\n    border-right: 5px solid #0a7a74;\n    border-bottom: 20px solid #0a7a74;\n    box-sizing: border-box;\n  }\n}\n\n@media (min-width: 800px) {\n  .row .inner-table {\n    max-height: calc(100vh + 300px);\n    overflow: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n}\n\n@media (min-width: 1200px) {\n  .row .table-col {\n    min-height: 100vh;\n    max-height: calc(100vh - 100px);\n    background-color: #f3efe4;\n    padding: 20px 10px 20px 10px;\n    border-left: 5px solid #0a7a74;\n    border-right: 5px solid #0a7a74;\n    border-bottom: 20px solid #0a7a74;\n    box-sizing: border-box;\n  }\n}\n\n@media (min-width: 1200px) {\n  .row .inner-table {\n    max-height: calc(100vh - 100px);\n    overflow: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n}\n\n.row .print-col {\n  padding: 0;\n  background-color: #f3efe4;\n  border-left: 5px solid #0a7a74;\n  border-right: 5px solid #0a7a74;\n  min-height: 100vh;\n  border-bottom: 20px solid #0a7a74;\n  box-sizing: border-box;\n}\n\n@media (min-width: 800px) {\n  .row .upload-col {\n    background-color: #f3efe4;\n    padding: 20px 10px 20px 10px;\n    border-left: 5px solid #0a7a74;\n    border-right: 5px solid #0a7a74;\n    border-bottom: 20px solid #0a7a74;\n    box-sizing: border-box;\n    min-height: 100vh;\n    max-height: 100vh;\n  }\n}\n@media (min-width: 1200px) {\n  .row .upload-col {\n    background-color: #f3efe4;\n    padding: 20px 10px 20px 10px;\n    border-left: 5px solid #0a7a74;\n    border-right: 5px solid #0a7a74;\n    border-bottom: 20px solid #0a7a74;\n    box-sizing: border-box;\n    min-height: 100vh;\n    max-height: 100vh;\n\n  }\n}\n\n.row .upload-col {\n  background-color: #f3efe4;\n  padding: 20px 10px 20px 10px;\n  border-left: 5px solid #0a7a74;\n  border-right: 5px solid #0a7a74;\n  border-bottom: 20px solid #0a7a74;\n  box-sizing: border-box;\n  min-height: 100vh;\n  max-height: 100vh;\n}\n\n.section3 {\n  display: none;\n}\n\n.row1 {\n  height: calc((100vh - 250px) / 3);\n  overflow: auto;\n}\n\n\n.row .upload-col, .printToCart2, .dropdown-toggle, .printToCart1, .anleitung {\n  display: none;\n}\n\n@media (min-width: 1200px) {\n  .row .upload-col, .printToCart2, .dropdown-toggle, .printToCart1, .anleitung{\n    display: block;\n  }\n}\n\n\n.cards-container {\n  margin: 10px 0px 10px 0px;\n  padding: 10px 10px 40px 10px;\n}\n\n.row .container-fluid .table-col .inner-table .row3 .wrapper .cards-container {\n  border-radius: 3px;\n  border: solid 1px grey;\n  padding: 10px 10px 15px 10px;\n}\n\n\n.row .container-fluid .col-md-4 .row1 {\n  overflow: auto;\n  margin: 0 0 0 0;\n  display: inline-block;\n  width: 105%;\n  height: 232.5px;\n  padding-top: 20px;\n}\n\n.row .container-fluid .col-md-4 .row1 .wrapper {\n  overflow: auto;\n  margin: 0 0 0 0;\n  display: inline-block;\n  max-width: 100%;\n}\n\n.row .container-fluid .col-md-4 .row1 .wrapper .container {\n  overflow: auto;\n  margin: 20px 40px 20px 0;\n  display: inline-block;\n  max-width: 100%;\n  border-radius: 3px;\n}\n\n.row .container-fluid .col-md-4 .col-xs-12 .row1 {\n  overflow: auto;\n  margin: 0 auto;\n  display: inline-block;\n  width: 100%;\n  height: 800px;\n  padding-top: 20px;\n}\n\n\n.row .container-fluid h3 {\n  -ms-flex-line-pack: center;\n      align-content: center;\n  margin: 0 auto;\n  display: inline-block;\n  color: #0a7a74;\n  position: relative;\n  text-align: center;\n}\n\n.row .container-fluid .col-md-4 h3 {\n  margin: 0 auto;\n  color: #0a7a74;\n  position: relative;\n}\n\n.row1 .col {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n\n.row1 .col:nth-child(1) {\n  -webkit-box-ordinal-group: 2;\n      -ms-flex-order: 1;\n          order: 1;\n}\n.row1 .col:nth-child(2) {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n}\n.row1 .col:nth-child(3) {\n  -webkit-box-ordinal-group: 3;\n      -ms-flex-order: 2;\n          order: 2;\n}\n\n.row .col-md-4 .row2 {\n  padding-bottom: 10px;\n  position: relative;\n  min-height: 100%;\n  border-bottom: 1px solid red;\n}\n\n.card {\n  background: rgb(255,255,255); /* Fall-back for browsers that don support rgba */\n  background: rgba(255,255,255, 1);\n  border-radius: 3px;\n  border: solid 1px grey;\n  padding: 10px 10px 15px 10px;\n}\n\n.row .container-fluid .col-md-4 .row1 .wrapper .container .card p {\n  /*padding:10px 10px 10px 10px;*/\n  max-width: 100%;\n}\n\n.row .container-fluid .col-md-4 .wrapper .container .card p {\n  /*padding:10px 10px 10px 10px;*/\n  max-width: 100%;\n}\n\n.row .container-fluid .col-md-4 .row3 .row1 p {\n  /*padding: 10px 10px 10px 10px;*/\n  background: rgb(255,255,255); /* Fall-back for browsers that don support rgba */\n  background: rgba(255,255,255, 1);\n  max-width: 100%;\n}\n\n.row .container-fluid .col-md-4 .col-xs-12 .row1 .wrapper .container .card p {\n  /*padding: 10px 10px 10px 10px;*/\n  max-width: 100%;\n}\n\n\n.row .container-fluid .col-md-6 .row {\n  background-color: #eaf3f3;\n  padding: 20px 10px 20px 10px;\n  height: 100%;\n}\n\n.row .container-fluid .print-col .printTwo .table-item {\n  position: absolute;\n}\n\n.btn-send {\n  display: none;\n}\n\n@media (min-width: 800px) {\n  .btn-send {\n    display: block;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/tischplan.component.html":
/***/ (function(module, exports) {

module.exports = "<html>\n<head>\n  <title>Dashboard</title>\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no\">\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" integrity=\"sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u\" crossorigin=\"anonymous\">\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n  <script src=\"node_modules/core-js/client/shim.min.js\"></script>\n  <script src=\"<your-libs-directory>/object-assign.min.js\"></script>\n</head>\n\n<body>\n<nav class=\"navbar navbar-default\" style=\"max-width: 100%\">\n      <ul class=\"nav navbar-nav\" style=\"max-width: 100%; margin-left: 20px\">\n        <li><img alt=\"Brand\" href=\"http://www.servicio.io\" src=\"http://servicio.io/wp-content/uploads/2016/05/servicio-logo-hellblau-auto-ohne-hintergrund-1.png\" style=\"height: 45px; width: auto; margin-top:15px; margin-right: 50px; text-align: left; display:table-cell; vertical-align:middle;\"></li>\n        <li class=\"anleitung\" ><a href=\"http://servicio.io/tester-info-3-2\" style=\"text-align: left; display:table-cell; vertical-align:middle; margin-bottom: 5px; margin-right: 0px; max-height: 15px\" >Anleitung</a></li>\n        <li class=\"printToCart1\"><button (click)=\"printToCart1('printSectionId1')\" style=\" display:table-cell; vertical-align:middle; margin-top: 15px; margin-right: 20px\" class=\"printToCart1\">Tisch Übersicht Drucken</button></li>\n        <li class=\"printToCart2\"><button (click)=\"printToCart2('printSectionId2')\" style=\"text-align: left; display:table-cell; vertical-align:middle; margin-top: 15px; margin-right: 20px\" class=\"printToCart2\">Tisch Plan Drucken</button></li>\n        <li class=\"printToCart3\"><button (click)=\"printToCart3('printSectionId3')\" style=\"text-align: left; display:table-cell; vertical-align:middle; margin-top: 15px; margin-right: 20px\" class=\"printToCart3\">A-Z Liste Drucken</button></li>\n        <li class=\"Belegte Tisch\" style=\"color: #0a7a74; vertical-align:middle; \"><h3>Belegte Tische: {{tablesOccupied}}</h3></li>\n      </ul>\n    <ul class=\"nav navbar-nav navbar-right\">\n      <div class=\"btn-group\" style=\"height: 45px; width: auto; margin: 10px 25px 5px 25px; float: left; text-align: right; display:table-cell; vertical-align:middle;\" dropdown>\n        <button dropdownToggle type=\"button\" style=\" background-color: #0a7a74; color: #FFFFFF\" class=\"btn btn-primary dropdown-toggle\">\n          Traces Box <span class=\"caret\"></span>\n        </button>\n          <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\" style=\"overflow: auto; height: 350px; width: 200px\">\n            <div *ngFor=\"let newInformationElement of newInformationElements; let j = index;\" >\n            <button style=\"float: right; background-color: #0a7a74; color: #FFFFFF; margin-right: 20px\" type=\"submit\" class=\"btn btn-send\" (click)=\"delete(newInformationElement, j, $event)\">x</button>\n                <li role=\"menuitem\" style=\"padding: 5px;\" (click)=\"none($event)\"> <b>Zimmer Nummer: </b> {{newInformationElement.roomNumber}} <br><b>Trace: </b> {{newInformationElement.text}} <br><b>Tisch: </b> {{newInformationElement.tableNumber}}<br><b>Datum: </b> {{newInformationElement.date}}<br><b>Name: </b> {{newInformationElement.name}}<br><b>Mitarbeiter: </b> {{newInformationElement.employee}}</li>\n                <li class=\"divider dropdown-divider\"></li>\n            </div>\n          </ul>\n      </div>\n      <li><img alt=\"Partner\" href=\"http://www.salzburgerhof.servicio.io/wlanlandingpage\" src=\"http://servicio.io/wp-content/uploads/2017/06/Salzburger-Hof_Marke_CMYK-ohne-hintergrund.png\" style=\"height: 45px; width: auto; margin-top: 10px; margin-bottom: 5px; margin-right: 25px; float: right; text-align: right; display:table-cell; vertical-align:middle;\"></li>\n    </ul>\n</nav>\n\n<div id=\"charge-error\" class=\"alert alert-danger <% if ( !errMsg ) { %> hidden <% } %>\">\n  <%= errMsg  %>\n</div>\n\n<div class=\"row\">\n  <div class=\"container-fluid\">\n    <div class=\"col-xs-12 col-sm-8 col-lg-4 print-col\">\n      <h3 style=\"margin: 20px 0 20px 20px\">Info hinzufügen</h3>\n      <form class=\"SendInformation\"  #myForm=\"ngForm\" (submit)=\"sendInformation($event); myForm.reset() \">\n        <div class=\"form-row\">\n          <div class=\"form-group\">\n            <div class=\"col-lg-6\">\n              <input  class=\"form-control\" style=\"margin-top: 20px\" id=\"name\" [(ngModel)]=\"nameTraceInput\" name=\"Name\" placeholder=\"Name\">\n              <input  class=\"form-control\" style=\"margin-top: 20px\" id=\"roomNumber\" [(ngModel)]=\"roomNumber\" name=\"roomNumber\" placeholder=\"Zimmer Nummer\">\n            </div>\n            <div class=\"col-lg-6\">\n              <input  class=\"form-control\" style=\"margin-top: 20px\" id=\"tableNumber\" [(ngModel)]=\"tableNumber\" name=\"tableNumber\" placeholder=\"Tisch Nummer\">\n              <input  class=\"form-control\" style=\"margin-top: 20px\" id=\"employee\" [(ngModel)]=\"employee\" name=\"employee\" placeholder=\"Mitarbeiter\">\n            </div>\n            <div class=\"col-lg-12\">\n              <textarea id=\"informationText\" rows=\"5\" type=\"text\" style=\"margin-bottom: 10px; margin-top: 20px\" [(ngModel)]=\"title\" placeholder=\"Trace hinzufügen\" name=\"title\" class=\"form-control\" required>\n              </textarea>\n            </div>\n          </div>\n          <button type=\"button|submit|reset\" style=\"float: right; margin: 10px 20px 0px 0px; background-color: #0a7a74; color: #FFFFFF\" class=\"btn btn-primary\">Hinzufügen</button>\n        </div>\n      </form>\n      <div class=\"row4\">\n        <div class=\"col-md-3 col-xs-3\" style=\"height: 40px\" (click)=\"showSonnbergZirbn()\" [ngStyle]=\"{'background-color': '#' + buttonBgColor1}\">\n          <h6 [ngStyle]=\"{'color': '#' + fontColor1}\">Sonnberg-Zirbn</h6>\n        </div>\n        <div class=\"col-md-3 col-xs-3\" style=\"height: 40px\" (click)=\"showPanorama()\" [ngStyle]=\"{'background-color': '#' + buttonBgColor2}\">\n          <h6 [ngStyle]=\"{'color': '#' + fontColor2}\">Panorama</h6>\n        </div>\n        <div class=\"col-md-3 col-xs-3\" style=\"height: 40px\" (click)=\"showRestaurant()\" [ngStyle]=\"{'background-color': '#' + buttonBgColor3}\">\n          <h6 [ngStyle]=\"{'color': '#' + fontColor3}\">Restaurant</h6>\n        </div>\n        <div class=\"col-md-3 col-xs-3\" style=\"height: 40px\" (click)=\"showWintergarten()\" [ngStyle]=\"{'background-color': '#' + buttonBgColor4}\">\n          <h6 [ngStyle]=\"{'color': '#' + fontColor4}\">Wintergarten</h6>\n        </div>\n      </div>\n      <div id=\"printSectionId2\" class=\"col-xs-12 printTwo\">\n        <div class=\"row\" style=\"border-left: 5px solid #0a7a74; border-right: 5px solid #0a7a74;\" >\n          <div *ngIf=\"showSonnbergZirbnBool\">\n            <div *ngFor=\"let tableSonnbergZirbn of tablesSonnbergZirbn; let j = index;\">\n              <div class=\"t{{tableSonnbergZirbn.number}} table-item\" (click)=\"moveTable(tableSonnbergZirbn, j)\" [ngStyle]=\"{'top': tableSonnbergZirbn.topValue + 'px', 'left': tableSonnbergZirbn.leftValue + 'px', 'background-color': + tableSonnbergZirbn.bgColor, 'height': + tableSonnbergZirbn.height + 'px', 'width': + tableSonnbergZirbn.width + 'px', 'border': + tableSonnbergZirbn.border}\">\n                <div *ngIf=\"tablesSonnbergZirbn[j] !== tablesSonnbergZirbn[j+1]\">\n                  <p><b>{{tableSonnbergZirbn.number}} | {{tableSonnbergZirbn.personenAnzahlValue}} {{tableSonnbergZirbn.personenAnzahlValue2}} {{tableSonnbergZirbn.personenAnzahlValue3}}</b></p>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div *ngIf=\"showPanoramaBool\">\n            <div *ngFor=\"let tablePanorama of tablesPanorama; let j = index;\">\n              <div class=\"t{{tablePanorama.number}} table-item\" (click)=\"moveTable(tablePanorama, j)\" [ngStyle]=\"{'top': tablePanorama.topValue + 'px', 'left': tablePanorama.leftValue + 'px', 'background-color': + tablePanorama.bgColor,  'height': + tablePanorama.height + 'px', 'width': + tablePanorama.width + 'px', 'border': + tablePanorama.border}\">\n                <div *ngIf=\"tablesPanorama[j] !== tablesPanorama[j+1]\">\n                  <p><b>{{tablePanorama.number}} | {{tablePanorama.personenAnzahlValue}} {{tablePanorama.personenAnzahlValue2}} {{tablePanorama.personenAnzahlValue3}}</b></p>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div *ngIf=\"showRestaurantBool\">\n            <div *ngFor=\"let tableRestaurant of tablesRestaurant; let j = index;\">\n              <div class=\"t{{tableRestaurant.number}} table-item\" (click)=\"moveTable(tableRestaurant, j)\" [ngStyle]=\"{'top': tableRestaurant.topValue + 'px', 'left': tableRestaurant.leftValue + 'px', 'background-color': + tableRestaurant.bgColor, 'height': + tableRestaurant.height + 'px', 'width': + tableRestaurant.width + 'px', 'border': + tableRestaurant.border}\">\n                <div *ngIf=\"tablesRestaurant[j] !== tablesRestaurant[j+1]\">\n                  <p><b>{{tableRestaurant.number}} | {{tableRestaurant.personenAnzahlValue}} {{tableRestaurant.personenAnzahlValue2}} {{tableRestaurant.personenAnzahlValue3}}</b></p>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div *ngIf=\"showWintergartenBool\">\n            <div *ngFor=\"let tableWintergarten of tablesWintergarten; let j = index;\">\n              <div class=\"t{{tableWintergarten.number}} table-item\" (click)=\"moveTable(tableWintergarten, j)\" [ngStyle]=\"{'top': tableWintergarten.topValue + 'px', 'left': tableWintergarten.leftValue + 'px', 'background-color': + tableWintergarten.bgColor,  'height': + tableWintergarten.height + 'px', 'width': + tableWintergarten.width + 'px', 'border': + tableWintergarten.border, 'border-radius': + tableWintergarten.borderRadius, 'transform':  + tableWintergarten.transformValue}\">\n                <div *ngIf=\"tablesWintergarten[j] !== tablesWintergarten[j+1]\">\n                  <p><b>{{tableWintergarten.number}} | {{tableWintergarten.personenAnzahlValue}} {{tableWintergarten.personenAnzahlValue2}} {{tableWintergarten.personenAnzahlValue3}}</b></p>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xs-12 col-lg-4 upload-col\">\n      <div class=\"csv\"  style=\" width: 100%; height: 100px;\"><h3>CSV-Datei hochladen</h3>\n        <div class=\"line\"></div>\n        <form class=\"SendMessage\" (submit)=\"sendMessage($event)\">\n          <input type=\"file\" style=\"float: left; margin-top: 10px; color: #0a7a74\" (change)=\"fileChangeEvent($event)\" placeholder=\"Upload file...\" />\n          <button style=\" background-color: #0a7a74; float: right; color:  white\" type=\"button\" class=\"btn btn-send\" (click)=\"upload()\">CSV HOCHLADEN</button>\n        </form>\n      </div>\n      <div class=\"outer-cards\">\n        <h3>Im-Haus-Liste</h3>\n        <div class=\"row1\">\n          <div class='wrapper'>\n            <div *ngFor=\"let imHausListeElement of imHausListeElemente\">\n              <div class='cards-container' id='container1' [dragula]='\"evented-bag\"'>\n                <div class=\"card\" id=\"card1\" [ngStyle]=\"{'background-color': '#' + imHausListeElement.bgColor}\">\n                  <p> <b>Name:</b> {{imHausListeElement.name}}<br>\n                    <b>Zimmernummer:</b> {{imHausListeElement.zimmernummer}}<br>\n                    <b>Anreise:</b> {{imHausListeElement.anreise}}<br>\n                    <b>Abreise:</b> {{imHausListeElement.abreise}}<br>\n                    <b>Personen Anzahl:</b> {{imHausListeElement.personenAnzahl}}<br>\n                    <b>Notiz2:</b> {{imHausListeElement.notiz2}}<br>\n                  </p>\n                  <div *ngIf=\"imHausListeElement.bgColor === '0a7a74'\">\n                    <i class=\"fa fa-check\" style=\"float: right; color: white\"></i>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <h3>Anreise-Liste</h3>\n        <div class=\"row1\">\n          <div class='wrapper'>\n            <div *ngFor=\"let anreiseListeElement of anreiseListeElemente\">\n              <div class='cards-container' id='container2' [dragula]='\"evented-bag\"'>\n                <div class=\"card\" id=\"card2\" [ngStyle]=\"{'background-color': '#' + anreiseListeElement.bgColor}\">\n                  <p> <b>Name:</b> {{anreiseListeElement.name}}<br>\n                    <b>Zimmernummer:</b> {{anreiseListeElement.zimmernummer}}<br>\n                    <b>Anreise:</b> {{anreiseListeElement.anreise}}<br>\n                    <b>Abreise:</b> {{anreiseListeElement.abreise}}<br>\n                    <b>Personen Anzahl:</b> {{anreiseListeElement.personenAnzahl}}<br>\n                    <b>Notiz2:</b> {{anreiseListeElement.notiz2}}<br>\n                  </p>\n                  <div *ngIf=\"anreiseListeElement.bgColor === '0a7a74'\">\n                    <i class=\"fa fa-check\" style=\"float: right; color: white\"></i>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <h3>Traces-Liste</h3>\n        <div class=\"row1\">\n          <div class='wrapper'>\n            <div *ngFor=\"let tracesListeElement of tracesListeElemente; let t = index;\">\n              <div class='cards-container' id='container3' [dragula]='\"evented-bag\"' >\n                <div class=\"card\" id=\"card3\" [ngStyle]=\"{'background-color': '#' + tracesListeElement.bgColor}\">\n                  <p><b>Zimmernummer:</b> {{tracesListeElement.zimmernummer}}<br>\n                    <b>Name:</b> {{tracesListeElement.name}}<br>\n                    <b>Personen:</b> {{tracesListeElement.personenAnzahl}}<br>\n                    <b>Anreise:</b> {{tracesListeElement.anreise}}<br>\n                    <b>Abreise:</b> {{tracesListeElement.abreise}}<br>\n                    <b>Trace:</b> {{tracesListeElement.trace}}<br>\n                  </p>\n                  <div *ngIf=\"tracesListeElement.bgColor === '0a7a74'\">\n                    <i class=\"fa fa-check\" style=\"float: right; color: white\"></i>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-xs-12 col-sm-4 col-lg-4 table-col\">\n      <h3>Tisch Übersicht</h3>\n      <div class=\"inner-table\" style=\"padding: 0px 0px 0px 0px;\">\n        <div class=\"row3\">\n          <div class='wrapper' id=\"wrapper\">\n            <div *ngIf=\"showSonnbergZirbnBool\">\n              <div *ngFor=\"let tableSonnbergZirbn of tablesSonnbergZirbn; let j = index;\">\n                <div *ngIf=\"tablesSonnbergZirbn[j] !== tablesSonnbergZirbn[j+1]\">\n                  <button style=\"float: right; margin: 20px 0px 20px 0px; background-color: #0a7a74; color: #FFFFFF\" type=\"button\" class=\"btn btn-send\" (click)=\"occupy(tableSonnbergZirbn, j)\">{{tableSonnbergZirbn.isBesetzt === 'true' ? 'FREI MACHEN' : '' }}</button>\n                  <h4><b> Tisch: {{tableSonnbergZirbn.number}}</b> </h4><br>\n                  <div class='cards-container' id='containerSonnbergZirbn'  [ngStyle]=\"{'background-color': + tableSonnbergZirbn.bgColor}\">\n                    <div class=\"table\" [ngStyle]=\"{'background-color': '#' + tableSonnbergZirbn.bgColor}\">\n                      <div *ngIf=\"tableSonnbergZirbn.isBesetzt === 'true'\">\n                        <p style=\"background-color: #FFFFFF; padding: 10px\">\n                          <b> Name:</b> {{tableSonnbergZirbn.nameValue}}<br>\n                          <b> Zimmernummer:</b> {{tableSonnbergZirbn.zimmernummerValue}}<br>\n                          <b> Anreise Datum:</b> {{tableSonnbergZirbn.anreiseValue}}<br>\n                          <b> Abreise Datum:</b> {{tableSonnbergZirbn.abreiseValue}}<br>\n                          <b> Personenanzahl:</b> {{tableSonnbergZirbn.personenAnzahlValue}}<br>\n                          <b> Notiz2:</b> {{tableSonnbergZirbn.notiz2Value}}<br>\n                          <b> Trace:</b> {{tableSonnbergZirbn.trace}}<br>\n                        </p>\n                        <div *ngIf=\"tableSonnbergZirbn.nameValue2\">\n                          <p style=\"background-color: #FFFFFF; padding: 10px\">\n                            <b> Name:</b> {{tableSonnbergZirbn.nameValue2}}<br>\n                            <b> Zimmernummer:</b> {{tableSonnbergZirbn.zimmernummerValue2}}<br>\n                            <b> Anreise Datum:</b> {{tableSonnbergZirbn.anreiseValue2}}<br>\n                            <b> Abreise Datum:</b> {{tableSonnbergZirbn.abreiseValue2}}<br>\n                            <b> Personenanzahl:</b> {{tableSonnbergZirbn.personenAnzahlValue2}}<br>\n                            <b> Notiz2:</b> {{tableSonnbergZirbn.notiz2Value2}}<br>\n                            <b> Trace:</b> {{tableSonnbergZirbn.trace2}}<br>\n                          </p>\n                        </div>\n                        <div *ngIf=\"tableSonnbergZirbn.nameValue3\">\n                          <p style=\"background-color: #FFFFFF; padding: 10px\">\n                            <b> Name:</b> {{tableSonnbergZirbn.nameValue3}}<br>\n                            <b> Zimmernummer:</b> {{tableSonnbergZirbn.zimmernummerValue3}}<br>\n                            <b> Anreise Datum:</b> {{tableSonnbergZirbn.anreiseValue3}}<br>\n                            <b> Abreise Datum:</b> {{tableSonnbergZirbn.abreiseValue3}}<br>\n                            <b> Personenanzahl:</b> {{tableSonnbergZirbn.personenAnzahlValue3}}<br>\n                            <b> Notiz2:</b> {{tableSonnbergZirbn.notiz2Value3}}<br>\n                            <b> Trace:</b> {{tableSonnbergZirbn.trace3}}<br>\n                          </p>\n                        </div>\n                        <div *ngIf=\"tableSonnbergZirbn.newTraceText\">\n                          <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                            <b> Zimmernummer: </b>{{tableSonnbergZirbn.newTraceRoomNumber}}<br> <b> Neuer Trace: </b>{{tableSonnbergZirbn.newTraceText}} <br> <b> Tischnummer: </b>{{tableSonnbergZirbn.newTraceTableNumber}} <br> <b> Mitarbeiter: </b>{{tableSonnbergZirbn.newTraceEmployee}} <br> <b> Name: </b>{{tableSonnbergZirbn.newTraceName}} <br> <b> Datum: </b>{{tableSonnbergZirbn.newTraceDate}}\n                          </p>\n                        </div>\n                        <div *ngIf=\"tableSonnbergZirbn.newTraceText1\">\n                          <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                            <b> Zimmernummer: </b>{{tableSonnbergZirbn.newTraceRoomNumber1}}<br> <b> Neuer Trace: </b>{{tableSonnbergZirbn.newTraceText1}} <br> <b> Tischnummer: </b>{{tableSonnbergZirbn.newTraceTableNumber1}} <br> <b> Mitarbeiter: </b>{{tableSonnbergZirbn.newTraceEmployee1}} <br> <b> Name: </b>{{tableSonnbergZirbn.newTraceName1}} <br> <b> Datum: </b>{{tableSonnbergZirbn.newTraceDate1}}\n                          </p>\n                        </div>\n                        <div *ngIf=\"tableSonnbergZirbn.newTraceText2\">\n                          <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                            <b> Zimmernummer: </b>{{tableSonnbergZirbn.newTraceRoomNumber2}}<br> <b> Neuer Trace: </b>{{tableSonnbergZirbn.newTraceText2}} <br> <b> Tischnummer: </b>{{tableSonnbergZirbn.newTraceTableNumber2}} <br> <b> Mitarbeiter: </b>{{tableSonnbergZirbn.newTraceEmployee2}} <br> <b> Name: </b>{{tableSonnbergZirbn.newTraceName2}} <br> <b> Datum: </b>{{tableSonnbergZirbn.newTraceDate2}}\n                          </p>\n                        </div>\n                      </div>\n                    </div>\n                    <div *ngIf=\"tableSonnbergZirbn.placeholder === 'true'\">\n                      <p [dragula]='\"evented-bag\"' id=\"Sonnberg-Zirbn\" style=\"background-color: #9d9d9d; border: dashed 3px black; margin-top: 50px; opacity: 0.4; padding: 10px 10px 10px 10px\">Listen-Element hier hin ziehen! {{tableSonnbergZirbn.number}} {{tableSonnbergZirbn.department}} {{j}}</p>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <div *ngIf=\"showPanoramaBool\">\n              <div *ngFor=\"let tablePanorama of tablesPanorama; let j = index;\">\n                <div *ngIf=\"tablesPanorama[j] !== tablesPanorama[j+1]\">\n                  <button style=\"float: right; margin: 20px 0px 20px 0px; background-color: #0a7a74; color: #FFFFFF\" type=\"button\" class=\"btn btn-send\" (click)=\"occupy(tablePanorama, j)\">{{tablePanorama.isBesetzt === 'true' ? 'FREI MACHEN' : ''}}</button>\n                  <h4><b> Tisch: {{tablePanorama.number}}</b> </h4><br>\n                  <div class='cards-container' id='containerPanorama' [ngStyle]=\"{'background-color': + tablePanorama.bgColor}\">\n                    <div class=\"table\" [ngStyle]=\"{'background-color': '#' + tablePanorama.bgColor}\">\n                      <div *ngIf=\"tablePanorama.isBesetzt === 'true'\">\n                        <p style=\"background-color: #FFFFFF; padding: 10px\">\n                          <b> Name:</b> {{tablePanorama.nameValue}}<br>\n                          <b> Zimmernummer:</b> {{tablePanorama.zimmernummerValue}}<br>\n                          <b> Anreise Datum:</b> {{tablePanorama.anreiseValue}}<br>\n                          <b> Abreise Datum:</b> {{tablePanorama.abreiseValue}}<br>\n                          <b> Personenanzahl:</b> {{tablePanorama.personenAnzahlValue}}<br>\n                          <b> Notiz2:</b> {{tablePanorama.notiz2Value}}<br>\n                          <b> Trace:</b> {{tablePanorama.trace}}<br>\n                        </p>\n                        <div *ngIf=\"tablePanorama.nameValue2\">\n                          <p style=\"background-color: #FFFFFF; padding: 10px\">\n                            <b> Name:</b> {{tablePanorama.nameValue2}}<br>\n                            <b> Zimmernummer:</b> {{tablePanorama.zimmernummerValue2}}<br>\n                            <b> Anreise Datum:</b> {{tablePanorama.anreiseValue2}}<br>\n                            <b> Abreise Datum:</b> {{tablePanorama.abreiseValue2}}<br>\n                            <b> Personenanzahl:</b> {{tablePanorama.personenAnzahlValue2}}<br>\n                            <b> Notiz2:</b> {{tablePanorama.notiz2Value2}}<br>\n                            <b> Trace:</b> {{tablePanorama.trace2}}<br>\n                          </p>\n                        </div>\n                        <div *ngIf=\"tablePanorama.nameValue3\">\n                          <p style=\"background-color: #FFFFFF; padding: 10px\">\n                            <b> Name:</b> {{tablePanorama.nameValue3}}<br>\n                            <b> Zimmernummer:</b> {{tablePanorama.zimmernummerValue3}}<br>\n                            <b> Anreise Datum:</b> {{tablePanorama.anreiseValue3}}<br>\n                            <b> Abreise Datum:</b> {{tablePanorama.abreiseValue3}}<br>\n                            <b> Personenanzahl:</b> {{tablePanorama.personenAnzahlValue3}}<br>\n                            <b> Notiz2:</b> {{tablePanorama.notiz2Value3}}<br>\n                            <b> Trace:</b> {{tablePanorama.trace3}}<br>\n                          </p>\n                        </div>\n                        <div *ngIf=\"tablePanorama.newTraceText\">\n                          <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                            <b> Zimmernummer: </b>{{tablePanorama.newTraceRoomNumber}}<br> <b> Neuer Trace: </b>{{tablePanorama.newTraceText}} <br> <b> Tischnummer: </b>{{tablePanorama.newTraceTableNumber}} <br> <b> Mitarbeiter: </b>{{tablePanorama.newTraceEmployee}} <br> <b> Name: </b>{{tablePanorama.newTraceName}} <br> <b> Datum: </b>{{tablePanorama.newTraceDate}}\n                          </p>\n                        </div>\n                        <div *ngIf=\"tablePanorama.newTraceText1\">\n                          <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                            <b> Zimmernummer: </b>{{tablePanorama.newTraceRoomNumber1}}<br> <b> Neuer Trace: </b>{{tablePanorama.newTraceText1}} <br> <b> Tischnummer: </b>{{tablePanorama.newTraceTableNumber1}} <br> <b> Mitarbeiter: </b>{{tablePanorama.newTraceEmployee1}} <br> <b> Name: </b>{{tablePanorama.newTraceName1}} <br> <b> Datum: </b>{{tablePanorama.newTraceDate1}}\n                          </p>\n                        </div>\n                        <div *ngIf=\"tablePanorama.newTraceText2\">\n                          <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                            <b> Zimmernummer: </b>{{tablePanorama.newTraceRoomNumber2}}<br> <b> Neuer Trace: </b>{{tablePanorama.newTraceText2}} <br> <b> Tischnummer: </b>{{tablePanorama.newTraceTableNumber2}} <br> <b> Mitarbeiter: </b>{{tablePanorama.newTraceEmployee2}} <br> <b> Name: </b>{{tablePanorama.newTraceName2}} <br> <b> Datum: </b>{{tablePanorama.newTraceDate2}}\n                          </p>\n                        </div>\n                      </div>\n                    </div>\n                    <div *ngIf=\"tablePanorama.placeholder === 'true'\">\n                      <p [dragula]='\"evented-bag\"' id=\"Panorama\" style=\"background-color: #9d9d9d; border: dashed 3px black; margin-top: 50px; opacity: 0.4; padding: 10px 10px 10px 10px\">Listen-Element hier hin ziehen!  {{tablePanorama.number}} {{tablePanorama.department}} {{j}}</p>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <div *ngIf=\"showRestaurantBool\">\n              <div *ngFor=\"let tableRestaurant of tablesRestaurant; let j = index;\">\n                <div *ngIf=\"tablesRestaurant[j] !== tablesRestaurant[j+1]\">\n                  <button style=\"float: right; margin: 20px 0px 20px 0px; background-color: #0a7a74; color: #FFFFFF\" type=\"button\" class=\"btn btn-send\" (click)=\"occupy(tableRestaurant, j)\">{{tableRestaurant.isBesetzt === 'true' ? 'FREI MACHEN' : ''}}</button>\n                  <h4><b> Tisch: {{tableRestaurant.number}}</b> </h4><br>\n                  <div class='cards-container' id='containerRestaurant' [ngStyle]=\"{'background-color': + tableRestaurant.bgColor}\">\n                    <div class=\"table\" [ngStyle]=\"{'background-color': '#' + tableRestaurant.bgColor}\">\n                      <div *ngIf=\"tableRestaurant.isBesetzt === 'true'\">\n                        <p style=\"background-color: #FFFFFF; padding: 10px\">\n                          <b> Name:</b> {{tableRestaurant.nameValue}}<br>\n                          <b> Zimmernummer:</b> {{tableRestaurant.zimmernummerValue}}<br>\n                          <b> Anreise Datum:</b> {{tableRestaurant.anreiseValue}}<br>\n                          <b> Abreise Datum:</b> {{tableRestaurant.abreiseValue}}<br>\n                          <b> Personenanzahl:</b> {{tableRestaurant.personenAnzahlValue}}<br>\n                          <b> Notiz2:</b> {{tableRestaurant.notiz2Value}}<br>\n                          <b> Trace:</b> {{tableRestaurant.trace}}\n\n                        </p>\n                        <div *ngIf=\"tableRestaurant.nameValue2\">\n                          <p style=\"background-color: #FFFFFF; padding: 10px\">\n                            <b> Name:</b> {{tableRestaurant.nameValue2}}<br>\n                            <b> Zimmernummer:</b> {{tableRestaurant.zimmernummerValue2}}<br>\n                            <b> Anreise Datum:</b> {{tableRestaurant.anreiseValue2}}<br>\n                            <b> Abreise Datum:</b> {{tableRestaurant.abreiseValue2}}<br>\n                            <b> Personenanzahl:</b> {{tableRestaurant.personenAnzahlValue2}}<br>\n                            <b> Notiz2:</b> {{tableRestaurant.notiz2Value2}}<br>\n                            <b> Trace:</b> {{tableRestaurant.trace2}}\n                          </p>\n                        </div>\n                        <div *ngIf=\"tableRestaurant.nameValue3\">\n                          <p style=\"background-color: #FFFFFF; padding: 10px\">\n                            <b> Name:</b> {{tableRestaurant.nameValue3}}<br>\n                            <b> Zimmernummer:</b> {{tableRestaurant.zimmernummerValue3}}<br>\n                            <b> Anreise Datum:</b> {{tableRestaurant.anreiseValue3}}<br>\n                            <b> Abreise Datum:</b> {{tableRestaurant.abreiseValue3}}<br>\n                            <b> Personenanzahl:</b> {{tableRestaurant.personenAnzahlValue3}}<br>\n                            <b> Notiz2:</b> {{tableRestaurant.notiz2Value3}}<br>\n                            <b> Trace:</b> {{tableRestaurant.trace3}}\n                          </p>\n                        </div>\n                        <div *ngIf=\"tableRestaurant.newTraceText\">\n                          <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                            <b> Zimmernummer: </b>{{tableRestaurant.newTraceRoomNumber}}<br> <b> Neuer Trace: </b>{{tableRestaurant.newTraceText}} <br> <b> Tischnummer: </b>{{tableRestaurant.newTraceTableNumber}} <br> <b> Mitarbeiter: </b>{{tableRestaurant.newTraceEmployee}} <br> <b> Name: </b>{{tableRestaurant.newTraceName}} <br> <b> Datum: </b>{{tableRestaurant.newTraceDate}}\n                          </p>\n                        </div>\n                        <div *ngIf=\"tableRestaurant.newTraceText1\">\n                          <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                            <b> Zimmernummer: </b>{{tableRestaurant.newTraceRoomNumber1}}<br> <b> Neuer Trace: </b>{{tableRestaurant.newTraceText1}} <br> <b> Tischnummer: </b>{{tableRestaurant.newTraceTableNumber1}} <br> <b> Mitarbeiter: </b>{{tableRestaurant.newTraceEmployee1}} <br> <b> Name: </b>{{tableRestaurant.newTraceName1}} <br> <b> Datum: </b>{{tableRestaurant.newTraceDate1}}\n                          </p>\n                        </div>\n                        <div *ngIf=\"tableRestaurant.newTraceText2\">\n                          <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                            <b> Zimmernummer: </b>{{tableRestaurant.newTraceRoomNumber2}}<br> <b> Neuer Trace: </b>{{tableRestaurant.newTraceText2}} <br> <b> Tischnummer: </b>{{tableRestaurant.newTraceTableNumber2}} <br> <b> Mitarbeiter: </b>{{tableRestaurant.newTraceEmployee2}} <br> <b> Name: </b>{{tableRestaurant.newTraceName2}} <br> <b> Datum: </b>{{tableRestaurant.newTraceDate2}}\n                          </p>\n                        </div>\n                      </div>\n                    </div>\n                    <div *ngIf=\"tableRestaurant.placeholder === 'true'\">\n                      <p [dragula]='\"evented-bag\"' id=\"Restaurant\" style=\"background-color: #9d9d9d; border: dashed 3px black; margin-top: 50px; opacity: 0.4; padding: 10px 10px 10px 10px\">Listen-Element hier hin ziehen! {{tableRestaurant.number}} {{tableRestaurant.department}} {{j}}</p>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n\n            <div *ngIf=\"showWintergartenBool\">\n              <div *ngFor=\"let tableWintergarten of tablesWintergarten; let j = index;\">\n                <div *ngIf=\"tablesWintergarten[j] !== tablesWintergarten[j+1]\">\n                  <button style=\"float: right; margin: 20px 0px 20px 0px; background-color: #0a7a74; color: #FFFFFF\" type=\"button\" class=\"btn btn-send\" (click)=\"occupy(tableWintergarten, j)\">{{tableWintergarten.isBesetzt === 'true' ? 'FREI MACHEN' : ''}}</button>\n                  <h4><b> Tisch: {{tableWintergarten.number}}</b> </h4><br>\n                  <div class='cards-container' id='containerWintergarten' [ngStyle]=\"{'background-color': + tableWintergarten.bgColor}\">\n                    <div class=\"table\" [ngStyle]=\"{'background-color': '#' + tableWintergarten.bgColor}\">\n                      <div *ngIf=\"tableWintergarten.isBesetzt === 'true'\">\n                        <p style=\"background-color: #FFFFFF; padding: 10px\">\n                          <b> Name:</b> {{tableWintergarten.nameValue}}<br>\n                          <b> Zimmernummer:</b> {{tableWintergarten.zimmernummerValue}}<br>\n                          <b> Anreise Datum:</b> {{tableWintergarten.anreiseValue}}<br>\n                          <b> Abreise Datum:</b> {{tableWintergarten.abreiseValue}}<br>\n                          <b> Personenanzahl:</b> {{tableWintergarten.personenAnzahlValue}}<br>\n                          <b> Notiz2:</b> {{tableWintergarten.notiz2Value}}<br>\n                          <b> Trace:</b> {{tableWintergarten.trace}}\n                        </p>\n                        <div *ngIf=\"tableWintergarten.nameValue2\">\n                          <p style=\"background-color: #FFFFFF; padding: 10px\">\n                            <b> Name:</b> {{tableWintergarten.nameValue2}}<br>\n                            <b> Zimmernummer:</b> {{tableWintergarten.zimmernummerValue2}}<br>\n                            <b> Anreise Datum:</b> {{tableWintergarten.anreiseValue2}}<br>\n                            <b> Abreise Datum:</b> {{tableWintergarten.abreiseValue2}}<br>\n                            <b> Personenanzahl:</b> {{tableWintergarten.personenAnzahlValue2}}<br>\n                            <b> Notiz2:</b> {{tableWintergarten.notiz2Value2}}<br>\n                            <b> Trace:</b> {{tableWintergarten.trace2}}\n                          </p>\n                        </div>\n                        <div *ngIf=\"tableWintergarten.nameValue3\">\n                          <p style=\"background-color: #FFFFFF; padding: 10px\">\n                            <b> Name:</b> {{tableWintergarten.nameValue3}}<br>\n                            <b> Zimmernummer:</b> {{tableWintergarten.zimmernummerValue3}}<br>\n                            <b> Anreise Datum:</b> {{tableWintergarten.anreiseValue3}}<br>\n                            <b> Abreise Datum:</b> {{tableWintergarten.abreiseValue3}}<br>\n                            <b> Personenanzahl:</b> {{tableWintergarten.personenAnzahlValue3}}<br>\n                            <b> Notiz2:</b> {{tableWintergarten.notiz2Value3}}<br>\n                            <b> Trace:</b> {{tableWintergarten.trace3}}\n                          </p>\n                        </div>\n                        <div *ngIf=\"tableWintergarten.newTraceText\">\n                          <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                            <b> Zimmernummer: </b>{{tableWintergarten.newTraceRoomNumber}}<br> <b> Neuer Trace: </b>{{tableWintergarten.newTraceText}} <br> <b> Tischnummer: </b>{{tableWintergarten.newTraceTableNumber}} <br> <b> Mitarbeiter: </b>{{tableWintergarten.newTraceEmployee}} <br> <b> Name: </b>{{tableWintergarten.newTraceName}} <br> <b> Datum: </b>{{tableWintergarten.newTraceDate}}\n                          </p>\n                        </div>\n                        <div *ngIf=\"tableWintergarten.newTraceText1\">\n                          <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                            <b> Zimmernummer: </b>{{tableWintergarten.newTraceRoomNumber1}}<br> <b> Neuer Trace: </b>{{tableWintergarten.newTraceText1}} <br> <b> Tischnummer: </b>{{tableWintergarten.newTraceTableNumber1}} <br> <b> Mitarbeiter: </b>{{tableWintergarten.newTraceEmployee1}} <br> <b> Name: </b>{{tableWintergarten.newTraceName1}} <br> <b> Datum: </b>{{tableWintergarten.newTraceDate1}}\n                          </p>\n                        </div>\n                        <div *ngIf=\"tableWintergarten.newTraceText2\">\n                          <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                            <b> Zimmernummer: </b>{{tableWintergarten.newTraceRoomNumber2}}<br> <b> Neuer Trace: </b>{{tableWintergarten.newTraceText2}} <br> <b> Tischnummer: </b>{{tableWintergarten.newTraceTableNumber2}} <br> <b> Mitarbeiter: </b>{{tableWintergarten.newTraceEmployee2}} <br> <b> Name: </b>{{tableWintergarten.newTraceName2}} <br> <b> Datum: </b>{{tableWintergarten.newTraceDate2}}\n                          </p>\n                        </div>\n                      </div>\n                    </div>\n                    <div *ngIf=\"tableWintergarten.placeholder === 'true'\">\n                      <p [dragula]='\"evented-bag\"' id=\"Wintergarten\" style=\"background-color: #9d9d9d; border: dashed 3px black; margin-top: 50px; opacity: 0.4; padding: 10px 10px 10px 10px\">Listen-Element hier hin ziehen! {{tableWintergarten.number}} {{tableWintergarten.department}} {{j}}</p>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    </div>\n  </div>\n<div id=\"printSectionId3\" class=\"section3\">\n  <table style=\"border: solid 1px black; border-collapse: collapse;\">\n    <tr>\n      {{dateGeneratedListe}}\n    </tr>\n    <tr style=\"border: solid 1px black;\" >\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">Zimmernummer</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">Name</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">PAX</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">Abreise</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">GRP</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">Tisch</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">Notiz2</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">Trace</th>\n    </tr>\n    <div *ngFor=\"let table of tables\">\n      <tr style=\"border: solid 1px black;\">\n        <div *ngIf=\"table.nameValue\">\n          <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.zimmernummerValue}}</td>\n          <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.nameValue}}</td>\n          <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.personenAnzahlValue}}</td>\n          <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.abreiseValue}}</td>\n          <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n          <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.number}}</td>\n          <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.notiz2Value}}</td>\n          <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.trace}}</td>\n        </div>\n      </tr>\n    </div>\n  </table>\n</div>\n<div id=\"printSectionId1\" class=\"section3\">\n  <div *ngIf=\"showPanoramaBool\">\n    <table style=\"border: solid 1px black; border-collapse: collapse;\">\n      <tr>\n        {{dateGeneratedListe}}\n      </tr>\n      <tr>\n        Panorama\n      </tr>\n      <tr style=\"border: solid 1px black;\" >\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Zimmernummer</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Name</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">PAX</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Abreise</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">GRP</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Tisch</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Notiz2</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Trace</th>\n      </tr>\n      <div *ngFor=\"let table of tablesPanorama\">\n        <div *ngIf=\"table.nameValue\">\n          <tr style=\"border: solid 1px black;\">\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.zimmernummerValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.nameValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.personenAnzahlValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.abreiseValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.number}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.notiz2Value}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.trace}}</td>\n          </tr>\n        </div>\n        <div *ngIf=\"table.nameValue2\">\n          <tr style=\"border: solid 1px black;\">\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.zimmernummerValue2}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.nameValue2}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.personenAnzahlValue2}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.abreiseValue2}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.number}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.notiz2Value2}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.trace2}}</td>\n          </tr>\n        </div>\n        <div *ngIf=\"table.nameValue3\">\n          <tr style=\"border: solid 1px black;\">\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.zimmernummerValue3}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.nameValue3}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.personenAnzahlValue3}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.abreiseValue3}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.number}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.notiz2Value3}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.trace3}}</td>\n          </tr>\n        </div>\n      </div>\n    </table>\n  </div>\n  <div *ngIf=\"showRestaurantBool\">\n    <table style=\"border: solid 1px black; border-collapse: collapse;\">\n      <tr>\n        {{dateGeneratedListe}}\n      </tr>\n      <tr>\n        Restaurant\n      </tr>\n      <tr style=\"border: solid 1px black;\" >\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Zimmernummer</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Name</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">PAX</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Abreise</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">GRP</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Tisch</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Notiz2</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Trace</th>\n      </tr>\n      <div *ngFor=\"let table of tablesRestaurant\">\n        <div *ngIf=\"table.nameValue\">\n          <tr style=\"border: solid 1px black;\">\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.zimmernummerValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.nameValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.personenAnzahlValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.abreiseValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.number}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.notiz2Value}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.trace}}</td>\n          </tr>\n        </div>\n        <div *ngIf=\"table.nameValue2\">\n          <tr style=\"border: solid 1px black;\">\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.zimmernummerValue2}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.nameValue2}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.personenAnzahlValue2}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.abreiseValue2}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.number}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.notiz2Value2}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.trace2}}</td>\n          </tr>\n        </div>\n        <div *ngIf=\"table.nameValue3\">\n          <tr style=\"border: solid 1px black;\">\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.zimmernummerValue3}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.nameValue3}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.personenAnzahlValue3}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.abreiseValue3}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.number}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.notiz2Value3}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.trace3}}</td>\n          </tr>\n        </div>\n      </div>\n    </table>\n  </div>\n  <div *ngIf=\"showSonnbergZirbnBool\">\n    <table style=\"border: solid 1px black; border-collapse: collapse;\">\n      <tr>\n        {{dateGeneratedListe}}\n      </tr>\n      <tr>\n        Sonnberg-Zirbn\n      </tr>\n      <tr style=\"border: solid 1px black;\" >\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Zimmernummer</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Name</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">PAX</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Abreise</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">GRP</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Tisch</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Notiz2</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Trace</th>\n      </tr>\n      <div *ngFor=\"let table of tablesSonnbergZirbn\">\n        <div *ngIf=\"table.nameValue\">\n          <tr style=\"border: solid 1px black;\">\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.zimmernummerValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.nameValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.personenAnzahlValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.abreiseValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.number}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.notiz2Value}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.trace}}</td>\n          </tr>\n        </div>\n        <div *ngIf=\"table.nameValue2\">\n          <tr style=\"border: solid 1px black;\">\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.zimmernummerValue2}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.nameValue2}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.personenAnzahlValue2}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.abreiseValue2}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.number}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.notiz2Value2}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.trace2}}</td>\n          </tr>\n        </div>\n        <div *ngIf=\"table.nameValue3\">\n          <tr style=\"border: solid 1px black;\">\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.zimmernummerValue3}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.nameValue3}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.personenAnzahlValue3}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.abreiseValue3}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.number}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.notiz2Value3}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.trace3}}</td>\n          </tr>\n        </div>\n      </div>\n    </table>\n  </div>\n  <div *ngIf=\"showWintergartenBool\">\n    <table style=\"border: solid 1px black; border-collapse: collapse;\">\n      <tr>\n        {{dateGeneratedListe}}\n      </tr>\n      <tr>\n        Wintergarten\n      </tr>\n      <tr style=\"border: solid 1px black;\" >\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Zimmernummer</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Name</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">PAX</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Abreise</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">GRP</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Tisch</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Notiz2</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Trace</th>\n      </tr>\n      <div *ngFor=\"let table of tablesWintergarten\">\n        <div *ngIf=\"table.nameValue\">\n          <tr style=\"border: solid 1px black;\">\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.zimmernummerValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.nameValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.personenAnzahlValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.abreiseValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.number}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.notiz2Value}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.trace}}</td>\n          </tr>\n        </div>\n        <div *ngIf=\"table.nameValue2\">\n          <tr style=\"border: solid 1px black;\">\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.zimmernummerValue2}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.nameValue2}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.personenAnzahlValue2}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.abreiseValue2}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.number}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.notiz2Value2}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.trace2}}</td>\n          </tr>\n        </div>\n        <div *ngIf=\"table.nameValue3\">\n          <tr style=\"border: solid 1px black;\">\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.zimmernummerValue3}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.nameValue3}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.personenAnzahlValue3}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.abreiseValue3}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.number}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.notiz2Value3}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.trace3}}</td>\n          </tr>\n        </div>\n      </div>\n    </table>\n  </div>\n\n</div>\n\n\n</body>\n\n</html>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/tischplan.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TischplanComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_tischplan_service__ = __webpack_require__("../../../../../src/app/services/tischplan.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_dragula__ = __webpack_require__("../../../../ng2-dragula/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Table__ = __webpack_require__("../../../../../Table.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TischplanComponent = (function () {
    function TischplanComponent(tischplanService, http, _flashMessagesService, dragulaService, element, renderer) {
        var _this = this;
        this.tischplanService = tischplanService;
        this.http = http;
        this._flashMessagesService = _flashMessagesService;
        this.dragulaService = dragulaService;
        this.element = element;
        this.renderer = renderer;
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
        var DomBaseElement = this.element.nativeElement;
        var wrapperElementsChildNames = [];
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
            _this.formatAzListe(tables);
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
    TischplanComponent.prototype.formatAzListe = function (tables) {
        function filterByID(obj) {
            if ('nameValue2' in obj || 'nameValue3' in obj) {
                return true;
            }
            else {
                return false;
            }
        }
        this.tempTablesArray = this.tables.filter(filterByID);
        for (var i = 0; i < this.tables.length; i++) {
            if (this.tables[i].nameValue2 || this.tables[i].nameValue3) {
                this.tables.splice(i, 1);
            }
        }
        for (var i = 0; i < this.tempTablesArray.length; i++) {
            this.tempTablesArray2[i] = new __WEBPACK_IMPORTED_MODULE_5__Table__["a" /* Table */]();
        }
        for (var i = 0; i < this.tempTablesArray.length; i++) {
            this.tempTablesArray3[i] = new __WEBPACK_IMPORTED_MODULE_5__Table__["a" /* Table */]();
        }
        for (var i = 0; i < this.tempTablesArray.length; i++) {
            this.tempTablesArray1[i] = new __WEBPACK_IMPORTED_MODULE_5__Table__["a" /* Table */]();
        }
        for (var a = 0; a < this.tempTablesArray.length; a++) {
            if (typeof this.tempTablesArray[a].nameValue !== "undefined") {
                this.tempTablesArray2[a].nameValue = this.tempTablesArray[a].nameValue;
                this.tempTablesArray2[a].notiz2Value = this.tempTablesArray[a].notiz2Value;
                this.tempTablesArray2[a].personenAnzahlValue = this.tempTablesArray[a].personenAnzahlValue;
                this.tempTablesArray2[a].number = this.tempTablesArray[a].number;
                this.tempTablesArray2[a].zimmernummerValue = this.tempTablesArray[a].zimmernummerValue;
                this.tempTablesArray2[a].anreiseValue = this.tempTablesArray[a].anreiseValue;
                this.tempTablesArray2[a].abreiseValue = this.tempTablesArray[a].abreiseValue;
                this.tempTablesArray2[a].trace = this.tempTablesArray[a].trace;
                this.tables = this.tables.concat(this.tempTablesArray2[a]);
            }
        }
        for (var a = 0; a < this.tempTablesArray.length; a++) {
            if (typeof this.tempTablesArray[a].nameValue2 !== "undefined") {
                this.tempTablesArray1[a].nameValue = this.tempTablesArray[a].nameValue2;
                this.tempTablesArray1[a].notiz2Value = this.tempTablesArray[a].notiz2Value2;
                this.tempTablesArray1[a].personenAnzahlValue = this.tempTablesArray[a].personenAnzahlValue2;
                this.tempTablesArray1[a].number = this.tempTablesArray[a].number;
                this.tempTablesArray1[a].zimmernummerValue = this.tempTablesArray[a].zimmernummerValue2;
                this.tempTablesArray1[a].anreiseValue = this.tempTablesArray[a].anreiseValue2;
                this.tempTablesArray1[a].abreiseValue = this.tempTablesArray[a].abreiseValue2;
                this.tempTablesArray1[a].trace = this.tempTablesArray[a].trace2;
                this.tables = this.tables.concat(this.tempTablesArray1[a]);
            }
        }
        for (var a = 0; a < this.tempTablesArray.length; a++) {
            if (typeof this.tempTablesArray[a].nameValue3 !== "undefined") {
                this.tempTablesArray3[a].nameValue = this.tempTablesArray[a].nameValue3;
                this.tempTablesArray3[a].notiz2Value = this.tempTablesArray[a].notiz2Value3;
                this.tempTablesArray3[a].personenAnzahlValue = this.tempTablesArray[a].personenAnzahlValue3;
                this.tempTablesArray3[a].number = this.tempTablesArray[a].number;
                this.tempTablesArray3[a].zimmernummerValue = this.tempTablesArray[a].zimmernummerValue3;
                this.tempTablesArray3[a].anreiseValue = this.tempTablesArray[a].anreiseValue3;
                this.tempTablesArray3[a].abreiseValue = this.tempTablesArray[a].abreiseValue3;
                this.tempTablesArray3[a].trace = this.tempTablesArray[a].trace3;
                this.tables = this.tables.concat(this.tempTablesArray3[a]);
            }
        }
        /*
         for (let row=0; row<tempTablesArray.length; row++) {
         tempTablesArray[row] = [];
         for (let col=0; col < tempTablesArray[row].length; col++) {
         tempTablesArrayRow = tempTablesArray[row][col];
         }
         }
    
    
    
    
         <b> Name:</b> {{tableTeestubeTeelounge.nameValue2}}<br>
         <b> Zimmernummer:</b> {{tableTeestubeTeelounge.zimmernummerValue2}}<br>
         <b> Anreise Datum:</b> {{tableTeestubeTeelounge.anreiseValue2}}<br>
         <b> Abreise Datum:</b> {{tableTeestubeTeelounge.abreiseValue2}}<br>
         <b> Personenanzahl:</b> {{tableTeestubeTeelounge.personenAnzahlValue2}}<br>
         <b> Notiz1:</b> {{tableTeestubeTeelounge.notiz3Value}}<br>
         <b> Notiz2:</b> {{tableTeestubeTeelounge.notiz4Value}}<br>
         <b> Trace:</b> {{tableTeestubeTeelounge.trace2}}<br>
         <b> BemerkungValue:</b> {{tableTeestubeTeelounge.bemerkungValue3}}<br>
         </p>
         </div>
         <div *ngIf="tableTeestubeTeelounge.nameValue3">
         <p style="background-color: #FFFFFF; padding: 10px">
         <b> Name:</b> {{tableTeestubeTeelounge.nameValue3}}<br>
         <b> Sprache:</b> {{tableTeestubeTeelounge.katValue3}}<br>
         <b> Zimmernummer:</b> {{tableTeestubeTeelounge.zimmernummerValue3}}<br>
         <b> Anreise Datum:</b> {{tableTeestubeTeelounge.anreiseValue3}}<br>
         <b> Abreise Datum:</b> {{tableTeestubeTeelounge.abreiseValue3}}<br>
         <b> Personenanzahl:</b> {{tableTeestubeTeelounge.personenAnzahlValue3}}<br>
         <b> Notiz1:</b> {{tableTeestubeTeelounge.notiz5Value}}<br>
         <b> Notiz2:</b> {{tableTeestubeTeelounge.notiz6Value}}<br>
         <b> Trace:</b> {{tableTeestubeTeelounge.trace3}}<br>
         <b> BemerkungValue:</b> {{tableTeestubeTeelounge.bemerkungValue6}}<br>
    
    
         */
        console.log(this.tempTablesArray1);
        console.log(this.tempTablesArray);
        console.log(this.tempTablesArray2);
        console.log(this.tempTablesArray3);
        console.log('this.tables before sort ');
        console.log(this.tables);
        for (var i = 0; i < this.tables.length; i++) {
            if (!("nameValue" in this.tables[i])) {
                this.tables.splice(i, 1);
            }
        }
        /*
         this.tables.sort(function(a, b){
         if (a.nameValue < b.nameValue) return -1;
         if (a.nameValue > b.nameValue) return 1;
         return 0;
         });
    
         */
        this.tables = this.tables.sort(function (a, b) {
            var nameA = "";
            var nameB = "";
            if (typeof a.nameValue !== "undefined") {
                nameA = a.nameValue.toUpperCase(); // ignore upper and lowercase
            }
            if (typeof b.nameValue !== "undefined") {
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
        console.log('this.tables after sort: ');
        console.log("this.uniqueTables: ");
        console.log(this.uniqueTables);
        for (var i = 0; i < this.tables.length; i++) {
            console.log(i);
            if ("nameValue" in this.tables[i]) {
                console.log("--->" + i);
                this.tableNumbers.push(this.tables[i].number);
            }
        }
        function onlyUnique(value, index, self) {
            return self.indexOf(value) === index;
        }
        this.uniqueTables = this.tableNumbers.filter(onlyUnique);
        this.tablesOccupied = this.uniqueTables.length;
        console.log(this.tables);
    };
    /*
    public formatTracesListeElements(tracesListeElemente) {
      for (let o = 0; o < tracesListeElemente[0].data.length; o++) {
        if (tracesListeElemente[0].data[o].length === 7) {
          tracesListeElemente[0].data[o].splice(0, 5);
          tracesListeElemente[0].data[o].splice(6, 7);
        }
      }
      for (let o = 0; o < tracesListeElemente[0].data.length; o++) {
        if (tracesListeElemente[0].data[o].length === 8) {
          tracesListeElemente[0].data.splice(o, 1);
        }
      }
      for (let o = 0; o < tracesListeElemente[0].data.length; o++) {
        if (tracesListeElemente[0].data[o].length === 24) {
          tracesListeElemente[0].data[o].splice(0, 12);
        }
      }
      for (let o = 0; o < tracesListeElemente[0].data.length; o++) {
        if (tracesListeElemente[0].data[o].length === 13) {
          tracesListeElemente[0].data.splice(o, 1);
        }
      }
      for (let o = 0; o < tracesListeElemente[0].data.length; o++) {
        if (tracesListeElemente[0].data[o].length === 19) {
          tracesListeElemente[0].data[o].splice(0, 17);
        }
      }
      for (let o = 0; o < tracesListeElemente[0].data.length; o++) {
        if (tracesListeElemente[0].data[o].length === 1) {
          tracesListeElemente[0].data.splice(o, 1);
        }
      }
      for (let o = 0; o < tracesListeElemente[0].data.length; o++) {
        if (tracesListeElemente[0].data[o].length === 12) {
          tracesListeElemente[0].data[o].splice(8, 12);
        }
      }
      for (let o = 0; o < tracesListeElemente[0].data.length; o++) {
        if (tracesListeElemente[0].data[o].length === 2) {
          tracesListeElemente[0].data[o].splice(1, 2);
        }
      }
      for (let o = 0; o < tracesListeElemente[0].data.length; o++) {
        console.log(o + tracesListeElemente[0].data[o]);
      }
  
      let trace = [];
  
      for (let o = 0; o < tracesListeElemente[0].data.length; o++) {
        trace[o] = [];
      }
  
      for (let o = 0; o < tracesListeElemente[0].data.length; o++) {
        if (tracesListeElemente[0].data[o] !== undefined) {
          if (tracesListeElemente[0].data[o].length === 8) {
            trace[o] = tracesListeElemente[0].data[o].concat(tracesListeElemente[0].data[o + 1]);
            console.log('tracesListeElemente[0].data[o + 2] : ');
            console.log(tracesListeElemente[0].data[o + 2]);
            if (tracesListeElemente[0].data[o + 2] !== undefined) {
              if (tracesListeElemente[0].data[o + 2].length === 1) {
                trace[o] = tracesListeElemente[0].data[o].concat(tracesListeElemente[0].data[o + 1]).concat(tracesListeElemente[0].data[o + 2]);
                if (tracesListeElemente[0].data[o + 3] !== undefined) {
                  if (tracesListeElemente[0].data[o + 3].length === 1) {
                    trace[o] = tracesListeElemente[0].data[o].concat(tracesListeElemente[0].data[o + 1]).concat(tracesListeElemente[0].data[o + 2]).concat(tracesListeElemente[0].data[o + 3]);
                  }
                }
              }
            }
          }
        }
      }
      for (let o = 0; o < tracesListeElemente[0].data.length; o++) {
        let traceTemp = [];
        if (trace[o].length === 10) {
          traceTemp = trace[o].splice(trace[o].length - 2, trace[o].length);
        } else if (trace[o].length === 11) {
          traceTemp = trace[o].splice(trace[o].length - 3, trace[o].length);
        }
          console.log('traceTemp' + traceTemp);
          let traceTempJoined = traceTemp.join(" ");
          console.log('traceTempJoined' + traceTempJoined);
          trace[o].push(traceTempJoined);
        }
  
  
      for (let o = 0; o < tracesListeElemente[0].data.length; o++) {
        if (trace[o].length > 8) {
          this.tracesListeElemente.push(trace[o]);
        }
      }
      console.log('tracesListeElemente[0].data');
      console.log(tracesListeElemente[0].data);
      console.log('this.tracesListeElemente');
      console.log(this.tracesListeElemente);
    }
  
  */
    TischplanComponent.prototype.onDrag = function (args) {
        var e = args[0], el = args[1];
    };
    TischplanComponent.prototype.onDrop = function (args) {
        var _this = this;
        var e = args[0], el = args[1];
        console.log("Args = ");
        var information = args[0].innerText;
        console.log("information: " + information);
        var informationElements = information.split(/\n/);
        console.log(informationElements);
        var informationElements2 = [];
        for (var s = 0; s < informationElements.length; s++) {
            informationElements2.push(informationElements[s].split(/:(.+)/)[1]);
            if (informationElements2[s] === undefined) {
                informationElements2[s] = informationElements[s];
            }
        }
        console.log(informationElements2);
        var department = JSON.stringify(args[1].id);
        console.log("departement" + department);
        var departementSubstring = department.substring(1, department.length - 1);
        console.log("departementSubstring" + departementSubstring);
        var tableNumber = args[1].innerText;
        var numbers = tableNumber.match(/\d+/g);
        console.log("numbers: " + numbers);
        var arrayIndex = numbers[1];
        console.log("arrayIndex: " + arrayIndex);
        var tableNumberSubstring = "";
        console.log("tableNumber" + tableNumber);
        tableNumberSubstring = tableNumber.toString().match(/\d+/);
        console.log("tableNumberSubstring" + tableNumberSubstring);
        var dataString = [];
        dataString.push(information + departementSubstring + tableNumberSubstring);
        //console.log(dataString);
        //console.log(departementSubstring);
        //console.log(tableNumberSubstring);
        this.tischplanService.addInformationToTable(dataString)
            .subscribe(function (response) {
            // let arrayIndex = response[1];
            console.log("RESPONSE addInformationToTable:" + JSON.stringify(response));
            if (response === null) {
                return;
            }
            else {
                if (response.tables[0].department === "Sonnberg-Zirbn") {
                    _this.tablesSonnbergZirbn[arrayIndex] = response.tables[0];
                }
                else if (response.tables[0].department === "Panorama") {
                    _this.tablesPanorama[arrayIndex] = response.tables[0];
                }
                else if (response.tables[0].department === "Restaurant") {
                    _this.tablesRestaurant[arrayIndex] = response.tables[0];
                }
                else if (response.tables[0].department === "Wintergarten") {
                    _this.tablesWintergarten[arrayIndex] = response.tables[0];
                }
            }
            // console.log(this.tablesSonnbergZirbn[arrayIndex]);
        });
        this.tischplanService.updateImHausListeElement(informationElements2)
            .subscribe(function (response) {
            //this.imHausListeElemente = response;
            console.log('updateImHausListeElement response: ');
            console.log(response);
        });
        this.tischplanService.updateAnreiseListeElement(informationElements2)
            .subscribe(function (response) {
            //this.imHausListeElemente = response;
            console.log('updateAnreiseListeElement response: ');
            console.log(response);
        });
        this.tischplanService.updateTracesListeElement(informationElements2)
            .subscribe(function (response) {
            //this.imHausListeElemente = response;
            console.log('updateTracesListeElement response: ');
            console.log(response);
        });
        console.log("Occupy Table!");
        this.tischplanService.occupyTable(dataString)
            .subscribe(function (response) {
            //let arrayIndex = response[1];
            //console.log("arrayIndex:" + arrayIndex);
            //console.log("bgColor:" + JSON.stringify(response[0].tables[arrayIndex].bgColor));
            console.log("Response occupyTable:" + JSON.stringify(response));
            if (response === null) {
                return;
            }
            else {
                if (response.tables[0].department === "Sonnberg-Zirbn") {
                    _this.tablesSonnbergZirbn[arrayIndex] = response.tables[0];
                }
                else if (response.tables[0].department === "Panorama") {
                    _this.tablesPanorama[arrayIndex] = response.tables[0];
                }
                else if (response.tables[0].department === "Restaurant") {
                    _this.tablesRestaurant[arrayIndex] = response.tables[0];
                }
                else if (response.tables[0].department === "Wintergarten") {
                    _this.tablesWintergarten[arrayIndex] = response.tables[0];
                }
            }
            //console.log("bgColor:" + JSON.stringify(this.tablesSonnbergZirbn[arrayIndex]));
        });
    };
    TischplanComponent.prototype.onOver = function (args) {
        var e = args[0], el = args[1], container = args[2];
        console.log(e);
        console.log(el);
        console.log(container);
        this.backgroundColor = "0a7a74";
        console.log("Args = ");
        var information = args[0].innerText;
        var department = JSON.stringify(args[1].id);
        console.log("information" + information);
        console.log("departement" + department);
    };
    TischplanComponent.prototype.onOut = function (args) {
        var e = args[0], el = args[1], container = args[2];
        /*
        console.log(e);
        console.log(el);
        console.log(container);
    
        this.backgroundColor = "0a7a74";
    
        console.log("Args = ");
        let information = args[0].innerText;
        let department = JSON.stringify(args[1].id);
        console.log("information" + information);
        console.log("departement" + department);
      */
    };
    TischplanComponent.prototype.ngOnInit = function () {
        // this.renderer.invokeElementMethod(this.input.nativeElement, 'focus');
    };
    TischplanComponent.prototype.upload = function () {
        var _this = this;
        var formData = new FormData();
        var files = this.filesToUpload;
        formData.append('uploads[]', files[0], files[0]['name']);
        this.http.post('/upload', formData)
            .map(function (files) { return files.json(); }).map(function (res) {
            // 1st parameter is a flash message text
            // 2nd parameter is optional. You can pass object with options.
            return _this._flashMessagesService.show('Erfolgreich CSV Datei hochgeladen', { cssClass: 'alert-success', timeout: 10000 });
        })
            .subscribe(function (files) { return console.log('files', files); });
    };
    TischplanComponent.prototype.fileChangeEvent = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
        //this.successMsg = "Hoi" + fileInput.target.files[0]['name'];
        //console.log(this.successMsg);
        //this.product.photo = fileInput.target.files[0]['name'];
    };
    TischplanComponent.prototype.occupy = function (table, j) {
        var _this = this;
        this.tischplanService.dispenseTable(table).subscribe(function (response) {
            console.log("Dispense Table:");
            console.log("bgColor:" + JSON.stringify(response[0].tables[j].bgColor));
            console.log("isBesetzt:" + JSON.stringify(response[0].tables[j].isBesetzt));
            if (response === null) {
                return;
            }
            else {
                response[0].tables.sort(function (a, b) {
                    if (Number(a.number) < Number(b.number))
                        return -1;
                    if (Number(a.number) > Number(b.number))
                        return 1;
                    return 0;
                });
                if (response[0].tables[j].department === "Sonnberg-Zirbn") {
                    _this.tablesSonnbergZirbn[j] = response[0].tables[j];
                }
                else if (response[0].tables[j].department === "Panorama") {
                    _this.tablesPanorama[j] = response[0].tables[j];
                }
                else if (response[0].tables[j].department === "Restaurant") {
                    _this.tablesRestaurant = response[0].tables;
                }
                else if (response[0].tables[j].department === "Wintergarten") {
                    _this.tablesWintergarten = response[0].tables;
                }
            }
        });
        this.tischplanService.addPlaceholder(table).subscribe(function (response) {
            console.log("Add placeholder!");
            console.log("placeholder:" + JSON.stringify(response[0].tables[j].placeholder));
            //console.log(this.tablesSonnbergZirbn[j].placeholder);
            if (response === null) {
                return;
            }
            else {
                if (response[0].tables[j].department === "Sonnberg-Zirbn") {
                    _this.tablesSonnbergZirbn[j].placeholder = response[0].tables[j].placeholder;
                }
                else if (response[0].tables[j].department === "Panorama") {
                    _this.tablesPanorama[j].placeholder = response[0].tables[j].placeholder;
                }
                else if (response[0].tables[j].department === "Restaurant") {
                    _this.tablesRestaurant[j].placeholder = response[0].tables[j].placeholder;
                }
                else if (response[0].tables[j].department === "Wintergarten") {
                    _this.tablesWintergarten[j].placeholder = response[0].tables[j].placeholder;
                }
            }
        });
    };
    TischplanComponent.prototype.showSonnbergZirbn = function () {
        console.log("showSonnbergZirbn!");
        this.showSonnbergZirbnBool = true;
        this.showPanoramaBool = false;
        this.showRestaurantBool = false;
        this.showWintergartenBool = false;
        if (this.buttonBgColor1 === "0a7a74") {
            this.buttonBgColor1 = "f3efe4";
            this.buttonBgColor2 = "0a7a74";
            this.buttonBgColor3 = "0a7a74";
            this.buttonBgColor4 = "0a7a74";
        }
        else {
            this.buttonBgColor1 = "0a7a74";
        }
        if (this.fontColor1 === "f3efe4") {
            this.fontColor1 = "0a7a74";
            this.fontColor2 = "f3efe4";
            this.fontColor3 = "f3efe4";
            this.fontColor4 = "f3efe4";
        }
        else {
            this.fontColor1 = "f3efe4";
        }
    };
    TischplanComponent.prototype.showPanorama = function () {
        console.log("showPanorama!");
        this.showSonnbergZirbnBool = false;
        this.showPanoramaBool = true;
        console.log(this.showPanoramaBool);
        this.showRestaurantBool = false;
        this.showWintergartenBool = false;
        if (this.buttonBgColor2 === "0a7a74") {
            this.buttonBgColor2 = "f3efe4";
            this.buttonBgColor1 = "0a7a74";
            this.buttonBgColor3 = "0a7a74";
            this.buttonBgColor4 = "0a7a74";
        }
        else {
            this.buttonBgColor2 = "0a7a74";
        }
        if (this.fontColor2 === "f3efe4") {
            this.fontColor2 = "0a7a74";
            this.fontColor1 = "f3efe4";
            this.fontColor3 = "f3efe4";
            this.fontColor4 = "f3efe4";
        }
        else {
            this.fontColor2 = "f3efe4";
        }
    };
    TischplanComponent.prototype.showRestaurant = function () {
        console.log("showRestaurant!");
        this.showSonnbergZirbnBool = false;
        this.showPanoramaBool = false;
        this.showRestaurantBool = true;
        this.showWintergartenBool = false;
        if (this.buttonBgColor3 === "0a7a74") {
            this.buttonBgColor3 = "f3efe4";
            this.buttonBgColor1 = "0a7a74";
            this.buttonBgColor2 = "0a7a74";
            this.buttonBgColor4 = "0a7a74";
        }
        else {
            this.buttonBgColor3 = "0a7a74";
        }
        if (this.fontColor3 === "f3efe4") {
            this.fontColor3 = "0a7a74";
            this.fontColor1 = "f3efe4";
            this.fontColor2 = "f3efe4";
            this.fontColor4 = "f3efe4";
        }
        else {
            this.fontColor3 = "f3efe4";
        }
    };
    TischplanComponent.prototype.showWintergarten = function () {
        console.log("showWintergarten!");
        this.showSonnbergZirbnBool = false;
        this.showPanoramaBool = false;
        this.showRestaurantBool = false;
        this.showWintergartenBool = true;
        if (this.buttonBgColor4 === "0a7a74") {
            this.buttonBgColor4 = "f3efe4";
            this.buttonBgColor1 = "0a7a74";
            this.buttonBgColor2 = "0a7a74";
            this.buttonBgColor3 = "0a7a74";
        }
        else {
            this.buttonBgColor4 = "0a7a74";
        }
        if (this.fontColor4 === "f3efe4") {
            this.fontColor4 = "0a7a74";
            this.fontColor1 = "f3efe4";
            this.fontColor2 = "f3efe4";
            this.fontColor3 = "f3efe4";
        }
        else {
            this.fontColor4 = "f3efe4";
        }
    };
    TischplanComponent.prototype.moveTable = function (table, j) {
        var _this = this;
        console.log("moveTable clicked");
        console.log('table :' + table.number + 'j' + j);
        this.tischplanService.moveTable(table).subscribe(function (response) {
            console.log('Response:' + JSON.stringify(response));
            //console.log("topValue:" + JSON.stringify(response[0].tables[0].topValue));
            console.log("topValue:" + JSON.stringify(response[0].tables[j].topValue));
            console.log("leftValue:" + JSON.stringify(response[0].tables[j].leftValue));
            if (response === null) {
                return;
            }
            else {
                if (response[0].tables[j].department === "Sonnberg-Zirbn") {
                    _this.tablesSonnbergZirbn = response[0].tables;
                }
                else if (response[0].tables[j].department === "Panorama") {
                    _this.tablesPanorama = response[0].tables;
                }
                else if (response[0].tables[j].department === "Restaurant") {
                    _this.tablesRestaurant = response[0].tables;
                }
                else if (response[0].tables[j].department === "Wintergarten") {
                    _this.tablesWintergarten = response[0].tables;
                }
            }
        });
    };
    TischplanComponent.prototype.sendInformation = function (event) {
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
            this.tischplanService.sendInformation(newInformation)
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
        }
        this.tischplanService.sendInformationToBox(newInformation)
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
    TischplanComponent.prototype.delete = function (informationElement, j, event) {
        var _this = this;
        console.log(informationElement);
        console.log(j);
        event.stopPropagation();
        this.tischplanService.deleteInformationElement(informationElement)
            .subscribe(function (informationElement) {
            _this.newInformationElements.splice(j, 1);
        });
    };
    TischplanComponent.prototype.none = function (event) {
        event.stopPropagation();
    };
    TischplanComponent.prototype.printToCart1 = function (printSectionId1) {
        var popupWinindow;
        var innerContents = document.getElementById(printSectionId1).innerHTML;
        popupWinindow = window.open('', '_blank', 'width=600,height=700,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
        popupWinindow.document.open();
        popupWinindow.document.write('<html><head><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">\n' +
            '<script src="node_modules/core-js/client/shim.min.js"></script>\n' +
            '<script src="<your-libs-directory>/object-assign.min.js"></script></head><body onload="window.print()">' + innerContents + '</html>');
        popupWinindow.document.close();
    };
    TischplanComponent.prototype.printToCart2 = function (printSectionId2) {
        var popupWinindow;
        var innerContents = document.getElementById(printSectionId2).innerHTML;
        popupWinindow = window.open('', '_blank', 'width=1000,height=1000,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
        popupWinindow.document.open();
        popupWinindow.document.write('<html><head><style> .row .t1 { width: 30px; height: 60px; position: absolute; border: solid 1px #0a7a74; } .row .t2 { width: 30px; height: 60px; position: absolute; border: solid 1px #0a7a74; } .row .t3 { width: 30px; height: 60px; position: absolute; border: solid 1px #0a7a74; } .row .t4 { width: 30px; height: 60px; position: absolute; border: solid 1px #0a7a74; } .row .t5 { width: 30px; height: 80px; border: solid 1px #0a7a74; position: absolute; } .row .t6 { width: 30px; height: 80px; border: solid 1px #0a7a74; position: absolute; } .row .t7 { width: 30px; height: 80px; border: solid 1px #0a7a74; position: absolute; } .row .t8 { width: 100px; height: 90px; border: solid 1px #0a7a74; position: absolute; } .row .t9 { width: 40px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t10 { width: 40px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t11 { width: 30px; height: 80px; border: solid 1px #0a7a74; position: absolute; } .row .t12 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t13 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t14 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t15 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t16 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t17 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t18 { position: absolute; } .row .t19 { position: absolute; }.row .t20 { position: absolute; } .row .t21 { position: absolute; }  .row .t22 { position: absolute; } .row .t23 { position: absolute; } .row .t24 { position: absolute; } .row .t40 { width: 60px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t41 { width: 60px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t42 { width: 80px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t43 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t44 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t45 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t46 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t47 { width: 80px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t48 { width: 60px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t49 { width: 60px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t50 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t51 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t52 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t53 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t54 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t55 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t56 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t57 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t58 { width: 60px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t59 { width: 60px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t60 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t61 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t62 { width: 30px; height: 60px; position: absolute; border: solid 1px #0a7a74; } .row .t63 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t64 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t65 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t66 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t67 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t68 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t69 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t70 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t71 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t72 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t73 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t74 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t75 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t76 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t77 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t78 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t79 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t80 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t81 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t82 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t83 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t84 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t85 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t86 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t87 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t88 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t89 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t501 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t502 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t503 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; transform: rotate(45deg); } .row .t504 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; transform: rotate(45deg); } .row .t505 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; transform: rotate(45deg); } .row .t506 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; transform: rotate(45deg); } .row .t507 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; border-radius: 50%; } .row .t508 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; border-radius: 50%; } .row .t509 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; border-radius: 50%; } .row .t510 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; border-radius: 50%; } .row .t511 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; border-radius: 50%; } .row .t512 { width: 80px; height: 45px; border: solid 1px #0a7a74; position: absolute; } .row .t513 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; border-radius: 50%; } .row .t514 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; border-radius: 50%; } .row .t515 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; transform: rotate(45deg); } .row .t516 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; transform: rotate(45deg); } .row .t517 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; transform: rotate(10deg); } .row .t518 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; transform: rotate(30deg); } .row .t519 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; transform: rotate(50deg); } .row .t520 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; transform: rotate(70deg); } .row .t521 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; transform: rotate(90deg); } .row .t522 { width: 80px; height: 45px; border: solid 1px #0a7a74; position: absolute; } .row .t523 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; transform: rotate(45deg); } .row .t524 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; transform: rotate(45deg); } .row .t525 { width: 40px; height: 40px; position: absolute; transform: rotate(45deg); } </style></head><body onload="window.print()">' + innerContents + '</html>');
        popupWinindow.document.close();
    };
    TischplanComponent.prototype.printToCart3 = function (printSectionId3) {
        var popupWinindow;
        var innerContents = document.getElementById(printSectionId3).innerHTML;
        popupWinindow = window.open('', '_blank', 'width=1000,height=1000,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
        popupWinindow.document.open();
        popupWinindow.document.write('<html><head><style></style></head><body onload="window.print()">' + innerContents + '</html>');
        popupWinindow.document.close();
    };
    return TischplanComponent;
}());
TischplanComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'tischplan',
        template: __webpack_require__("../../../../../src/app/components/digitalerTischplan/tischplan.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/digitalerTischplan/tischplan.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_tischplan_service__["a" /* TischplanService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_tischplan_service__["a" /* TischplanService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_dragula__["DragulaService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_dragula__["DragulaService"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _f || Object])
], TischplanComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=tischplan.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/tischplan.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TischplanService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TischplanService = (function () {
    function TischplanService(http) {
        this.http = http;
        console.log('Task service initialized!');
    }
    TischplanService.prototype.getImHausListe = function () {
        return this.http.get('imHausListe')
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.getAnreiseListe = function () {
        return this.http.get('anreiseListe')
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.getTracesListe = function () {
        return this.http.get('tracesListe')
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.getTables = function () {
        return this.http.get('tables')
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.getInformationElements = function () {
        return this.http.get('information')
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.occupyTable = function (dataString) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('occupyTable', dataString, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.moveTable = function (dataString) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('moveTable', dataString, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.dispenseTable = function (tableSonnbergZirbn) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('dispenseTable', tableSonnbergZirbn, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.removePlaceholder = function (dataString) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('removePlaceholder', dataString, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.addPlaceholder = function (tableSonnbergZirbn) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('addPlaceholder', tableSonnbergZirbn, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.addInformationToTable = function (dataString) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('addInformationToTable', dataString, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.sendInformation = function (newInformation) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        console.log(headers);
        return this.http.post('newInformationToTables', newInformation, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.sendInformationToBox = function (newInformation) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        console.log(headers);
        return this.http.post('newInformationToBox', newInformation, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.deleteInformationElement = function (informationElement) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        console.log(headers);
        return this.http.post('deleteInformationElement', informationElement, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.updateImHausListeElement = function (informationElements2) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        console.log(headers);
        return this.http.post('updateImHausListeElement', informationElements2, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.updateAnreiseListeElement = function (informationElements2) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        console.log(headers);
        return this.http.post('updateAnreiseListeElement', informationElements2, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.updateTracesListeElement = function (informationElements2) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        console.log(headers);
        return this.http.post('updateTracesListeElement', informationElements2, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    return TischplanService;
}());
TischplanService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], TischplanService);

var _a;
//# sourceMappingURL=tischplan.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map