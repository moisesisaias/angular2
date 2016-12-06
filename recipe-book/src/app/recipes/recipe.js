"use strict";
var Recipe = (function () {
    function Recipe(name, description, imagePath, ingredients) {
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
    }
    return Recipe;
}());
exports.Recipe = Recipe;
