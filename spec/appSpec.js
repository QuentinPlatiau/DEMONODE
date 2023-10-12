import { BerlinClock } from '../app.js';

describe("the first minute line", function() {
    let berlinClock = new BerlinClock();
    it("minuteLine given 0.00 should return 0 block jaune", function(){
        //arrange
        let time = new Date('March 13, 08 00:00:00');
        //act
        let result = berlinClock.minuteLine(time);
        console.log(result);
        //assert
        expect(result).toBe("0 block jaune");
    });
    it("minuteLine given 1.00 should return 0 block jaune", function(){
        //arrange
        let time = new Date('March 13, 08 00:01:00');
        //act
        let result = berlinClock.minuteLine(time);
        console.log(result);
        //assert
        expect(result).toBe("0 block jaune");
    });
    it("minuteLine given 2.00 should return 0 block jaune", function(){
        //arrange
        let time = new Date('March 13, 08 00:02:00');
        //act
        let result = berlinClock.minuteLine(time);
        console.log(result);
        //assert
        expect(result).toBe("0 block jaune");
    });
    it("minuteLine given 3.00 should return 0 block jaune", function(){
        //arrange
        let time = new Date('March 13, 08 00:03:00');
        //act
        let result = berlinClock.minuteLine(time);
        console.log(result);
        //assert
        expect(result).toBe("0 block jaune");
    });
    it("minuteLine given 4.00 should return 0 block jaune", function(){
        //arrange
        let time = new Date('March 13, 08 00:04:00');
        //act
        let result = berlinClock.minuteLine(time);
        console.log(result);
        //assert
        expect(result).toBe("0 block jaune");
    });
    it("minuteLine given 5.00 should return 1 block jaune", function(){
        //arrange
        let time = new Date('March 13, 08 00:05:00');
        //act
        let result = berlinClock.minuteLine(time);
        console.log(result);
        //assert
        expect(result).toBe("1 block jaune");
    });
    it("minuteLine given 6.00 should return 1 block jaune", function(){
        //arrange
        let time = new Date('March 13, 08 00:06:00');
        //act
        let result = berlinClock.minuteLine(time);
        console.log(result);
        //assert
        expect(result).toBe("1 block jaune");
    });
})