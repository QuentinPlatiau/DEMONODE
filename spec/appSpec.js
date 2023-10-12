import { BerlinClock } from '../app.js';

describe("the first minute line", function() {
    let berlinClock = new BerlinClock();
    it("fiveMinuteLine given 0.00 should return 0 block jaune", function(){
        //arrange
        let time = new Date('March 13, 08 00:00:00');
        //act
        let result = berlinClock.fiveMinuteLine(time);
        console.log(result);
        //assert
        expect(result).toBe("0 block jaune");
    });
    it("fiveMinuteLine given 1.00 should return 0 block jaune", function(){
        //arrange
        let time = new Date('March 13, 08 00:01:00');
        //act
        let result = berlinClock.fiveMinuteLine(time);
        console.log(result);
        //assert
        expect(result).toBe("0 block jaune");
    });
    it("fiveMinuteLine given 2.00 should return 0 block jaune", function(){
        //arrange
        let time = new Date('March 13, 08 00:02:00');
        //act
        let result = berlinClock.fiveMinuteLine(time);
        console.log(result);
        //assert
        expect(result).toBe("0 block jaune");
    });
    it("fiveMinuteLine given 3.00 should return 0 block jaune", function(){
        //arrange
        let time = new Date('March 13, 08 00:03:00');
        //act
        let result = berlinClock.fiveMinuteLine(time);
        console.log(result);
        //assert
        expect(result).toBe("0 block jaune");
    });
    it("fiveMinuteLine given 4.00 should return 0 block jaune", function(){
        //arrange
        let time = new Date('March 13, 08 00:04:00');
        //act
        let result = berlinClock.fiveMinuteLine(time);
        console.log(result);
        //assert
        expect(result).toBe("0 block jaune");
    });
    it("fiveMinuteLine given 5.00 should return 1 block jaune", function(){
        //arrange
        let time = new Date('March 13, 08 00:05:00');
        //act
        let result = berlinClock.fiveMinuteLine(time);
        console.log(result);
        //assert
        expect(result).toBe("1 block jaune");
    });
    it("fiveMinuteLine given 6.00 should return 1 block jaune", function(){
        //arrange
        let time = new Date('March 13, 08 00:06:00');
        //act
        let result = berlinClock.fiveMinuteLine(time);
        console.log(result);
        //assert
        expect(result).toBe("1 block jaune");
    });
    it("fiveMinuteLine given 11.00 should return 2 block jaune", function(){
        //arrange
        let time = new Date('March 13, 08 00:11:00');
        //act
        let result = berlinClock.fiveMinuteLine(time);
        console.log(result);
        //assert
        expect(result).toBe("2 block jaune");
    });
    it("fiveMinuteLine given 16.00 should return 3 block jaune", function(){
        //arrange
        let time = new Date('March 13, 08 00:16:00');
        //act
        let result = berlinClock.fiveMinuteLine(time);
        console.log(result);
        //assert
        expect(result).toBe("3 block jaune");
    });
    it("fiveMinuteLine given 21.00 should return 4 block jaune", function(){
        //arrange
        let time = new Date('March 13, 08 00:021:00');
        //act
        let result = berlinClock.fiveMinuteLine(time);
        console.log(result);
        //assert
        expect(result).toBe("4 block jaune");
    });
    it("fiveMinuteLine given 26.00 should return 5 block jaune", function(){
        //arrange
        let time = new Date('March 13, 08 00:26:00');
        //act
        let result = berlinClock.fiveMinuteLine(time);
        console.log(result);
        //assert
        expect(result).toBe("5 block jaune");
    });
    it("fiveMinuteLine given 31.00 should return 6 block jaune", function(){
        //arrange
        let time = new Date('March 13, 08 00:031:00');
        //act
        let result = berlinClock.fiveMinuteLine(time);
        console.log(result);
        //assert
        expect(result).toBe("6 block jaune");
    });
    it("fiveMinuteLine given 36.00 should return 7 block jaune", function(){
        //arrange
        let time = new Date('March 13, 08 00:036:00');
        //act
        let result = berlinClock.fiveMinuteLine(time);
        console.log(result);
        //assert
        expect(result).toBe("7 block jaune");
    });
    it("fiveMinuteLine given 41.00 should return 8 block jaune", function(){
        //arrange
        let time = new Date('March 13, 08 00:041:00');
        //act
        let result = berlinClock.fiveMinuteLine(time);
        console.log(result);
        //assert
        expect(result).toBe("8 block jaune");
    });
    it("fiveMinuteLine given 46.00 should return 9 block jaune", function(){
        //arrange
        let time = new Date('March 13, 08 00:046:00');
        //act
        let result = berlinClock.fiveMinuteLine(time);
        console.log(result);
        //assert
        expect(result).toBe("9 block jaune");
    });
    it("fiveMinuteLine given 51.00 should return 10 block jaune", function(){
        //arrange
        let time = new Date('March 13, 08 00:51:00');
        //act
        let result = berlinClock.fiveMinuteLine(time);
        console.log(result);
        //assert
        expect(result).toBe("10 block jaune");
    });
    it("fiveMinuteLine given 56.00 should return 11 block jaune", function(){
        //arrange
        let time = new Date('March 13, 08 00:56:00');
        //act
        let result = berlinClock.fiveMinuteLine(time);
        console.log(result);
        //assert
        expect(result).toBe("11 block jaune");
    });
})