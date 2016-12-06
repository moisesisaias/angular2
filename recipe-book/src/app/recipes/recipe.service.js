"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var recipe_1 = require("./recipe");
var RecipeService = (function () {
    function RecipeService() {
        this.recipes = [
            new recipe_1.Recipe("Hamburger", 'Cheese and Bacon', 'http://images.media-allrecipes.com/images/58656.png', []),
            new recipe_1.Recipe("Spaghetti", 'With meat and cheese', 'http://del.h-cdn.co/assets/16/04/980x1386/gallery-1453934758-chicken-bacon-spaghetti-delish.jpg', []),
            new recipe_1.Recipe("Recipe", 'Yummy', 'http://www.sesdweb.net/cms/lib06/PA01000019/Centricity/Domain/267/recipe.gif', [])];
    }
    RecipeService.prototype.getRecipes = function () {
        return this.recipes;
    };
    RecipeService = __decorate([
        core_1.Injectable()
    ], RecipeService);
    return RecipeService;
}());
exports.RecipeService = RecipeService;
