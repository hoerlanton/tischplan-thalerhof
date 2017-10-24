webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_tischplan_service__ = __webpack_require__("../../../../../src/app/services/tischplan.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_5__components_digitalerTischplan_tischplan_component__["a" /* TischplanComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__["FlashMessagesModule"],
            __WEBPACK_IMPORTED_MODULE_7_ng2_dragula__["DragulaModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
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
exports.push([module.i, "html, body {\n    padding: 0;\n    margin: 0;\n    height: 100%;\n    background-color: #0a7a74;\n}\n\n.row {\n    height: 100%;\n}\n\n.row .container-fluid {\n    height: 100%;\n}\n\n.line{\n  width: 100%;\n  height: 20px;\n  border-bottom: solid 10px #0a7a74;\n  position: absolute;\n  right: 0px;\n  top: 150px;\n}\n\n.row .container-fluid .col-md-4 {\n    background-color: #f3efe4;\n    padding: 20px 10px 20px 10px;\n    border-left: 5px solid #0a7a74;\n    border-right: 5px solid #0a7a74;\n    height: 100%;\n    border-bottom: 20px solid #0a7a74;\n    max-width: 20%;\n}\n\n\n\n.row .container-fluid .col-md-4 .row1 {\n    overflow: auto;\n    margin: 0 0 0 0;\n    display: inline-block;\n    width: 105%;\n    height: 232.5px;\n    padding-top: 20px;\n}\n\n.row .container-fluid .col-md-4 .row1 .wrapper {\n    overflow: auto;\n    margin: 0 0 0 0;\n    display: inline-block;\n    max-width: 100%;\n}\n\n.row .container-fluid .col-md-4 .row1 .wrapper .container {\n    overflow: auto;\n    margin: 0 0 0 0;\n    display: inline-block;\n    max-width: 100%;\n}\n\n.row .container-fluid .col-md-4 .row3 {\n    margin: 0 auto;\n    display: inline-block;\n    width: 100%;\n    height: 800px;\n    padding-top: 20px;\n}\n\n.row .container-fluid .col-md-4 .col-xs-12 .row1 {\n    overflow: auto;\n    margin: 0 auto;\n    display: inline-block;\n    width: 100%;\n    height: 800px;\n    padding-top: 20px;\n}\n\n\n.row .container-fluid .col-md-6 h3 {\n    -ms-flex-line-pack: center;\n        align-content: center;\n    margin: 0 auto;\n    display: inline-block;\n    color: #0a7a74;\n    position: relative;\n    text-align:center;\n}\n\n.row .container-fluid .col-md-4 h3 {\n  margin: 0 auto;\n  color: #0a7a74;\n  position: relative;\n}\n\n.row .container-fluid .col-md-4 .row3 .col-xs-12 .form-group {\n    border-top:3px solid #0a7a74;\n    width: 105%;\n    padding: 10px 10px 10px 30px;\n}\n\n.row .container-fluid .col-md-4 .row3 .col-xs-12  .group {\n    border-top:3px solid #0a7a74;\n    width: 105%;\n    padding: 10px 10px 10px 30px;\n}\n\n.row .container-fluid .col-md-4 .row3 .col-xs-12 .form-group1 {\n    margin-top: 20px;\n    overflow: auto;\n    max-height: 300px;\n    display: inline-block;\n    border-top:3px solid #0a7a74;\n    width: 102%;\n    padding: 10px 10px 10px 25px;\n}\n\n.row1 .col {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n}\n\n.row1 .col:nth-child(1) {\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1;\n}\n.row1 .col:nth-child(2) {\n    -webkit-box-ordinal-group: 1;\n        -ms-flex-order: 0;\n            order: 0;\n}\n.row1 .col:nth-child(3) {\n    -webkit-box-ordinal-group: 3;\n        -ms-flex-order: 2;\n            order: 2;\n}\n\n.row .col-md-4 .row2 {\n    padding-bottom: 10px;\n    position: relative;\n    min-height: 100%;\n    border-bottom: 1px solid red;\n}\n\n.card {\n    background: rgb(255,255,255); /* Fall-back for browsers that don support rgba */\n    background: rgba(255,255,255, 1);\n}\n\n.row .container-fluid .col-md-4 .row1 .wrapper .container .card p {\n    padding:10px 10px 10px 10px;\n    max-width: 100%;\n}\n\n.row .container-fluid .col-md-4 .wrapper .container .card p {\n    padding:10px 10px 10px 10px;\n    max-width: 100%;\n}\n\n.row .container-fluid .col-md-4 .row3 .row1 p {\n    padding: 10px 10px 10px 10px;\n    background: rgb(255,255,255); /* Fall-back for browsers that don support rgba */\n    background: rgba(255,255,255, 1);\n    max-width: 100%;\n}\n\n.row .container-fluid .col-md-4 .col-xs-12 .row1 .wrapper .container .card p {\n    padding: 10px 10px 10px 10px;\n    max-width: 100%;\n}\n\n.row .container-fluid .col-md-6 {\n    height: 620px;\n    width: 58%;\n    background-color: #eaf3f3;\n    padding: 20px 10px 20px 10px;\n    border-left: 5px solid #0a7a74;\n    border-right: 5px solid #0a7a74;\n    border-bottom: 20px solid #0a7a74;\n}\n\n.row .container-fluid .col-md-6 .row {\n    background-color: #eaf3f3;\n  padding: 20px 10px 20px 10px;\n    height: 100%;\n}\n\n.row .container-fluid .col-md-6 .row1 .col-md-3 {\n    margin: 0px 0px 0px 0px;\n    padding: 20px 20px 20px 20px;\n}\n\n.row .container-fluid .col-md-6 #printSectionId2 .row .t1 {\n    width: 30px;\n    height: 60px;\n    background-color: #FFFFFF;\n    position: absolute;\n\n}\n\n.row .container-fluid .col-md-6 #printSectionId2 .row .t2 {\n    width: 30px;\n    height: 60px;\n    background-color: #FFFFFF;\n    position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t3 {\n    width: 30px;\n    height: 60px;\n    background-color: #FFFFFF;\n    position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t4 {\n    width: 30px;\n    height: 60px;\n    background-color: #FFFFFF;\n    position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t5 {\n    width: 30px;\n    height: 80px;\n    background-color: #FFFFFF;\n    position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t6 {\n    width: 30px;\n    height: 80px;\n    background-color: #FFFFFF;\n    position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t7 {\n    width: 30px;\n    height: 80px;\n    background-color: #FFFFFF;\n    position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t8 {\n    width: 100px;\n    height: 90px;\n    background-color: #FFFFFF;\n    position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t9 {\n    width: 40px;\n    height: 60px;\n    background-color: #FFFFFF;\n    position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t10 {\n    width: 40px;\n    height: 60px;\n    background-color: #FFFFFF;\n    position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t11 {\n    width: 30px;\n    height: 80px;\n    background-color: #FFFFFF;\n    position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t12 {\n    width: 60px;\n    height: 30px;\n    background-color: #FFFFFF;\n    position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t13 {\n    width: 60px;\n    height: 30px;\n    background-color: #FFFFFF;\n    position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t14 {\n    width: 60px;\n    height: 30px;\n    background-color: #FFFFFF;\n    position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t15 {\n    width: 60px;\n    height: 30px;\n    background-color: #FFFFFF;\n    position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t16 {\n    width: 30px;\n    height: 60px;\n    background-color: #FFFFFF;\n    position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t17 {\n    width: 60px;\n    height: 30px;\n    background-color: #FFFFFF;\n    position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t40 {\n    width: 60px;\n    height: 40px;\n    background-color: #FFFFFF;\n    position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t41 {\n    width: 60px;\n    height: 40px;\n    background-color: #FFFFFF;\n    position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t42 {\n    width: 80px;\n    height: 30px;\n    background-color: #FFFFFF;\n    position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t43 {\n    width: 30px;\n    height: 60px;\n    background-color: #FFFFFF;\n    position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t44 {\n    width: 30px;\n    height: 60px;\n    background-color: #FFFFFF;\n    position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t45 {\n    width: 30px;\n    height: 60px;\n    background-color: #FFFFFF;\n    position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t46 {\n    width: 30px;\n    height: 60px;\n    background-color: #FFFFFF;\n    position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t47 {\n    width: 80px;\n    height: 30px;\n    background-color: #FFFFFF;\n    position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t48 {\n    width: 60px;\n    height: 40px;\n    background-color: #FFFFFF;\n    position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t49 {\n    width: 60px;\n    height: 40px;\n    background-color: #FFFFFF;\n    position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t50 {\n    width: 60px;\n    height: 30px;\n    background-color: #FFFFFF;\n    position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t51 {\n    width: 60px;\n    height: 30px;\n    background-color: #FFFFFF;\n    position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t52 {\n    width: 30px;\n    height: 60px;\n    background-color: #FFFFFF;\n    position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t53 {\n    width: 30px;\n    height: 60px;\n    background-color: #FFFFFF;\n    position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t54 {\n    width: 60px;\n    height: 30px;\n    background-color: #FFFFFF;\n    position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t55 {\n    width: 60px;\n    height: 30px;\n    background-color: #FFFFFF;\n    position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t56 {\n    width: 60px;\n    height: 30px;\n    background-color: #FFFFFF;\n    position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t57 {\n    width: 60px;\n    height: 30px;\n    background-color: #FFFFFF;\n    position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t58 {\n    width: 60px;\n    height: 40px;\n    background-color: #FFFFFF;\n    position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t60 {\n    width: 30px;\n    height: 60px;\n    background-color: #FFFFFF;\n    position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t61 {\n    width: 30px;\n    height: 60px;\n    background-color: #FFFFFF;\n    position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t62 {\n    width: 30px;\n    height: 60px;\n    background-color: #FFFFFF;\n    position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t63 {\n    width: 30px;\n    height: 60px;\n    background-color: #FFFFFF;\n    position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t64 {\n    width: 30px;\n    height: 60px;\n    background-color: #FFFFFF;\n    position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t65 {\n    width: 30px;\n    height: 60px;\n    background-color: #FFFFFF;\n    position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t66 {\n    width: 30px;\n    height: 60px;\n    background-color: #FFFFFF;\n    position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t67 {\n    width: 60px;\n    height: 30px;\n    background-color: #FFFFFF;\n    position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t68 {\n    width: 60px;\n    height: 30px;\n    background-color: #FFFFFF;\n    position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t69 {\n    width: 60px;\n    height: 30px;\n    background-color: #FFFFFF;\n    position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t70 {\n    width: 60px;\n    height: 30px;\n    background-color: #FFFFFF;\n    position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t71 {\n    width: 60px;\n    height: 30px;\n    background-color: #FFFFFF;\n    position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t72 {\n    width: 60px;\n    height: 30px;\n    background-color: #FFFFFF;\n    position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t73 {\n    width: 60px;\n    height: 30px;\n    background-color: #FFFFFF;\n    position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t74 {\n    width: 60px;\n    height: 30px;\n    background-color: #FFFFFF;\n    position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t75 {\n    width: 60px;\n    height: 30px;\n    background-color: #FFFFFF;\n    position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t76 {\n    width: 60px;\n    height: 30px;\n    background-color: #FFFFFF;\n    position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t77 {\n     width: 60px;\n     height: 30px;\n     background-color: #FFFFFF;\n     position: absolute;\n }\n\n.row .container-fluid .col-md-6 .row .t78 {\n    width: 60px;\n    height: 30px;\n    background-color: #FFFFFF;\n    position: absolute;\n}\n\n\n.row .container-fluid .col-md-6 .row .t79 {\n    width: 60px;\n    height: 30px;\n    background-color: #FFFFFF;\n    position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t80 {\n    width: 60px;\n    height: 30px;\n    background-color: #FFFFFF;\n    position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t81 {\n    width: 60px;\n    height: 30px;\n    background-color: #FFFFFF;\n    position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t82 {\n    width: 60px;\n    height: 30px;\n    background-color: #FFFFFF;\n    position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t83 {\n    width: 60px;\n    height: 30px;\n    background-color: #FFFFFF;\n    position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t84 {\n    width: 60px;\n    height: 30px;\n    background-color: #FFFFFF;\n    position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t85 {\n    width: 60px;\n    height: 30px;\n    background-color: #FFFFFF;\n    position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row  .t86 {\n    width: 60px;\n    height: 30px;\n    background-color: #FFFFFF;\n    position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t87 {\n    width: 60px;\n    height: 30px;\n    background-color: #FFFFFF;\n    position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t88 {\n    width: 60px;\n    height: 30px;\n    background-color: #FFFFFF;\n    position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t89 {\n    width: 60px;\n    height: 30px;\n    background-color: #FFFFFF;\n    position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t501 {\n    width: 40px;\n    height: 40px;\n    background-color: #FFFFFF;\n    position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t502 {\n    width: 40px;\n    height: 40px;\n    background-color: #FFFFFF;\n    position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t503 {\n    width: 40px;\n    height: 40px;\n    background-color: #FFFFFF;\n    position: absolute;\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg);\n}\n\n.row .container-fluid .col-md-6 .row .t504 {\n    width: 40px;\n    height: 40px;\n    background-color: #FFFFFF;\n    position: absolute;\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg);\n}\n\n.row .container-fluid .col-md-6 .row .t505 {\n    width: 40px;\n    height: 40px;\n    background-color: #FFFFFF;\n    position: absolute;\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg);\n}\n\n.row .container-fluid .col-md-6 .row .t506 {\n    width: 40px;\n    height: 40px;\n    background-color: #FFFFFF;\n    position: absolute;\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg);\n}\n\n.row .container-fluid .col-md-6 .row .t507 {\n    width: 40px;\n    height: 40px;\n    background-color: #FFFFFF;\n    position: absolute;\n    border-radius: 50%;\n}\n\n.row .container-fluid .col-md-6 .row .t508 {\n    width: 40px;\n    height: 40px;\n    background-color: #FFFFFF;\n    position: absolute;\n    border-radius: 50%;\n\n}\n\n.row .container-fluid .col-md-6 .row .t509 {\n    width: 40px;\n    height: 40px;\n    background-color: #FFFFFF;\n    position: absolute;\n    border-radius: 50%;\n\n}\n\n.row .container-fluid .col-md-6 .row .t510 {\n    width: 40px;\n    height: 40px;\n    background-color: #FFFFFF;\n    position: absolute;\n    border-radius: 50%;\n\n}\n\n.row .container-fluid .col-md-6 .row .t511 {\n    width: 40px;\n    height: 40px;\n    background-color: #FFFFFF;\n    position: absolute;\n    border-radius: 50%;\n\n}\n\n.row .container-fluid .col-md-6 .row .t512 {\n    width: 80px;\n    height: 45px;\n    background-color: #FFFFFF;\n    position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t513 {\n    width: 40px;\n    height: 40px;\n    background-color: #FFFFFF;\n    position: absolute;\n    border-radius: 50%;\n\n}\n\n.row .container-fluid .col-md-6 .row .t514 {\n    width: 40px;\n    height: 40px;\n    background-color: #FFFFFF;\n    position: absolute;\n    border-radius: 50%;\n\n}\n\n.row .container-fluid .col-md-6 .row .t515 {\n    width: 40px;\n    height: 40px;\n    background-color: #FFFFFF;\n    position: absolute;\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg);\n}\n\n.row .container-fluid .col-md-6 .row .t516 {\n    width: 40px;\n    height: 40px;\n    background-color: #FFFFFF;\n    position: absolute;\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg);\n}\n\n.row .container-fluid .col-md-6 .row .t517 {\n    width: 30px;\n    height: 60px;\n    background-color: #FFFFFF;\n    position: absolute;\n    -webkit-transform: rotate(10deg);\n            transform: rotate(10deg);\n}\n\n.row .container-fluid .col-md-6 .row .t518 {\n    width: 30px;\n    height: 60px;\n    background-color: #FFFFFF;\n    position: absolute;\n    -webkit-transform: rotate(30deg);\n            transform: rotate(30deg);\n}\n\n.row .container-fluid .col-md-6 .row .t519 {\n    width: 30px;\n    height: 60px;\n    background-color: #FFFFFF;\n    position: absolute;\n    -webkit-transform: rotate(50deg);\n            transform: rotate(50deg);\n}\n\n.row .container-fluid .col-md-6 .row .t520 {\n    width: 30px;\n    height: 60px;\n    background-color: #FFFFFF;\n    position: absolute;\n    -webkit-transform: rotate(70deg);\n            transform: rotate(70deg);\n}\n\n.row .container-fluid .col-md-6 .row .t521 {\n    width: 30px;\n    height: 60px;\n    background-color: #FFFFFF;\n    position: absolute;\n    -webkit-transform: rotate(90deg);\n            transform: rotate(90deg);\n}\n\n.row .container-fluid .col-md-6 .row .t522 {\n    width: 80px;\n    height: 45px;\n    background-color: #FFFFFF;\n    position: absolute;\n}\n\n.row .container-fluid .col-md-6 .row .t523 {\n    width: 40px;\n    height: 40px;\n    background-color: #FFFFFF;\n    position: absolute;\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg);\n}\n\n.row .container-fluid .col-md-6 .row .t524 {\n    width: 40px;\n    height: 40px;\n    background-color: #FFFFFF;\n    position: absolute;\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg);\n}\n\n.row .container-fluid .col-md-6 .row .t525 {\n    width: 40px;\n    height: 40px;\n    background-color: #FFFFFF;\n    position: absolute;\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg);\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/tischplan.component.html":
/***/ (function(module, exports) {

module.exports = "<html>\n<head>\n    <title>Dashboard</title>\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no\">\n    <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" integrity=\"sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u\" crossorigin=\"anonymous\">\n    <script src=\"node_modules/core-js/client/shim.min.js\"></script>\n    <script src=\"<your-libs-directory>/object-assign.min.js\"></script>\n</head>\n\n<body>\n    <nav class=\"navbar navbar-default\">\n        <div class=\"container-fluid\">\n            <div class=\"navbar-header\">\n                <ul class=\"nav navbar-nav\">\n                    <li><img alt=\"Brand\" href=\"http://www.servicio.io\" src=\"http://servicio.io/wp-content/uploads/2016/05/servicio-logo-hellblau-auto-ohne-hintergrund-1.png\" style=\"height: 45px; width: auto; margin-top:15px; margin-right: 50px; text-align: left; display:table-cell; vertical-align:middle;\"></li>\n                    <li style=\"text-align: left; display:table-cell; vertical-align:middle; margin-bottom: 5px; margin-right: 20px;\"><a href=\"http://servicio.io/tester-info-3-2\">Anleitung</a></li>\n                  <button (click)=\"printToCart1('printSectionId1')\" style=\"text-align: left; display:table-cell; vertical-align:middle; margin-top: 15px\" class=\"button\">Tisch Übersicht Drucken</button>\n                  <button (click)=\"printToCart2('printSectionId2')\" style=\"text-align: left; display:table-cell; vertical-align:middle; margin-top: 15px\" class=\"button\">Tisch Plan Drucken</button>\n                </ul>\n            </div>\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li><img alt=\"Partner\" href=\"http://www.salzburgerhof.servicio.io/wlanlandingpage\" src=\"http://servicio.io/wp-content/uploads/2017/06/Salzburger-Hof_Marke_CMYK-ohne-hintergrund.png\" style=\"height: 45px; width: auto; margin-top: 10px; margin-bottom: 5px; margin-right: 5px;float: right; text-align: right; display:table-cell; vertical-align:middle;\"></li>\n            </ul>\n        </div>\n    </nav>\n\n    <div id=\"charge-error\" class=\"alert alert-danger <% if ( !errMsg ) { %> hidden <% } %>\">\n        <%= errMsg  %>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"container-fluid\">\n          <div id=\"printSectionId1\">\n              <div class=\"col-md-4\"><h3>Tisch Übersicht</h3>\n                  <div class=\"col-xs-12\" style=\"padding: 0px 0px 0px 0px;\">\n                      <div class=\"row1\">\n                          <div class='wrapper' id=\"wrapper\">\n                            <div *ngIf=\"showSonnbergZirbnBool\">\n                              <div *ngFor=\"let tableSonnbergZirbn of tablesSonnbergZirbn; let j = index;\">\n                                <div *ngIf=\"tablesSonnbergZirbn[j] !== tablesSonnbergZirbn[j+1]\">\n                                  <button style=\"float: right; margin: 20px 0px 20px 0px\" type=\"button\" class=\"btn btn-send\" (click)=\"occupy(tableSonnbergZirbn, j)\">{{tableSonnbergZirbn.isBesetzt === 'true' ? 'FREI MACHEN' : '' }}</button>\n                                  <div class='container' id='containerSonnbergZirbn' [dragula]='\"evented-bag\"' [ngStyle]=\"{'background-color': + tableSonnbergZirbn.bgColor}\">\n                                    <p><b> Tisch:</b>{{tableSonnbergZirbn.number}} </p><br>\n                                    <div class=\"table\" [ngStyle]=\"{'background-color': '#' + tableSonnbergZirbn.bgColor}\">\n                                      <div *ngIf=\"tableSonnbergZirbn.isBesetzt === 'true'\">\n                                          <p style=\"background-color: #FFFFFF\">\n                                            <b> Name:</b>{{tableSonnbergZirbn.nameValue}}<br>\n                                            <b> Sprache:</b>{{tableSonnbergZirbn.spracheValue}}<br>\n                                            <b> Zimmernummer:</b>{{tableSonnbergZirbn.zimmernummerValue}}<br>\n                                            <b> Preis Typ:</b>{{tableSonnbergZirbn.preistypValue}}<br>\n                                            <b> Anreise Datum:</b>{{tableSonnbergZirbn.anreiseValue}}<br>\n                                            <b> Abreise Datum:</b>{{tableSonnbergZirbn.abreiseValue}}<br>\n                                            <b> Personenanzahl:</b>{{tableSonnbergZirbn.personenAnzahlValue}}<br>\n                                            <b> RB/SOU:</b>{{tableSonnbergZirbn.rbsouValue}}<br>\n                                            <b> Notiz2:</b>{{tableSonnbergZirbn.notiz2Value}}<br>\n                                            <b> Trace:</b>{{tableSonnbergZirbn.trace}}\n                                          </p>\n                                        <div *ngIf=\"tableSonnbergZirbn.nameValue2\">\n                                          <p style=\"background-color: #FFFFFF\">\n                                            <b> Name:</b>{{tableSonnbergZirbn.nameValue2}}<br>\n                                            <b> Sprache:</b>{{tableSonnbergZirbn.spracheValue2}}<br>\n                                            <b> Zimmernummer:</b>{{tableSonnbergZirbn.zimmernummerValue2}}<br>\n                                            <b> Preis Typ:</b>{{tableSonnbergZirbn.preistypValue2}}<br>\n                                            <b> Anreise Datum:</b>{{tableSonnbergZirbn.anreiseValue2}}<br>\n                                            <b> Abreise Datum:</b>{{tableSonnbergZirbn.abreiseValue2}}<br>\n                                            <b> Personenanzahl:</b>{{tableSonnbergZirbn.personenAnzahlValue2}}<br>\n                                            <b> RB/SOU:</b>{{tableSonnbergZirbn.rbsouValue2}}<br>\n                                            <b> Notiz2:</b>{{tableSonnbergZirbn.notiz2Value2}}<br>\n                                            <b> Trace:</b>{{tableSonnbergZirbn.trace2}}\n                                          </p>\n                                        </div>\n                                        <div *ngIf=\"tableSonnbergZirbn.nameValue3\">\n                                          <p style=\"background-color: #FFFFFF\">\n                                            <b> Name:</b>{{tableSonnbergZirbn.nameValue3}}<br>\n                                            <b> Sprache:</b>{{tableSonnbergZirbn.spracheValue3}}<br>\n                                            <b> Zimmernummer:</b>{{tableSonnbergZirbn.zimmernummerValue3}}<br>\n                                            <b> Preis Typ:</b>{{tableSonnbergZirbn.preistypValue3}}<br>\n                                            <b> Anreise Datum:</b>{{tableSonnbergZirbn.anreiseValue3}}<br>\n                                            <b> Abreise Datum:</b>{{tableSonnbergZirbn.abreiseValue3}}<br>\n                                            <b> Personenanzahl:</b>{{tableSonnbergZirbn.personenAnzahlValue3}}<br>\n                                            <b> RB/SOU:</b>{{tableSonnbergZirbn.rbsouValue3}}<br>\n                                            <b> Notiz2:</b>{{tableSonnbergZirbn.notiz2Value3}}<br>\n                                            <b> Trace:</b>{{tableSonnbergZirbn.trace3}}\n                                          </p>\n                                        </div>\n                                      </div>\n                                      <div *ngIf=\"tableSonnbergZirbn.placeholder === 'true'\" (click)=\"placeholderHide(tableSonnbergZirbn, j)\">\n                                        <p style=\"background-color: #9d9d9d; border: dashed 3px black; margin-top: 50px; opacity: 0.4; padding: 10px 10px 10px 10px\">Listen-Element hier hin ziehen!</p>\n                                      </div>\n                                    </div>\n                                  </div>\n                                </div>\n                              </div>\n                            </div>\n                            <div *ngIf=\"showPanoramaBool\">\n                              <div *ngFor=\"let tablePanorama of tablesPanorama; let j = index;\">\n                                <div *ngIf=\"tablesPanorama[j] !== tablesPanorama[j+1]\">\n                                  <div class='container' id='containerPanorama' [dragula]='\"evented-bag\"' [ngStyle]=\"{'background-color': + tablePanorama.bgColor}\">\n                                    <button style=\"float: right; margin: 20px 0px 20px 0px\" type=\"button\" class=\"btn btn-send\" (click)=\"occupy(tablePanorama, j)\">{{tablePanorama.isBesetzt === 'true' ? 'FREI MACHEN' : 'BESETZTEN'}}</button>\n                                    <div class=\"table\" [ngStyle]=\"{'background-color': '#' + tablePanorama.bgColor}\">\n                                      <p><b> Tisch:</b>{{tablePanorama.number}} </p><br>\n                                      <p style=\"background-color: #FFFFFF\"><b> Name:</b>{{tablePanorama.nameValue}}<br>\n                                        <b> Sprache:</b>{{tablePanorama.spracheValue}}<br>\n                                        <b> Zimmernummer:</b>{{tablePanorama.zimmernummerValue}}<br>\n                                        <b> Preis Typ:</b>{{tablePanorama.preistypValue}}<br>\n                                        <b> Anreise Datum:</b>{{tablePanorama.anreiseValue}}<br>\n                                        <b> Abreise Datum:</b>{{tablePanorama.abreiseValue}}<br>\n                                        <b> Personenanzahl:</b>{{tablePanorama.personenAnzahlValue}}<br>\n                                        <b> RB/SOU:</b>{{tablePanorama.rbsouValue}}<br>\n                                        <b> Notiz2:</b>{{tablePanorama.notiz2Value}}</p>\n                                      <div *ngIf=\"tablePanorama.isBesetzt === 'true'\">\n                                        <div *ngIf=\"tablePanorama.placeholder === 'true'\" (click)=\"placeholderHide(tablePanorama, j)\">\n                                          <p style=\"background-color: #9d9d9d; border: dashed 3px black; margin-top: 50px; opacity: 0.4; padding: 10px 10px 10px 10px\">Listen-Element hier hin ziehen!</p>\n                                        </div>\n                                      </div>\n                                    </div>\n                                  </div>\n                                </div>\n                              </div>\n                            </div>\n                            <div *ngIf=\"showRestaurantBool\">\n                              <div *ngFor=\"let tableRestaurant of tablesRestaurant; let j = index;\">\n                                <div *ngIf=\"tablesRestaurant[j] !== tablesRestaurant[j+1]\">\n                                  <div class='container' id='containerRestaurant' [dragula]='\"evented-bag\"' [ngStyle]=\"{'background-color': + tableRestaurant.bgColor}\">\n                                    <button style=\"float: right; margin: 20px 0px 20px 0px\" type=\"button\" class=\"btn btn-send\" (click)=\"occupy(tableRestaurant, j)\">{{tableRestaurant.isBesetzt === 'true' ? 'FREI MACHEN' : 'BESETZTEN'}}</button>\n                                    <div class=\"table\" [ngStyle]=\"{'background-color': '#' + tableRestaurant.bgColor}\">\n                                      <p><b> Tisch:</b>{{tableRestaurant.number}} </p><br>\n                                      <p style=\"background-color: #FFFFFF\"><b> Name:</b>{{tableRestaurant.nameValue}}<br>\n                                        <b> Sprache:</b>{{tableRestaurant.spracheValue}}<br>\n                                        <b> Zimmernummer:</b>{{tableRestaurant.zimmernummerValue}}<br>\n                                        <b> Preis Typ:</b>{{tableRestaurant.preistypValue}}<br>\n                                        <b> Anreise Datum:</b>{{tableRestaurant.anreiseValue}}<br>\n                                        <b> Abreise Datum:</b>{{tableRestaurant.abreiseValue}}<br>\n                                        <b> Personenanzahl:</b>{{tableRestaurant.personenAnzahlValue}}<br>\n                                        <b> RB/SOU:</b>{{tableRestaurant.rbsouValue}}<br>\n                                        <b> Notiz2:</b>{{tableRestaurant.notiz2Value}}</p>\n                                      <div *ngIf=\"tableRestaurant.isBesetzt === 'true'\">\n                                        <div *ngIf=\"tableRestaurant.placeholder === 'true'\" (click)=\"placeholderHide(tableRestaurant, j)\">\n                                          <p style=\"background-color: #9d9d9d; border: dashed 3px black; margin-top: 50px; opacity: 0.4; padding: 10px 10px 10px 10px\">Listen-Element hier hin ziehen!</p>\n                                        </div>\n                                      </div>\n                                    </div>\n                                  </div>\n                                </div>\n                              </div>\n                            </div>\n                            <div *ngIf=\"showWintergartenBool\">\n                              <div *ngFor=\"let tableWintergarten of tablesWintergarten; let j = index;\">\n                                <div *ngIf=\"tablesWintergarten[j] !== tablesWintergarten[j+1]\">\n                                  <div class='container' id='containerWintergarten' [dragula]='\"evented-bag\"' [ngStyle]=\"{'background-color': + tableWintergarten.bgColor}\">\n                                    <button style=\"float: right; margin: 20px 0px 20px 0px\" type=\"button\" class=\"btn btn-send\" (click)=\"occupy(tableWintergarten, j)\">{{tableWintergarten.isBesetzt === 'true' ? 'FREI MACHEN' : 'BESETZTEN'}}</button>\n                                    <div class=\"table\" [ngStyle]=\"{'background-color': '#' + tableWintergarten.bgColor}\">\n                                      <p><b> Tisch:</b>{{tableWintergarten.number}} </p><br>\n                                      <p style=\"background-color: #FFFFFF\"><b> Name:</b>{{tableWintergarten.nameValue}}<br>\n                                        <b> Sprache:</b>{{tableWintergarten.spracheValue}}<br>\n                                        <b> Zimmernummer:</b>{{tableWintergarten.zimmernummerValue}}<br>\n                                        <b> Preis Typ:</b>{{tableWintergarten.preistypValue}}<br>\n                                        <b> Anreise Datum:</b>{{tableWintergarten.anreiseValue}}<br>\n                                        <b> Abreise Datum:</b>{{tableWintergarten.abreiseValue}}<br>\n                                        <b> Personenanzahl:</b>{{tableWintergarten.personenAnzahlValue}}<br>\n                                        <b> RB/SOU:</b>{{tableWintergarten.rbsouValue}}<br>\n                                        <b> Notiz2:</b>{{tableWintergarten.notiz2Value}}</p>\n                                      <div *ngIf=\"tableWintergarten.isBesetzt === 'true'\">\n                                        <div *ngIf=\"tableWintergarten.placeholder === 'true'\" (click)=\"placeholderHide(tableWintergarten, j)\">\n                                          <p style=\"background-color: #9d9d9d; border: dashed 3px black; margin-top: 50px; opacity: 0.4; padding: 10px 10px 10px 10px\">Listen-Element hier hin ziehen!</p>\n                                        </div>\n                                      </div>\n                                    </div>\n                                  </div>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n          </div>\n\n          <div class=\"col-md-4\">\n              <div class=\"csv\"  style=\" width: 100%; height: 150px; padding: 10px 20px 50px 20px\"><h3>CSV-Datei hochladen</h3>\n                <div class=\"line\"></div>\n                <form class=\"SendMessage\" (submit)=\"sendMessage($event)\">\n                      <input type=\"file\" style=\"float: left; margin-top: 10px; color: #0a7a74\" (change)=\"fileChangeEvent($event)\" placeholder=\"Upload file...\" />\n                      <button style=\" background-color: #0a7a74; float: right; color:  white\" type=\"button\" class=\"btn btn-send\" (click)=\"upload()\">CSV HOCHLADEN</button>\n                  </form>\n              </div>\n              <h3>Im-Haus-Liste</h3>\n              <div class=\"row1\">\n                  <div class='wrapper'>\n                      <div *ngFor=\"let imHausListeElement of imHausListeElemente\">\n                          <div class='container' id='container1' [dragula]='\"evented-bag\"'>\n                              <div class=\"card\" id=\"card1\">\n                              <p> <b>Name:</b> {{imHausListeElement[23]}}<br>\n                                  <b>Sprache:</b> {{imHausListeElement[25]}}<br>\n                                  <b>Zimmernummer:</b> {{imHausListeElement[26]}}<br>\n                                  <b>PreisTyp:</b> {{imHausListeElement[28]}}<br>\n                                  <b>Anreise:</b> {{imHausListeElement[29]}}<br>\n                                  <b>Abreise:</b> {{imHausListeElement[30]}}<br>\n                                  <b>Personen Anzahl:</b> {{imHausListeElement[31]}}<br>\n                                  <b>RB/SOU:</b> {{imHausListeElement[32]}}<br>\n                                  <b>Notiz2:</b> {{imHausListeElement[33]}}<br>\n                              </p>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n              <h3>Anreise-Liste</h3>\n              <div class=\"row1\">\n                  <div class='wrapper'>\n                      <div *ngFor=\"let anreiseListeElement of anreiseListeElemente\">\n                          <div class='container' id='container2' [dragula]='\"evented-bag\"'>\n                              <div class=\"card\" id=\"card2\">\n                                  <p> <b>Name:</b> {{anreiseListeElement[20]}}<br>\n                                      <b>Zimmernummer:</b> {{anreiseListeElement[22]}}<br>\n                                      <b>PreisTyp:</b> {{anreiseListeElement[26]}}<br>\n                                      <b>Anreise:</b> {{anreiseListeElement[11]}}<br>\n                                      <b>Abreise:</b> {{anreiseListeElement[24]}}<br>\n                                      <b>Personen Anzahl:</b> {{anreiseListeElement[25]}}<br>\n                                      <b>RB/SOU:</b> {{anreiseListeElement[26]}}<br>\n                                      <b>Notiz2:</b> {{anreiseListeElement[27]}}<br>\n                                  </p>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n              <h3>Traces-Liste</h3>\n              <div class=\"row1\">\n                  <div class='wrapper'>\n                      <div *ngFor=\"let tracesListeElement of tracesListeElemente; let t = index;\">\n                          <div class='container' id='container3' [dragula]='\"evented-bag\"' >\n                            <div class=\"card\" id=\"card3\">\n                              <b>Zimmernummer:</b> {{tracesListeElement[0]}}<br>\n                              <b>Name:</b> {{tracesListeElement[1]}}<br>\n                              <b>Gäste Kategorie:</b> {{tracesListeElement[2]}}<br>\n                              <b>Anreise:</b> {{tracesListeElement[3]}}<br>\n                              <b>Abreise:</b> {{tracesListeElement[5]}}<br>\n                              <b>Trace:</b> {{tracesListeElement[8]}}<br>\n                            </div>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n          </div>\n\n\n          <div class=\"col-md-6\"><h3>Tisch Plan</h3>\n              <div class=\"row1\" style=\"height: auto; max-width: 95%\">\n                  <div class=\"col-md-3\"  (click)=\"showSonnbergZirbn()\" [ngStyle]=\"{'background-color': '#' + buttonBgColor1}\">\n                      <h3 [ngStyle]=\"{'color': '#' + fontColor1}\">Sonnberg-Zirbn</h3>\n                  </div>\n                  <div class=\"col-md-3\"  (click)=\"showPanorama()\" [ngStyle]=\"{'background-color': '#' + buttonBgColor2}\">\n                      <h3 [ngStyle]=\"{'color': '#' + fontColor2}\">Panorama</h3>\n                  </div>\n                  <div class=\"col-md-3\"  (click)=\"showRestaurant()\" [ngStyle]=\"{'background-color': '#' + buttonBgColor3}\">\n                      <h3 [ngStyle]=\"{'color': '#' + fontColor3}\">Restaurant</h3>\n                  </div>\n                  <div class=\"col-md-3\"  (click)=\"showWintergarten()\" [ngStyle]=\"{'background-color': '#' + buttonBgColor4}\">\n                      <h3 [ngStyle]=\"{'color': '#' + fontColor4}\">Wintergarten</h3>\n                  </div>\n              </div>\n            <div id=\"printSectionId2\">\n                <div class=\"row\" style=\"background-color: #eaf3f3; border-left: 5px solid #0a7a74; border-right: 5px solid #0a7a74;\" >\n                  <div *ngIf=\"showSonnbergZirbnBool\">\n                    <div *ngFor=\"let tableSonnbergZirbn of tablesSonnbergZirbn; let j = index;\">\n                      <div class=\"t{{tableSonnbergZirbn.number}}\" (click)=\"moveTable(j)\" [ngStyle]=\"{'top': tableSonnbergZirbn.topValue + 'px', 'left': tableSonnbergZirbn.leftValue + 'px', 'background-color': + tableSonnbergZirbn.bgColor}\">\n                        <div *ngIf=\"tablesSonnbergZirbn[j] !== tablesSonnbergZirbn[j+1]\">\n                          <p>{{tableSonnbergZirbn.number}}</p>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div *ngIf=\"showPanoramaBool\">\n                    <div *ngFor=\"let tablePanorama of tablesPanorama; let j = index;\">\n                      <div class=\"t{{tablePanorama.number}}\" (click)=\"moveTable(j)\" [ngStyle]=\"{'top': tablePanorama.topValue + 'px', 'left': tablePanorama.leftValue + 'px', 'background-color': + tablePanorama.bgColor}\">\n                        <div *ngIf=\"tablesPanorama[j] !== tablesPanorama[j+1]\">\n                          <p>{{tablePanorama.number}}</p>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div *ngIf=\"showRestaurantBool\">\n                    <div *ngFor=\"let tableRestaurant of tablesRestaurant; let j = index;\">\n                      <div class=\"t{{tableRestaurant.number}}\" (click)=\"moveTable(j)\" [ngStyle]=\"{'top': tableRestaurant.topValue + 'px', 'left': tableRestaurant.leftValue + 'px', 'background-color': + tableRestaurant.bgColor}\">\n                        <div *ngIf=\"tablesRestaurant[j] !== tablesRestaurant[j+1]\">\n                          <p>{{tableRestaurant.number}}</p>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div *ngIf=\"showWintergartenBool\">\n                    <div *ngFor=\"let tableWintergarten of tablesWintergarten; let j = index;\">\n                      <div class=\"t{{tableWintergarten.number}}\" (click)=\"moveTable(j)\" [ngStyle]=\"{'top': tableWintergarten.topValue + 'px', 'left': tableWintergarten.leftValue + 'px', 'background-color': + tableWintergarten.bgColor}\">\n                        <div *ngIf=\"tablesWintergarten[j] !== tablesWintergarten[j+1]\">\n                          <p>{{tableWintergarten.number}}</p>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n            </div>\n          </div>\n        </div>\n    </div>\n</body>\n\n</html>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/digitalerTischplan/tischplan.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_tischplan_service__ = __webpack_require__("../../../../../src/app/services/tischplan.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_dragula__ = __webpack_require__("../../../../ng2-dragula/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TischplanComponent; });
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
        this.tracesListeElemente = [];
        this.tablesSonnbergZirbn = [];
        this.tablesPanorama = [];
        this.tablesRestaurant = [];
        this.tablesWintergarten = [];
        this.filesToUpload = [];
        this.isDropped = [];
        var DomBaseElement = this.element.nativeElement;
        var wrapperElementsChildNames = [];
        this.tischplanService.getImHausListe()
            .subscribe(function (imHausListeElemente) {
            _this.imHausListeElemente = imHausListeElemente[0].data;
            console.log(_this.imHausListeElemente);
        });
        this.tischplanService.getAnreiseListe()
            .subscribe(function (anreiseListeElemente) {
            _this.anreiseListeElemente = anreiseListeElemente[0].data;
            console.log(_this.anreiseListeElemente);
        });
        this.tischplanService.getTables()
            .subscribe(function (tables) {
            console.log("TABLES LENGTH: " + tables.length);
            for (var a = 0; a < tables.length; a++) {
                if (tables[a].department === "Panorama") {
                    _this.tablesPanorama = tables[a].tables;
                }
                else if (tables[a].department === "Wintergarten") {
                    _this.tablesWintergarten = tables[a].tables;
                }
                else if (tables[a].department === "Sonnberg-Zirbn") {
                    _this.tablesSonnbergZirbn = tables[a].tables;
                }
                else if (tables[a].department === "Restaurant") {
                    _this.tablesRestaurant = tables[a].tables;
                }
            }
            console.log(_this.tablesPanorama);
            console.log(_this.tablesWintergarten);
            console.log(_this.tablesSonnbergZirbn);
            console.log(_this.tablesRestaurant);
        });
        this.tischplanService.getTracesListe()
            .subscribe(function (tracesListeElemente) {
            //console.log(tracesListeElemente);
            //console.log("2:" + tracesListeElemente[0].data[0]);
            //console.log(tracesListeElemente[0].data.length);
            //this.tracesListeElemente = tracesListeElemente[0].data;
            _this.formatTracesListeElements(tracesListeElemente);
        });
        this.buttonBgColor1 = "eaf3f3";
        this.buttonBgColor2 = "eaf3f3";
        this.buttonBgColor3 = "eaf3f3";
        this.buttonBgColor4 = "eaf3f3";
        this.fontColor1 = "0a7a74";
        this.fontColor2 = "0a7a74";
        this.fontColor3 = "0a7a74";
        this.fontColor4 = "0a7a74";
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
    TischplanComponent.prototype.formatTracesListeElements = function (tracesListeElemente) {
        for (var o = 0; o < tracesListeElemente[0].data.length; o++) {
            if (tracesListeElemente[0].data[o].length === 7) {
                tracesListeElemente[0].data[o].splice(0, 5);
                tracesListeElemente[0].data[o].splice(6, 7);
            }
        }
        for (var o = 0; o < tracesListeElemente[0].data.length; o++) {
            if (tracesListeElemente[0].data[o].length === 8) {
                tracesListeElemente[0].data.splice(o, 1);
            }
        }
        for (var o = 0; o < tracesListeElemente[0].data.length; o++) {
            if (tracesListeElemente[0].data[o].length === 24) {
                tracesListeElemente[0].data[o].splice(0, 12);
            }
        }
        for (var o = 0; o < tracesListeElemente[0].data.length; o++) {
            if (tracesListeElemente[0].data[o].length === 13) {
                tracesListeElemente[0].data.splice(o, 1);
            }
        }
        for (var o = 0; o < tracesListeElemente[0].data.length; o++) {
            if (tracesListeElemente[0].data[o].length === 19) {
                tracesListeElemente[0].data[o].splice(0, 17);
            }
        }
        for (var o = 0; o < tracesListeElemente[0].data.length; o++) {
            if (tracesListeElemente[0].data[o].length === 1) {
                tracesListeElemente[0].data.splice(o, 1);
            }
        }
        for (var o = 0; o < tracesListeElemente[0].data.length; o++) {
            if (tracesListeElemente[0].data[o].length === 12) {
                tracesListeElemente[0].data[o].splice(8, 12);
            }
        }
        for (var o = 0; o < tracesListeElemente[0].data.length; o++) {
            if (tracesListeElemente[0].data[o].length === 2) {
                tracesListeElemente[0].data[o].splice(1, 2);
            }
        }
        var trace1 = [];
        var trace2 = [];
        var trace3 = [];
        var trace4 = [];
        var trace5 = [];
        var trace6 = [];
        var trace7 = [];
        var trace8 = [];
        var trace9 = [];
        var trace10 = [];
        if (tracesListeElemente[0].data[0] !== undefined) {
            if (tracesListeElemente[0].data[0].length === 8) {
                trace1 = tracesListeElemente[0].data[0].concat(tracesListeElemente[0].data[1]);
            }
        }
        if (tracesListeElemente[0].data[1] !== undefined) {
            if (tracesListeElemente[0].data[1].length === 8) {
                trace2 = tracesListeElemente[0].data[1].concat(tracesListeElemente[0].data[2]);
            }
        }
        if (tracesListeElemente[0].data[2] !== undefined) {
            if (tracesListeElemente[0].data[2].length === 8) {
                trace3 = tracesListeElemente[0].data[2].concat(tracesListeElemente[0].data[3]);
            }
        }
        if (tracesListeElemente[0].data[3] !== undefined) {
            if (tracesListeElemente[0].data[3].length === 8) {
                trace4 = tracesListeElemente[0].data[3].concat(tracesListeElemente[0].data[4]);
            }
        }
        if (tracesListeElemente[0].data[4] !== undefined) {
            if (tracesListeElemente[0].data[4].length === 8) {
                trace5 = tracesListeElemente[0].data[4].concat(tracesListeElemente[0].data[5]);
            }
        }
        if (tracesListeElemente[0].data[5] !== undefined) {
            if (tracesListeElemente[0].data[5].length === 8) {
                trace6 = tracesListeElemente[0].data[5].concat(tracesListeElemente[0].data[6]);
            }
        }
        if (tracesListeElemente[0].data[6] !== undefined) {
            if (tracesListeElemente[0].data[6].length === 8) {
                trace7 = tracesListeElemente[0].data[6].concat(tracesListeElemente[0].data[7]);
            }
        }
        if (tracesListeElemente[0].data[7] !== undefined) {
            if (tracesListeElemente[0].data[7].length === 8) {
                trace8 = tracesListeElemente[0].data[7].concat(tracesListeElemente[0].data[8]);
            }
        }
        if (tracesListeElemente[0].data[8] !== undefined) {
            if (tracesListeElemente[0].data[8].length === 8) {
                trace9 = tracesListeElemente[0].data[8].concat(tracesListeElemente[0].data[9]);
            }
        }
        if (tracesListeElemente[0].data[9] !== undefined) {
            if (tracesListeElemente[0].data[9].length === 8) {
                trace10 = tracesListeElemente[0].data[9].concat(tracesListeElemente[0].data[10]);
            }
        }
        console.log(trace1);
        if (trace1.length === 9) {
            this.tracesListeElemente.push(trace1);
        }
        if (trace2.length === 9) {
            this.tracesListeElemente.push(trace2);
        }
        if (trace3.length === 9) {
            this.tracesListeElemente.push(trace3);
        }
        if (trace4.length === 9) {
            this.tracesListeElemente.push(trace4);
        }
        if (trace5.length === 9) {
            this.tracesListeElemente.push(trace5);
        }
        if (trace6.length === 9) {
            this.tracesListeElemente.push(trace6);
        }
        if (trace7.length === 9) {
            this.tracesListeElemente.push(trace7);
        }
        if (trace8.length === 9) {
            this.tracesListeElemente.push(trace8);
        }
        if (trace9.length === 9) {
            this.tracesListeElemente.push(trace9);
        }
        if (trace10.length === 9) {
            this.tracesListeElemente.push(trace10);
        }
        console.log(tracesListeElemente[0].data);
        console.log(this.tracesListeElemente);
    };
    TischplanComponent.prototype.onDrag = function (args) {
        var e = args[0], el = args[1];
    };
    TischplanComponent.prototype.onDrop = function (args) {
        var _this = this;
        var e = args[0], el = args[1];
        console.log("Args = ");
        var information = args[0].innerText;
        var department = JSON.stringify(args[1].id);
        var departementSubstring = department.substring(10, department.length - 1);
        console.log(args);
        var tableNumber = args[1].innerText;
        var tableNumberSubstring = "";
        console.log("tableNumber" + tableNumber);
        var freiMachen = "FREI MACHEN";
        if (tableNumber.indexOf(freiMachen) !== -1) {
            tableNumberSubstring = tableNumber.substring(18, 20);
        }
        else {
            tableNumberSubstring = tableNumber.substring(6, 8);
        }
        console.log("tableNumberSubstring" + tableNumberSubstring);
        var dataString = [];
        dataString.push(information + departementSubstring + tableNumberSubstring);
        //console.log(dataString);
        //console.log(departementSubstring);
        //console.log(tableNumberSubstring);
        this.tischplanService.addInformationToTable(dataString)
            .subscribe(function (response) {
            // let arrayIndex = response[1];
            // console.log("RESPONSE1:" + JSON.stringify(response[0].tables[i].isBesetzt));
            _this.tablesSonnbergZirbn[response.tables[0].arrayIndex] = response.tables[0];
            // console.log(this.tablesSonnbergZirbn[arrayIndex]);
        });
        console.log("Occupy Table!");
        this.tischplanService.occupyTable(dataString)
            .subscribe(function (response) {
            //let arrayIndex = response[1];
            //console.log("arrayIndex:" + arrayIndex);
            //console.log("bgColor:" + JSON.stringify(response[0].tables[arrayIndex].bgColor));
            console.log("Response:" + JSON.stringify(response));
            _this.tablesSonnbergZirbn[response.tables[0].arrayIndex] = response.tables[0];
            //console.log("bgColor:" + JSON.stringify(this.tablesSonnbergZirbn[arrayIndex]));
        });
        this.tischplanService.removePlaceholder(dataString)
            .subscribe(function (response) {
            //let arrayIndex = response[1];
            //console.log("placeholder:" + JSON.stringify(response[0].tables[arrayIndex].placeholder));
            _this.tablesSonnbergZirbn[response.tables[0].arrayIndex].placeholder = response.tables[0].placeholder;
            //console.log("placeholder:" + JSON.stringify(this.tablesSonnbergZirbn[arrayIndex]));
        });
    };
    TischplanComponent.prototype.onOver = function (args) {
        var e = args[0], el = args[1], container = args[2];
        // do something
    };
    TischplanComponent.prototype.onOut = function (args) {
        var e = args[0], el = args[1], container = args[2];
        // do something
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
    TischplanComponent.prototype.occupy = function (tableSonnbergZirbn, j) {
        var _this = this;
        this.tischplanService.dispenseTable(tableSonnbergZirbn).subscribe(function (response) {
            console.log("Dispense Table!");
            console.log("bgColor:" + JSON.stringify(response[0].tables[j].bgColor));
            console.log("isBesetzt:" + JSON.stringify(response[0].tables[j].isBesetzt));
            _this.tablesSonnbergZirbn[j].bgColor = response[0].tables[j].bgColor;
            _this.tablesSonnbergZirbn[j].isBesetzt = response[0].tables[j].isBesetzt;
            console.log(_this.tablesSonnbergZirbn[j].isBesetzt);
        });
        this.tischplanService.addPlaceholder(tableSonnbergZirbn).subscribe(function (response) {
            console.log("Add placeholder!");
            console.log("placeholder:" + JSON.stringify(response[0].tables[j].placeholder));
            _this.tablesSonnbergZirbn[j].placeholder = response[0].tables[j].placeholder;
            console.log(_this.tablesSonnbergZirbn[j].placeholder);
        });
    };
    TischplanComponent.prototype.showSonnbergZirbn = function () {
        console.log("showSonnbergZirbn!");
        this.showSonnbergZirbnBool = true;
        this.showPanoramaBool = false;
        this.showRestaurantBool = false;
        this.showWintergartenBool = false;
        if (this.buttonBgColor1 === "eaf3f3") {
            this.buttonBgColor1 = "0a7a74";
            this.buttonBgColor2 = "eaf3f3";
            this.buttonBgColor3 = "eaf3f3";
            this.buttonBgColor4 = "eaf3f3";
        }
        else {
            this.buttonBgColor1 = "eaf3f3";
        }
        if (this.fontColor1 === "0a7a74") {
            this.fontColor1 = "eaf3f3";
            this.fontColor2 = "0a7a74";
            this.fontColor3 = "0a7a74";
            this.fontColor4 = "0a7a74";
        }
        else {
            this.fontColor1 = "0a7a74";
        }
    };
    TischplanComponent.prototype.showPanorama = function () {
        console.log("showPanorama!");
        this.showSonnbergZirbnBool = false;
        this.showPanoramaBool = true;
        console.log(this.showPanoramaBool);
        this.showRestaurantBool = false;
        this.showWintergartenBool = false;
        if (this.buttonBgColor2 === "eaf3f3") {
            this.buttonBgColor2 = "0a7a74";
            this.buttonBgColor1 = "eaf3f3";
            this.buttonBgColor3 = "eaf3f3";
            this.buttonBgColor4 = "eaf3f3";
        }
        else {
            this.buttonBgColor2 = "eaf3f3";
        }
        if (this.fontColor2 === "0a7a74") {
            this.fontColor2 = "eaf3f3";
            this.fontColor1 = "0a7a74";
            this.fontColor3 = "0a7a74";
            this.fontColor4 = "0a7a74";
        }
        else {
            this.fontColor2 = "0a7a74";
        }
    };
    TischplanComponent.prototype.showRestaurant = function () {
        console.log("showRestaurant!");
        this.showSonnbergZirbnBool = false;
        this.showPanoramaBool = false;
        this.showRestaurantBool = true;
        this.showWintergartenBool = false;
        if (this.buttonBgColor3 === "eaf3f3") {
            this.buttonBgColor3 = "0a7a74";
            this.buttonBgColor1 = "eaf3f3";
            this.buttonBgColor2 = "eaf3f3";
            this.buttonBgColor4 = "eaf3f3";
        }
        else {
            this.buttonBgColor3 = "eaf3f3";
        }
        if (this.fontColor3 === "0a7a74") {
            this.fontColor3 = "eaf3f3";
            this.fontColor1 = "0a7a74";
            this.fontColor2 = "0a7a74";
            this.fontColor4 = "0a7a74";
        }
        else {
            this.fontColor3 = "0a7a74";
        }
    };
    TischplanComponent.prototype.showWintergarten = function () {
        console.log("showWintergarten!");
        this.showSonnbergZirbnBool = false;
        this.showPanoramaBool = false;
        this.showRestaurantBool = false;
        this.showWintergartenBool = true;
        if (this.buttonBgColor4 === "eaf3f3") {
            this.buttonBgColor4 = "0a7a74";
            this.buttonBgColor1 = "eaf3f3";
            this.buttonBgColor2 = "eaf3f3";
            this.buttonBgColor3 = "eaf3f3";
        }
        else {
            this.buttonBgColor4 = "eaf3f3";
        }
        if (this.fontColor4 === "0a7a74") {
            this.fontColor4 = "eaf3f3";
            this.fontColor1 = "0a7a74";
            this.fontColor2 = "0a7a74";
            this.fontColor3 = "0a7a74";
        }
        else {
            this.fontColor4 = "0a7a74";
        }
    };
    /*
        moveTable(g, j, f) {
    
          console.log("moveTable clicked");
          console.log(g, j, f + "-" +  this.leftValues[f] + "-" + this.topValues[g]);
    
          //Sonnberg-Zirbn
          //50
          if (g === 10 && this.topValues[g] === 430) {
              this.topValues[g] = 400;
              this.tables.splice(j + 1, 1, 50);
          }   else if (g === 10 && this.topValues[g] === 400) {
              this.topValues[g] = 430;
              this.tables.splice(j + 1, 1, 51);
          }
          //52
          if (g === 12 && this.leftValues[f] === 230 && this.topValues[g] === 280) {
            this.topValues[g] = 280;
            this.leftValues[f] = 200;
            this.tables.splice(j + 1, 1, 52);
          } else if (g === 12 && this.leftValues[f] === 200 && this.topValues[g] === 280) {
            this.leftValues[f] = 230;
            this.topValues[g] = 280;
            this.tables.splice(j + 1, 1, 53);
          }
          //54
          if (g === 14 && this.leftValues[f] === 50 && this.topValues[g] === 320) {
            this.topValues[g] = 290;
            this.leftValues[f] = 50;
            this.tables.splice(j + 1, 1, 54);
          } else if (g === 14 && this.leftValues[f] === 50 && this.topValues[g] === 290) {
            this.topValues[g] = 320;
            this.leftValues[f] = 50;
            this.tables.splice(j + 1, 1, 55);
          }
          //56
          if (g === 16 && this.leftValues[f] === 50 && this.topValues[g] === 200) {
            this.topValues[g] = 170;
            this.leftValues[f] = 50;
            this.tables.splice(j + 1, 1, 56);
          } else if (g === 16 && this.leftValues[f] === 50 && this.topValues[g] === 170) {
            this.topValues[g] = 200;
            this.leftValues[f] = 50;
            this.tables.splice(j + 1, 1, 57);
          }
    
          //Panorama Restaurant
          //60
          if (g === 0 && this.leftValues[f] === 220 && this.topValues[g] === 440) {
            this.topValues[g] = 440;
            this.leftValues[f] = 250;
            this.tables.splice(j + 1, 1, 60);
          } else if (g === 0 && this.leftValues[f] === 250 && this.topValues[g] === 440) {
            this.topValues[g] = 440;
            this.leftValues[f] = 220;
            this.tables.splice(j + 1, 1, 61);
          }
          //61
          if (g === 1 && this.leftValues[f] === 280 && this.topValues[g] === 440) {
            this.topValues[g] = 440;
            this.leftValues[f] = 310;
            this.tables.splice(j + 1, 1, 61);
          } else if (g === 1 && this.leftValues[f] === 310 && this.topValues[g] === 440) {
            this.topValues[g] = 440;
            this.leftValues[f] = 280;
            this.tables.splice(j + 1, 1, 62);
          }
          //62
          if (g === 2 && this.leftValues[f] === 340 && this.topValues[g] === 440) {
            this.topValues[g] = 440;
            this.leftValues[f] = 370;
            this.tables.splice(j + 1, 1, 62);
          } else if (g === 2 && this.leftValues[f] === 370 && this.topValues[g] === 440) {
            this.topValues[g] = 440;
            this.leftValues[f] = 340;
            this.tables.splice(j + 1, 1, 63);
          }
          //63
          if (g === 3 && this.leftValues[f] === 400 && this.topValues[g] === 440) {
            this.topValues[g] = 440;
            this.leftValues[f] = 430;
            this.tables.splice(j + 1, 1, 63);
          } else if (g === 3 && this.leftValues[f] === 430 && this.topValues[g] === 440) {
            this.topValues[g] = 440;
            this.leftValues[f] = 400;
            this.tables.splice(j + 1, 1, 64);
          }
          //64
          if (g === 4 && this.leftValues[f] === 460 && this.topValues[g] === 440) {
            this.topValues[g] = 440;
            this.leftValues[f] = 490;
            this.tables.splice(j + 1, 1, 64);
          } else if (g === 4 && this.leftValues[f] === 490 && this.topValues[g] === 440) {
            this.topValues[g] = 440;
            this.leftValues[f] = 460;
            this.tables.splice(j + 1, 1, 65);
          }
          //65
          if (g === 5 && this.leftValues[f] === 520 && this.topValues[g] === 440) {
            this.topValues[g] = 440;
            this.leftValues[f] = 550;
            this.tables.splice(j + 1, 1, 65);
          } else if (g === 5 && this.leftValues[f] === 550 && this.topValues[g] === 440) {
            this.topValues[g] = 440;
            this.leftValues[f] = 520;
            this.tables.splice(j + 1, 1, 66);
          }
          //67
          if (g === 7 && this.leftValues[f] === 580 && this.topValues[g] === 340) {
            this.topValues[g] = 310;
            this.leftValues[f] = 580;
            this.tables.splice(j + 1, 1, 67);
          } else if (g === 7 && this.leftValues[f] === 580 && this.topValues[g] === 310) {
            this.topValues[g] = 340;
            this.leftValues[f] = 580;
            this.tables.splice(j + 1, 1, 68);
          }
          //68
          if (g === 8 && this.leftValues[f] === 580 && this.topValues[g] === 280) {
            this.topValues[g] = 250;
            this.leftValues[f] = 580;
            this.tables.splice(j + 1, 1, 68);
          } else if (g === 8 && this.leftValues[f] === 580 && this.topValues[g] === 250) {
            this.topValues[g] = 280;
            this.leftValues[f] = 580;
            this.tables.splice(j + 1, 1, 69);
          }
          //69
          if (g === 9 && this.leftValues[f] === 580 && this.topValues[g] === 220) {
            this.topValues[g] = 190;
            this.leftValues[f] = 580;
            this.tables.splice(j + 1, 1, 69);
          } else if (g === 9 && this.leftValues[f] === 580 && this.topValues[g] === 190) {
            this.topValues[g] = 220;
            this.leftValues[f] = 580;
            this.tables.splice(j + 1, 1, 70);
          }
          //71
          if (g === 11 && this.leftValues[f] === 460 && this.topValues[g] === 160) {
            this.topValues[g] = 190;
            this.leftValues[f] = 460;
            this.tables.splice(j + 1, 1, 71);
          } else if (g === 11 && this.leftValues[f] === 460 && this.topValues[g] === 190) {
            this.topValues[g] = 160;
            this.leftValues[f] = 460;
            this.tables.splice(j + 1, 1, 72);
          }
          //72
          if (g === 12 && this.leftValues[f] === 460 && this.topValues[g] === 220) {
            this.topValues[g] = 250;
            this.leftValues[f] = 460;
            this.tables.splice(j + 1, 1, 72);
          } else if (g === 12 && this.leftValues[f] === 460 && this.topValues[g] === 250) {
            this.topValues[g] = 220;
            this.leftValues[f] = 460;
            this.tables.splice(j + 1, 1, 73);
          }
          //73
          if (g === 13 && this.leftValues[f] === 460 && this.topValues[g] === 280) {
            this.topValues[g] = 310;
            this.leftValues[f] = 460;
            this.tables.splice(j + 1, 1, 73);
          } else if (g === 13 && this.leftValues[f] === 460 && this.topValues[g] === 310) {
            this.topValues[g] = 280;
            this.leftValues[f] = 460;
            this.tables.splice(j + 1, 1, 74);
          }
          //75
          if (g === 15 && this.leftValues[f] === 340 && this.topValues[g] === 340) {
            this.topValues[g] = 310;
            this.leftValues[f] = 340;
            this.tables.splice(j + 1, 1, 75);
          } else if (g === 15 && this.leftValues[f] === 340 && this.topValues[g] === 310) {
            this.topValues[g] = 340;
            this.leftValues[f] = 340;
            this.tables.splice(j + 1, 1, 76);
          }
          //76
          if (g === 16 && this.leftValues[f] === 340 && this.topValues[g] === 280) {
            this.topValues[g] = 250;
            this.leftValues[f] = 340;
            this.tables.splice(j + 1, 1, 76);
          } else if (g === 16 && this.leftValues[f] === 340 && this.topValues[g] === 250) {
            this.topValues[g] = 280;
            this.leftValues[f] = 340;
            this.tables.splice(j + 1, 1, 77);
          }
          //77
          if (g === 17 && this.leftValues[f] === 340 && this.topValues[g] === 220) {
            this.topValues[g] = 190;
            this.leftValues[f] = 340;
            this.tables.splice(j + 1, 1, 77);
          } else if (g === 17 && this.leftValues[f] === 340 && this.topValues[g] === 190) {
            this.topValues[g] = 220;
            this.leftValues[f] = 340;
            this.tables.splice(j + 1, 1, 78);
          }
          //79
          if (g === 19 && this.leftValues[f] === 220 && this.topValues[g] === 340) {
            this.topValues[g] = 310;
            this.leftValues[f] = 220;
            this.tables.splice(j + 1, 1, 79);
          } else if (g === 19 && this.leftValues[f] === 220 && this.topValues[g] === 310) {
            this.topValues[g] = 340;
            this.leftValues[f] = 220;
            this.tables.splice(j + 1, 1, 80);
          }
          //80
          if (g === 20 && this.leftValues[f] === 220 && this.topValues[g] === 280) {
            this.topValues[g] = 250;
            this.leftValues[f] = 220;
            this.tables.splice(j + 1, 1, 80);
          } else if (g === 20 && this.leftValues[f] === 220 && this.topValues[g] === 250) {
            this.topValues[g] = 280;
            this.leftValues[f] = 220;
            this.tables.splice(j + 1, 1, 81);
          }
          //81
          if (g === 21 && this.leftValues[f] === 220 && this.topValues[g] === 220) {
            this.topValues[g] = 190;
            this.leftValues[f] = 220;
            this.tables.splice(j + 1, 1, 81);
          } else if (g === 21 && this.leftValues[f] === 220 && this.topValues[g] === 190) {
            this.topValues[g] = 220;
            this.leftValues[f] = 220;
            this.tables.splice(j + 1, 1, 82);
          }
          //83
          if (g === 23 && this.leftValues[f] === 60 && this.topValues[g] === 160) {
            this.topValues[g] = 190;
            this.leftValues[f] = 60;
            this.tables.splice(j + 1, 1, 83);
          } else if (g === 23 && this.leftValues[f] === 60 && this.topValues[g] === 190) {
            this.topValues[g] = 160;
            this.leftValues[f] = 60;
            this.tables.splice(j + 1, 1, 84);
          }
          //84
          if (g === 24 && this.leftValues[f] === 60 && this.topValues[g] === 220) {
            this.topValues[g] = 250;
            this.leftValues[f] = 60;
            this.tables.splice(j + 1, 1, 84);
          } else if (g === 24 && this.leftValues[f] === 60 && this.topValues[g] === 250) {
            this.topValues[g] = 220;
            this.leftValues[f] = 60;
            this.tables.splice(j + 1, 1, 85);
          }
          //85
          if (g === 25 && this.leftValues[f] === 60 && this.topValues[g] === 280) {
            this.topValues[g] = 310;
            this.leftValues[f] = 60;
            this.tables.splice(j + 1, 1, 85);
          } else if (g === 25 && this.leftValues[f] === 60 && this.topValues[g] === 310) {
            this.topValues[g] = 280;
            this.leftValues[f] = 60;
            this.tables.splice(j + 1, 1, 86);
          }
          //86
          if (g === 26 && this.leftValues[f] === 60 && this.topValues[g] === 340) {
            this.topValues[g] = 370;
            this.leftValues[f] = 60;
            this.tables.splice(j + 1, 1, 86);
          } else if (g === 26 && this.leftValues[f] === 60 && this.topValues[g] === 370) {
            this.topValues[g] = 340;
            this.leftValues[f] = 60;
            this.tables.splice(j + 1, 1, 87);
          }
          //87
          if (g === 27 && this.leftValues[f] === 60 && this.topValues[g] === 400) {
            this.topValues[g] = 430;
            this.leftValues[f] = 60;
            this.tables.splice(j + 1, 1, 87);
          } else if (g === 27 && this.leftValues[f] === 60 && this.topValues[g] === 430) {
            this.topValues[g] = 400;
            this.leftValues[f] = 60;
            this.tables.splice(j + 1, 1, 88);
          }
          //88
          if (g === 28 && this.leftValues[f] === 60 && this.topValues[g] === 460) {
            this.topValues[g] = 490;
            this.leftValues[f] = 60;
            this.tables.splice(j + 1, 1, 88);
          } else if (g === 28 && this.leftValues[f] === 60 && this.topValues[g] === 490) {
            this.topValues[g] = 460;
            this.leftValues[f] = 60;
            this.tables.splice(j + 1, 1, 89);
          }
          //9
          if (g === 8 && this.leftValues[f] === 180 && this.topValues[g] === 200) {
            this.topValues[g] = 200;
            this.leftValues[f] = 210;
            this.tables.splice(j + 1, 1, 9);
          } else if (g === 8 && this.leftValues[f] === 210 && this.topValues[g] === 200) {
            this.topValues[g] = 200;
            this.leftValues[f] = 180;
            this.tables.splice(j + 1, 1, 10);
          }
          //501
          if (g === 0 && this.leftValues[f] === 420 && this.topValues[g] === 115) {
            this.topValues[g] = 115;
            this.leftValues[f] = 470;
            this.tables.splice(j + 1, 1, 501);
          } else if (g === 0 && this.leftValues[f] === 470 && this.topValues[g] === 115) {
            this.topValues[g] = 115;
            this.leftValues[f] = 420;
            this.tables.splice(j + 1, 1, 502);
          }
          //503
          if (g === 2 && this.leftValues[f] === 590 && this.topValues[g] === 115) {
            this.topValues[g] = 115;
            this.leftValues[f] = 640;
            this.tables.splice(j + 1, 1, 503);
          } else if (g === 2 && this.leftValues[f] === 640 && this.topValues[g] === 115) {
            this.topValues[g] = 115;
            this.leftValues[f] = 590;
            this.tables.splice(j + 1, 1, 504);
          }
          //505
          if (g === 4 && this.leftValues[f] === 590 && this.topValues[g] === 215) {
            this.topValues[g] = 215;
            this.leftValues[f] = 640;
            this.tables.splice(j + 1, 1, 505);
          } else if (g === 4 && this.leftValues[f] === 640 && this.topValues[g] === 215) {
            this.topValues[g] = 215;
            this.leftValues[f] = 590;
            this.tables.splice(j + 1, 1, 506);
          }
          //515
          if (g === 14 && this.leftValues[f] === 280 && this.topValues[g] === 380) {
            this.topValues[g] = 380;
            this.leftValues[f] = 240;
            this.tables.splice(j + 1, 1, 515);
          } else if (g === 14 && this.leftValues[f] === 240 && this.topValues[g] === 380) {
            this.topValues[g] = 380;
            this.leftValues[f] = 280;
            this.tables.splice(j + 1, 1, 516);
          }
          //523
          if (g === 23 && this.leftValues[f] === 300 && this.topValues[g] === 115) {
            this.topValues[g] = 130;
            this.leftValues[f] = 260;
            this.tables.splice(j, 1, 523);
          } else if (g === 23 && this.leftValues[f] === 260 && this.topValues[g] === 130) {
            this.topValues[g] = 115;
            this.leftValues[f] = 300;
            this.tables.splice(j, 1, 524);
          }
        }
    */
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
        popupWinindow = window.open('', '_blank', 'width=600,height=700,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
        popupWinindow.document.open();
        popupWinindow.document.write('<html><head><style> .row .t1 { width: 30px; height: 60px; position: absolute; border: solid 1px #0a7a74; } .row .t2 { width: 30px; height: 60px; position: absolute; border: solid 1px #0a7a74; } .row .t3 { width: 30px; height: 60px; position: absolute; border: solid 1px #0a7a74; } .row .t4 { width: 30px; height: 60px; position: absolute; border: solid 1px #0a7a74; } .row .t5 { width: 30px; height: 80px; border: solid 1px #0a7a74; position: absolute; } .row .t6 { width: 30px; height: 80px; border: solid 1px #0a7a74; position: absolute; } .row .t7 { width: 30px; height: 80px; border: solid 1px #0a7a74; position: absolute; } .row .t8 { width: 100px; height: 90px; border: solid 1px #0a7a74; position: absolute; } .row .t9 { width: 40px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t10 { width: 40px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t11 { width: 30px; height: 80px; border: solid 1px #0a7a74; position: absolute; } .row .t12 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t13 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t14 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t15 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t16 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t17 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t40 { width: 60px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t41 { width: 60px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t42 { width: 80px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t43 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t44 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t45 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t46 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t47 { width: 80px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t48 { width: 60px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t49 { width: 60px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t50 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t51 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t52 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t53 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t54 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t55 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t56 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t57 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t58 { width: 60px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t60 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t61 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t62 { width: 30px; height: 60px; position: absolute; border: solid 1px #0a7a74; } .row .t63 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t64 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t65 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t66 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t67 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t68 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t69 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t70 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t71 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t72 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t73 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t74 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t75 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t76 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t77 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t78 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t79 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t80 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t81 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t82 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t83 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t84 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t85 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t86 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t87 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t88 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t89 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t501 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t502 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t503 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; transform: rotate(45deg); } .row .t504 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; transform: rotate(45deg); } .row .t505 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; transform: rotate(45deg); } .row .t506 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; transform: rotate(45deg); } .row .t507 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; border-radius: 50%; } .row .t508 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; border-radius: 50%; } .row .t509 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; border-radius: 50%; } .row .t510 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; border-radius: 50%; } .row .t511 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; border-radius: 50%; } .row .t512 { width: 80px; height: 45px; border: solid 1px #0a7a74; position: absolute; } .row .t513 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; border-radius: 50%; } .row .t514 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; border-radius: 50%; } .row .t515 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; transform: rotate(45deg); } .row .t516 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; transform: rotate(45deg); } .row .t517 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; transform: rotate(10deg); } .row .t518 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; transform: rotate(30deg); } .row .t519 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; transform: rotate(50deg); } .row .t520 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; transform: rotate(70deg); } .row .t521 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; transform: rotate(90deg); } .row .t522 { width: 80px; height: 45px; border: solid 1px #0a7a74; position: absolute; } .row .t523 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; transform: rotate(45deg); } .row .t524 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; transform: rotate(45deg); } .row .t525 { width: 40px; height: 40px; position: absolute; transform: rotate(45deg); } </style></head><body onload="window.print()">' + innerContents + '</html>');
        popupWinindow.document.close();
    };
    return TischplanComponent;
}());
TischplanComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TischplanService; });
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
    TischplanService.prototype.occupyTable = function (dataString) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('occupyTable', dataString, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.dispenseTable = function (tableSonnbergZirbn) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('dispenseTable', tableSonnbergZirbn, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.removePlaceholder = function (dataString) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('removePlaceholder', dataString, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.addPlaceholder = function (tableSonnbergZirbn) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('addPlaceholder', tableSonnbergZirbn, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.addInformationToTable = function (dataString) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('addInformationToTable', dataString, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    return TischplanService;
}());
TischplanService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map