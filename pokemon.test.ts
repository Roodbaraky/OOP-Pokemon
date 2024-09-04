import { beforeEach, describe, expect, it, jest } from '@jest/globals'
import { Bulbasaur, Charmander, ElectricType, FireType, GrassType, Pikachu, Pokemon, Rattata, Squirtle, WaterType } from './pokemon';

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

