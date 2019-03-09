(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-pages-plain-pages-module"],{

/***/ "./src/app/components/pages-plain/login-form/login.form.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/pages-plain/login-form/login.form.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app flex-row align-items-center\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-md-4\">\n        <div class=\"card-group mb-0\">\n          <div class=\"card p-4\">\n            <form #loginForm=\"ngForm\">\n              <div class=\"card-body\">\n                <h1>เข้าสู่ระบบ</h1>\n                <p class=\"text-muted\">เข้าสู่ระบบการขาย</p>\n                <div class=\"error-message no-padding float-lef \" name=\"required-field\" *ngIf=\"errorMessage\">\n                  {{errorMessage}}\n                </div>\n                <div class=\"input-group mb-3\">\n                  <span class=\"input-group-addon\">\n                    <i class=\"icon-user\"></i>\n                  </span>\n                  <input type=\"text\" class=\"form-control\" \n                    id= \"username\" \n                    #usernameRef=\"ngModel\" \n                    ngModel required \n                    name=\"username\" \n                    [(ngModel)]=\"username\" placeholder=\"ชื่อผู้ใช้\">\n                  <div class=\"error-message no-padding float-lef \" name=\"required-field\" *ngIf=\"!usernameRef.valid && usernameRef.dirty\">\n                    กรุณาระบุชื่อผู้ใช้\n                  </div>\n                </div>\n                <div class=\"input-group mb-4\">\n                  <span class=\"input-group-addon\">\n                    <i class=\"icon-lock\"></i>\n                  </span>\n                  <input type=\"password\" class=\"form-control\" \n                    id=\"password\" \n                    ngModel required \n                    #passwordRef=\"ngModel\" \n                    name=\"password\"  \n                    [(ngModel)]=\"password\" \n                    placeholder=\"รหัสผ่น\">\n                  <div class=\"error-message no-padding float-lef \" name=\"required-field\" *ngIf=\"!passwordRef.valid && passwordRef.dirty\">\n                    กรุณาระบุชื่อรหัสผ่าน\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-6\">\n                    <button type=\"submit\" \n                      (click)=\"loginSubmit(loginForm)\" \n                      id=\"btnLogin\" \n                      [disabled]=\"loginForm.invalid\"\n                      class=\"btn btn-primary px-4\">เข้าสู่ระบบ</button>\n                  </div>\n                  <!-- <div class=\"col-6 text-right\">\n                    <button type=\"button\" class=\"btn btn-link px-0\">Forgot password?</button>\n                  </div> -->\n                </div>\n              </div>\n            </form>\n          </div>\n          <!-- <div class=\"card text-white bg-primary py-5 d-md-down-none\" style=\"width:44%\">\n            <div class=\"card-body text-center\">\n              <div>\n                <h2>Sign up</h2>\n                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore\n                  magna aliqua.</p>\n                <button type=\"button\" class=\"btn btn-primary active mt-3\">Register Now!</button>\n              </div>\n            </div>\n          </div> -->\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/pages-plain/login-form/login.form.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/pages-plain/login-form/login.form.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMtcGxhaW4vbG9naW4tZm9ybS9sb2dpbi5mb3JtLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/pages-plain/login-form/login.form.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/pages-plain/login-form/login.form.component.ts ***!
  \***************************************************************************/
/*! exports provided: LoginFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function() { return LoginFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _containers_login_model_login_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../containers/login/model/login.model */ "./src/app/containers/login/model/login.model.ts");




var LoginFormComponent = /** @class */ (function () {
    function LoginFormComponent() {
        this.login = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    LoginFormComponent.prototype.loginSubmit = function (data) {
        var loginModel = new _containers_login_model_login_model__WEBPACK_IMPORTED_MODULE_2__["LoginModel"](data.value.username, data.value.password);
        this.login.emit(loginModel);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], LoginFormComponent.prototype, "login", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], LoginFormComponent.prototype, "errorMessage", void 0);
    LoginFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login-component',
            template: __webpack_require__(/*! ./login.form.component.html */ "./src/app/components/pages-plain/login-form/login.form.component.html"),
            styles: [__webpack_require__(/*! ./login.form.component.scss */ "./src/app/components/pages-plain/login-form/login.form.component.scss")]
        })
    ], LoginFormComponent);
    return LoginFormComponent;
}());



