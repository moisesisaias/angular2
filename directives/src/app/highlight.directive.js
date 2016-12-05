"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var HighlightDirective = (function () {
    function HighlightDirective() {
        //private renderer: Renderer; // you can create the local variable explicit or simply add private in the constructor.
        this.defaultColor = 'white';
        this.highlightColor = 'green'; // Specifying this property name I won't have to add a different property binding to the host
        // this.elementRef.nativeElement.style.backgroundColor = 'green';
        //  this.elementRef.nativeElement.style.backgroundColor =  'green';
    }
    HighlightDirective.prototype.mouseover = function () {
        this.backgroundColor = this.highlightColor;
    };
    HighlightDirective.prototype.mouseout = function (eventObject) {
        console.log(eventObject.target);
        this.backgroundColor = this.defaultColor;
    };
    Object.defineProperty(HighlightDirective.prototype, "setColor", {
        get: function () {
            return this.backgroundColor;
        } // Instead of using @HostBinding I can simply use renderer in the @HostListener
        ,
        enumerable: true,
        configurable: true
    });
    HighlightDirective.prototype.ngOnInit = function () {
        this.backgroundColor = this.defaultColor;
    };
    __decorate([
        core_1.HostListener('mouseenter')
    ], HighlightDirective.prototype, "mouseover", null);
    __decorate([
        core_1.HostListener('mouseleave', ['$event'])
    ], HighlightDirective.prototype, "mouseout", null);
    __decorate([
        core_1.HostBinding('style.backgroundColor')
    ], HighlightDirective.prototype, "setColor", null);
    __decorate([
        // Instead of using @HostBinding I can simply use renderer in the @HostListener
        core_1.Input()
    ], HighlightDirective.prototype, "defaultColor", void 0);
    __decorate([
        core_1.Input('highlight')
    ], HighlightDirective.prototype, "highlightColor", void 0);
    HighlightDirective = __decorate([
        core_1.Directive({
            selector: '[highlight]' // this selector works just as a css selector does, we can use # or . to select using class or id attribute.
        })
    ], HighlightDirective);
    return HighlightDirective;
}());
exports.HighlightDirective = HighlightDirective;
