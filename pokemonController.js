import { response } from "express";
import fs from "fs/promises";

/*
  List of kanto pokemons need to include more later
*/

async function readJson() {
    try {
        const jsonString = JSON.parse(await fs.readFile("./pokemonlist.json", "utf8")); 
        return jsonString;
    } catch (err) {
        console.log("File read failed", err);
        return null;
    }
}

/* 
    function to perfom in array for filter pokemon list 
*/

function arrFilter(arr, pokemonSelected) {
   let arrFiltered = arr.filter((pokemon) => pokemon.toLowerCase() == pokemonSelected.toLowerCase())
   let Result = []
   
   arrFiltered.forEach((pokemon) => {
        Result.push(pokemon)
   })

   return Result;
}

async function getPokemon(pokemon) {
    const url = "https://pokeapi.co/api/v2/pokemon/".concat(pokemon)

    try {
        const reponse = await fetch(url);

        if (!reponse) {
            throw new Error(`Reponse status: ${response.status}`)
        }

        return reponse.json()

    } catch (error) {
        console.log('Erro na comunicação: ', err)
    }
}