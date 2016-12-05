"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var UnlessDirective = (function () {
    function UnlessDirective(templateRef, vcRef) {
        this.templateRef = templateRef;
        this.vcRef = vcRef;
    }
    Object.defineProperty(UnlessDirective.prototype, "unless", {
        set: function (conditional) {
            if (!conditional) {
                this.vcRef.createEmbeddedView(this.templateRef);
            }
            else {
                this.vcRef.clear();
            }
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input()
    ], UnlessDirective.prototype, "unless", null);
    UnlessDirective = __decorate([
        core_1.Directive({
            selector: '[unless]'
        })
    ], UnlessDirective);
    return UnlessDirective;
}());
exports.UnlessDirective = UnlessDirective;
