"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var DataService = (function () {
    function DataService(logService) {
        this.logService = logService;
        this.pushedData = new core_1.EventEmitter();
        this.data = [];
    }
    DataService.prototype.addData = function (input) {
        this.data.push(input);
        this.logService.writeToLog('Saved item: ' + input);
    };
    DataService.prototype.getData = function () {
        return this.data;
    };
    DataService.prototype.pushData = function (value) {
        this.pushedData.emit(value);
    };
    DataService = __decorate([
        core_1.Injectable()
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
