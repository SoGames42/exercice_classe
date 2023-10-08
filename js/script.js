"use strict";

class Pokemon{//La classe qui définit les pokemons
    constructor(name,attack,defense,hp,luck,nameattack){
        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.hp = hp;
        this.luck = luck;
        this.nameattack = nameattack;
    }
    isLucky(){//La fonction qui calcul aléatoirement la chance d'attaque d'un pokemon
        if (this.luck > Math.random()){
            return true;
        }
            return false;
    }
    attackPokemon(pokemon){//La fonction qui défini si le pokemon réussit ou pas son attaque
        if(this.isLucky()){
            let damage = this.attack - pokemon.defense;
            pokemon.hp -= damage;
            console.log(`${this.name} utilise ${this.nameattack} qui fait ${damage} de dégâts! Il reste ${Math.max(pokemon.hp, 0)} points de vie à ${pokemon.name}.`);
            console.log("")
        }
        else{
            console.log(`${this.name} a raté son attaque.`)
            console.log("")
        }
    }
}

//Les variables utilisés pour déféinir deux pokémons
let pikachu = new Pokemon("Pikachu", 16, 9, 75, 0.7, "Vive-Attaque")
let zorua = new Pokemon("Zorua", 18, 6, 75, 0.65, "Collusion")

function Déroulement(){//Cette fonction est la fonction principale du programme, elle permet de définir si un pokemon est mort ou pas
    while(pikachu.hp > 0 && zorua.hp > 0){
        pikachu.attackPokemon(zorua)
        if(zorua.hp <= 0){
            console.log(`${zorua.name} est KO !`);
            break;
        }
        zorua.attackPokemon(pikachu)
        if(pikachu.hp <= 0){
            console.log(`${pikachu.name} est KO !`)
        }
    }
}

Déroulement();