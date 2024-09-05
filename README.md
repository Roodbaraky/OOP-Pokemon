# Pokemon OOP Battler

This repository contains a simulation of Pokémon battles implemented in TypeScript. The system models Pokémon, Trainers, Pokéballs, and the battle mechanics between Pokémon.

## Features

- **Pokemon Class**: Represents a Pokémon with attributes such as `name`, `hitPoints`, `attackDamage`, `move`, and `type`. Methods include `takeDamage`, `useMove`, `hasFainted`, `isEffectiveAgainst`, and `isWeakTo`.
- **Pokeball Class**: Handles capturing and releasing Pokémon. It can check if it is empty and contains a Pokémon.
- **Trainer Class**: Manages a collection of up to 6 Pokéballs. Trainers can catch Pokémon and retrieve them from their Pokéballs.
- **Battle Class**: Simulates a battle between two Pokémon, calculating damage based on type effectiveness and switching turns between attackers.

## Classes

### `Pokemon`

- **Constructor**: `constructor(name: string, type: PokemonType = 'normal')`
- **Methods**: `takeDamage(damageAmount: number)`, `useMove()`, `hasFainted()`, `isEffectiveAgainst(pokemon: Pokemon)`, `isWeakTo(pokemon: Pokemon)`

### `Pokeball`

- **Constructor**: `constructor()`
- **Methods**: `isEmpty()`, `contains()`, `throw(pokemon?: Pokemon)`

### `Trainer`

- **Constructor**: `constructor(name: string)`
- **Methods**: `catch(pokemon: Pokemon)`, `getPokemon(pokemon: Pokemon)`

### `Battle`

- **Constructor**: `constructor(battler1: TrainerAndPokemon, battler2: TrainerAndPokemon)`
- **Methods**: `calculateDamage()`, `switchTurns()`, `fight()`

## Usage

1. **Create Pokémon**: Instantiate Pokémon with their specific types and moves.
2. **Create Trainers**: Instantiate Trainers and use their `catch` method to capture Pokémon.
3. **Initiate a Battle**: Create a `Battle` instance with two `TrainerAndPokemon` objects and call the `fight` method to start the battle.


