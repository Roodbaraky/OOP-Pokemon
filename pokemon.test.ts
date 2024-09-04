import { beforeEach, describe, expect, it, jest } from '@jest/globals'
import { Bulbasaur, Charmander, ElectricType, FireType, GrassType, Pikachu, Pokeball, Pokemon, Rattata, Squirtle, Trainer, WaterType, PokeballProps } from './pokemon';

describe('Pokemon Class', () => {
    let pikachu: Pokemon;

    beforeEach(() => {
        pikachu = new Pokemon('Pikachu');
    });

    it('should create a Pokemon with the correct default properties', () => {
        expect(pikachu.name).toBe('Pikachu');
        expect(pikachu.hitPoints).toBe(100);
        expect(pikachu.attackDamage).toBe(45);
        expect(pikachu.move).toBe('tackle');
    });

    it('should reduce hitPoints when takeDamage is called', () => {
        pikachu.takeDamage(20);
        expect(pikachu.hitPoints).toBe(80);
    });

    it('should not have negative hitPoints after taking more damage than available', () => {
        pikachu.takeDamage(150);
        expect(pikachu.hitPoints).toBe(-50);
    });

    it('should correctly determine if the Pokemon has fainted', () => {
        pikachu.takeDamage(100);
        expect(pikachu.hasFainted()).toBe(true);

        pikachu.takeDamage(50);
        expect(pikachu.hasFainted()).toBe(true);
    });

    it('should correctly use a move', () => {
        const consoleSpy = jest.spyOn(console, 'log');
        pikachu.useMove();
        expect(consoleSpy).toHaveBeenCalledWith("Pikachu used Pikachu's move: tackle");
        consoleSpy.mockRestore();
    });
});

describe('FireType Class', () => {
    let charmander: FireType;
    let bulbasaur: Pokemon;
    let squirtle: Pokemon;

    beforeEach(() => {
        charmander = new FireType('Charmander');
        bulbasaur = new Pokemon('Bulbasaur');
        bulbasaur.type = 'grass';
        squirtle = new Pokemon('Squirtle');
        squirtle.type = 'water';
    });

    it('should create a FireType Pokemon with the correct default properties', () => {
        expect(charmander.name).toBe('Charmander');
        expect(charmander.hitPoints).toBe(100);
        expect(charmander.attackDamage).toBe(45);
        expect(charmander.move).toBe('tackle');
        expect(charmander.type).toBe('fire');
    });

    it('should correctly identify when a FireType is effective against a grass-type Pokemon', () => {
        expect(charmander.isEffectiveAgainst(bulbasaur)).toBe(true);
    });

    it('should correctly identify when a FireType is not effective against a non-grass-type Pokemon', () => {
        expect(charmander.isEffectiveAgainst(squirtle)).toBe(false);
    });
    it('should correctly identify when a FireType is weak to a water-type Pokemon', () => {
        expect(charmander.isWeakTo(squirtle)).toBe(true);
    });

    it('should correctly identify when a FireType is not effective against a non-water-type Pokemon', () => {
        expect(charmander.isWeakTo(bulbasaur)).toBe(false);
    });

    it('should correctly inherit methods from Pokemon class', () => {
        charmander.takeDamage(20);
        expect(charmander.hitPoints).toBe(80);

        const consoleSpy = jest.spyOn(console, 'log');
        charmander.useMove();
        expect(consoleSpy).toHaveBeenCalledWith("Charmander used Charmander's move: tackle");
        consoleSpy.mockRestore();

        charmander.takeDamage(100);
        expect(charmander.hasFainted()).toBe(true);
    });
});
describe('WaterType Class', () => {
    let squirtle: WaterType;

    beforeEach(() => {
        squirtle = new WaterType('Squirtle');
    });

    it('should create a WaterType Pokemon with the correct default properties', () => {
        expect(squirtle.name).toBe('Squirtle');
        expect(squirtle.hitPoints).toBe(100);
        expect(squirtle.attackDamage).toBe(45);
        expect(squirtle.move).toBe('tackle');
        expect(squirtle.type).toBe('water');
    });

    it('should be effective against fire-type Pokemon', () => {
        const charmander = new FireType('Charmander');
        expect(squirtle.isEffectiveAgainst(charmander)).toBe(true);
    });

    it('should be weak to electric-type Pokemon', () => {
        const pikachu = new ElectricType('Pikachu');
        expect(squirtle.isWeakTo(pikachu)).toBe(true);
    });
});

