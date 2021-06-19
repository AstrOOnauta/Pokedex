var cardsPokemon = [];
var infoCardsPokemon = []
const pokemon = ["Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard", "Squirtle",
                "Wartortle", "Blastoise", "Caterpie", "Metapod", "Butterfree", "Weedle", "Kakuna",
                "Beedrill", "Pidgey", "Pidgeotto", "Pidgeot", "Rattata", "Raticate", "Spearow", "Fearow",
                "Ekans", "Arbok", "Pikachu", "Raichu", "Sandshrew", "Sandslash", "Nidoran ♀", "Nidorina",
                "Nidoqueen", "Nidoran ♂", "Nidorino", "Nidoking", "Clefairy", "Clefable", "Vulpix",
                "Ninetales", "Jigglypuff", "Wigglytuff", "Zubat", "Golbat", "Oddish", "Gloom", "Vileplume",
                "Paras", "Parasect", "Venonat", "Venomoth", "Diglett", "Dugtrio", "Meowth", "Persian",
                "Psyduck", "Golduck", "Mankey", "Primeape", "Growlithe", "Arcanine", "Poliwag", "Poliwhirl",
                "Poliwrath", "Abra", "Kadabra", "Alakazam", "Machop", "Machoke", "Machamp", "Bellsprout",
                "Weepinbell", "Victreebel", "Tentacool", "Tentacruel", "Geodude", "Graveler", "Golem",
                "Ponyta", "Rapidash", "Slowpoke", "Slowbro", "Magnemite", "Magneton", "Farfetch'd", "Doduo",
                "Dodrio", "Seel", "Dewgong", "Grimer", "Muk", "Shellder", "Cloyster", "Gastly", "Haunter",
                "Gengar", "Onix", "Drowzee", "Hypno", "Krabby", "Kingler", "Voltorb", "Electrode",
                "Exeggcute", "Exeggutor", "Cubone", "Marowak", "Hitmonlee", "Hitmonchan", "Lickitung",
                "Koffing", "Weezing", "Rhyhorn", "Rhydon", "Chansey", "Tangela", "Kangaskhan", "Horsea",
                "Seadra", "Goldeen", "Seaking", "Staryu", "Starmie", "Mr. Mime", "Scyther", "Jynx",
                "Electabuzz", "Magmar", "Pinsir", "Tauros", "Magikarp", "Gyarados", "Lapras", "Ditto",
                "Eevee", "Vaporeon", "Jolteon", "Flareon", "Porygon", "Omanyte", "Omastar", "Kabuto",
                "Kabutops", "Aerodactyl", "Snorlax", "Articuno", "Zapdos", "Moltres", "Dratini", "Dragonair",
                "Dragonite", "Mewtwo", "Mew"]

