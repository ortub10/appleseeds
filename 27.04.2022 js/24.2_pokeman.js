function Pokemon(pokemonName, pokemonType, pokemonAttackList) {
  this.name = pokemonName;
  this.type = pokemonType;
  this.attackList = pokemonAttackList;
}

const pokemon1 = new Pokemon("Charmander", "fire", [
  "sunny day",
  "fire blast",
  "flamethrower",
]);
const pokemon2 = new Pokemon("Squirtle", "water", [
  "water pulse",
  "rain dance",
  "scald",
]);
const pokemon3 = new Pokemon("Pikachu", "electric", [
  "thunderbolt",
  "thunder",
  "shock wave",
]);

Pokemon.prototype.callPokemon = function () {
  console.log(`I choose you, ${this.name}`);
};

Pokemon.prototype.attack = function (index) {
  console.log(`${this.name} used ${this.attackList[index]}`);
};
//------pokemon1-------
pokemon1.callPokemon();
pokemon1.attack(0);
//------pokemon2-------
pokemon2.callPokemon();
pokemon2.attack(1);
//------pokemon3-------"
pokemon3.callPokemon();
pokemon3.attack(2);
