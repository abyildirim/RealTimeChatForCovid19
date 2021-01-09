(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\Nezih Sunman\Desktop\CS447Project\CS447ProjectRealTimeChat\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "6vm7":
    /*!********************************************************!*\
      !*** ./src/app/sign-in-component/sign-in.component.ts ***!
      \********************************************************/

    /*! exports provided: SignInComponent */

    /***/
    function vm7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignInComponent", function () {
        return SignInComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _services_covid_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/covid.service */
      "tDJN");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      var SignInComponent = /*#__PURE__*/function () {
        function SignInComponent(fb, service, router) {
          _classCallCheck(this, SignInComponent);

          this.fb = fb;
          this.service = service;
          this.router = router;
          this.signInForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            surname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
          this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();

          this.onChange = function (_) {};
        }

        _createClass(SignInComponent, [{
          key: "ngOnChanges",
          value: function ngOnChanges(simpleChanges) {
            if (simpleChanges.touched && simpleChanges.touched.currentValue) {
              this.signInForm.markAllAsTouched();
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.subscription.add(this.signInForm.valueChanges.subscribe(function (value) {
              _this.onChange(value);
            }));
          } // tslint:disable-next-line:typedef

        }, {
          key: "saveForm",
          value: function saveForm() {
            var _this2 = this;

            if (this.signInForm.invalid) {
              return;
            }

            this.service.doctorValidationForSignIn(this.signInForm.getRawValue()).subscribe(function (result) {
              return _this2.checkSignInResponse(result);
            }, function (error) {
              return console.log(error);
            });
          } // tslint:disable-next-line:typedef

        }, {
          key: "checkSignInResponse",
          value: function checkSignInResponse(value) {
            this.router.navigate(['/chatroom'], {
              queryParams: {
                email: this.signInForm.getRawValue().email,
                userId: '-',
                roomID: value
              }
            });
            console.log(value);
          }
        }]);

        return SignInComponent;
      }();

      SignInComponent.ɵfac = function SignInComponent_Factory(t) {
        return new (t || SignInComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_covid_service__WEBPACK_IMPORTED_MODULE_3__["DoctorRoomService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
      };

      SignInComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SignInComponent,
        selectors: [["app-sign-in-component"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
        decls: 23,
        vars: 1,
        consts: [["src", "assets/img/home-bg.png", 1, "background-img"], [1, "container-body"], [1, "header"], [1, "row", "justify-content-md-center", "general-container"], [1, "col-md-6", "form-div"], ["appearance", "standard", 3, "formGroup", "ngSubmit"], [1, "row", "justify-content-md-center"], [1, "col-md-12"], [1, "label"], ["type", "text", "formControlName", "name", 1, "form-input"], ["type", "text", "formControlName", "surname", 1, "form-input"], ["type", "email", "formControlName", "email", 1, "form-input"], ["mat-raised-button", "", "type", "submit", 1, "btn", "sign-button"]],
        template: function SignInComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Sign-In");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignInComponent_Template_form_ngSubmit_6_listener() {
              return ctx.saveForm();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " First Name: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Last Name: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Email: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Submit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.signInForm);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"]],
        styles: [".background-img[_ngcontent-%COMP%]{\r\n  z-index: -1;\r\n  position: fixed;\r\n  overflow: hidden;\r\n  height: inherit;\r\n}\r\n\r\n.container-body[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n  padding: 20px 20%;\r\n}\r\n\r\n.general-container[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n  border: 6px solid white;\r\n  border-radius: 100px;\r\n  padding: 40px;\r\n  background-color: rgba(255,255,255,0.3);\r\n}\r\n\r\n.header[_ngcontent-%COMP%]{\r\n  font-size: 3em;\r\n  padding: 40px;\r\n  color: white;\r\n}\r\n\r\n.sign-button[_ngcontent-%COMP%]{\r\n  margin: 20px;\r\n  background-color: rgba(0,0,0,0.6);\r\n  border-radius: 100px;\r\n  border: 4px solid white;\r\n  font-size: 1.2em;\r\n  color: white;\r\n  padding: 10px 40px;\r\n}\r\n\r\n.sign-button[_ngcontent-%COMP%]:hover{\r\n  background-color: rgba(0,0,0,0.8);\r\n}\r\n\r\n.label[_ngcontent-%COMP%]{\r\n  margin-top: 20px;\r\n  font-weight: bold;\r\n  font-size: 1.4em;\r\n  color:  rgba(0,0,0,0.8);\r\n  margin-top: 40px\r\n}\r\n\r\n.form-input[_ngcontent-%COMP%]{\r\n  outline: none;\r\n  width: 100%;\r\n  margin-top: 20px;\r\n  padding: 20px;\r\n  background-color: rgba(255,255,255,0.6);\r\n  border-radius: 20px;\r\n  border: 4px solid white;\r\n  font-size: 1.2em;\r\n  color: black;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ24taW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlDQUFpQztFQUNqQyxvQkFBb0I7RUFDcEIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCO0FBQ0Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsdUNBQXVDO0VBQ3ZDLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZCIsImZpbGUiOiJzaWduLWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2dyb3VuZC1pbWd7XHJcbiAgei1pbmRleDogLTE7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgaGVpZ2h0OiBpbmhlcml0O1xyXG59XHJcblxyXG4uY29udGFpbmVyLWJvZHl7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDIwcHggMjAlO1xyXG59XHJcbi5nZW5lcmFsLWNvbnRhaW5lcntcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyOiA2cHggc29saWQgd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgcGFkZGluZzogNDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuMyk7XHJcbn1cclxuXHJcbi5oZWFkZXJ7XHJcbiAgZm9udC1zaXplOiAzZW07XHJcbiAgcGFkZGluZzogNDBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5zaWduLWJ1dHRvbntcclxuICBtYXJnaW46IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjYpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gIGJvcmRlcjogNHB4IHNvbGlkIHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDEwcHggNDBweDtcclxufVxyXG5cclxuLnNpZ24tYnV0dG9uOmhvdmVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC44KTtcclxufVxyXG5cclxuLmxhYmVse1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAxLjRlbTtcclxuICBjb2xvcjogIHJnYmEoMCwwLDAsMC44KTtcclxuICBtYXJnaW4tdG9wOiA0MHB4XHJcbn1cclxuXHJcbi5mb3JtLWlucHV0e1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC42KTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGJvcmRlcjogNHB4IHNvbGlkIHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignInComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-sign-in-component',
            templateUrl: './sign-in.component.html',
            styleUrls: ['./sign-in.component.css']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _services_covid_service__WEBPACK_IMPORTED_MODULE_3__["DoctorRoomService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "A3Q3":
    /*!***********************************************!*\
      !*** ./src/app/services/chat-room.service.ts ***!
      \***********************************************/

    /*! exports provided: ChatRoomService */

    /***/
    function A3Q3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChatRoomService", function () {
        return ChatRoomService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! socket.io-client */
      "jifJ");
      /* harmony import */


      var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);

      var ChatRoomService = /*#__PURE__*/function () {
        function ChatRoomService() {
          _classCallCheck(this, ChatRoomService);

          this.SOCKET_ENDPOINT = 'https://cs447covidchatservice.herokuapp.com/';
          this.Socket_PORT_ForLOCAL = 'http://localhost:5000';
        } // tslint:disable-next-line:typedef


        _createClass(ChatRoomService, [{
          key: "joinChatRoom",
          value: function joinChatRoom(data) {
            this.socket.emit('join', data);
          } // tslint:disable-next-line:typedef

        }, {
          key: "forNewUserJoinToChatRoom",
          value: function forNewUserJoinToChatRoom() {
            var _this3 = this;

            this.socket = Object(socket_io_client__WEBPACK_IMPORTED_MODULE_2__["io"])(this.Socket_PORT_ForLOCAL);
            var observable = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
              _this3.socket.on('new user joined', function (data) {
                observer.next(data);
              });

              return function () {
                _this3.socket.disconnect();
              };
            });
            return observable;
          } // tslint:disable-next-line:typedef

        }, {
          key: "leftChatRoomByUserActions",
          value: function leftChatRoomByUserActions() {
            var _this4 = this;

            var observable = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
              _this4.socket.on('left room', function (data) {
                observer.next(data);
              });

              return function () {
                _this4.socket.disconnect();
              };
            });
            return observable;
          } // tslint:disable-next-line:typedef

        }, {
          key: "sendMessageToAllUsers",
          value: function sendMessageToAllUsers(data) {
            this.socket.emit('message', data);
          } // tslint:disable-next-line:typedef

        }, {
          key: "takenNewMessageFromOtherUsers",
          value: function takenNewMessageFromOtherUsers() {
            var _this5 = this;

            // tslint:disable-next-line:ban-types
            var observable = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
              _this5.socket.on('message', function (data) {
                observer.next(data);
              });

              return function () {
                _this5.socket.disconnect();
              };
            });
            return observable;
          } // tslint:disable-next-line:typedef

        }, {
          key: "leaveRoom",
          value: function leaveRoom(data) {
            this.socket.emit('leave', data);
          }
        }]);

        return ChatRoomService;
      }();

      ChatRoomService.ɵfac = function ChatRoomService_Factory(t) {
        return new (t || ChatRoomService)();
      };

      ChatRoomService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ChatRoomService,
        factory: ChatRoomService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatRoomService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "F1my":
    /*!**************************************************!*\
      !*** ./src/app/home-page/home-page.component.ts ***!
      \**************************************************/

    /*! exports provided: HomePageComponent */

    /***/
    function F1my(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageComponent", function () {
        return HomePageComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var HomePageComponent = /*#__PURE__*/function () {
        function HomePageComponent(router) {
          _classCallCheck(this, HomePageComponent);

          this.router = router;
        }

        _createClass(HomePageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "routeDoctor",
          value: function routeDoctor() {
            this.router.navigate(['doctor/registration']);
          }
        }, {
          key: "routePatient",
          value: function routePatient() {
            this.router.navigate(['patient/doctor-selection']);
          }
        }]);

        return HomePageComponent;
      }();

      HomePageComponent.ɵfac = function HomePageComponent_Factory(t) {
        return new (t || HomePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      HomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HomePageComponent,
        selectors: [["app-home-page"]],
        decls: 11,
        vars: 0,
        consts: [["src", "assets/img/home-bg.png", 1, "background-img"], [1, "container-body"], [1, "row", "justify-content-md-center", "general-container"], [1, "col-md-12"], ["src", "assets/img/home-banner.png", 1, "banner"], [1, "col-md-4"], [1, "btn", "selection-button", "button-radius-left", 3, "click"], [1, "btn", "selection-button", "button-radius-right", 3, "click"]],
        template: function HomePageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomePageComponent_Template_button_click_6_listener() {
              return ctx.routePatient();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Patient");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomePageComponent_Template_button_click_9_listener() {
              return ctx.routeDoctor();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Doctor");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".background-img[_ngcontent-%COMP%]{\r\n  z-index: -1;\r\n  position: fixed;\r\n  overflow: hidden;\r\n  height: inherit;\r\n}\r\n\r\n.container-body[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n  padding: 80px 20%;\r\n}\r\n\r\n.general-container[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n  border: 6px solid white;\r\n  border-radius: 100px;\r\n  padding: 40px;\r\n  background-color: rgba(255,255,255,0.3);\r\n}\r\n\r\n.button-radius-left[_ngcontent-%COMP%]{\r\n  border-radius: 20px 40px;\r\n}\r\n\r\n.button-radius-right[_ngcontent-%COMP%]{\r\n  border-radius: 40px 20px;\r\n}\r\n\r\n.selection-button[_ngcontent-%COMP%]{\r\n  margin: 20px;\r\n  background-color: rgba(0,0,0,0.2);\r\n  border: 6px solid white;\r\n  font-size: 3em;\r\n  color: white;\r\n  padding: 0.5em 1em;\r\n  width: 100%;\r\n}\r\n\r\n.selection-button[_ngcontent-%COMP%]:hover{\r\n  background-color: rgba(0,0,0,0.8);\r\n  border: 6px solid white;\r\n  color: white;\r\n}\r\n\r\n.selection-button[_ngcontent-%COMP%]:focus{\r\n  outline: none;\r\n}\r\n\r\n.banner[_ngcontent-%COMP%]{\r\n  width: 50%;\r\n  margin: 40px;\r\n}\r\n\r\n@media (max-width: 800px) {\r\n  \r\n.selection-button[_ngcontent-%COMP%]{\r\n  width: 70%;\r\n  padding: 20px 20px;\r\n  font-size: 2em;\r\n}\r\n\r\n.banner[_ngcontent-%COMP%]{\r\n  width: 80%;\r\n}\r\n\r\n.general-container[_ngcontent-%COMP%]{\r\n  padding-bottom: 40px;\r\n}\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2IsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUNBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlDQUFpQztFQUNqQyx1QkFBdUI7RUFDdkIsY0FBYztFQUNkLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtBQUNkOztBQUVBOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBIiwiZmlsZSI6ImhvbWUtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmQtaW1ne1xyXG4gIHotaW5kZXg6IC0xO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGhlaWdodDogaW5oZXJpdDtcclxufVxyXG5cclxuLmNvbnRhaW5lci1ib2R5e1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiA4MHB4IDIwJTtcclxufVxyXG4uZ2VuZXJhbC1jb250YWluZXJ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlcjogNnB4IHNvbGlkIHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gIHBhZGRpbmc6IDQwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjMpO1xyXG59XHJcblxyXG4uYnV0dG9uLXJhZGl1cy1sZWZ0e1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHggNDBweDtcclxufVxyXG4uYnV0dG9uLXJhZGl1cy1yaWdodHtcclxuICBib3JkZXItcmFkaXVzOiA0MHB4IDIwcHg7XHJcbn1cclxuXHJcbi5zZWxlY3Rpb24tYnV0dG9ue1xyXG4gIG1hcmdpbjogMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMik7XHJcbiAgYm9yZGVyOiA2cHggc29saWQgd2hpdGU7XHJcbiAgZm9udC1zaXplOiAzZW07XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDAuNWVtIDFlbTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnNlbGVjdGlvbi1idXR0b246aG92ZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjgpO1xyXG4gIGJvcmRlcjogNnB4IHNvbGlkIHdoaXRlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnNlbGVjdGlvbi1idXR0b246Zm9jdXN7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLmJhbm5lcntcclxuICB3aWR0aDogNTAlO1xyXG4gIG1hcmdpbjogNDBweDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgXHJcbi5zZWxlY3Rpb24tYnV0dG9ue1xyXG4gIHdpZHRoOiA3MCU7XHJcbiAgcGFkZGluZzogMjBweCAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMmVtO1xyXG59XHJcblxyXG4uYmFubmVye1xyXG4gIHdpZHRoOiA4MCU7XHJcbn1cclxuXHJcbi5nZW5lcmFsLWNvbnRhaW5lcntcclxuICBwYWRkaW5nLWJvdHRvbTogNDBweDtcclxufVxyXG5cclxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomePageComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-home-page',
            templateUrl: './home-page.component.html',
            styleUrls: ['./home-page.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "KCwR":
    /*!****************************************************************!*\
      !*** ./src/app/doctor-selection/doctor-selection.component.ts ***!
      \****************************************************************/

    /*! exports provided: DoctorSelectionComponent */

    /***/
    function KCwR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DoctorSelectionComponent", function () {
        return DoctorSelectionComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_covid_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/covid.service */
      "tDJN");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function DoctorSelectionComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DoctorSelectionComponent_div_5_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var item_r1 = ctx.$implicit;

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.gotoChatRoom(item_r1.doctorname, item_r1.room);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !item_r1.isActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.doctorname);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.doctorarea);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Room:", item_r1.room, "");
        }
      }

      var DoctorSelectionComponent = /*#__PURE__*/function () {
        function DoctorSelectionComponent(router, doctorRoomService) {
          _classCallCheck(this, DoctorSelectionComponent);

          this.router = router;
          this.doctorRoomService = doctorRoomService;
        }

        _createClass(DoctorSelectionComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this6 = this;

            this.doctorRoomService.getAllDoctorRooms().subscribe(function (result) {
              _this6.allRooms = result;

              _this6.allRooms.forEach(function (doctor) {
                _this6.doctorRoomService.checkRoomActiveOrNot(doctor.room).subscribe(function (result) {
                  if (result === 'true') {
                    doctor.isActive = true;
                  } else {
                    doctor.isActive = false;
                  }
                }, function (error) {
                  doctor.isActive = false;
                });
              });
            }, function (error) {
              return _this6.router.navigate(['home']);
            });
            this.doctorRoomService.getUserID().subscribe(function (result) {
              return _this6.userID = result;
            }, function (error) {
              return _this6.router.navigate(['home']);
            });
          }
        }, {
          key: "gotoChatRoom",
          value: function gotoChatRoom(user, room) {
            this.router.navigate(['/chatroom'], {
              queryParams: {
                email: '-',
                userId: this.userID,
                roomID: room
              }
            });
          }
        }]);

        return DoctorSelectionComponent;
      }();

      DoctorSelectionComponent.ɵfac = function DoctorSelectionComponent_Factory(t) {
        return new (t || DoctorSelectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_covid_service__WEBPACK_IMPORTED_MODULE_2__["DoctorRoomService"]));
      };

      DoctorSelectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DoctorSelectionComponent,
        selectors: [["app-doctor-selection"]],
        decls: 6,
        vars: 1,
        consts: [["src", "assets/img/home-bg.png", 1, "background-img"], [1, "container-body"], [1, "header"], [1, "row", "justify-content-md-center", "doctor-container"], ["class", "col-md-6 doctor-div ", 4, "ngFor", "ngForOf"], [1, "col-md-6", "doctor-div"], [1, "btn", "btn-primary", "doctor-button", 3, "disabled", "click"], ["src", "assets/img/mock-doctor.png", "alt", "doctor-img", 1, "doctor-img"], [1, "doctor-label"]],
        template: function DoctorSelectionComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Doctor Selection");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DoctorSelectionComponent_div_5_Template, 11, 4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.allRooms);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
        styles: [".container-body[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    padding: 0 20%;\r\n}\r\n.doctor-container[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    border: 6px solid white;\r\n    border-radius: 100px;\r\n    padding: 40px;\r\n    background-color: rgba(255,255,255,0.3);\r\n\r\n}\r\n.doctor-div[_ngcontent-%COMP%]{\r\n}\r\n.doctor-img[_ngcontent-%COMP%]{\r\n    width: 8em;\r\n}\r\n.header[_ngcontent-%COMP%]{\r\n    font-size: 4em;\r\n    padding: 40px;\r\n    color: white;\r\n}\r\n.doctor-label[_ngcontent-%COMP%]{\r\n    margin-top: 20px;\r\n    font-weight: bold;\r\n    font-size: 1em;\r\n}\r\n.background-img[_ngcontent-%COMP%]{\r\n    z-index: -1;\r\n    position: fixed;\r\n    overflow: hidden;\r\n    height: inherit;\r\n  }\r\n.doctor-button[_ngcontent-%COMP%]{\r\n    margin: 20px;\r\n    padding: 20px;\r\n    background-color: rgba(0,0,0,0.05);\r\n    border-radius: 40px;\r\n    border: 6px solid white;\r\n}\r\n.doctor-button[_ngcontent-%COMP%]:hover{\r\n    background-color: rgba(0,0,0,0.6);\r\n}\r\n.doctor-button[_ngcontent-%COMP%]:disabled:hover {\r\n    background-color: rgba(0,0,0,0.05);\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvY3Rvci1zZWxlY3Rpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsdUNBQXVDOztBQUUzQztBQUVBO0FBQ0E7QUFFQTtJQUNJLFVBQVU7QUFDZDtBQUVBO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7QUFFQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGVBQWU7RUFDakI7QUFHRjtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7QUFFQTtJQUNJLGlDQUFpQztBQUNyQztBQUVBO0lBQ0ksa0NBQWtDO0VBQ3BDIiwiZmlsZSI6ImRvY3Rvci1zZWxlY3Rpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItYm9keXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDAgMjAlO1xyXG59XHJcbi5kb2N0b3ItY29udGFpbmVye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyOiA2cHggc29saWQgd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxuICAgIHBhZGRpbmc6IDQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuMyk7XHJcblxyXG59XHJcblxyXG4uZG9jdG9yLWRpdntcclxufVxyXG5cclxuLmRvY3Rvci1pbWd7XHJcbiAgICB3aWR0aDogOGVtO1xyXG59XHJcblxyXG4uaGVhZGVye1xyXG4gICAgZm9udC1zaXplOiA0ZW07XHJcbiAgICBwYWRkaW5nOiA0MHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5kb2N0b3ItbGFiZWx7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxufVxyXG5cclxuLmJhY2tncm91bmQtaW1ne1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gIH1cclxuICBcclxuXHJcbi5kb2N0b3ItYnV0dG9ue1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4wNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gICAgYm9yZGVyOiA2cHggc29saWQgd2hpdGU7XHJcbn1cclxuXHJcbi5kb2N0b3ItYnV0dG9uOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjYpO1xyXG59XHJcblxyXG4uZG9jdG9yLWJ1dHRvbjpkaXNhYmxlZDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMDUpO1xyXG4gIH0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DoctorSelectionComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-doctor-selection',
            templateUrl: './doctor-selection.component.html',
            styleUrls: ['./doctor-selection.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _services_covid_service__WEBPACK_IMPORTED_MODULE_2__["DoctorRoomService"]
          }];
        }, null);
      })();

      var DoctorRoomType = function DoctorRoomType() {
        _classCallCheck(this, DoctorRoomType);
      };
      /***/

    },

    /***/
    "QFfE":
    /*!********************************************************!*\
      !*** ./src/app/sign-up-component/sign-up.component.ts ***!
      \********************************************************/

    /*! exports provided: SignUpComponent, DialogElementsExampleDialogComponent */

    /***/
    function QFfE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignUpComponent", function () {
        return SignUpComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DialogElementsExampleDialogComponent", function () {
        return DialogElementsExampleDialogComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _services_covid_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../services/covid.service */
      "tDJN");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "iadO");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");

      function SignUpComponent_mat_option_44_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var gender_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", gender_r3.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", gender_r3.name, " ");
        }
      }

      function SignUpComponent_mat_option_51_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var dp_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", dp_r4.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", dp_r4.name, " ");
        }
      }

      var SignUpComponent = /*#__PURE__*/function () {
        function SignUpComponent(fb, router, dialog, service) {
          _classCallCheck(this, SignUpComponent);

          this.fb = fb;
          this.router = router;
          this.dialog = dialog;
          this.service = service;
          this.submitted = false;
          this.genders = [{
            name: 'male',
            value: 0
          }, {
            name: 'female',
            value: 1
          }];
          this.doctorOrPatient = [{
            name: 'doctor',
            value: 0
          }, {
            name: 'hasta',
            value: 1
          }];
          this.doctorArea = [{
            name: 'dahiliye',
            value: 'dahiliye'
          }];
          this.personalform = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            surname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            age: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            phonenumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            birthdate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            gender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            doctorArea: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
          this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();

          this.onChange = function (_) {};

          this.onTouch = function () {};
        }

        _createClass(SignUpComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this7 = this;

            this.subscription.add(this.personalform.valueChanges.subscribe(function (value) {
              _this7.onChange(value);
            }));
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(simpleChanges) {
            if (simpleChanges.touched && simpleChanges.touched.currentValue) {
              this.personalform.markAllAsTouched();
            }
          }
        }, {
          key: "saveForm",
          value: function saveForm() {
            var _this8 = this;

            console.log('submitted');

            if (this.personalform.invalid) {
              return;
            } // TODO: save before summit to server js

            /*this.service.saveFormToDataBase(this.personalform.value).subscribe(
              (result: HttpResponse<any>) => this.router.navigate(['/doctororstudent']),
              error => this.openDialog()
            );*/


            this.service.saveDoctorToSystem(this.personalform.getRawValue()).subscribe(function (result) {
              return _this8.router.navigate(['/chatroom'], {
                queryParams: {
                  email: _this8.personalform.get('email'),
                  userId: _this8.personalform.get('name').value + ' ' + _this8.personalform.get('surname').value,
                  roomID: result
                }
              });
            }, function (error) {
              return console.log(error);
            });
            /*if (this.personalform.get('doctorOrPatient').value === 0) {
              this.router.navigate(['/doctor']);
            } else if (this.personalform.get('doctorOrPatient').value === 1) {
              this.router.navigate(['/hasta']);
            }*/
          }
        }, {
          key: "openDialog",
          value: function openDialog() {
            this.dialog.open(DialogElementsExampleDialogComponent);
          }
        }, {
          key: "formDisabled",
          value: function formDisabled() {
            return false;
          }
        }]);

        return SignUpComponent;
      }();

      SignUpComponent.ɵfac = function SignUpComponent_Factory(t) {
        return new (t || SignUpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_covid_service__WEBPACK_IMPORTED_MODULE_5__["DoctorRoomService"]));
      };

      SignUpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SignUpComponent,
        selectors: [["app-well-come-page"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
        decls: 71,
        vars: 5,
        consts: [[1, "desktopSettings"], ["fxLayout", "row", "fxLayoutAlign", "center", 1, "topPart"], [1, "card-container"], [1, "middleSection"], [1, "content"], ["appearance", "standard", 3, "formGroup", "ngSubmit"], [1, ""], ["matInput", "", "type", "text", "formControlName", "name"], ["matInput", "", "type", "text", "formControlName", "surname"], ["matInput", "", "type", "text", "formControlName", "email"], ["matInput", "", "type", "text", "formControlName", "age"], ["matInput", "", "type", "text", "formControlName", "phonenumber"], ["appearance", "fill"], ["matInput", "", "formControlName", "gender"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "formControlName", "doctorArea"], ["matInput", "", "type", "date", "formControlName", "birthdate", "placeholder", "Pick a date"], ["matSuffix", "", 3, "for"], ["birthdate", ""], ["mat-raised-button", "", "type", "submit", 3, "disabled"], [1, "middleSection2"], ["fxLayoutAlign", "center"], ["mat-button", "", 2, "color", "black", "background", "#f8f9fa"], [3, "value"]],
        template: function SignUpComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Covid 19 Home Page Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignUpComponent_Template_form_ngSubmit_7_listener() {
              return ctx.saveForm();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " FirstName: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " LastName: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Email: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Age: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Phonenumber: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-form-field", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Gender");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-select", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, SignUpComponent_mat_option_44_Template, 2, 2, "mat-option", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-form-field", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Area of Doctor");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-select", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, SignUpComponent_mat_option_51_Template, 2, 2, "mat-option", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Birthdate ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "input", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "mat-datepicker-toggle", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "mat-datepicker", null, 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "mat-card-actions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Submit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "button", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " Are you hasta!!? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "button", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "If you are ready start Are you Doctor? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.personalform);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.genders);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.doctorArea);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.formDisabled());
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutAlignDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepicker"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatOption"]],
        styles: [".desktopSettings[_ngcontent-%COMP%] {\r\n  \r\n\r\n  position: relative;\r\n  width: 1440px;\r\n  height: 1024px;\r\n  background: #FFFFFF;\r\n\r\n}\r\n\r\n.topPart[_ngcontent-%COMP%] {\r\n  \r\n  position: absolute;\r\n  height: 60px !important;\r\n  left: 0%;\r\n  right: 0%;\r\n  top: 0px;\r\n  background: #FFFFFF;\r\n\r\n}\r\n\r\n.middleSection[_ngcontent-%COMP%] {\r\n  \r\n  position: absolute;\r\n  left: 0%;\r\n  right: 0%;\r\n  top: 5.86%;\r\n  bottom: 75%;\r\n  height: 100%;\r\n\r\n}\r\n\r\n.middleSection2[_ngcontent-%COMP%] {\r\n  \r\n  position: absolute;\r\n  left: 0%;\r\n  right: 0%;\r\n  top: 75%;\r\n  bottom: 15%;\r\n  background: #FFFFFF;\r\n  height: 100%;\r\n\r\n}\r\n\r\n.card-container[_ngcontent-%COMP%] {\r\n  font-size: large;\r\n  background: white;\r\n\r\n}\r\n\r\n.content[_ngcontent-%COMP%] {\r\n  display: grid !important;\r\n  grid-gap: 16px !important;\r\n  font-size: small !important;\r\n  justify-content: center !important;\r\n  background: whitesmoke !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ24tdXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjs7RUFFaEIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixjQUFjO0VBQ2QsbUJBQW1COztBQUVyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLFFBQVE7RUFDUixTQUFTO0VBQ1QsUUFBUTtFQUNSLG1CQUFtQjs7QUFFckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZOztBQUVkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULFFBQVE7RUFDUixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLFlBQVk7O0FBRWQ7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCOztBQUVuQjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4Qix5QkFBeUI7RUFDekIsMkJBQTJCO0VBQzNCLGtDQUFrQztFQUNsQyxpQ0FBaUM7QUFDbkMiLCJmaWxlIjoic2lnbi11cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlc2t0b3BTZXR0aW5ncyB7XHJcbiAgLyogRGVza3RvcCAtIDEgKi9cclxuXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxNDQwcHg7XHJcbiAgaGVpZ2h0OiAxMDI0cHg7XHJcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuXHJcbn1cclxuXHJcbi50b3BQYXJ0IHtcclxuICAvKiBGcmFtZSAxICovXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGhlaWdodDogNjBweCAhaW1wb3J0YW50O1xyXG4gIGxlZnQ6IDAlO1xyXG4gIHJpZ2h0OiAwJTtcclxuICB0b3A6IDBweDtcclxuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG5cclxufVxyXG5cclxuLm1pZGRsZVNlY3Rpb24ge1xyXG4gIC8qIEZyYW1lIDIgKi9cclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMCU7XHJcbiAgcmlnaHQ6IDAlO1xyXG4gIHRvcDogNS44NiU7XHJcbiAgYm90dG9tOiA3NSU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG5cclxufVxyXG5cclxuLm1pZGRsZVNlY3Rpb24yIHtcclxuICAvKiBGcmFtZSAyICovXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDAlO1xyXG4gIHJpZ2h0OiAwJTtcclxuICB0b3A6IDc1JTtcclxuICBib3R0b206IDE1JTtcclxuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gIGhlaWdodDogMTAwJTtcclxuXHJcbn1cclxuXHJcbi5jYXJkLWNvbnRhaW5lciB7XHJcbiAgZm9udC1zaXplOiBsYXJnZTtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuXHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICBkaXNwbGF5OiBncmlkICFpbXBvcnRhbnQ7XHJcbiAgZ3JpZC1nYXA6IDE2cHggIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IHNtYWxsICFpbXBvcnRhbnQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignUpComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-well-come-page',
            templateUrl: './sign-up.component.html',
            styleUrls: ['./sign-up.component.css']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
          }, {
            type: _services_covid_service__WEBPACK_IMPORTED_MODULE_5__["DoctorRoomService"]
          }];
        }, null);
      })();

      var DialogElementsExampleDialogComponent = function DialogElementsExampleDialogComponent() {
        _classCallCheck(this, DialogElementsExampleDialogComponent);
      };

      DialogElementsExampleDialogComponent.ɵfac = function DialogElementsExampleDialogComponent_Factory(t) {
        return new (t || DialogElementsExampleDialogComponent)();
      };

      DialogElementsExampleDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DialogElementsExampleDialogComponent,
        selectors: [["app-dialog-for-wrong-form"]],
        decls: 7,
        vars: 0,
        consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", ""], ["mat-button", "", "mat-dialog-close", ""]],
        template: function DialogElementsExampleDialogComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Wrong Form");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Please reenter form");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Close");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogElementsExampleDialogComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-dialog-for-wrong-form',
            templateUrl: './dialog-for-wrong-form.html'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'covid19-information-and-question-system';
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _sign_up_component_sign_up_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./sign-up-component/sign-up.component */
      "QFfE");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "iadO");
      /* harmony import */


      var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/grid-list */
      "zkoq");
      /* harmony import */


      var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/button-toggle */
      "jaxi");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/flex-layout */
      "YUcS");
      /* harmony import */


      var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./home-page/home-page.component */
      "F1my");
      /* harmony import */


      var _doctor_selection_doctor_selection_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./doctor-selection/doctor-selection.component */
      "KCwR");
      /* harmony import */


      var _doctor_registration_doctor_registration_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./doctor-registration/doctor-registration.component */
      "z/To");
      /* harmony import */


      var _chat_room_components_chat_room_components_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./chat-room-components/chat-room-components.component */
      "hegR");
      /* harmony import */


      var _sign_in_component_sign_in_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./sign-in-component/sign-in.component */
      "6vm7");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__["MatPaginatorModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatNativeDateModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__["MatButtonToggleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__["MatGridListModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_19__["FlexLayoutModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_25__["NgbModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _sign_up_component_sign_up_component__WEBPACK_IMPORTED_MODULE_4__["SignUpComponent"], _sign_up_component_sign_up_component__WEBPACK_IMPORTED_MODULE_4__["DialogElementsExampleDialogComponent"], _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_20__["HomePageComponent"], _doctor_selection_doctor_selection_component__WEBPACK_IMPORTED_MODULE_21__["DoctorSelectionComponent"], _doctor_registration_doctor_registration_component__WEBPACK_IMPORTED_MODULE_22__["DoctorRegistrationComponent"], _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_20__["HomePageComponent"], _chat_room_components_chat_room_components_component__WEBPACK_IMPORTED_MODULE_23__["ChatRoomComponentsComponent"], _sign_in_component_sign_in_component__WEBPACK_IMPORTED_MODULE_24__["SignInComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__["MatPaginatorModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatNativeDateModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__["MatButtonToggleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__["MatGridListModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_19__["FlexLayoutModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_25__["NgbModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _sign_up_component_sign_up_component__WEBPACK_IMPORTED_MODULE_4__["SignUpComponent"], _sign_up_component_sign_up_component__WEBPACK_IMPORTED_MODULE_4__["DialogElementsExampleDialogComponent"], _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_20__["HomePageComponent"], _doctor_selection_doctor_selection_component__WEBPACK_IMPORTED_MODULE_21__["DoctorSelectionComponent"], _doctor_registration_doctor_registration_component__WEBPACK_IMPORTED_MODULE_22__["DoctorRegistrationComponent"], _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_20__["HomePageComponent"], _chat_room_components_chat_room_components_component__WEBPACK_IMPORTED_MODULE_23__["ChatRoomComponentsComponent"], _sign_in_component_sign_in_component__WEBPACK_IMPORTED_MODULE_24__["SignInComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__["MatPaginatorModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatNativeDateModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__["MatButtonToggleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__["MatGridListModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_19__["FlexLayoutModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_25__["NgbModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "hegR":
    /*!************************************************************************!*\
      !*** ./src/app/chat-room-components/chat-room-components.component.ts ***!
      \************************************************************************/

    /*! exports provided: ChatRoomComponentsComponent */

    /***/
    function hegR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChatRoomComponentsComponent", function () {
        return ChatRoomComponentsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_chat_room_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../services/chat-room.service */
      "A3Q3");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_covid_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/covid.service */
      "tDJN");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      function ChatRoomComponentsComponent_div_0_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r3.username == "-" ? "Doctor" : "Patient (" + item_r3.username + ")", " : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r3.text, "");
        }
      }

      function ChatRoomComponentsComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatRoomComponentsComponent_div_0_Template_button_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.leave();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Leave");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ChatRoomComponentsComponent_div_0_div_8_Template, 5, 2, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChatRoomComponentsComponent_div_0_Template_input_ngModelChange_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.messageText = $event;
          })("keydown.enter", function ChatRoomComponentsComponent_div_0_Template_input_keydown_enter_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.sendMessage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatRoomComponentsComponent_div_0_Template_button_click_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r8.sendMessage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Send");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Chat Room of ", ctx_r0.user == "-" ? "Doctor" : "Patient (" + ctx_r0.user + ")", "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.messageArray.reverse());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.messageText);
        }
      }

      function ChatRoomComponentsComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Doctor is not Available!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var ChatRoomComponentsComponent = /*#__PURE__*/function () {
        function ChatRoomComponentsComponent(roomService, route, service, router) {
          var _this9 = this;

          _classCallCheck(this, ChatRoomComponentsComponent);

          this.roomService = roomService;
          this.route = route;
          this.service = service;
          this.router = router;
          this.connectedServer = false;
          this.messageArray = [];
          this.doctorOrNot = false;
          this.messageText = "";
          this.doctorEmail = this.route.snapshot.queryParamMap.get('email');
          this.user = this.route.snapshot.queryParamMap.get('userId');
          this.room = this.route.snapshot.queryParamMap.get('roomID');
          console.log("DOCTOR MAIL:" + this.doctorEmail);

          if (this.doctorEmail !== '-') {
            console.log("DOCTOR TRUE:" + this.doctorEmail);
            this.doctorOrNot = true;
          }

          if (!this.doctorOrNot) {
            this.service.checkRoomActiveOrNot(this.room).subscribe(function (result) {
              _this9.checkResult(result);
            }, function (error) {
              console.log("ROOM: " + _this9.room); // this.router.navigate(['patient/doctor-selection']);
            });
          } else {
            this.checkResult("true");
          }
        } // tslint:disable-next-line:typedef


        _createClass(ChatRoomComponentsComponent, [{
          key: "checkResult",
          value: function checkResult(result) {
            var _this10 = this;

            if (result === 'true') {
              this.connectedServer = true;
              this.roomService.forNewUserJoinToChatRoom().subscribe(function (data) {
                return _this10.messageArray.push(data);
              });
              this.roomService.leftChatRoomByUserActions().subscribe(function (data) {
                return _this10.messageArray.push(data);
              });
              this.roomService.takenNewMessageFromOtherUsers().subscribe(function (data) {
                return _this10.messageArray.push(data);
              });
              this.join();
            } else {//this.router.navigate(['patient/doctor-selection']);
            }
          } // tslint:disable-next-line:typedef

        }, {
          key: "join",
          value: function join() {
            this.roomService.joinChatRoom({
              username: this.user,
              room: this.room,
              email: this.doctorEmail
            });
          } // tslint:disable-next-line:typedef

        }, {
          key: "leave",
          value: function leave() {
            this.roomService.leaveRoom({
              username: this.user,
              room: this.room,
              email: this.doctorEmail
            });
            this.router.navigate(['home']);
          } // tslint:disable-next-line:typedef

        }, {
          key: "sendMessage",
          value: function sendMessage() {
            console.log(this.messageText);

            if (this.messageText != "") {
              this.roomService.sendMessageToAllUsers({
                username: this.user,
                room: this.room,
                email: this.doctorEmail,
                message: this.messageText
              });
              this.messageText = '';
            }
          }
        }]);

        return ChatRoomComponentsComponent;
      }();

      ChatRoomComponentsComponent.ɵfac = function ChatRoomComponentsComponent_Factory(t) {
        return new (t || ChatRoomComponentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_chat_room_service__WEBPACK_IMPORTED_MODULE_1__["ChatRoomService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_covid_service__WEBPACK_IMPORTED_MODULE_3__["DoctorRoomService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      ChatRoomComponentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ChatRoomComponentsComponent,
        selectors: [["app-chat-room-components"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_services_chat_room_service__WEBPACK_IMPORTED_MODULE_1__["ChatRoomService"]])],
        decls: 2,
        vars: 2,
        consts: [[4, "ngIf"], ["src", "assets/img/home-bg.png", 1, "background-img"], [1, "container-body"], [1, "header"], ["type", "button", 1, "btn", "btn-md", "btn-outline-danger", "leave-button", 3, "click"], [1, "messages-div"], [4, "ngFor", "ngForOf"], [1, "input-div"], [1, "relative-div"], ["type", "text", "placeholder", "Enter your text...", 1, "form-control", "text-input", 3, "ngModel", "ngModelChange", "keydown.enter"], ["type", "button", 1, "btn", "btn-success", "pull-right", "submit-btn", 3, "click"]],
        template: function ChatRoomComponentsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ChatRoomComponentsComponent_div_0_Template, 14, 3, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChatRoomComponentsComponent_div_1_Template, 3, 0, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.connectedServer);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.connectedServer);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]],
        styles: [".container-body[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n  padding: 0 20%;\r\n}\r\n\r\n.header[_ngcontent-%COMP%]{\r\n  font-size: 4em;\r\n  padding-top: 40px;\r\n  color: white;\r\n}\r\n\r\n.background-img[_ngcontent-%COMP%]{\r\n  z-index: -1;\r\n  position: fixed;\r\n  overflow: hidden;\r\n  height: inherit;\r\n}\r\n\r\n.input-div[_ngcontent-%COMP%]{\r\n  position: fixed;\r\n  bottom: 0;\r\n  width: 80%;\r\n  margin-left: 10%;\r\n  margin-bottom: 100px;\r\n}\r\n\r\n.messages-div[_ngcontent-%COMP%]{\r\n  text-align: left;\r\n  overflow: scroll;\r\n  height: 500px;\r\n  overflow: auto;\r\n  display: flex;\r\n  flex-direction: column-reverse;\r\n  color: white;\r\n  font-size: 20px;\r\n}\r\n\r\n.submit-btn[_ngcontent-%COMP%]{\r\n  width: 20%;\r\n  display: inline-block;\r\n  margin-left: 5%;\r\n  border-radius: 100px;\r\n  font-weight: bold;\r\n  padding: 20px !important;\r\n}\r\n\r\n.text-input[_ngcontent-%COMP%]{\r\n  width: 75%;\r\n  display: inline-block;\r\n  border-radius: 100px;\r\n  font-weight: bold;\r\n  padding: 30px !important;\r\n}\r\n\r\n.relative-div[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 100%;\r\n}\r\n\r\n.leave-button[_ngcontent-%COMP%]{\r\n  border: 3px solid white;\r\n  color: white;\r\n  border-radius: 20px;\r\n  font-weight: bold;\r\n  margin-bottom:40px\r\n}\r\n\r\n\r\n\r\n\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 20px;\r\n}\r\n\r\n\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n  background: #f1f1f1;\r\n  border-radius: 100px;\r\n}\r\n\r\n\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  background: #888;\r\n  border-radius: 100px;\r\n}\r\n\r\n\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\r\n  background: #555;\r\n}\r\n\r\n@media (max-width: 800px) {\r\n\r\n  .header[_ngcontent-%COMP%]{\r\n    font-size: 2em;\r\n  }\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQtcm9vbS1jb21wb25lbnRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLGVBQWU7RUFDZixTQUFTO0VBQ1QsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixjQUFjO0VBQ2QsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLHFCQUFxQjtFQUNyQixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakI7QUFDRjs7QUFHQSxtQkFBbUI7O0FBRW5CLFVBQVU7O0FBQ1Y7RUFDRSxXQUFXO0FBQ2I7O0FBRUEsVUFBVTs7QUFDVjtFQUNFLG1CQUFtQjtFQUNuQixvQkFBb0I7QUFDdEI7O0FBRUEsV0FBVzs7QUFDWDtFQUNFLGdCQUFnQjtFQUNoQixvQkFBb0I7QUFDdEI7O0FBRUEsb0JBQW9COztBQUNwQjtFQUNFLGdCQUFnQjtBQUNsQjs7QUFHQTs7RUFFRTtJQUNFLGNBQWM7RUFDaEI7O0FBRUYiLCJmaWxlIjoiY2hhdC1yb29tLWNvbXBvbmVudHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItYm9keXtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMCAyMCU7XHJcbn1cclxuXHJcbi5oZWFkZXJ7XHJcbiAgZm9udC1zaXplOiA0ZW07XHJcbiAgcGFkZGluZy10b3A6IDQwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYmFja2dyb3VuZC1pbWd7XHJcbiAgei1pbmRleDogLTE7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgaGVpZ2h0OiBpbmhlcml0O1xyXG59XHJcbi5pbnB1dC1kaXZ7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogMDtcclxuICB3aWR0aDogODAlO1xyXG4gIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XHJcbn1cclxuXHJcbi5tZXNzYWdlcy1kaXZ7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gIGhlaWdodDogNTAwcHg7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLnN1Ym1pdC1idG57XHJcbiAgd2lkdGg6IDIwJTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHBhZGRpbmc6IDIwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRleHQtaW5wdXR7XHJcbiAgd2lkdGg6IDc1JTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgcGFkZGluZzogMzBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucmVsYXRpdmUtZGl2e1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmxlYXZlLWJ1dHRvbntcclxuICBib3JkZXI6IDNweCBzb2xpZCB3aGl0ZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBtYXJnaW4tYm90dG9tOjQwcHhcclxufVxyXG5cclxuXHJcbi8qQ3VzdG9tIFNjcm9sbGJhciovXHJcblxyXG4vKiB3aWR0aCAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICB3aWR0aDogMjBweDtcclxufVxyXG5cclxuLyogVHJhY2sgKi9cclxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxuICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxufVxyXG5cclxuLyogSGFuZGxlICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJhY2tncm91bmQ6ICM4ODg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbn1cclxuXHJcbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjNTU1O1xyXG59XHJcblxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcblxyXG4gIC5oZWFkZXJ7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatRoomComponentsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-chat-room-components',
            templateUrl: './chat-room-components.component.html',
            styleUrls: ['./chat-room-components.component.css'],
            providers: [_services_chat_room_service__WEBPACK_IMPORTED_MODULE_1__["ChatRoomService"]]
          }]
        }], function () {
          return [{
            type: _services_chat_room_service__WEBPACK_IMPORTED_MODULE_1__["ChatRoomService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
          }, {
            type: _services_covid_service__WEBPACK_IMPORTED_MODULE_3__["DoctorRoomService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "tDJN":
    /*!*******************************************!*\
      !*** ./src/app/services/covid.service.ts ***!
      \*******************************************/

    /*! exports provided: DoctorRoomService */

    /***/
    function tDJN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DoctorRoomService", function () {
        return DoctorRoomService;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var DoctorRoomService = /*#__PURE__*/function () {
        function DoctorRoomService(http) {
          _classCallCheck(this, DoctorRoomService);

          this.http = http;
          this.baseURL2 = 'https://cs447covidchatservice.herokuapp.com/api/';
          this.baseURL = 'http://localhost:5000/api/';
          this.endpoint = this.baseURL + 'doctorRoomList';
          this.endpointForUserID = this.baseURL + 'userIDForRandom';
          this.endpointForSaveDoctor = this.baseURL + 'saveDoctor';
          this.endpointForDoctorValidationForSignIn = this.baseURL + 'doctorValidationForSignIn';
          this.endpointForCheckRoomIsActive = this.baseURL + 'checkRoomIsActive';
          this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json'
          });
        } // tslint:disable-next-line:typedef


        _createClass(DoctorRoomService, [{
          key: "saveFormToDataBase",
          value: function saveFormToDataBase(value) {
            var body = JSON.stringify(value);
            return this.http.post(this.endpoint, body, {
              headers: this.headers
            });
          } // tslint:disable-next-line:typedef

        }, {
          key: "getAllDoctorRooms",
          value: function getAllDoctorRooms() {
            return this.http.get(this.endpoint, {
              headers: this.headers
            });
          } // tslint:disable-next-line:typedef

        }, {
          key: "getUserID",
          value: function getUserID() {
            return this.http.get(this.endpointForUserID, {
              headers: this.headers
            });
          } // tslint:disable-next-line:typedef

        }, {
          key: "saveDoctorToSystem",
          value: function saveDoctorToSystem(value) {
            var body = JSON.stringify({
              data: JSON.stringify(value)
            });
            return this.http.post(this.endpointForSaveDoctor, body, {
              headers: this.headers
            });
          } // tslint:disable-next-line:typedef

        }, {
          key: "doctorValidationForSignIn",
          value: function doctorValidationForSignIn(value) {
            var body = JSON.stringify({
              data: JSON.stringify(value)
            });
            return this.http.post(this.endpointForDoctorValidationForSignIn, body, {
              headers: this.headers
            });
          } // tslint:disable-next-line:typedef

        }, {
          key: "checkRoomActiveOrNot",
          value: function checkRoomActiveOrNot(value) {
            var body = JSON.stringify({
              data: value
            });
            return this.http.post(this.endpointForCheckRoomIsActive, body, {
              headers: this.headers
            });
          }
        }]);

        return DoctorRoomService;
      }();

      DoctorRoomService.ɵfac = function DoctorRoomService_Factory(t) {
        return new (t || DoctorRoomService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]));
      };

      DoctorRoomService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: DoctorRoomService,
        factory: DoctorRoomService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DoctorRoomService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _sign_up_component_sign_up_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./sign-up-component/sign-up.component */
      "QFfE");
      /* harmony import */


      var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./home-page/home-page.component */
      "F1my");
      /* harmony import */


      var _doctor_selection_doctor_selection_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./doctor-selection/doctor-selection.component */
      "KCwR");
      /* harmony import */


      var _doctor_registration_doctor_registration_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./doctor-registration/doctor-registration.component */
      "z/To");
      /* harmony import */


      var _chat_room_components_chat_room_components_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./chat-room-components/chat-room-components.component */
      "hegR");
      /* harmony import */


      var _sign_in_component_sign_in_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./sign-in-component/sign-in.component */
      "6vm7");

      var routes = [{
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }, {
        path: 'home',
        component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__["HomePageComponent"]
      }, {
        path: 'doctor/registration',
        component: _doctor_registration_doctor_registration_component__WEBPACK_IMPORTED_MODULE_5__["DoctorRegistrationComponent"]
      }, {
        path: 'patient/doctor-selection',
        component: _doctor_selection_doctor_selection_component__WEBPACK_IMPORTED_MODULE_4__["DoctorSelectionComponent"]
      }, {
        path: 'chatroom',
        component: _chat_room_components_chat_room_components_component__WEBPACK_IMPORTED_MODULE_6__["ChatRoomComponentsComponent"]
      }, {
        path: 'doctor/registration/sign-in',
        component: _sign_in_component_sign_in_component__WEBPACK_IMPORTED_MODULE_7__["SignInComponent"]
      }, {
        path: 'doctor/registration/sing-up',
        component: _sign_up_component_sign_up_component__WEBPACK_IMPORTED_MODULE_2__["SignUpComponent"]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "z/To":
    /*!**********************************************************************!*\
      !*** ./src/app/doctor-registration/doctor-registration.component.ts ***!
      \**********************************************************************/

    /*! exports provided: DoctorRegistrationComponent */

    /***/
    function zTo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DoctorRegistrationComponent", function () {
        return DoctorRegistrationComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var DoctorRegistrationComponent = /*#__PURE__*/function () {
        function DoctorRegistrationComponent(router) {
          _classCallCheck(this, DoctorRegistrationComponent);

          this.router = router;
        }

        _createClass(DoctorRegistrationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "singIn",
          value: function singIn() {
            this.router.navigate(['doctor/registration/sign-in']);
          }
        }, {
          key: "singUp",
          value: function singUp() {
            this.router.navigate(['doctor/registration/sing-up']);
          }
        }]);

        return DoctorRegistrationComponent;
      }();

      DoctorRegistrationComponent.ɵfac = function DoctorRegistrationComponent_Factory(t) {
        return new (t || DoctorRegistrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      DoctorRegistrationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DoctorRegistrationComponent,
        selectors: [["app-doctor-registration"]],
        decls: 15,
        vars: 0,
        consts: [["src", "assets/img/home-bg.png", 1, "background-img"], [1, "container-body"], [1, "header"], [1, "row", "justify-content-md-center", "general-container"], [1, "col-md-6", "sign-div"], [1, "btn", "btn-primary", "sign-button", 3, "click"], ["src", "assets/img/sign-in.png", "alt", "sign-up-img", 1, "image"], [1, "label"], ["src", "assets/img/sign-up.png", "alt", "sign-in-img", 1, "image"]],
        template: function DoctorRegistrationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Doctor");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DoctorRegistrationComponent_Template_button_click_6_listener() {
              return ctx.singIn();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Sign in ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DoctorRegistrationComponent_Template_button_click_11_listener() {
              return ctx.singUp();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Sign up ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".background-img[_ngcontent-%COMP%]{\r\n    z-index: -1;\r\n    position: fixed;\r\n    overflow: hidden;\r\n    height: inherit;\r\n  }\r\n\r\n.container-body[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    padding: 80px 20%;\r\n}\r\n\r\n.general-container[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    border: 6px solid white;\r\n    border-radius: 100px;\r\n    padding: 40px;\r\n    background-color: rgba(255,255,255,0.3);\r\n\r\n}\r\n\r\n.header[_ngcontent-%COMP%]{\r\n    font-size: 3em;\r\n    padding: 40px;\r\n    color: white;\r\n}\r\n\r\n.sign-button[_ngcontent-%COMP%]{\r\n    margin: 20px;\r\n    padding: 20px;\r\n    background-color: rgba(0,0,0,0.05);\r\n    border-radius: 40px;\r\n    border: 6px solid white;\r\n}\r\n\r\n.sign-button[_ngcontent-%COMP%]:hover{\r\n    background-color: rgba(0,0,0,0.6);\r\n}\r\n\r\n.image[_ngcontent-%COMP%]{\r\n    width: 8em;\r\n}\r\n\r\n.label[_ngcontent-%COMP%]{\r\n    margin-top: 20px;\r\n    font-weight: bold;\r\n    font-size: 1.5em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvY3Rvci1yZWdpc3RyYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGVBQWU7RUFDakI7O0FBRUY7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLHVDQUF1Qzs7QUFFM0M7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGtDQUFrQztJQUNsQyxtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoiZG9jdG9yLXJlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmQtaW1ne1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gIH1cclxuXHJcbi5jb250YWluZXItYm9keXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDgwcHggMjAlO1xyXG59XHJcbi5nZW5lcmFsLWNvbnRhaW5lcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlcjogNnB4IHNvbGlkIHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgICBwYWRkaW5nOiA0MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjMpO1xyXG5cclxufVxyXG4gIFxyXG4uaGVhZGVye1xyXG4gICAgZm9udC1zaXplOiAzZW07XHJcbiAgICBwYWRkaW5nOiA0MHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uc2lnbi1idXR0b257XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjA1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgICBib3JkZXI6IDZweCBzb2xpZCB3aGl0ZTtcclxufVxyXG5cclxuLnNpZ24tYnV0dG9uOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjYpO1xyXG59XHJcblxyXG4uaW1hZ2V7XHJcbiAgICB3aWR0aDogOGVtO1xyXG59XHJcblxyXG4ubGFiZWx7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DoctorRegistrationComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-doctor-registration',
            templateUrl: './doctor-registration.component.html',
            styleUrls: ['./doctor-registration.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map