/***/ }),

/***/ "./src/app/components/pages-plain/pages.module.ts":
/*!********************************************************!*\
  !*** ./src/app/components/pages-plain/pages.module.ts ***!
  \********************************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _containers_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../containers/login/login.component */ "./src/app/containers/login/login.component.ts");
/* harmony import */ var _components_pages_plain_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/pages-plain/login-form/login.form.component */ "./src/app/components/pages-plain/login-form/login.form.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_barcode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-barcode */ "./node_modules/ngx-barcode/index.js");








var routes = [
    {
        path: '',
        data: {
            title: 'Pages'
        },
        children: [
            {
                path: 'login',
                component: _containers_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
                data: {
                    title: 'Login Page'
                }
            }
        ]
    }
];
var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
                _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
                ngx_barcode__WEBPACK_IMPORTED_MODULE_7__["NgxBarcodeModule"]
            ],
            declarations: [
                _containers_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
                _components_pages_plain_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_4__["LoginFormComponent"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ }),

/***/ "./src/app/containers/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/containers/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n    <app-login-component [(errorMessage)]=\"errorMessage\" (login)=\"loginSubmit($event)\"></app-login-component>\n</p>"

/***/ }),

/***/ "./src/app/containers/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/containers/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/login.service */ "./src/app/containers/login/service/login.service.ts");



var LoginComponent = /** @class */ (function () {
    function LoginComponent(loginService) {
        this.loginService = loginService;
    }
    LoginComponent.prototype.loginSubmit = function (event) {
        var _this = this;
        // this.loginService.loginApi(event);
        this.errorMessage = "";
        this.loginService.loginApi2(event).catch(function (res) {
            _this.setErrorLoginMessage(res);
        });
    };
    LoginComponent.prototype.setErrorLoginMessage = function (res) {
        if (res.status === 401) {
            this.errorMessage = "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง";
        }
        else if (res.status === 404 || res.status === 0) {
            this.errorMessage = "ไม่พบการเชื่อมต่อ";
        }
        else if (res.status === 400 ||
            res.status === 422 ||
            res.status === 500 ||
            res.status === 403) {
            this.errorMessage = "พบข้อผิดพลาด กรุณาติดต่อผู้ดูแลระบบ";
        }
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            providers: [_service_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]],
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/containers/login/login.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/containers/login/model/login.model.ts":
/*!*******************************************************!*\
  !*** ./src/app/containers/login/model/login.model.ts ***!
  \*******************************************************/
/*! exports provided: LoginModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModel", function() { return LoginModel; });
var LoginModel = /** @class */ (function () {
    function LoginModel(username, password) {
        this.username = username;
        this.password = password;
    }
    return LoginModel;
}());



/***/ }),

/***/ "./src/app/containers/login/service/login.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/containers/login/service/login.service.ts ***!
  \***********************************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_user_authentication_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/user/authentication-service.service */ "./src/app/services/user/authentication-service.service.ts");




var LoginService = /** @class */ (function () {
    function LoginService(http, authenticationService) {
        this.http = http;
        this.authenticationService = authenticationService;
    }
    LoginService.prototype.loginApi = function (data) {
        return this.authenticationService.login(data.username, data.password);
    };
    LoginService.prototype.loginApi2 = function (data) {
        return this.authenticationService.login2(data.username, data.password);
    };
    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _services_user_authentication_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], LoginService);
    return LoginService;
}());



/***/ })

}]);
//# sourceMappingURL=components-pages-plain-pages-module.js.map