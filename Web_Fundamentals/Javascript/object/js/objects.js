var monster = {
    id: 1,
    name: "Bulbasaur",
    types: ["poison", "grass"]
};

var pokemon = [
    { "id": 1, "name": "Bulbasaur", "types": ["poison", "grass"] },
    { "id": 5, "name": "Charmeleon", "types": ["fire"] },
    { "id": 9, "name": "Blastoise", "types": ["water"] },
    { "id": 12, "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16, "name": "Pidgey", "types": ["normal", "flying"] },
    { "id": 23, "name": "Ekans", "types": ["poison"] },
    { "id": 24, "name": "Arbok", "types": ["poison"] },
    { "id": 25, "name": "Pikachu", "types": ["electric"] },
    { "id": 37, "name": "Vulpix", "types": ["fire"] },
    { "id": 52, "name": "Meowth", "types": ["normal"] },
    { "id": 63, "name": "Abra", "types": ["psychic"] },
    { "id": 67, "name": "Machamp", "types": ["fighting"] },
    { "id": 72, "name": "Tentacool", "types": ["water", "poison"] },
    { "id": 74, "name": "Geodude", "types": ["rock", "ground"] },
    { "id": 87, "name": "Dewgong", "types": ["water", "ice"] },
    { "id": 98, "name": "Krabby", "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime", "types": ["psychic"] },
    { "id": 133, "name": "Eevee", "types": ["normal"] },
    { "id": 144, "name": "Articuno", "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos", "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres", "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair", "types": ["dragon"] }
];

// PRINT all the NAMES of the pokemons that have ID greater than 99 */
// i = 0
// pokemon[0].id -> 87 > 99

// i = 1
// pokemon[1].id -> 98 > 99

// i = 2
// pokemon[2].id -> 115 > 99
// PRINT pokemon[2].name -> Kangaskhan

// i = 3
// pokemon[3].id -> 122 > 99
// PRINT pokemon[3].name -> Mr. Mime

// for (let i=0; i<pokemon.length; i++){
//     if(pokemon[i].id > 99){
//         console.log(pokemon[i].name);
//     }
// }

// PRINT the pokemon objects whose id is evenly divisible by 3  */
// PRINT the pokemon objects that have more than one type */
// PRINT the names of the pokemon whose only type is "poison" */


// for (let i = 0; i < pokemon.length; i++) {
//     if ((pokemon[i].id % 3) == 0) {
//         console.log(pokemon[i]);
//     }
// }


// for (let i = 0; i < pokemon.length; i++) {
//     if ((pokemon[i].types.length) > 1) {
//         console.log(pokemon[i]);
//     }
// }


for (let i = 0; i < pokemon.length; i++) {
    if (pokemon[i].types == "poison" && pokemon[i].types.length === 1 ) {
        console.log(pokemon[i].name);
    }
}