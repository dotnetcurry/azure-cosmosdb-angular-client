System.register(["@angular/core", "@angular/http"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, http_1, PersonalInfoService;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }
        ],
        execute: function () {
            PersonalInfoService = (function () {
                function PersonalInfoService(http) {
                    this.http = http;
                    this.servUrl = "http://localhost:61758/api/PersonalInformationAPI";
                }
                PersonalInfoService.prototype.getAll = function () {
                    var res = this.http.get(this.servUrl + "/Person/All");
                    return res;
                };
                PersonalInfoService.prototype.getSingle = function (id) {
                    var res = this.http.get(this.servUrl + "/Person/" + id);
                    return res;
                };
                PersonalInfoService.prototype.post = function (per) {
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions();
                    options.headers = headers;
                    var res = this.http.post(this.servUrl + "/Person/Create", per, options);
                    return res;
                };
                PersonalInfoService.prototype.put = function (id, per) {
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions();
                    options.headers = headers;
                    var res = this.http.put(this.servUrl + "/Person/Update/" + id, JSON.stringify(per), options);
                    return res;
                };
                PersonalInfoService.prototype.delete = function (id) {
                    var res = this.http.delete(this.servUrl + "/Person/Delete/" + id);
                    return res;
                };
                return PersonalInfoService;
            }());
            PersonalInfoService = __decorate([
                core_1.Injectable(),
                __metadata("design:paramtypes", [http_1.Http])
            ], PersonalInfoService);
            exports_1("PersonalInfoService", PersonalInfoService);
        }
    };
});
