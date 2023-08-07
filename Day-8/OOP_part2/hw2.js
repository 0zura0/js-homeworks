function Hamster() {}

Hamster.prototype.food = []; // empty "stomach"

Hamster.prototype.found = function(something) {
  this.food=[...this.food,...[something]];
};

// Create two hamsters and feed the first
var speedy = new Hamster();
var lazy = new Hamster();

speedy.found("apple");
speedy.found("nut");

console.log(speedy.food.length); // 2
console.log(lazy.food.length); // 2 (!??)