describe('GrassType Class', () => {
    let bulbasaur: GrassType;

    beforeEach(() => {
        bulbasaur = new GrassType('Bulbasaur');
    });

    it('should create a GrassType Pokemon with the correct default properties', () => {
        expect(bulbasaur.name).toBe('Bulbasaur');
        expect(bulbasaur.hitPoints).toBe(100);
        expect(bulbasaur.attackDamage).toBe(45);
        expect(bulbasaur.move).toBe('tackle');
        expect(bulbasaur.type).toBe('grass');
    });

    it('should be effective against water-type Pokemon', () => {
        const squirtle = new WaterType('Squirtle');
        expect(bulbasaur.isEffectiveAgainst(squirtle)).toBe(true);
    });

    it('should be weak to fire-type Pokemon', () => {
        const charmander = new FireType('Charmander');
        expect(bulbasaur.isWeakTo(charmander)).toBe(true);
    });
});

describe('ElectricType Class', () => {
    let pikachu: ElectricType;

    beforeEach(() => {
        pikachu = new ElectricType('Pikachu');
    });

    it('should create an ElectricType Pokemon with the correct default properties', () => {
        expect(pikachu.name).toBe('Pikachu');
        expect(pikachu.hitPoints).toBe(100);
        expect(pikachu.attackDamage).toBe(45);
        expect(pikachu.move).toBe('tackle');
        expect(pikachu.type).toBe('electric');
    });

    it('should be effective against water-type Pokemon', () => {
        const squirtle = new WaterType('Squirtle');
        expect(pikachu.isEffectiveAgainst(squirtle)).toBe(true);
    });

    it('should be weak to grass-type Pokemon', () => {
        const bulbasaur = new GrassType('Bulbasaur');
        expect(pikachu.isWeakTo(bulbasaur)).toBe(true);
    });
});

describe('Charmander Class', () => {
    let charmander: Charmander;
    beforeEach(() => {
        charmander = new Charmander('Charmander');
    });
    it('should inherit Pokemon and FireType\'s properties', () => {
        expect(charmander.name).toBe('Charmander');
        expect(charmander.hitPoints).toBe(100);
        expect(charmander.attackDamage).toBe(45);
        expect(charmander.move).toBe('ember');
        expect(charmander.type).toBe('fire')
    })
    it('should be effective against grass-type Pokemon', () => {
        const bulbasaur = new Bulbasaur('Bulbasaur');
        expect(charmander.isEffectiveAgainst(bulbasaur)).toBe(true);
    });

    it('should be weak to water-type Pokemon', () => {
        const squirtle = new Squirtle('Squirtle');
        expect(charmander.isWeakTo(squirtle)).toBe(true);
    });

})

describe('Squirtle Class', () => {
    let squirtle: Squirtle;

    beforeEach(() => {
        squirtle = new Squirtle('Squirtle');
    });

    it('should create a WaterType Pokemon with the correct default properties', () => {
        expect(squirtle.name).toBe('Squirtle');
        expect(squirtle.hitPoints).toBe(100);
        expect(squirtle.attackDamage).toBe(45);
        expect(squirtle.move).toBe('water gun');
        expect(squirtle.type).toBe('water');
    });

    it('should be effective against fire-type Pokemon', () => {
        const charmander = new Charmander('Charmander');
        expect(squirtle.isEffectiveAgainst(charmander)).toBe(true);
    });

    it('should be weak to electric-type Pokemon', () => {
        const pikachu = new Pikachu('Pikachu');
        expect(squirtle.isWeakTo(pikachu)).toBe(true);
    });
});

