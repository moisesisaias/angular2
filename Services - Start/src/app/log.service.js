"use strict";
var LogService = (function () {
    function LogService() {
    }
    LogService.prototype.writeToLog = function (message) {
        console.log(message);
    };
    return LogService;
}());
exports.LogService = LogService;