const typePokemon = ["Planta/Venenoso", "Planta/Venenoso", "Planta/Venenoso", "Fogo", "Fogo", "Fogo/Voador",
                    "Água", "Água", "Água", "Inseto", "Inseto", "Inseto/Voador", "Inseto/Venenoso",
                    "Inseto/Venenoso", "Inseto/Venenoso", "Normal/Voador", "Normal/Voador", "Normal/Voador",
                    "Normal", "Normal", "Normal/Voador", "Normal/Voador", "Venenoso", "Venenoso", "Elétrico",
                    "Elétrico", "Terrestre", "Terrestre", "Venenoso", "Venenoso", "Venenoso/Terrestre",
                    "Venenoso", "Venenoso", "Venenoso/Terrestre", "Fada", "Fada", "Fogo", "Fogo",
                    "Normal/Fada", "Normal/Fada", "Venenoso/Voador", "Venenoso/Voador", "Planta/Venenoso",
                    "Planta/Venenoso", "Planta/Venenoso", "Inseto/Planta", "Inseto/Planta", "Inseto/Planta",
                    "Inseto/Venenoso", "Terrestre", "Terrestre", "Normal", "Normal", "Água", "Água",
                    "Lutador", "Lutador", "Fogo", "Fogo", "Água", "Água", "Água/Lutador", "Psíquico",
                    "Psíquico", "Psíquico", "Lutador", "Lutador", "Lutador", "Planta/Venenoso",
                    "Planta/Venenoso", "Planta/Venenoso", "Água/Venenoso", "Água/Venenoso", "Pedra/Terrestre",
                    "Pedra/Terrestre", "Pedra/Terrestre", "Fogo", "Fogo", "Água/Psíquico", "Água/Psíquico",
                    "Elétrico/Metal", "Elétrico/Metal", "Normal/Voador", "Normal/Voador", "Normal/Voador",
                    "Água", "Água/Gelo", "Venenoso", "Venenoso", "Água", "Água/Gelo", "Fantasma/Venenoso",
                    "Fantasma/Venenoso", "Fantasma/Venenoso", "Pedra/Terrestre", "Psíquico", "Psíquico",
                    "Água", "Água", "Elétrico", "Elétrico", "Planta/Psiquíco", "Planta/Psiquíco", "Terrestre",
                    "Terrestre", "Lutador", "Lutador", "Normal", "Venenoso", "Venenoso", "Terrestre/Pedra",
                    "Terrestre/Pedra", "Normal", "Planta", "Normal", "Água", "Água", "Água", "Água", "Água",
                    "Água/Psíquico", "Psíquico/Fada", "Inseto/Voador", "Gelo/Psíquico", "Elétrico", "Fogo",
                    "Inseto", "Normal", "Água", "Água/Voador", "Água/Gelo", "Normal", "Normal", "Água",
                    "Elétrico", "Fogo", "Normal", "Pedra/Água", "Pedra/Água", "Pedra/Água", "Pedra/Água",
                    "Pedra/Voador", "Normal", "Gelo/Voador", "Elétrico/Voador", "Fogo/Voador", "Dragão",
                    "Dragão", "Dragão/Voador", "Psíquico", "Psíquico"]
                    
const numbersPokemon = 150;

for(var i=0; i <= numbersPokemon; i++){
    cardsPokemon[i] = document.createElement('div');
    cardsPokemon[i].id = "card"
    cardsPokemon[i].className = "card"+i
    cardsPokemon[i].style.backgroundImage = "linear-gradient(rgb(251,176,52), rgb(255,221,0))"

    document.getElementById("main").appendChild(cardsPokemon[i]);
    for(var j=0; j<3; j++){
        infoCardsPokemon[i,j] = document.createElement("div");
        infoCardsPokemon[i,j].className = "infoCard"+j;
        infoCardsPokemon[i,0].style.backgroundImage = "url(./img/pokemon"+i+".gif)"


        infoCardsPokemon[i,1] = document.createElement("h3");
        if (i<9){
            infoCardsPokemon[i,1].innerHTML= pokemon[i] + " - 00" + (i+1)
        }else if (i<99){
            infoCardsPokemon[i,1].innerHTML= pokemon[i] + " - 0" + (i+1)
        }else{
            infoCardsPokemon[i,1].innerHTML= pokemon[i] + " - " + (i+1)
        }
        infoCardsPokemon[i,1].style.fontFamily = "Monospace"

        
        infoCardsPokemon[i,2] = document.createElement("h5");
        infoCardsPokemon[i,2].innerHTML= typePokemon[i]
        infoCardsPokemon[i,2].style.color = "white"
        infoCardsPokemon[i,2].style.fontFamily = "Monospace"
        infoCardsPokemon[i,2].style.backgroundColor = "rgba(0,0,0,0.8)"
        infoCardsPokemon[i,2].style.boxShadow = "0px 0px 5px 1px rgba(0,0,0,0.8)"
        infoCardsPokemon[i,2].style.border = "1px solid black"
        infoCardsPokemon[i,2].style.borderRadius = "10% / 50%"

        document.getElementById("main").appendChild(cardsPokemon[i]).appendChild(infoCardsPokemon[i,j]);
    }
}