describe('Bulbasaur Class', () => {
    let bulbasaur: Bulbasaur;

    beforeEach(() => {
        bulbasaur = new Bulbasaur('Bulbasaur');
    });

    it('should create a GrassType Pokemon with the correct default properties', () => {
        expect(bulbasaur.name).toBe('Bulbasaur');
        expect(bulbasaur.hitPoints).toBe(100);
        expect(bulbasaur.attackDamage).toBe(45);
        expect(bulbasaur.move).toBe('vine whip');
        expect(bulbasaur.type).toBe('grass');
    });

    it('should be effective against water-type Pokemon', () => {
        const squirtle = new Squirtle('Squirtle');
        expect(bulbasaur.isEffectiveAgainst(squirtle)).toBe(true);
    });

    it('should be weak to fire-type Pokemon', () => {
        const charmander = new Charmander('Charmander');
        expect(bulbasaur.isWeakTo(charmander)).toBe(true);
    });
});

describe('Pikachu Class', () => {
    let pikachu: Pikachu;

    beforeEach(() => {
        pikachu = new Pikachu('Pikachu');
    });

    it('should create an ElectricType Pokemon with the correct default properties', () => {
        expect(pikachu.name).toBe('Pikachu');
        expect(pikachu.hitPoints).toBe(100);
        expect(pikachu.attackDamage).toBe(45);
        expect(pikachu.move).toBe('thunder bolt');
        expect(pikachu.type).toBe('electric');
    });

    it('should be effective against water-type Pokemon', () => {
        const squirtle = new Squirtle('Squirtle');
        expect(pikachu.isEffectiveAgainst(squirtle)).toBe(true);
    });

    it('should be weak to grass-type Pokemon', () => {
        const bulbasaur = new Bulbasaur('Bulbasaur');
        expect(pikachu.isWeakTo(bulbasaur)).toBe(true);
    });
});

describe('Rattata Class', () => {
    let rattata: Rattata;
    beforeEach(() => {
        rattata = new Rattata('Rattata');
    });

    it('should create a normal-type Pokemon with the correct default properties', () => {
        expect(rattata.name).toBe('Rattata');
        expect(rattata.hitPoints).toBe(100);
        expect(rattata.attackDamage).toBe(45);
        expect(rattata.move).toBe('tackle');
        expect(rattata.type).toBe('normal');
    });

    it('should not be effective against any specific type', () => {
        const squirtle = new Squirtle('Squirtle');
        expect(rattata.isEffectiveAgainst(squirtle)).toBe(false);
    });

    it('should not be weak to any specific type', () => {
        const pikachu = new Pikachu('Pikachu');
        expect(rattata.isWeakTo(pikachu)).toBe(false);
    });
});

