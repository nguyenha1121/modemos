webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__text_emotions_text_emotions_component__ = __webpack_require__("../../../../../src/app/text-emotions/text-emotions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__hate_hate_component__ = __webpack_require__("../../../../../src/app/hate/hate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__neighbors_neighbors_component__ = __webpack_require__("../../../../../src/app/neighbors/neighbors.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__emotions_emotions_component__ = __webpack_require__("../../../../../src/app/emotions/emotions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__filter_text_filter_text_component__ = __webpack_require__("../../../../../src/app/filter-text/filter-text.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__filter_image_filter_image_component__ = __webpack_require__("../../../../../src/app/filter-image/filter-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__violence_violence_component__ = __webpack_require__("../../../../../src/app/violence/violence.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__face_emotion_face_emotion_component__ = __webpack_require__("../../../../../src/app/face-emotion/face-emotion.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__embeddings_embeddings_component__ = __webpack_require__("../../../../../src/app/embeddings/embeddings.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












//  Test

var routes = [{
        path: 'text-emotions',
        component: __WEBPACK_IMPORTED_MODULE_3__text_emotions_text_emotions_component__["a" /* TextEmotionsComponent */]
    },
    {
        path: 'hate',
        component: __WEBPACK_IMPORTED_MODULE_4__hate_hate_component__["a" /* HateComponent */]
    },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_component__["a" /* DashboardComponent */]
    },
    {
        path: 'neighbors',
        component: __WEBPACK_IMPORTED_MODULE_6__neighbors_neighbors_component__["a" /* NeighborsComponent */]
    },
    {
        path: 'emotions',
        component: __WEBPACK_IMPORTED_MODULE_7__emotions_emotions_component__["a" /* EmotionsComponent */]
    },
    {
        path: 'test',
        component: __WEBPACK_IMPORTED_MODULE_12__embeddings_embeddings_component__["a" /* EmbeddingsComponent */]
    },
    {
        path: 'text-filter',
        component: __WEBPACK_IMPORTED_MODULE_8__filter_text_filter_text_component__["a" /* FilterTextComponent */]
    },
    {
        path: 'image-filter',
        component: __WEBPACK_IMPORTED_MODULE_9__filter_image_filter_image_component__["a" /* FilterImageComponent */]
    },
    {
        path: 'violence',
        component: __WEBPACK_IMPORTED_MODULE_10__violence_violence_component__["a" /* ViolenceComponent */]
    },
    {
        path: 'face-emotion',
        component: __WEBPACK_IMPORTED_MODULE_11__face_emotion_face_emotion_component__["a" /* FaceEmotionComponent */]
    }];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(routes)
            ],
            declarations: [],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n  padding: 20px 0;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"container\">\n  <div class=\"header\">\n    <button routerLink=\"/\" mat-fab color=\"warn\"><i class=\"fa fa-home fa-2x\" aria-hidden=\"true\"></i></button>\n    <h2>{{info.title}}</h2>\n    <button mat-fab color=\"primary\"><i class=\"fa fa-user-circle-o fa-2x\" aria-hidden=\"true\"></i></button>\n  </div>\n</div>\n\n<router-outlet></router-outlet>\n<!-- <app-text-emotions></app-text-emotions> -->\n<!-- <app-hate></app-hate> -->\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.info = {
            title: 'Modemos'
        };
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export highchartsFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__text_emotions_text_emotions_component__ = __webpack_require__("../../../../../src/app/text-emotions/text-emotions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_highcharts__ = __webpack_require__("../../../../angular2-highcharts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_highcharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_highcharts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_highcharts_modules_heatmap__ = __webpack_require__("../../../../highcharts/modules/heatmap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_highcharts_modules_heatmap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_highcharts_modules_heatmap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_highcharts_dist_HighchartsService__ = __webpack_require__("../../../../angular2-highcharts/dist/HighchartsService.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_highcharts_dist_HighchartsService___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_angular2_highcharts_dist_HighchartsService__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__hate_hate_component__ = __webpack_require__("../../../../../src/app/hate/hate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__embeddings_embeddings_component__ = __webpack_require__("../../../../../src/app/embeddings/embeddings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__neighbors_neighbors_component__ = __webpack_require__("../../../../../src/app/neighbors/neighbors.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__emotions_emotions_component__ = __webpack_require__("../../../../../src/app/emotions/emotions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__filter_text_filter_text_component__ = __webpack_require__("../../../../../src/app/filter-text/filter-text.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__emoj_pipe__ = __webpack_require__("../../../../../src/app/emoj.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__filter_image_filter_image_component__ = __webpack_require__("../../../../../src/app/filter-image/filter-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_d3_ng2_service__ = __webpack_require__("../../../../d3-ng2-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__violence_violence_component__ = __webpack_require__("../../../../../src/app/violence/violence.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__face_emotion_face_emotion_component__ = __webpack_require__("../../../../../src/app/face-emotion/face-emotion.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















function highchartsFactory() {
    var hc = __webpack_require__("../../../../highcharts/highcharts.js");
    var hcm = __webpack_require__("../../../../highcharts/highcharts-more.js"); // used for more category of charts
    var exporting = __webpack_require__("../../../../highcharts/modules/exporting.js");
    hcm(hc);
    __WEBPACK_IMPORTED_MODULE_8_highcharts_modules_heatmap__(hc);
    exporting(hc);
    return hc;
}
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__text_emotions_text_emotions_component__["a" /* TextEmotionsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__hate_hate_component__["a" /* HateComponent */],
                __WEBPACK_IMPORTED_MODULE_12__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_13__embeddings_embeddings_component__["a" /* EmbeddingsComponent */],
                __WEBPACK_IMPORTED_MODULE_14__neighbors_neighbors_component__["a" /* NeighborsComponent */],
                __WEBPACK_IMPORTED_MODULE_15__emotions_emotions_component__["a" /* EmotionsComponent */],
                __WEBPACK_IMPORTED_MODULE_16__filter_text_filter_text_component__["a" /* FilterTextComponent */],
                __WEBPACK_IMPORTED_MODULE_17__emoj_pipe__["a" /* EmojPipe */],
                __WEBPACK_IMPORTED_MODULE_18__filter_image_filter_image_component__["a" /* FilterImageComponent */],
                __WEBPACK_IMPORTED_MODULE_20__violence_violence_component__["a" /* ViolenceComponent */],
                __WEBPACK_IMPORTED_MODULE_21__face_emotion_face_emotion_component__["a" /* FaceEmotionComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["a" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["c" /* MatCheckboxModule */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["d" /* MatGridListModule */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["f" /* MatListModule */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["a" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["k" /* MatToolbarModule */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["e" /* MatIconModule */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["g" /* MatProgressBarModule */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["j" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["i" /* MatSelectModule */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["h" /* MatProgressSpinnerModule */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["l" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_7_angular2_highcharts__["ChartModule"],
                __WEBPACK_IMPORTED_MODULE_11__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_9_angular2_highcharts_dist_HighchartsService__["HighchartsStatic"], useFactory: highchartsFactory },
                __WEBPACK_IMPORTED_MODULE_19_d3_ng2_service__["a" /* D3Service */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".item{\r\n  font-size: 24px;\r\n  background: #9C27B0;\r\n  \r\n}\r\n.item a{\r\n  color: #82B1FF;\r\n}\r\n.item a:hover {\r\n  text-decoration: none;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container dashboard\">\n  <h3>Welcome to modemos!</h3>\n  <div class=\"ld\">\n    <mat-grid-list cols=\"3\" rowHeight=\"1:1\">\n        <mat-grid-tile class=\"item\">\n          <a routerLink=\"/emotions\">{{'Multimodal Emotion Classifier \\ud83d\\ude18\\ud83d\\ude18'}}</a>\n        </mat-grid-tile>\n        <mat-grid-tile class=\"item\">\n          <a routerLink=\"/hate\">Hate Speech Classifier</a>\n        </mat-grid-tile>\n        <mat-grid-tile class=\"item\">\n          <a routerLink=\"/text-emotions\">Text Emotions</a>\n        </mat-grid-tile>\n        <mat-grid-tile class=\"item\">\n          <a routerLink=\"/text-filter\">Text Filter</a>\n        </mat-grid-tile>\n        <mat-grid-tile class=\"item\">\n          <a routerLink=\"/image-filter\">Image Filter</a>\n        </mat-grid-tile>\n        <mat-grid-tile class=\"item\">\n          <a routerLink=\"/violence\">Violence</a>\n        </mat-grid-tile>\n        <mat-grid-tile class=\"item\">\n          <a routerLink=\"/face-emotion\">Face Emotion</a>\n        </mat-grid-tile>\n      </mat-grid-list>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/embeddings/embeddings.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/embeddings/embeddings.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <chart [options]=\"options\" \n(load)=\"saveInstance($event.context)\">\n</chart> -->\n<svg width=\"600\" height=\"450\" *ngIf=\"info.mode==1\">\n  <path class=\"link\" d=\"M0,205C60,205 60,102.5 120,102.5\" path=\"link\" style=\"stroke: rgb(33, 150, 243); opacity: 1;\"></path>\n  <path class=\"link\" d=\"M0,205C60,205 60,307.5 120,307.5\" path=\"link\" style=\"stroke: orange; opacity: 0.1;\"></path>\n  <g transform=\"translate(20,20)\"></g>\n  <g class=\"node\" transform=\"translate(120,307.5)\">\n      <circle r=\"4.34332013130188\" style=\"stroke: black; fill: orange; opacity: 0.1;\"></circle>\n      <text x=\"8.34332013130188\" dy=\"-.60em\" text-anchor=\"start\" style=\"fill-opacity: 1; opacity: 0.1;\">No War Violence</text>\n  </g>\n  <g class=\"node\" transform=\"translate(120,102.5)\">\n      <circle r=\"15.65667986869812\" style=\"stroke: black; fill: rgb(33, 150, 243); opacity: 1;\"></circle>\n      <text x=\"19.65667986869812\" dy=\"-.60em\" text-anchor=\"start\" style=\"fill-opacity: 1; opacity: 1;\">War Violence</text>\n  </g>\n  <g class=\"node\" transform=\"translate(0,205)\">\n      <circle r=\"1\" style=\"stroke: black; fill: rgb(33, 150, 243);\"></circle>\n      <text x=\"-5\" dy=\"-.60em\" text-anchor=\"end\" style=\"fill-opacity: 1;\"></text>\n  </g>\n</svg>\n<svg width=\"600\" height=\"450\" *ngIf=\"info.mode!=1\">\n  <path class=\"link\" d=\"M0,205C60,205 60,102.5 120,102.5\" path=\"link\" style=\"stroke: orange; opacity: 0.1;\"></path>\n  <path class=\"link\" d=\"M0,205C60,205 60,307.5 120,307.5\" path=\"link\" style=\"stroke: rgb(33, 150, 243); opacity: 1;\"></path>\n  <g transform=\"translate(20,20)\"></g>\n  <g class=\"node\" transform=\"translate(120,307.5)\">\n      <circle r=\"19.22643780708313\" style=\"stroke: black; fill: rgb(33, 150, 243); opacity: 1;\"></circle>\n      <text x=\"23.22643780708313\" dy=\"-.60em\" text-anchor=\"start\" style=\"fill-opacity: 1; opacity: 1;\">No War Violence</text>\n  </g>\n  <g class=\"node\" transform=\"translate(120,102.5)\">\n      <circle r=\"0.7735621929168701\" style=\"stroke: black; fill: orange; opacity: 0.1;\"></circle>\n      <text x=\"4.77356219291687\" dy=\"-.60em\" text-anchor=\"start\" style=\"fill-opacity: 1; opacity: 0.1;\">War Violence</text>\n  </g>\n  <g class=\"node\" transform=\"translate(0,205)\">\n      <circle r=\"1\" style=\"stroke: black; fill: rgb(33, 150, 243);\"></circle>\n      <text x=\"-5\" dy=\"-.60em\" text-anchor=\"end\" style=\"fill-opacity: 1;\"></text>\n  </g>\n</svg>"

/***/ }),

/***/ "../../../../../src/app/embeddings/embeddings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmbeddingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { setInterval } from 'timers';
var EmbeddingsComponent = (function () {
    function EmbeddingsComponent() {
        this.info = {
            mode: undefined,
            imageURLs: []
        };
    }
    EmbeddingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fetch();
        setInterval(function () {
            _this.info.mode = !_this.info.mode;
        }, 50);
    };
    EmbeddingsComponent.prototype.fetch = function () {
        this.info.imageURLs = [
            {
                id: 1,
                url: 'https://i.ytimg.com/vi/mHHJza5Sl88/maxresdefault.jpg'
            }
        ];
    };
    EmbeddingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-embeddings',
            template: __webpack_require__("../../../../../src/app/embeddings/embeddings.component.html"),
            styles: [__webpack_require__("../../../../../src/app/embeddings/embeddings.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EmbeddingsComponent);
    return EmbeddingsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/emoj.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmojPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// import { twemoji } from 'twemoji/2/twemoji';
var EmojPipe = (function () {
    function EmojPipe() {
    }
    EmojPipe.prototype.transform = function (value, args) {
        console.log(value);
        // let out = twemoji.parse(value);
        return value;
    };
    EmojPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'twemoji'
        })
    ], EmojPipe);
    return EmojPipe;
}());



/***/ }),

/***/ "../../../../../src/app/emotions/emotions.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".img-area{\r\n  height: 300px;\r\n  width: 100%;\r\n  padding: 8px;\r\n  background: rgba(0,0,0,.03);\r\n  box-shadow: 0 2px 5px 0 rgba(0,0,0,.26);\r\n  border: 1px solid #ddd;\r\n  text-align: center;\r\n}\r\n.header{\r\n  text-align: center;\r\n}\r\n.img-wrapper{\r\n  width: 100%;\r\n  height: 100%;\r\n  border: 2px dashed #ddd;\r\n  text-align: center;\r\n}\r\n.img-wrapper img {\r\n  height: 200px;\r\n  max-width: 100%;\r\n}\r\n.img-ctrl{\r\n  box-shadow: 0 2px 5px 0 rgba(0,0,0,.26);\r\n  display: table;\r\n  margin: 8px;\r\n  height: 160px;\r\n  border: 1px solid #ddd;\r\n  padding: 6px;\r\n  float: left;\r\n  text-align: center;\r\n  vertical-align: middle;\r\n  background: #ddd;\r\n}\r\n.ctrl{\r\n  float: none;\r\n  text-align: right;\r\n  margin-bottom: 5px;\r\n\r\n}\r\n.main-content {\r\n  box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 5px 8px 0 rgba(0,0,0,.14), 0 1px 14px 0 rgba(0,0,0,.12);\r\n}\r\n.output-header{\r\n  padding: 20px;\r\n  border-bottom: 1px dot #ddd;\r\n}\r\n.ctrl button{\r\n  width: 20px;\r\n}\r\n.file-ctrl{\r\n  margin: 8px 0;\r\n}\r\n.item{\r\n  text-align: center;\r\n}\r\n.item span{\r\n  font-size: 15px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/emotions/emotions.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"header\">\n    <button mat-raised-button type=\"button\" (click)=\"getRandomImage()\">\n      <span>Random Example</span>\n      <i class=\"fa fa-cubes\" aria-hidden=\"true\"></i>\n      <div class=\"mat-ripple-container\" style=\"\"></div>\n    </button>\n    <h5>Click \"Random Example\" to get a example!</h5>\n  </div>\n  \n  <div layout=\"row\" class=\"img-area\">\n    <div class=\"img-wrapper\">\n      <div *ngIf=\"info != undefined && info.active != undefined && info.active.status == 1\" class=\"img-ctrl\">\n        <div class=\"ctrl\">\n            <button mat-icon-button color=\"primary\" (click)=\"closeImg()\">\n              <mat-icon aria-label=\"cansel\">cancel</mat-icon>\n            </button>\n        </div>\n        <img [src]=\"info.active.imageURL\" alt=\"\">\n      </div>\n    </div>\n  </div>\n\n  <div layout=\"row\" class=\"file-ctrl\">\n    <button class=\"mat-raised-button\" color=\"warn\" type=\"button\" aria-label=\"remove all files\">\n      <i class=\"fa fa-trash-o fa-2x\" aria-hidden=\"true\"></i>\n      <span> Remove</span>\n    </button>\n    <button class=\"mat-raised-button mat-primary mat-button mat-ink-ripple\" color=\"primary\" type=\"button\">\n      <i class=\"fa fa-folder-open-o fa-2x\" aria-hidden=\"true\"></i>\n      <span> Browse</span>\n    </button>\n  </div>\n\n  <div *ngIf=\"info.active.status == 1\" class=\"main-content\">\n    <mat-progress-bar *ngIf=\"info.active.status != undefined && info.active.status=='2'\" mode=\"indeterminate\"></mat-progress-bar>\n    <div class=\"output\">\n      <div class=\"output-header\">\n        <h4>{{info.active.text}}</h4>\n      </div>\n      <div class=\"emotions row\">\n        <div  *ngFor=\"let option of info.options\" class=\"item col-md-4 col-sm-4 col-xs-6\">\n            <p>{{option.principal.main}}</p>\n            <img [src]=\"'assets/emotions/'+option.principal.main+'.gif'\" [ngStyle]=\"{'opacity':option.principal.opacity}\" alt=\"\">\n            <chart [options]=\"option.op\" (load)=\"reload($event.context)\"></chart>\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n</div>\n<!--  -->"

/***/ }),

/***/ "../../../../../src/app/emotions/emotions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmotionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { setInterval } from 'timers';
var EmotionsComponent = (function () {
    function EmotionsComponent() {
        this.info = {
            active: {
                status: 0,
                imageURL: null,
                text: '',
                outputData: {}
            },
            options: []
        };
    }
    EmotionsComponent.prototype.ngOnInit = function () {
    };
    // events
    EmotionsComponent.prototype.getRandomImage = function () {
        if (this.info.active.status === 0 || this.info.active.status === 2) {
            // start loadding data
            this.info.active.status = 2;
            // TODO
            // setInterval(() => {
            this.info.active.status = 1;
            this.info.active.imageURL = 'http://farm3.staticflickr.com/2917/14362397619_48824fee7d_z.jpg';
            this.info.active.text = 'anything';
            this.info.active.outputData = {
                text: {
                    amusement: 0.8,
                    anger: 0.05,
                    awe: 0.05,
                    contentment: 0.05,
                    disgust: 0.04,
                    excitement: 0.06,
                    fear: 0,
                    sadness: 0,
                },
                image: {
                    amusement: 0.08,
                    anger: 0.15,
                    awe: 0.5,
                    contentment: 0.05,
                    disgust: 0.4,
                    excitement: 0.6,
                    fear: 0,
                    sadness: 0.5,
                },
                fusion: {
                    amusement: 0.8,
                    anger: 0.35,
                    awe: 0.05,
                    contentment: 0.05,
                    disgust: 0.4,
                    excitement: 0.06,
                    fear: 0.2,
                    sadness: 0.1,
                }
            };
            var outputData = this.info.active.outputData;
            for (var key in outputData) {
                if (outputData.hasOwnProperty(key)) {
                    var element = outputData[key];
                    this.info.options.push({
                        op: this.bindDate(outputData[key], key),
                        principal: this.getPrincipal(outputData[key])
                    });
                }
            }
            // }, 1000);
        }
        else {
            this.info = {
                active: {
                    status: 0,
                    imageURL: null,
                    text: '',
                    outputData: {}
                },
                options: []
            };
        }
    };
    EmotionsComponent.prototype.getPrincipal = function (data) {
        var opacity = 0;
        var main = '';
        for (var key in data) {
            if (data.hasOwnProperty(key)) {
                var element = data[key];
                if (opacity < element) {
                    opacity = element;
                    main = key;
                }
            }
        }
        return {
            opacity: opacity,
            main: main
        };
    };
    EmotionsComponent.prototype.bindDate = function (data, key) {
        console.log(data);
        var options = {
            chart: {
                marginLeft: 60, marginRight: 60, polar: true, spacingBottom: 40, spacingTop: 0, spacingLeft: 5, spacingRight: 5, animation: {
                    duration: 1500
                },
                width: 330, height: 330
            },
            exporting: {
                enabled: !1
            },
            title: {
                text: key ? key : '', align: 'center', verticalAlign: 'top', margin: 50, floating: !0, y: 30
            },
            legend: {
                enabled: !1
            },
            xAxis: {
                tickInterval: 1, min: 0, max: 7, categories: this.getCategories()
            },
            tooltip: {
                formatter: function () {
                    return '<b>' + this.x;
                }
            },
            yAxis: {
                min: 0, tickInterval: 10, tickPositions: [0, 20, 40, 60, 80, 100], minorTickInterval: 0, labels: {
                    enabled: !1
                }
            },
            plotOptions: {
                series: {
                    pointStart: 0, pointInterval: 1
                },
                column: {
                    pointPadding: 0, groupPadding: 0, colorByPoint: !0
                }
            },
            series: [{
                    pointPlacement: 'on', type: 'column', name: 'level', data: [
                        data.amusement * 100,
                        data.anger * 100,
                        data.awe * 100,
                        data.contentment * 100,
                        data.disgust * 100,
                        data.excitement * 100,
                        data.fear * 100,
                        data.sadness * 100
                    ]
                }]
        };
        return options;
    };
    EmotionsComponent.prototype.getCategories = function () {
        // amusement: number;
        // anger: number;
        // awe: number;
        // contentment: number;
        // disgust: number;
        // excitement: number;
        // fear: number;
        // sadness: number;
        var categories = ['amusement', 'anger', 'awe', 'contentment', 'disgust', 'excitement', 'fear', 'sadness'];
        return categories;
    };
    EmotionsComponent.prototype.saveInstance = function (chartInstance) {
        this.chart = chartInstance;
    };
    EmotionsComponent.prototype.closeImg = function () {
        this.info = {
            active: {
                status: 0,
                imageURL: null,
                text: '',
                outputData: {}
            },
            options: []
        };
    };
    EmotionsComponent.prototype.reload = function (e) {
        console.log(e);
    };
    EmotionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-emotions',
            template: __webpack_require__("../../../../../src/app/emotions/emotions.component.html"),
            styles: [__webpack_require__("../../../../../src/app/emotions/emotions.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EmotionsComponent);
    return EmotionsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/face-emotion/face-emotion.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-grid-tile{\r\n  background-size: cover!important;\r\n  background-position: 50% center!important;\r\n  /* position: relative; */\r\n}\r\n.list-wrap{\r\n  height: 75vh;\r\n  overflow-y: scroll;\r\n  box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 5px 8px 0 rgba(0,0,0,.14), 0 1px 14px 0 rgba(0,0,0,.12);\r\n}\r\n.inner{\r\n  background: #fb81b6e5;\r\n  width: 100%;\r\n  height: 100%;\r\n  text-align: center;\r\n  opacity: 0;\r\n}\r\n.inner:hover{\r\n  background: #fb81b88a;\r\n  opacity: 1;\r\n  transition: all 0.5s;\r\n}\r\n.inner.active{\r\n  /* transform: translate(-50%, -50%); */\r\n  opacity: 1;\r\n  transition: all 0.5s;\r\n}\r\n.inner i{\r\n  margin: auto;\r\n  font-size: 26px;\r\n  color: #fff;\r\n  padding-top: calc(45% - 13px);\r\n}\r\n.main-content{\r\n  text-align: center;\r\n}\r\n.main-content mat-spinner{\r\n  margin: auto;\r\n  \r\n}\r\n.result-main-img{\r\n  min-width: 300px;\r\n}\r\nimg.emoji {\r\n  height: 26px;\r\n  width: 26px;\r\n  max-height: 26px;\r\n  max-width: 26px;\r\n}\r\n.hn-faces{\r\n  text-align: center;\r\n}\r\n.hn-face{\r\n  margin: 10px;\r\n}\r\n.hn-facebottom{\r\n  padding: 15px 0;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n}\r\n.hn-wrapper{\r\n  margin: 20px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/face-emotion/face-emotion.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-xs-4 col-lg-4 col-md-4 col-sm-4\">\n        <mat-toolbar class=\"toolbar\">\n          <mat-toolbar-row>\n            <span>Select the image to analyze</span>\n            <i class=\"fa fa-chevron-down\"></i>\n          </mat-toolbar-row>\n        </mat-toolbar>\n        <div class=\"list-wrap scrb\">\n          <mat-grid-list cols=\"4\" rowHeight=\"100px\">\n            <mat-grid-tile\n              *ngFor=\"let tile of info.imageURLs\" \n              (click)=\"selectImage(tile)\"\n                [colspan]=\"'2'\"\n                [rowspan]=\"'2'\"\n                [style.background]=\"'url('+tile.url+')'\">\n              <div [class]=\"info.active.a_id == tile.id?'active inner':'inner'\">\n                <i class=\"fa fa-check\"></i>\n              </div>\n            </mat-grid-tile>\n          </mat-grid-list>\n        </div>\n    </div>\n    <div class=\"col-xs-8 col-lg-8 col-md-8 col-sm-8\">\n      <mat-toolbar class=\"toolbar\">\n        <mat-toolbar-row>\n          <span>Analysis Results </span>\n          <i class=\"fa fa-bar-chart\"></i>\n        </mat-toolbar-row>\n      </mat-toolbar>\n      <div class=\"main-content\" [style.height]=\"info.active.status==1?'auto':'75vh'\">\n        <mat-spinner *ngIf=\"!info.active.status\"></mat-spinner>\n        <div class=\"result\" *ngIf=\"info.active.status==1\">\n          <div class=\"result-main-img\">\n            <img class=\"img-responsive\" [src]=\"info.active.result.url\" alt=\"\">\n          </div>\n          <div class=\"hn-wrapper\">\n            <h4>Faces Emotions</h4>\n            <div class=\"row hn-face\">\n              <div class=\"col-md-12 col-sm-12 col-xs-12 hn-faces\" *ngFor=\"let face of info.active.result.faces\">\n                <div style=\"min-width:50px\">\n                  <img class=\"img-responsive\" [src]=\"face.url\" alt=\"\" style=\"display: inline;max-height:50px\" >\n                </div>\n                <span [style.opacity]=\"0.2+face.emotions.happiness\" class=\"hn-sp\" [matTooltip]=\"'happiness:'+face.emotions.happiness\" >\n                  <img class=\"emoji\" alt=\"😃\" src=\"https://twemoji.maxcdn.com/2/72x72/1f603.png\">\n                </span>\n                <span [style.opacity]=\"0.2+face.emotions.surprise\" class=\"hn-sp\" [matTooltip]=\"'surprise:'+face.emotions.happiness\" >\n                  <img class=\"emoji\" alt=\"😮\" src=\"https://twemoji.maxcdn.com/2/72x72/1f62e.png\">\n                </span>\n                <span [style.opacity]=\"0.2+face.emotions.neutral\" class=\"hn-sp\" [matTooltip]=\"'neutral:'+face.emotions.happiness\" >\n                  <img class=\"emoji\" alt=\"😐\" src=\"https://twemoji.maxcdn.com/2/72x72/1f610.png\">\n                </span>\n                <span [style.opacity]=\"0.2+face.emotions.sadness\" class=\"hn-sp\" [matTooltip]=\"'sadness:'+face.emotions.happiness\" >\n                  <img class=\"emoji\" alt=\"😞\" src=\"https://twemoji.maxcdn.com/2/72x72/1f61e.png\">\n                </span>\n                <span [style.opacity]=\"0.2+face.emotions.fear\" class=\"hn-sp\" [matTooltip]=\"'fear:'+face.emotions.happiness\" >\n                  <img class=\"emoji\" alt=\"😨\" src=\"https://twemoji.maxcdn.com/2/72x72/1f628.png\">\n                </span>\n                <span [style.opacity]=\"0.2+face.emotions.anger\" class=\"hn-sp\" [matTooltip]=\"'anger:'+face.emotions.happiness\" >\n                  <img class=\"emoji\" alt=\"😠\" src=\"https://twemoji.maxcdn.com/2/72x72/1f620.png\">\n                </span>\n              </div>\n            </div>\n            <div layout=\"row\" class=\"row hn-facebottom\">\n              <span class=\"\">\n                <span>\n                  <img class=\"emoji\" alt=\"😃\" src=\"https://twemoji.maxcdn.com/2/72x72/1f603.png\">\n                </span>\n                <span style=\"margin-right:20px\">happiness</span>\n              </span>\n              <span class=\"\">\n                <span>\n                  <img class=\"emoji\" alt=\"😮\" src=\"https://twemoji.maxcdn.com/2/72x72/1f62e.png\">\n                </span>\n                <span style=\"margin-right:20px\">surprise</span>\n              </span>\n              <span class=\"\">\n                <span>\n                  <img class=\"emoji\" alt=\"😐\" src=\"https://twemoji.maxcdn.com/2/72x72/1f610.png\">\n                </span>\n                <span style=\"margin-right:20px\">neutral</span>\n              </span>\n              <span class=\"\">\n                <span>\n                  <img class=\"emoji\" alt=\"😞\" src=\"https://twemoji.maxcdn.com/2/72x72/1f61e.png\">\n                </span>\n                <span style=\"margin-right:20px\">sadness</span>\n              </span>\n              <span class=\"\">\n                <span>\n                  <img class=\"emoji\" alt=\"😨\" src=\"https://twemoji.maxcdn.com/2/72x72/1f628.png\">\n                </span>\n                <span style=\"margin-right:20px\">fear</span>\n              </span>\n              <span class=\"\">\n                <span>\n                  <img class=\"emoji\" alt=\"😠\" src=\"https://twemoji.maxcdn.com/2/72x72/1f620.png\">\n                </span>\n                <span style=\"margin-right:20px\">anger</span>\n              </span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/face-emotion/face-emotion.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaceEmotionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FaceEmotionComponent = (function () {
    function FaceEmotionComponent() {
        this.info = {
            imageURLs: [],
            active: {
                status: -1,
                result: undefined,
                a_id: null
            },
            imageResults: []
        };
    }
    FaceEmotionComponent.prototype.ngOnInit = function () {
        this.fillData();
    };
    /**
     * Event select a image
     * @param data Image selected (url ,id)
     */
    FaceEmotionComponent.prototype.selectImage = function (data) {
        // Turn on spinner
        this.info.active.status = 0;
        this.info.active.a_id = data.id;
        // fetch API
        for (var temp = 0; temp < this.info.imageResults.length; temp++) {
            if (this.info.imageResults[temp].id === data.id) {
                this.info.active.result = this.info.imageResults[temp];
                break;
            }
        }
        console.log(this.info.active.result);
        // If done stop spinner
        this.info.active.status = 1;
        // Need send data to server via API
    };
    /**
     * Use to get data from server
     */
    FaceEmotionComponent.prototype.fillData = function () {
        this.info.imageURLs = [
            {
                id: 1,
                url: 'https://s-media-cache-ak0.pinimg.com/736x/a5/7d/c6/a57dc60a78185c98b57ba1a23f9f8bab.jpg'
            },
            {
                id: 2,
                url: 'http://i2.mirror.co.uk/incoming/article83278.ece/ALTERNATES/s1200/theresa-may-delivers-her-address-on-the-third-day-of-the-conservative-party-conference-pic-reuters-504673602.jpg'
            },
            {
                id: 3,
                url: 'http://cdn.images.express.co.uk/img/dynamic/1/590x/secondary/Theresa-May-migrant-G20-644717.jpg'
            },
            {
                id: 4,
                url: 'http://cdn.images.express.co.uk/img/dynamic/1/590x/secondary/Theresa-May-slaps-time-limit-on-detention-of-pregnant-women-in-immigration-custody-515355.jpg'
            },
            {
                id: 5,
                url: 'https://www.askideas.com/media/20/Funny-Sad-Face-Baby-Image.jpg'
            },
            {
                id: 6,
                url: 'https://ak9.picdn.net/shutterstock/videos/18478699/thumb/1.jpg'
            },
            {
                id: 7,
                url: 'http://i.dailymail.co.uk/i/pix/2015/12/27/02/2FA0919300000578-0-image-a-51_1451184103475.jpg'
            },
            {
                id: 8,
                url: 'http://i.dailymail.co.uk/i/pix/2016/01/24/20/308A4C9F00000578-3414721-image-a-5_1453668210110.jpg'
            }
        ];
        // Suppose we have a list result from server
        this.info.imageResults = [
            {
                id: 1,
                url: 'https://modemos.epfl.ch/images/tmpxpr1ep9z_faces.jpg',
                faces: [
                    {
                        url: 'https://modemos.epfl.ch/images/tmpxpr1ep9z_face0.jpg',
                        emotions: {
                            happiness: 0.9,
                            surprise: 0.1,
                            neutral: 0,
                            sadness: 0,
                            fear: 0,
                            anger: 0
                        }
                    },
                    {
                        url: 'https://modemos.epfl.ch/images/tmpxpr1ep9z_face1.jpg',
                        emotions: {
                            happiness: 0.8,
                            surprise: 0.1,
                            neutral: 0,
                            sadness: 0,
                            fear: 0,
                            anger: 0
                        }
                    },
                    {
                        url: 'https://modemos.epfl.ch/images/tmpxpr1ep9z_face2.jpg',
                        emotions: {
                            happiness: 0.8,
                            surprise: 0.1,
                            neutral: 0,
                            sadness: 0,
                            fear: 0,
                            anger: 0
                        }
                    },
                    {
                        url: 'https://modemos.epfl.ch/images/tmpxpr1ep9z_face3.jpg',
                        emotions: {
                            happiness: 0.8,
                            surprise: 0.1,
                            neutral: 0,
                            sadness: 0,
                            fear: 0,
                            anger: 0
                        }
                    },
                    {
                        url: 'https://modemos.epfl.ch/images/tmpxpr1ep9z_face4.jpg',
                        emotions: {
                            happiness: 0.8,
                            surprise: 0.1,
                            neutral: 0,
                            sadness: 0,
                            fear: 0,
                            anger: 0
                        }
                    },
                    {
                        url: 'https://modemos.epfl.ch/images/tmpxpr1ep9z_face5.jpg',
                        emotions: {
                            happiness: 0.8,
                            surprise: 0.1,
                            neutral: 0,
                            sadness: 0,
                            fear: 0,
                            anger: 0
                        }
                    }
                ]
            },
            {
                id: 2,
                url: 'https://modemos.epfl.ch/images/tmpzvp95oef_faces.jpg',
                faces: [
                    {
                        url: 'https://modemos.epfl.ch/images/tmpzvp95oef_face0.jpg',
                        emotions: {
                            happiness: 0.02,
                            surprise: 0.21,
                            neutral: 0.56,
                            sadness: 0.08,
                            fear: 0.03,
                            anger: 0.11
                        }
                    }
                ]
            },
            {
                id: 3,
                url: 'https://modemos.epfl.ch/images/tmpr34r41iq_faces.jpg',
                faces: [
                    {
                        url: 'https://modemos.epfl.ch/images/tmpr34r41iq_face0.jpg',
                        emotions: {
                            happiness: 0.02,
                            surprise: 0.30,
                            neutral: 0.29,
                            sadness: 0.05,
                            fear: 0.05,
                            anger: 0.29
                        }
                    }
                ]
            },
            {
                id: 4,
                url: 'https://modemos.epfl.ch/images/tmp8g3j0vc1_faces.jpg',
                faces: [
                    {
                        url: 'https://modemos.epfl.ch/images/tmp8g3j0vc1_face0.jpg',
                        emotions: {
                            happiness: 0.02,
                            surprise: 0.10,
                            neutral: 0.48,
                            sadness: 0.31,
                            fear: 0.05,
                            anger: 0.09
                        }
                    }
                ]
            },
            {
                id: 5,
                url: 'https://modemos.epfl.ch/images/tmp5d2q2fa2_faces.jpg',
                faces: [
                    {
                        url: 'https://modemos.epfl.ch/images/tmp5d2q2fa2_face0.jpg',
                        emotions: {
                            happiness: 0.02,
                            surprise: 0.30,
                            neutral: 0.29,
                            sadness: 0.05,
                            fear: 0.05,
                            anger: 0.29
                        }
                    }
                ]
            },
            {
                id: 6,
                url: 'https://modemos.epfl.ch/images/tmpawvnos0f_faces.jpg',
                faces: [
                    {
                        url: 'https://modemos.epfl.ch/images/tmpawvnos0f_face0.jpg',
                        emotions: {
                            happiness: 0.02,
                            surprise: 0.30,
                            neutral: 0.29,
                            sadness: 0.05,
                            fear: 0.05,
                            anger: 0.29
                        }
                    }
                ]
            },
            {
                id: 7,
                url: 'https://modemos.epfl.ch/images/tmp7xkfkswk_faces.jpg',
                faces: [
                    {
                        url: 'https://modemos.epfl.ch/images/tmp7xkfkswk_face0.jpg',
                        emotions: {
                            happiness: 0.02,
                            surprise: 0.30,
                            neutral: 0.29,
                            sadness: 0.05,
                            fear: 0.05,
                            anger: 0.29
                        }
                    }
                ]
            },
            {
                id: 8,
                url: 'https://modemos.epfl.ch/images/tmpr34r41iq_faces.jpg',
                faces: [
                    {
                        url: 'https://modemos.epfl.ch/images/tmp5v0npwz0_face0.jpg',
                        emotions: {
                            happiness: 0.02,
                            surprise: 0.30,
                            neutral: 0.29,
                            sadness: 0.05,
                            fear: 0.05,
                            anger: 0.29
                        }
                    }
                ]
            }
        ];
    };
    FaceEmotionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-face-emotion',
            template: __webpack_require__("../../../../../src/app/face-emotion/face-emotion.component.html"),
            styles: [__webpack_require__("../../../../../src/app/face-emotion/face-emotion.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FaceEmotionComponent);
    return FaceEmotionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/filter-image/filter-image.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n}\r\n.header mat-slider{\r\n  width: 70%;\r\n}\r\n.header span {\r\n  font-size: 24px;\r\n  text-align: center;\r\n  width: 10%;\r\n}\r\n.header .selecter{\r\n\r\n  width: 20%;\r\n}\r\n.header .selecter label{\r\n  transition: transform .4s cubic-bezier(.25,.8,.25,1),width .4s cubic-bezier(.25,.8,.25,1),-webkit-transform .4s cubic-bezier(.25,.8,.25,1);\r\n  /* overflow: hidden; */\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n  width: 100%;\r\n  -webkit-box-ordinal-group: 2;\r\n  -ms-flex-order: 1;\r\n      order: 1;\r\n  pointer-events: none;\r\n  -webkit-font-smoothing: antialiased;\r\n  padding-left: 3px;\r\n  padding-right: 0;\r\n  z-index: 1;\r\n\r\n  max-width: 100%;\r\n\r\n}\r\n.text-item::before {\r\n  content: \"\\25A0   \";\r\n  font-size: 30px;\r\n}\r\n.animate-repeat {\r\n  line-height: 30px;\r\n  list-style: none;\r\n  box-sizing: border-box;\r\n}\r\n.lonhon{\r\n  color: rgb(103, 58, 183);\r\n}\r\n.nhohon{\r\n  color: rgb(63, 81, 181);\r\n}\r\nmat-grid-tile{\r\n  background-size: cover!important;\r\n  background-position: 50% center!important;\r\n  /* position: relative; */\r\n}\r\n.list-wrap{\r\n  height: 75vh;\r\n  overflow-y: scroll;\r\n  box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 5px 8px 0 rgba(0,0,0,.14), 0 1px 14px 0 rgba(0,0,0,.12);\r\n}\r\n.inner{\r\n  background: #fb81b6e5;\r\n  width: 100%;\r\n  height: 100%;\r\n  text-align: center;\r\n  opacity: 0;\r\n}\r\n.inner:hover{\r\n  background: #fb81b88a;\r\n  opacity: 1;\r\n  transition: all 0.5s;\r\n}\r\n.inner.active{\r\n  /* transform: translate(-50%, -50%); */\r\n  opacity: 1;\r\n  transition: all 0.5s;\r\n}\r\n.inner i{\r\n  margin: auto;\r\n  font-size: 26px;\r\n  color: #fff;\r\n  padding-top: calc(45% - 13px);\r\n}\r\n.main-content{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-pack: distribute;\r\n      justify-content: space-around;\r\n} \r\n.right{\r\n  width: 45%;\r\n  padding: 10px;\r\n}\r\n.left{\r\n  width: 45%;\r\n  padding: 10px;\r\n}\r\n.left svg,\r\n.right svg{\r\n  width: 250px!important;\r\n}\r\nsvg:not(:root){\r\n  overflow: hidden;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/filter-image/filter-image.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"main container\">\n  <div class=\"header\">\n    <!-- <mat-card-content> -->\n      <mat-slider thumbLabel=true max=100 min=0 step=5 (change)=\"changeSlicer($event)\"></mat-slider>\n      <span>{{'🏖'}}</span>\n      <div class=\"selecter\">\n          <mat-form-field>\n            <mat-select id=\"select-1\" name=\"Classifier\" [(value)]=\"info.state.condition.sortBy\" (change)=\"changeClassifier($event)\" placeholder=\"Hate Classifier\">\n              <mat-option *ngFor=\"let opt of info.Classifier\" [value]=\"opt.value\">\n                {{opt.text}}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n      </div>\n    <!-- </mat-card-content> -->\n  </div>\n  <div class=\"listToShow\">\n    <mat-grid-list cols=\"10\" rowHeight=\"100px\">\n      <mat-grid-tile\n        *ngFor=\"let tile of info.listImages\" \n        (click)=\"selectImage(tile)\"\n          [colspan]=\"'2'\"\n          [rowspan]=\"'2'\"\n          [style.background]=\"'url('+tile.url+')'\">\n        <div [class]=\"info.active.a_id == tile.id?'active inner':'inner'\">\n          <i class=\"fa fa-check\"></i>\n        </div>\n      </mat-grid-tile>\n    </mat-grid-list>\n  </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/filter-image/filter-image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterImageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_linqts__ = __webpack_require__("../../../../linqts/dist/linq.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_linqts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_linqts__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FilterImageComponent = (function () {
    function FilterImageComponent(http) {
        this.http = http;
        this.info = {
            Classifier: [{
                    text: 'None',
                    value: 'none'
                },
                {
                    text: 'Beach',
                    value: 'beach'
                },
                {
                    text: 'Family',
                    value: 'family'
                },
                {
                    text: 'Provocative',
                    value: 'provocative'
                },
                {
                    text: 'Person',
                    value: 'person'
                },
                {
                    text: 'Bikini',
                    value: 'bikini'
                },
                {
                    text: 'CloseUp',
                    value: 'closeup'
                },
                {
                    text: 'Gore',
                    value: 'gore'
                }],
            status: '0',
            listImages: undefined,
            state: {
                sliderValue: 0,
                condition: {
                    sortBy: 'oyotyHate',
                    minValue: 0
                },
                listToShow: undefined
            },
            active: {
                status: -1,
                imageURL: null,
                result: undefined,
                a_id: null
            }
        };
        this.fillData();
        // this.info.listImages;
        // console.log(this.info.listImages.getValue());
        this.updateListToShow();
        // this.http.get('data/sdata.json').map(res => { console.log(res); })
        //     .subscribe(data => {
        //       console.log(data);
        //     });
    }
    FilterImageComponent.prototype.ngOnInit = function () {
    };
    FilterImageComponent.prototype.updateListToShow = function () {
        var _this = this;
        this.info.state.listToShow = [];
        new __WEBPACK_IMPORTED_MODULE_3_linqts__["List"](this.info.listImages)
            .OrderBy(function (sorter) { return sorter[_this.info.state.condition.sortBy]; })
            .Where(function (r) { return r[_this.info.state.condition.sortBy] >= _this.info.state.condition.minValue; })
            .ForEach(function (r) {
            _this.info.state.listToShow.push(r);
        });
        console.log(this.info.state.listToShow);
    };
    FilterImageComponent.prototype.changeSlicer = function (e) {
        this.info.state.condition.minValue = e.value;
        this.updateListToShow();
    };
    FilterImageComponent.prototype.changeClassifier = function (e) {
        this.info.state.condition.sortBy = e.value;
        this.updateListToShow();
    };
    FilterImageComponent.prototype.fillData = function () {
        this.info.listImages = [{
                id: 1,
                url: 'https://s-media-cache-ak0.pinimg.com/736x/a5/7d/c6/a57dc60a78185c98b57ba1a23f9f8bab.jpg',
                df: 10,
                beach: 12,
                family: 11
            },
            {
                id: 1,
                url: 'http://i2.mirror.co.uk/incoming/article83278.ece/ALTERNATES/s1200/theresa-may-delivers-her-address-on-the-third-day-of-the-conservative-party-conference-pic-reuters-504673602.jpg',
                df: 10,
                beach: 12,
                family: 11
            },
            {
                id: 1,
                url: 'http://cdn.images.express.co.uk/img/dynamic/1/590x/secondary/Theresa-May-migrant-G20-644717.jpg',
                df: 10,
                beach: 12,
                family: 11
            },
            {
                id: 1,
                url: 'https://www.askideas.com/media/20/Funny-Sad-Face-Baby-Image.jpg',
                df: 10,
                beach: 12,
                family: 11
            },
            {
                id: 1,
                url: 'https://68.media.tumblr.com/40862ea034b64adfb3d75426af892499/tumblr_okxr8cGy3e1untgrfo1_500.jpg',
                df: 10,
                beach: 12,
                family: 11
            },
            {
                id: 1,
                url: 'http://i.dailymail.co.uk/i/pix/2015/12/27/02/2FA0919300000578-0-image-a-51_1451184103475.jpg',
                df: 10,
                beach: 12,
                family: 11
            },
            {
                id: 1,
                url: 'https://ak9.picdn.net/shutterstock/videos/18478699/thumb/1.jpg',
                df: 10,
                beach: 12,
                family: 11
            },
            {
                id: 1,
                url: 'http://www.clevver.com/wp-content/uploads/2016/01/candice-accola-kat-graham-nina-dobrev-sad-happy-instagram-main.jpg',
                df: 10,
                beach: 12,
                family: 11
            },
            {
                id: 1,
                url: 'https://ak5.picdn.net/shutterstock/videos/7407499/thumb/1.jpg',
                df: 10,
                beach: 12,
                family: 11
            },
            {
                id: 1,
                url: 'https://s-media-cache-ak0.pinimg.com/originals/a9/a4/24/a9a4245cb3eb208ea2ad914e885dd1aa.jpg',
                df: 10,
                beach: 12,
                family: 11
            },
            {
                id: 1,
                url: 'http://www.freakingnews.com/pictures/21500/Monkey-with-Human-Eyes-21623.jpg',
                df: 10,
                beach: 12,
                family: 11
            }];
    };
    FilterImageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-filter-image',
            template: __webpack_require__("../../../../../src/app/filter-image/filter-image.component.html"),
            styles: [__webpack_require__("../../../../../src/app/filter-image/filter-image.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], FilterImageComponent);
    return FilterImageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/filter-text/filter-text.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n}\r\n.header mat-slider{\r\n  width: 70%;\r\n}\r\n.header span {\r\n  font-size: 24px;\r\n  text-align: center;\r\n  width: 10%;\r\n}\r\n.header .selecter{\r\n\r\n  width: 20%;\r\n}\r\n.header .selecter label{\r\n  transition: transform .4s cubic-bezier(.25,.8,.25,1),width .4s cubic-bezier(.25,.8,.25,1),-webkit-transform .4s cubic-bezier(.25,.8,.25,1);\r\n  /* overflow: hidden; */\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n  width: 100%;\r\n  -webkit-box-ordinal-group: 2;\r\n  -ms-flex-order: 1;\r\n      order: 1;\r\n  pointer-events: none;\r\n  -webkit-font-smoothing: antialiased;\r\n  padding-left: 3px;\r\n  padding-right: 0;\r\n  z-index: 1;\r\n\r\n  max-width: 100%;\r\n\r\n}\r\n.text-item::before {\r\n  content: \"\\25A0   \";\r\n  font-size: 30px;\r\n}\r\n.animate-repeat {\r\n  line-height: 30px;\r\n  list-style: none;\r\n  box-sizing: border-box;\r\n}\r\n.lonhon{\r\n  color: rgb(103, 58, 183);\r\n}\r\n.nhohon{\r\n  color: rgb(63, 81, 181);\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/filter-text/filter-text.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"main container\">\n  <div class=\"header\">\n    <!-- <mat-card-content> -->\n      <mat-slider thumbLabel=true max=100 min=0 step=5 (change)=\"changeSlicer($event)\"></mat-slider>\n      <span>{{'😡'}}</span>\n      <div class=\"selecter\">\n          <mat-form-field>\n            <mat-select id=\"select-1\" name=\"hateClassifier\" [(value)]=\"info.state.condition.sortBy\" (change)=\"changeClassifier($event)\" placeholder=\"Hate Classifier\">\n              <mat-option *ngFor=\"let opt of info.hateClassifier\" [value]=\"opt.value\">\n                {{opt.text}}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n      </div>\n    <!-- </mat-card-content> -->\n  </div>\n  <div class=\"listToShow\">\n    <ul id=\"list\">\n      <li class=\"animate-repeat text-item {{item[info.state.condition.sortBy] >= 50?'lonhon':'nhohon'}}\" *ngFor=\"let item of info.state.listToShow\">\n        {{item.text}}\n      </li>\n    </ul>\n  </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/filter-text/filter-text.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterTextComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_linqts__ = __webpack_require__("../../../../linqts/dist/linq.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_linqts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_linqts__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import * as Collections from 'typescript-collections';

var FilterTextComponent = (function () {
    function FilterTextComponent(http) {
        this.http = http;
        this.info = {
            hateClassifier: [{
                    text: 'Oyoty Hate',
                    value: 'oyotyHate'
                },
                {
                    text: 'Keyword',
                    value: 'keyword'
                },
                {
                    text: 'Oyoty Toxicity',
                    value: 'oyotyHoxicity'
                }],
            status: '0',
            listTweet: undefined,
            state: {
                sliderValue: 0,
                condition: {
                    sortBy: 'oyotyHate',
                    minValue: 0
                },
                listToShow: undefined
            },
        };
        this.info.listTweet = this.fillData();
        // this.info.listTweet;
        // console.log(this.info.listTweet.getValue());
        this.updateListToShow();
        // this.http.get('data/sdata.json').map(res => { console.log(res); })
        //     .subscribe(data => {
        //       console.log(data);
        //     });
    }
    FilterTextComponent.prototype.ngOnInit = function () {
    };
    FilterTextComponent.prototype.updateListToShow = function () {
        var _this = this;
        this.info.state.listToShow = [];
        new __WEBPACK_IMPORTED_MODULE_3_linqts__["List"](this.info.listTweet)
            .OrderBy(function (sorter) { return sorter[_this.info.state.condition.sortBy]; })
            .Where(function (r) { return r[_this.info.state.condition.sortBy] >= _this.info.state.condition.minValue; })
            .ForEach(function (r) {
            _this.info.state.listToShow.push(r);
        });
        // console.log(this.info.state.listToShow);
    };
    FilterTextComponent.prototype.changeSlicer = function (e) {
        this.info.state.condition.minValue = e.value;
        this.updateListToShow();
    };
    FilterTextComponent.prototype.changeClassifier = function (e) {
        this.info.state.condition.sortBy = e.value;
        this.updateListToShow();
    };
    FilterTextComponent.prototype.fillData = function () {
        var data = [
            {
                text: "#VoteBlue2014 Yeah. CUZ 8 million people in faggot ass #newyork are #chickenshit JEWS> FUCK THEM right? Fuck Bibi Netanyahu. RIGHT?",
                keyword: 1,
                oyotyHoxicity: 2,
                oyotyHate: 3
            },
            {
                text: "I'm arrogant and my bitch conceited 😈😎",
                keyword: 2,
                oyotyHoxicity: 3,
                oyotyHate: 4
            },
            {
                text: "Sitting alone watching White Chicks, no pants, fuzzy blankets, tea || turn up",
                keyword: 6,
                oyotyHoxicity: 5,
                oyotyHate: 4
            },
            {
                text: "Emma Watson slays every single Harry Potter movie. Each film becomes her bitch.",
                keyword: 12,
                oyotyHoxicity: 13,
                oyotyHate: 12
            },
            {
                text: "'@jayswaggkillah: '@JacklynAnnn: @jayswaggkillah Is a fag' jackie jealous' Neeeee",
                keyword: 22,
                oyotyHoxicity: 12,
                oyotyHate: 12
            },
            {
                text: "Just smashing a akbar with @TyroneLarkham @LarkhamWilliam @1jamesmitchell @philmaguire3",
                keyword: 14,
                oyotyHoxicity: 24,
                oyotyHate: 12
            }, {
                text: "RT @skythedon: Huge ass, small waist & okay face & bitches really think they famous",
                keyword: 33,
                oyotyHoxicity: 42,
                oyotyHate: 32
            },
            {
                text: "“@fhairhead: Only in Vermont is it big news that our govern got a buck #vermontproblems”",
                keyword: 75,
                oyotyHoxicity: 11,
                oyotyHate: 22
            },
            {
                text: "@Zhugstubble You heard me bitch but any way I'm back th texas so wtf u talking about bitch ass nigga",
                keyword: 99,
                oyotyHoxicity: 11,
                oyotyHate: 35
            },
            {
                text: "@MoriTaheripour shut up nigger whore! Hope u get raped by one of those animals. Might change your tune.",
                keyword: 55,
                oyotyHoxicity: 43,
                oyotyHate: 52
            },
            {
                text: "@Oprah @3LWTV Fuck you nigger sheboon. Hope you r strung up like all niggers should be. WHITEPOWER. #1488",
                keyword: 88,
                oyotyHoxicity: 67,
                oyotyHate: 77
            },
            {
                text: "I want to go to a haunted house maybe get possesed y'know just to see if ghosts are real 😱💀",
                keyword: 11,
                oyotyHoxicity: 23,
                oyotyHate: 13
            },
            {
                text: "just dont give a fuck",
                keyword: 41,
                oyotyHoxicity: 31,
                oyotyHate: 51
            },
            {
                text: "RT @HoodBibIe: Niggas with face tats are the same ones that stole your animal crackers in elementary smh they ",
                keyword: 77,
                oyotyHoxicity: 67,
                oyotyHate: 69
            },
            {
                text: "I'm never gonna be ok with my nigga around alot of bitches while with his boys. Cause I was once that female your boys put you on !!",
                keyword: 96,
                oyotyHoxicity: 42,
                oyotyHate: 56
            },
            {
                text: "Damn Eli. That's just ruff. I'm not even gonna trash talk that one. Get your game together Eli. You're a good QB. Stop with the TO's",
                keyword: 13,
                oyotyHoxicity: 67,
                oyotyHate: 43
            }
        ];
        return data;
    };
    FilterTextComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-filter-text',
            template: __webpack_require__("../../../../../src/app/filter-text/filter-text.component.html"),
            styles: [__webpack_require__("../../../../../src/app/filter-text/filter-text.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], FilterTextComponent);
    return FilterTextComponent;
}());



/***/ }),

/***/ "../../../../../src/app/hate/hate.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".toolbar{\r\n  color: #fff;\r\n  font-family: Roboto;\r\n  font-size: 20px;\r\n}\r\nmat-toolbar-row{\r\n  background-color: #E91E63  ;\r\n  text-align: center;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n}\r\nmat-toolbar-row i{\r\n  font-size: 24px;\r\n  padding: 5px 5px 5px 10px;\r\n}\r\n.main-content{\r\n  height: 75vh;\r\n  box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 5px 8px 0 rgba(0,0,0,.14), 0 1px 14px 0 rgba(0,0,0,.12);\r\n}\r\n.scr{\r\n  max-height: 75vh;\r\n  overflow-y: scroll;\r\n  box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 5px 8px 0 rgba(0,0,0,.14), 0 1px 14px 0 rgba(0,0,0,.12);\r\n}\r\n.scr button{\r\n  width: 100%;\r\n  text-align: left;\r\n}\r\n.scr button.act{\r\n  background: #80CBC4;\r\n  \r\n}\r\n.scrb::-webkit-scrollbar-track\r\n{\r\n\t-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\r\n\tborder-radius: 10px;\r\n\tbackground-color: #F5F5F5;\r\n}\r\n\r\n.scrb::-webkit-scrollbar\r\n{\r\n\twidth: 12px;\r\n\tbackground-color: #F5F5F5;\r\n}\r\n\r\n.scrb::-webkit-scrollbar-thumb\r\n{\r\n\tborder-radius: 10px;\r\n\t-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);\r\n\tbackground-color: #555;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/hate/hate.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-lg-5 col-md-5 col-sm-5\">\n        <mat-toolbar class=\"toolbar\">\n          <mat-toolbar-row>\n            <span>Select the tweet you want to analyze.</span>\n            <i class=\"fa fa-chevron-down\"></i>\n          </mat-toolbar-row>\n        </mat-toolbar>\n      <mat-list class=\"scr scrb\">\n        <mat-list-item *ngFor=\"let tweet of info.data.listTweet\">\n          <button [ngClass]=\"info.active == tweet ? 'mat-button done act':'mat-button'\" (click)=\"selectTweet(tweet)\" mat-button>\n            \n            <p matLine><i class=\"fa fa-done\"></i>{{tweet}}</p>\n          </button>\n        </mat-list-item>\n      </mat-list>\n    </div>\n    <div class=\"col-xs-12 col-lg-7 col-md-7 col-sm-7\">\n      <mat-toolbar class=\"toolbar\">\n        <mat-toolbar-row>\n          <span>Analysis Results </span>\n          <i class=\"fa fa-bar-chart\"></i>\n        </mat-toolbar-row>\n      </mat-toolbar>\n      <div class=\"main-content\">\n        <chart [options]=\"options\"></chart>\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/hate/hate.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { Chart } from 'angular2-highcharts';
var HateComponent = (function () {
    function HateComponent() {
        this.chart = undefined;
        this.info = {
            data: {
                // simulation data
                listTweet: [
                    'ummm. no it didnt work so i guess im stuck with this uglyonee',
                    'Gotta TeraByte of space to store movies',
                    "HAPPY MOTHER'S DAY to ALL MOM'S HERE and to YOUR MOMS too",
                    "Why don't you make me feel like you used to",
                    "Oh fml its probs gunna be at shepards bush i hate it there",
                    "Its beautiful outside. I wish i was in new york city. But this area is pretty cool. Hip and trendy.",
                    "@kazzababe95 cut yourself a slice of cheese cake.. it makes everything better",
                    "Also, WHERE IS MY TOY STORY 3 TEASER CARMIKE 14? YOU SAID THERE WOULD BE TOY STORY 3! Movie theater fail",
                    "@TheRankinFiles to be fair, she was asking about mktg cd's, etc, but I suggested more and she never even emailed back.",
                    "Version 2 of our live, interactive Trans-Siberian ticket planner is launched: http://tinyurl.com/c5ljwm - its very cool",
                    "Had a shower. it's 5:55 PM. Triple 5's! Crap, it just turned 5:56",
                    "oh yes, the Cavs win game5, now onto game6. it's still danger, they HAVE to win this one either, it's no shot for the championship",
                    "@tarng Trudy's off Burnet...the one up north that no one goes to",
                    "BTW, hey ppl. lol TGIF. Hopefully ur day is gr8. Mine is aight. Feeling like it kinda sux I got no plans 4 the wknd....",
                    "Yeah it's Friday but I have to work at 5am tomorrow oh well going shopping afterwork",
                    "I love ridding in this weather",
                    "@opalbonfante Wonderful! Let me know what you think. Not light reading",
                    "no Santa cruz for me but I do have an interview at jamba tomorrow morning (:",
                    "Eating at Zippys with candace!",
                    "HEY YOU' ALL SUCK;its anybody on there :s im so bored common answear me",
                    "#whorewhore she is",
                    "@DustBuny: being today and all, WE'RE GONNA USE THE FORCE to make it happen!",
                    "wishes I could be the one going to our conference in the Bahamas next week"
                ]
            },
            active: null,
        };
        this.options = {
            chart: {
                type: 'column',
                marginLeft: 60, marginRight: 60, polar: false, spacingBottom: 40, spacingTop: 0, spacingLeft: 5, spacingRight: 5, animation: {
                    duration: 1500
                },
                width: 600, height: 600
            },
            title: {
                text: 'Hate', align: 'center', verticalAlign: 'top', margin: 50, floating: !0, y: 30
            },
            legend: {
                align: 'right',
                verticalAlign: 'middle',
                layout: 'vertical'
            },
            xAxis: {
                categories: this.getCategories(),
                labels: {
                    x: -10
                }
            },
            // xAxis: {
            //     tickInterval: 1, min: 0, max: 5, categories: this.getCategories()
            // },
            tooltip: {
                formatter: function () {
                    return '<b>' + this.y;
                }
            },
            yAxis: {
                allowDecimals: false,
                title: {
                    text: 'Amount'
                }
            },
            responsive: {
                rules: [{
                        condition: {
                            maxWidth: 500
                        },
                        chartOptions: {
                            legend: {
                                align: 'center',
                                verticalAlign: 'bottom',
                                layout: 'horizontal'
                            },
                            yAxis: {
                                labels: {
                                    align: 'left',
                                    x: 0,
                                    y: -5
                                },
                                title: {
                                    text: null
                                }
                            },
                            subtitle: {
                                text: null
                            },
                            credits: {
                                enabled: false
                            }
                        }
                    }]
            },
            series: this.getData()
        };
        // this.options = {
        //     title : { text : 'simple chart' },
        //     series: [{
        //         data: [29.9, 71.5, 106.4, 129.2],
        //     }]
        // };
    }
    // options: Object;
    HateComponent.prototype.ngOnInit = function () {
    };
    HateComponent.prototype.getData = function () {
        return [{
                name: 'Hate',
                color: 'rgb(205, 220, 57)',
                data: [100, 10, 0, 61, 51]
            },
            {
                name: 'Clean',
                color: 'rgb(244, 67, 54)',
                data: [0, 90, 100, 39, 49]
            }];
    };
    HateComponent.prototype.getCategories = function () {
        var categories = ['Keyword', 'Oyoty Toxicity', 'Oyoty Hate', 'P.API Toxicity', 'P.API Obscene'];
        return categories;
    };
    HateComponent.prototype.selectTweet = function (tweet) {
        this.info.active = tweet;
        // this.option.series[0].data[0].y = 50;
        delete this.chart;
        // this.chart = new Chart(this.option);
    };
    HateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-hate',
            template: __webpack_require__("../../../../../src/app/hate/hate.component.html"),
            styles: [__webpack_require__("../../../../../src/app/hate/hate.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HateComponent);
    return HateComponent;
}());

// easy to navigate to this component
// next we need to draw with d3js
// or clone that !!


/***/ }),

/***/ "../../../../../src/app/neighbors/neighbors.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".toolbar{\r\n  color: #fff;\r\n  font-family: Roboto;\r\n  font-size: 20px;\r\n}\r\nmat-toolbar-row{\r\n  background-color: #E91E63  ;\r\n  text-align: center;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n}\r\nmat-toolbar-row i{\r\n  font-size: 24px;\r\n  padding: 5px 5px 5px 10px;\r\n}\r\n.main-content{\r\n  height: 75vh;\r\n  box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 5px 8px 0 rgba(0,0,0,.14), 0 1px 14px 0 rgba(0,0,0,.12);\r\n}\r\n.scr{\r\n  max-height: 75vh;\r\n  overflow-y: scroll;\r\n  box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 5px 8px 0 rgba(0,0,0,.14), 0 1px 14px 0 rgba(0,0,0,.12);\r\n}\r\n.scr button{\r\n  width: 100%;\r\n  text-align: left;\r\n}\r\n.scr button.act{\r\n  background: #80CBC4;\r\n}\r\n.scrb::-webkit-scrollbar-track\r\n{\r\n\t-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\r\n\tborder-radius: 10px;\r\n\tbackground-color: #F5F5F5;\r\n}\r\n\r\n.scrb::-webkit-scrollbar\r\n{\r\n\twidth: 12px;\r\n\tbackground-color: #F5F5F5;\r\n}\r\n\r\n.scrb::-webkit-scrollbar-thumb\r\n{\r\n\tborder-radius: 10px;\r\n\t-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);\r\n\tbackground-color: #555;\r\n}\r\n.head{\r\n  width: 30%;\r\n  margin: 10px auto;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column; \r\n}\r\n.output{\r\n  margin-top: 20px;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-pack: distribute;\r\n      justify-content: space-around;\r\n}\r\n.output h5{\r\n  color: gray;\r\n}\r\n.output-row{\r\n  width: 45%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/neighbors/neighbors.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-xs-5 col-lg-5 col-md-5 col-sm-5\">\n        <mat-toolbar class=\"toolbar\">\n          <mat-toolbar-row>\n            <span>Select the tweet you want to analyze.</span>\n            <i class=\"fa fa-chevron-down\"></i>\n          </mat-toolbar-row>\n        </mat-toolbar>\n      <mat-list class=\"scr scrb\">\n        <mat-list-item *ngFor=\"let word of info.data.listWords\">\n          <button [ngClass]=\"info.active == word ? 'mat-button done act':'mat-button'\" (click)=\"selectWord(word)\" mat-button>  \n            <p matLine><i class=\"fa fa-done\"></i>{{word}}</p>\n          </button>\n        </mat-list-item>\n      </mat-list>\n    </div>\n    <div class=\"col-xs-7 col-lg-7 col-md-7 col-sm-7\">\n      <mat-toolbar class=\"toolbar\">\n        <mat-toolbar-row>\n          <span>Nearest Neighbors</span>\n          <i class=\"fa fa-arrows-alt\"></i>\n        </mat-toolbar-row>\n      </mat-toolbar>\n      <div class=\"main-content\">\n        <div class=\"head\">\n          <label for=\"word\">Word*</label>\n          <input name=\"word\" matInput [value]=\"info.outputData.word\" disabled>\n        </div>\n        <div class=\"output\">\n          <div class=\"output-row\">\n            <h3>Our Oyoty Embedding</h3>\n            <h5>What neighbors we get?</h5>\n            <mat-list>\n              <mat-list-item *ngFor=\"let word of info.outputData.ourOyoty\">\n                <span>{{word}}</span>\n              </mat-list-item>\n            </mat-list>\n          </div>\n          <div class=\"output-row\">\n              <h3>GloVe Embedding</h3>\n              <h5>What existing embeddings get?</h5>\n              <mat-list>\n                <mat-list-item *ngFor=\"let wordg of info.outputData.glove\">\n                  <span>{{wordg}}</span>\n                </mat-list-item>\n              </mat-list>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/neighbors/neighbors.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NeighborsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NeighborsComponent = (function () {
    function NeighborsComponent() {
        this.info = {
            data: {
                // simulation data
                listWords: [
                    'plzplzplz',
                    'hahahehehe',
                    'playingpingpong',
                    'fuck',
                    'trump',
                    'suckit',
                    'weirdoman',
                    'willkillyou',
                    'comeon',
                    'idiott',
                    'haoccho',
                    'looooooollllz',
                    'okkkkk'
                ]
            },
            active: null,
            outputData: {
                word: 'plzplzplz',
                ourOyoty: [
                    'plzplzplz',
                    'pleassssee',
                    'plzplz',
                    'pleeeaaassee',
                    'pleaaassee',
                    'plez',
                    'pleasssee',
                    'pleaaasse',
                    'pleasssssse',
                    'pleeeaassee'
                ],
                glove: [
                    'pleasssee',
                    'pleaaasse',
                    'pleasssssse',
                    'pleeeaassee'
                ]
            }
        };
    }
    NeighborsComponent.prototype.selectWord = function (word) {
        this.info.active = word;
        this.info.outputData.word = word;
    };
    NeighborsComponent.prototype.ngOnInit = function () {
    };
    NeighborsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-neighbors',
            template: __webpack_require__("../../../../../src/app/neighbors/neighbors.component.html"),
            styles: [__webpack_require__("../../../../../src/app/neighbors/neighbors.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NeighborsComponent);
    return NeighborsComponent;
}());

// option = {
//     chart: {
//         plotBackgroundColor: null,
//         plotBorderWidth: null,
//         plotShadow: false,
//         type: 'variablepie'
//     },
//     title: {
//         text: 'ummm. no it didnt work so i guess im stuck with this uglyonee'
//     },
//     tooltip: {
//         pointFormat: '<b>{series.name}: <b>{point.percentage:.1f}%</b>',
//         formatter: function(series){
//             // tslint:disable-next-line:curly
//             if (!(this.series.name === 'main')) {
//                 return false;
//             } else {
//                 return 'sssss';
//             }
//         }
//     },
//     plotOptions: {
//         pie: {
//             allowPointSelect: true,
//             cursor: 'pointer',
//             dataLabels: {
//                 enabled: true,
//                 format: '<b>{point.name} haha</b> %',
//                 style: {
//                     color: 'black'
//                 }
//             }
//         }
//     },
//     series: [{
//         name : 'main',
//         // innerSize: '0%',
//         data: [{
//             y: 10,
//             z: 1100
//         }, {
//             y: 10,
//             z: 2
//         }, {
//             y: 10,
//             z: 1
//         }, {
//             y: 10,
//             z: 3
//         }, {
//             y: 10,
//             z: 4
//         }, {
//             y: 10,
//             z: 5
//         }, {
//             y: 10,
//             z: 5
//         }]
//     },
//     {
//         name: 'u20',
//         size: '20%',
//         // innerSize: '19.99%',
//         data: [{
//             y: 1,
//             color: 'transparent'
//         }]
//     },
//     {
//         name: 'u40',
//         size: '40%',
//         // innerSize: '39.99%',
//         data: [{
//             y: 1,
//             color: 'transparent'
//         }]
//     },
//     {
//         name: 'u60',
//         size: '60%',
//         // innerSize: '59.99%',
//         data: [{
//             y: 1,
//             color: 'transparent'
//         }]
//     },
//     {
//         name: 'u80',
//         size: '80%',
//         // innerSize: '79.99%',
//         data: [{
//             y: 1,
//             color: 'transparent'
//         }]
//     },
//     {
//         name: 'u100',
//         size: '100%',
//         // innerSize: '99.9%',
//         data: [{
//             y: 1,
//             color: 'transparent'
//         }]
//     }
//     ]
//   }; 


/***/ }),

/***/ "../../../../../src/app/text-emotions/text-emotions.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".toolbar{\r\n  color: #fff;\r\n  font-family: Roboto;\r\n  font-size: 20px;\r\n}\r\nmat-toolbar-row{\r\n  background-color: #E91E63  ;\r\n  text-align: center;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n}\r\nmat-toolbar-row i{\r\n  font-size: 24px;\r\n  padding: 5px 5px 5px 10px;\r\n}\r\n.main-content{\r\n  height: 75vh;\r\n  box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 5px 8px 0 rgba(0,0,0,.14), 0 1px 14px 0 rgba(0,0,0,.12);\r\n}\r\n.scr{\r\n  max-height: 75vh;\r\n  overflow-y: scroll;\r\n  box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 5px 8px 0 rgba(0,0,0,.14), 0 1px 14px 0 rgba(0,0,0,.12);\r\n}\r\n.scr button{\r\n  width: 100%;\r\n  text-align: left;\r\n}\r\n.scr button.act{\r\n  background: #80CBC4;\r\n}\r\n.scrb::-webkit-scrollbar-track\r\n{\r\n\t-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\r\n\tborder-radius: 10px;\r\n\tbackground-color: #F5F5F5;\r\n}\r\n\r\n.scrb::-webkit-scrollbar\r\n{\r\n\twidth: 12px;\r\n\tbackground-color: #F5F5F5;\r\n}\r\n\r\n.scrb::-webkit-scrollbar-thumb\r\n{\r\n\tborder-radius: 10px;\r\n\t-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);\r\n\tbackground-color: #555;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/text-emotions/text-emotions.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-xs-5 col-lg-5 col-md-5 col-sm-5\">\n        <mat-toolbar class=\"toolbar\">\n          <mat-toolbar-row>\n            <span>Select the tweet you want to analyze.</span>\n            <i class=\"fa fa-chevron-down\"></i>\n          </mat-toolbar-row>\n        </mat-toolbar>\n      <mat-list class=\"scr scrb\">\n        <mat-list-item *ngFor=\"let tweet of info.data.listTweet\">\n          <button [ngClass]=\"info.active == tweet ? 'mat-button done act':'mat-button'\" (click)=\"selectTweet(tweet)\" mat-button>\n            \n            <p matLine><i class=\"fa fa-done\"></i>{{tweet}}</p>\n          </button>\n        </mat-list-item>\n      </mat-list>\n    </div>\n    <div class=\"col-xs-7 col-lg-7 col-md-7 col-sm-7\">\n      <mat-toolbar class=\"toolbar\">\n        <mat-toolbar-row>\n          <span>Analysis Results </span>\n          <i class=\"fa fa-bar-chart\"></i>\n        </mat-toolbar-row>\n      </mat-toolbar>\n      <div class=\"main-content\">\n        <!-- <div [chart]=\"chart\"></div> -->\n        <chart [options]=\"options\" (load)=\"saveInstance($event.context)\"></chart>\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/text-emotions/text-emotions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextEmotionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TextEmotionsComponent = (function () {
    function TextEmotionsComponent() {
        this.info = {
            data: {
                // simulation data
                listTweet: [
                    'ummm. no it didnt work so i guess im stuck with this uglyonee',
                    'Gotta TeraByte of space to store movies',
                    "HAPPY MOTHER'S DAY to ALL MOM'S HERE and to YOUR MOMS too",
                    "Why don't you make me feel like you used to",
                    "Oh fml its probs gunna be at shepards bush i hate it there",
                    "Its beautiful outside. I wish i was in new york city. But this area is pretty cool. Hip and trendy.",
                    "@kazzababe95 cut yourself a slice of cheese cake.. it makes everything better",
                    "Also, WHERE IS MY TOY STORY 3 TEASER CARMIKE 14? YOU SAID THERE WOULD BE TOY STORY 3! Movie theater fail",
                    "@TheRankinFiles to be fair, she was asking about mktg cd's, etc, but I suggested more and she never even emailed back.",
                    "Version 2 of our live, interactive Trans-Siberian ticket planner is launched: http://tinyurl.com/c5ljwm - its very cool",
                    "Had a shower. it's 5:55 PM. Triple 5's! Crap, it just turned 5:56",
                    "oh yes, the Cavs win game5, now onto game6. it's still danger, they HAVE to win this one either, it's no shot for the championship",
                    "@tarng Trudy's off Burnet...the one up north that no one goes to",
                    "BTW, hey ppl. lol TGIF. Hopefully ur day is gr8. Mine is aight. Feeling like it kinda sux I got no plans 4 the wknd....",
                    "Yeah it's Friday but I have to work at 5am tomorrow oh well going shopping afterwork",
                    "I love ridding in this weather",
                    "@opalbonfante Wonderful! Let me know what you think. Not light reading",
                    "no Santa cruz for me but I do have an interview at jamba tomorrow morning (:",
                    "Eating at Zippys with candace!",
                    "HEY YOU' ALL SUCK;its anybody on there :s im so bored common answear me",
                    "#whorewhore she is",
                    "@DustBuny: being today and all, WE'RE GONNA USE THE FORCE to make it happen!",
                    "wishes I could be the one going to our conference in the Bahamas next week"
                ]
            },
            active: null,
        };
        this.options = {
            chart: {
                marginLeft: 60, marginRight: 60, polar: true, spacingBottom: 40, spacingTop: 0, spacingLeft: 5, spacingRight: 5, animation: {
                    duration: 1500
                },
                width: 600, height: 600
            },
            title: {
                text: 'Emotions', align: 'center', verticalAlign: 'top', margin: 50, floating: !0, y: 30
            },
            legend: {
                enabled: !1
            },
            xAxis: {
                tickInterval: 1, min: 0, max: 13, categories: this.getCategories()
            },
            tooltip: {
                formatter: function () {
                    return '<b>' + this.x;
                }
            },
            yAxis: {
                min: 0, tickInterval: 10, tickPositions: [0, 20, 40, 60, 80, 100], minorTickInterval: 0, labels: {
                    enabled: !1
                }
            },
            plotOptions: {
                series: {
                    pointStart: 0, pointInterval: 1
                },
                column: {
                    pointPadding: 0, groupPadding: 0, colorByPoint: !0
                }
            },
            series: [{
                    pointPlacement: 'on', type: 'column', name: 'level', data: this.getData()
                }]
        };
    }
    // simulation data
    TextEmotionsComponent.prototype.getData = function () {
        return [{
                y: 100,
            },
            {
                y: 10,
            },
            {
                y: 20,
            },
            {
                y: 10,
            },
            {
                y: 50,
            },
            {
                y: 10,
            },
            {
                y: 10,
            },
            {
                y: 10,
            },
            {
                y: 10,
            },
            {
                y: 10,
            },
            {
                y: 10,
            },
            {
                y: 10,
            },
            {
                y: 10,
            }];
    };
    TextEmotionsComponent.prototype.getCategories = function () {
        var categories = ['love', 'happiness', 'fun', 'enthusiasm', 'surprise',
            'relief', 'neutral', 'empty', 'hate', 'anger', 'sadness', 'boredom', 'worry'];
        return categories;
    };
    TextEmotionsComponent.prototype.saveInstance = function (chartInstance) {
        this.chart = chartInstance;
    };
    TextEmotionsComponent.prototype.selectTweet = function (tweet) {
        this.info.active = tweet;
        if (this.options.series[0].data[0].y > 100) {
            this.options.series[0].data[0].y -= 5;
        }
        else {
            this.options.series[0].data[0].y += 5;
        }
        this.chart.series[0].data[0].update({ y: this.options.series[0].data[0].y });
        // delete this.chart;
        // this.chart = new Chart(this.options);
    };
    // chart :any = undefined;
    TextEmotionsComponent.prototype.ngOnInit = function () {
    };
    TextEmotionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-text-emotions',
            template: __webpack_require__("../../../../../src/app/text-emotions/text-emotions.component.html"),
            styles: [__webpack_require__("../../../../../src/app/text-emotions/text-emotions.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TextEmotionsComponent);
    return TextEmotionsComponent;
}());

// option = {
//     chart: {
//         plotBackgroundColor: null,
//         plotBorderWidth: null,
//         plotShadow: false,
//         type: 'variablepie'
//     },
//     title: {
//         text: 'ummm. no it didnt work so i guess im stuck with this uglyonee'
//     },
//     tooltip: {
//         pointFormat: '<b>{series.name}: <b>{point.percentage:.1f}%</b>',
//         formatter: function(series){
//             // tslint:disable-next-line:curly
//             if (!(this.series.name === 'main')) {
//                 return false;
//             } else {
//                 return 'sssss';
//             }
//         }
//     },
//     plotOptions: {
//         pie: {
//             allowPointSelect: true,
//             cursor: 'pointer',
//             dataLabels: {
//                 enabled: true,
//                 format: '<b>{point.name} haha</b> %',
//                 style: {
//                     color: 'black'
//                 }
//             }
//         }
//     },
//     series: [{
//         name : 'main',
//         // innerSize: '0%',
//         data: [{
//             y: 10,
//             z: 1100
//         }, {
//             y: 10,
//             z: 2
//         }, {
//             y: 10,
//             z: 1
//         }, {
//             y: 10,
//             z: 3
//         }, {
//             y: 10,
//             z: 4
//         }, {
//             y: 10,
//             z: 5
//         }, {
//             y: 10,
//             z: 5
//         }]
//     },
//     {
//         name: 'u20',
//         size: '20%',
//         // innerSize: '19.99%',
//         data: [{
//             y: 1,
//             color: 'transparent'
//         }]
//     },
//     {
//         name: 'u40',
//         size: '40%',
//         // innerSize: '39.99%',
//         data: [{
//             y: 1,
//             color: 'transparent'
//         }]
//     },
//     {
//         name: 'u60',
//         size: '60%',
//         // innerSize: '59.99%',
//         data: [{
//             y: 1,
//             color: 'transparent'
//         }]
//     },
//     {
//         name: 'u80',
//         size: '80%',
//         // innerSize: '79.99%',
//         data: [{
//             y: 1,
//             color: 'transparent'
//         }]
//     },
//     {
//         name: 'u100',
//         size: '100%',
//         // innerSize: '99.9%',
//         data: [{
//             y: 1,
//             color: 'transparent'
//         }]
//     }
//     ]
//   };


/***/ }),

/***/ "../../../../../src/app/violence/violence.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-grid-tile{\r\n  background-size: cover!important;\r\n  background-position: 50% center!important;\r\n  /* position: relative; */\r\n}\r\n.list-wrap{\r\n  height: 75vh;\r\n  overflow-y: scroll;\r\n  box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 5px 8px 0 rgba(0,0,0,.14), 0 1px 14px 0 rgba(0,0,0,.12);\r\n}\r\n.inner{\r\n  background: #fb81b6e5;\r\n  width: 100%;\r\n  height: 100%;\r\n  text-align: center;\r\n  opacity: 0;\r\n}\r\n.inner:hover{\r\n  background: #fb81b88a;\r\n  opacity: 1;\r\n  transition: all 0.5s;\r\n}\r\n.inner.active{\r\n  /* transform: translate(-50%, -50%); */\r\n  opacity: 1;\r\n  transition: all 0.5s;\r\n}\r\n.inner i{\r\n  margin: auto;\r\n  font-size: 26px;\r\n  color: #fff;\r\n  padding-top: calc(45% - 13px);\r\n}\r\n.main-content{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-pack: distribute;\r\n      justify-content: space-around;\r\n} \r\n.right{\r\n  width: 45%;\r\n  padding: 10px;\r\n}\r\n.left{\r\n  width: 45%;\r\n  padding: 10px;\r\n}\r\n.left svg,\r\n.right svg{\r\n  width: 250px!important;\r\n}\r\nsvg:not(:root){\r\n  overflow: hidden;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/violence/violence.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-lg-5 col-md-5 col-sm-5\">\n        <mat-toolbar class=\"toolbar\">\n          <mat-toolbar-row>\n            <span>Select the image to analyze</span>\n            <i class=\"fa fa-chevron-down\"></i>\n          </mat-toolbar-row>\n        </mat-toolbar>\n        <div class=\"list-wrap scrb\">\n          <mat-grid-list cols=\"4\" rowHeight=\"100px\">\n            <mat-grid-tile\n              *ngFor=\"let tile of info.imageURLs\" \n              (click)=\"selectImage(tile)\"\n                [colspan]=\"'2'\"\n                [rowspan]=\"'2'\"\n                [style.background]=\"'url('+tile.url+')'\">\n              <div [class]=\"info.active.a_id == tile.id?'active inner':'inner'\">\n                <i class=\"fa fa-check\"></i>\n              </div>\n            </mat-grid-tile>\n          </mat-grid-list>\n        </div>\n    </div>\n    <div class=\"col-xs-12 col-lg-7 col-md-7 col-sm-7\">\n      <mat-toolbar class=\"toolbar\">\n        <mat-toolbar-row>\n          <span>Analysis Results </span>\n          <i class=\"fa fa-bar-chart\"></i>\n        </mat-toolbar-row>\n      </mat-toolbar>\n      <div class=\"main-content\">\n        <div class=\"right\" *ngIf=\"info.active.status > 0\">\n          <svg width=\"600\" height=\"450\" *ngIf=\"info.mode==1\">\n            <path class=\"link\" d=\"M0,205C60,205 60,102.5 120,102.5\" path=\"link\" style=\"stroke: rgb(33, 150, 243); opacity: 1;\"></path>\n            <path class=\"link\" d=\"M0,205C60,205 60,307.5 120,307.5\" path=\"link\" style=\"stroke: orange; opacity: 0.1;\"></path>\n            <g transform=\"translate(20,20)\"></g>\n            <g class=\"node\" transform=\"translate(120,307.5)\">\n                <circle r=\"4.34332013130188\" style=\"stroke: black; fill: orange; opacity: 0.1;\"></circle>\n                <text x=\"8.34332013130188\" dy=\"-.60em\" text-anchor=\"start\" style=\"fill-opacity: 1; opacity: 0.1;\">No War Violence</text>\n            </g>\n            <g class=\"node\" transform=\"translate(120,102.5)\">\n                <circle r=\"15.65667986869812\" style=\"stroke: black; fill: rgb(33, 150, 243); opacity: 1;\"></circle>\n                <text x=\"19.65667986869812\" dy=\"-.60em\" text-anchor=\"start\" style=\"fill-opacity: 1; opacity: 1;\">War Violence</text>\n            </g>\n            <g class=\"node\" transform=\"translate(0,205)\">\n                <circle r=\"1\" style=\"stroke: black; fill: rgb(33, 150, 243);\"></circle>\n                <text x=\"-5\" dy=\"-.60em\" text-anchor=\"end\" style=\"fill-opacity: 1;\"></text>\n            </g>\n          </svg>\n          <svg width=\"600\" height=\"450\" *ngIf=\"info.mode!=1\">\n            <path class=\"link\" d=\"M0,205C60,205 60,102.5 120,102.5\" path=\"link\" style=\"stroke: orange; opacity: 0.1;\"></path>\n            <path class=\"link\" d=\"M0,205C60,205 60,307.5 120,307.5\" path=\"link\" style=\"stroke: rgb(33, 150, 243); opacity: 1;\"></path>\n            <g transform=\"translate(20,20)\"></g>\n            <g class=\"node\" transform=\"translate(120,307.5)\">\n                <circle r=\"19.22643780708313\" style=\"stroke: black; fill: rgb(33, 150, 243); opacity: 1;\"></circle>\n                <text x=\"23.22643780708313\" dy=\"-.60em\" text-anchor=\"start\" style=\"fill-opacity: 1; opacity: 1;\">No War Violence</text>\n            </g>\n            <g class=\"node\" transform=\"translate(120,102.5)\">\n                <circle r=\"0.7735621929168701\" style=\"stroke: black; fill: orange; opacity: 0.1;\"></circle>\n                <text x=\"4.77356219291687\" dy=\"-.60em\" text-anchor=\"start\" style=\"fill-opacity: 1; opacity: 0.1;\">War Violence</text>\n            </g>\n            <g class=\"node\" transform=\"translate(0,205)\">\n                <circle r=\"1\" style=\"stroke: black; fill: rgb(33, 150, 243);\"></circle>\n                <text x=\"-5\" dy=\"-.60em\" text-anchor=\"end\" style=\"fill-opacity: 1;\"></text>\n            </g>\n          </svg>\n        </div>\n        <div class=\"left\" *ngIf=\"info.active.status > 0\">\n          <svg width=\"600\" height=\"450\" *ngIf=\"info.mode==1\">\n            <path class=\"link\" d=\"M0,205C60,205 60,102.5 120,102.5\" path=\"link\" style=\"stroke: rgb(33, 150, 243); opacity: 1;\"></path>\n            <path class=\"link\" d=\"M0,205C60,205 60,307.5 120,307.5\" path=\"link\" style=\"stroke: orange; opacity: 0.1;\"></path>\n            <g transform=\"translate(20,20)\"></g>\n            <g class=\"node\" transform=\"translate(120,307.5)\">\n                <circle r=\"3\" style=\"stroke: black; fill: orange; opacity: 0.1;\"></circle>\n                <text x=\"8.34332013130188\" dy=\"-.60em\" text-anchor=\"start\" style=\"fill-opacity: 1; opacity: 0.1;\">No War Violence</text>\n            </g>\n            <g class=\"node\" transform=\"translate(120,102.5)\">\n                <circle r=\"15\" style=\"stroke: black; fill: rgb(33, 150, 243); opacity: 1;\"></circle>\n                <text x=\"19.65667986869812\" dy=\"-.60em\" text-anchor=\"start\" style=\"fill-opacity: 1; opacity: 1;\">War Violence</text>\n            </g>\n            <g class=\"node\" transform=\"translate(0,205)\">\n                <circle r=\"1\" style=\"stroke: black; fill: rgb(33, 150, 243);\"></circle>\n                <text x=\"-5\" dy=\"-.60em\" text-anchor=\"end\" style=\"fill-opacity: 1;\"></text>\n            </g>\n          </svg>\n          <svg width=\"600\" height=\"450\" *ngIf=\"info.mode!=1\">\n            <path class=\"link\" d=\"M0,205C60,205 60,102.5 120,102.5\" path=\"link\" style=\"stroke: orange; opacity: 0.1;\"></path>\n            <path class=\"link\" d=\"M0,205C60,205 60,307.5 120,307.5\" path=\"link\" style=\"stroke: rgb(33, 150, 243); opacity: 1;\"></path>\n            <g transform=\"translate(20,20)\"></g>\n            <g class=\"node\" transform=\"translate(120,307.5)\">\n                <circle r=\"15\" style=\"stroke: black; fill: rgb(33, 150, 243); opacity: 1;\"></circle>\n                <text x=\"23.22643780708313\" dy=\"-.60em\" text-anchor=\"start\" style=\"fill-opacity: 1; opacity: 1;\">No Gore</text>\n            </g>\n            <g class=\"node\" transform=\"translate(120,102.5)\">\n                <circle r=\"3\" style=\"stroke: black; fill: orange; opacity: 0.1;\"></circle>\n                <text x=\"4.77356219291687\" dy=\"-.60em\" text-anchor=\"start\" style=\"fill-opacity: 1; opacity: 0.1;\">War Gore</text>\n            </g>\n            <g class=\"node\" transform=\"translate(0,205)\">\n                <circle r=\"1\" style=\"stroke: black; fill: rgb(33, 150, 243);\"></circle>\n                <text x=\"-5\" dy=\"-.60em\" text-anchor=\"end\" style=\"fill-opacity: 1;\"></text>\n            </g>\n          </svg>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/violence/violence.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViolenceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ViolenceComponent = (function () {
    function ViolenceComponent() {
        this.info = {
            mode: undefined,
            imageURLs: [],
            active: {
                status: -1,
                imageURL: null,
                result: undefined,
                a_id: null
            }
        };
    }
    ViolenceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fillData();
        this.run = setInterval(function () {
            _this.info.mode = !_this.info.mode;
        }, 500);
    };
    ViolenceComponent.prototype.fillData = function () {
        this.info.imageURLs = [
            {
                id: 1,
                url: 'https://i.ytimg.com/vi/mHHJza5Sl88/maxresdefault.jpg'
            },
            {
                id: 2,
                url: 'https://s-media-cache-ak0.pinimg.com/originals/70/b5/0e/70b50e215fb3afd59c5e33be7f927a6c.jpg'
            },
            {
                id: 3,
                url: 'http://i.telegraph.co.uk/multimedia/archive/03543/paris1_3543389b.jpg'
            },
            {
                id: 4,
                url: 'http://i.telegraph.co.uk/multimedia/archive/03543/paris1_3543389b.jpg'
            },
            {
                id: 5,
                url: 'http://media.vocativ.com/photos/2015/07/ISIS-Child-Execute333063085.jpg'
            },
            {
                id: 6,
                url: 'http://www.vankirkpools.com/wp-content/uploads/2016/10/van-kirk-pools-best-selfie.jpg'
            },
            {
                id: 7,
                url: 'https://s-media-cache-ak0.pinimg.com/originals/1f/0a/7b/1f0a7b96f8d9e07672e29e454f5b1a2e.jpg'
            },
            {
                id: 8,
                url: 'http://i.dailymail.co.uk/i/pix/2016/01/24/20/308A4C9F00000578-3414721-image-a-5_1453668210110.jpg'
            }
        ];
    };
    ViolenceComponent.prototype.selectImage = function (data) {
        this.info.active.a_id = data.id;
        if (this.info.active.status === -1) {
            this.info.active.status = 4;
        }
        else {
            clearInterval(this.run);
            this.info.active.status = Math.floor(Math.random() * 2) + 1;
        }
        console.log(this.info);
    };
    ViolenceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-violence',
            template: __webpack_require__("../../../../../src/app/violence/violence.component.html"),
            styles: [__webpack_require__("../../../../../src/app/violence/violence.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ViolenceComponent);
    return ViolenceComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map