describe('Pokeball Class', () => {
    let pokeball: Pokeball;
    let squirtle: Squirtle;
    let bulbasaur: Bulbasaur;

    beforeEach(() => {
        pokeball = new Pokeball();
        squirtle = new Squirtle('Squirtle');
        bulbasaur = new Bulbasaur('Bulbasaur');
    });
    describe('isEmpty', () => {
        it('should return true if empty', () => {
            expect(pokeball.isEmpty()).toBe(true)
        })
        it('should return false if not empty', () => {
            pokeball.throw(squirtle)
            expect(pokeball.isEmpty()).toBe(false)
        })
    })
    describe('contains', () => {
        it('should return the stored pokemon\'s name if not empty', () => {
            pokeball.throw(bulbasaur)
            expect(pokeball.contains()).toBe('Bulbasaur')
        })
        it('should return \'Pokeball is empty!\' if no pokemon is stored', () => {
            expect(pokeball.contains()).toBe('The pokeball is empty!')
        })
    })
    it('should capture a Pokemon if Pokeball is empty', () => {
        pokeball.throw(squirtle);
        expect(pokeball.storedPokemon).toBe(squirtle);
        expect(pokeball.storedPokemon?.name).toBe('Squirtle');
    });

    it('should throw the stored Pokemon if no new Pokemon is passed and Pokeball is not empty', () => {
        pokeball.throw(squirtle);
        console.log = jest.fn();
        pokeball.throw();
        expect(console.log).toHaveBeenCalledWith('Go Squirtle');
    });

    it('should output that the Pokeball is empty when no Pokemon is stored and none is passed', () => {
        console.log = jest.fn();
        pokeball.throw();
        expect(console.log).toHaveBeenCalledWith('The pokeball is empty!');
    });

    it('should not capture another Pokemon if one is already stored', () => {
        pokeball.throw(squirtle);
        console.log = jest.fn();
        pokeball.throw(bulbasaur);
        expect(pokeball.storedPokemon).toBe(squirtle);
        expect(console.log).toHaveBeenCalledWith('This pokeball already contains Squirtle!');
    });

    it('should log capture message when capturing a Pokemon', () => {
        console.log = jest.fn();
        pokeball.throw(bulbasaur);
        expect(console.log).toHaveBeenCalledWith('Captured Bulbasaur!');
    });
});

describe('Trainer Class', () => {
    let trainer: Trainer;
    let squirtle: Squirtle;
    let bulbasaur: Bulbasaur;
    let pikachu: Pikachu;

    beforeEach(() => {
        trainer = new Trainer('Ash');
        squirtle = new Squirtle('Squirtle');
        bulbasaur = new Bulbasaur('Bulbasaur');
        pikachu = new Pikachu('Pikachu');
    });

    test('should catch a Pokémon into an empty Pokéball', () => {
        console.log = jest.fn();
        trainer.catch(squirtle);
        const firstPokeball = trainer.belt[0];
        expect(firstPokeball.storedPokemon).toBe(squirtle);
        expect(console.log).toHaveBeenCalledWith(`Captured ${squirtle.name}!`);
    });

    test('should not catch a Pokémon if no empty Pokéballs are available', () => {
        console.log = jest.fn();
        trainer.belt.forEach(pokeball => pokeball.throw(squirtle));
        trainer.catch(bulbasaur);
        expect(console.log).toHaveBeenCalledWith('No empty pokeballs!');
    });

    test('should retrieve and throw a stored Pokémon', () => {
        trainer.catch(squirtle);
        console.log = jest.fn();
        trainer.getPokemon(squirtle);
        expect(console.log).toHaveBeenCalledWith(`Go ${squirtle.name}`);
    });

    test('should not retrieve a Pokémon that is not stored', () => {
        console.log = jest.fn();
        trainer.getPokemon(bulbasaur);
        expect(console.log).toHaveBeenCalledWith('You don\'t have that pokemon!');
    });

    test('should store and retrieve multiple Pokémon', () => {
        trainer.catch(squirtle);
        trainer.catch(bulbasaur);
        trainer.catch(pikachu);
        console.log(trainer.belt)
        expect(trainer.belt[0].storedPokemon).toBe(squirtle);
        expect(trainer.belt[1].storedPokemon).toBe(bulbasaur);
        expect(trainer.belt[2].storedPokemon).toBe(pikachu);

        console.log = jest.fn();
        trainer.getPokemon(squirtle);
        trainer.getPokemon(bulbasaur);
        trainer.getPokemon(pikachu);

        expect(console.log).toHaveBeenCalledWith(`Go ${squirtle.name}`);
        expect(console.log).toHaveBeenCalledWith(`Go ${bulbasaur.name}`);
        expect(console.log).toHaveBeenCalledWith(`Go ${pikachu.name}`);
    });
});
