import { BerlinClock } from '../app.js';

describe("the first minute line", function() {
    let berlinClock = new BerlinClock();
    it("minuteLine given 0.00 should return blabla", function(){
        //arrange
        let time = new Date('December 17, 1995 03:00:00');
        //act
        let result = berlinClock.minuteLine(time);
        console.log(result);
        //assert
        expect(result).toBe("blabkabv");
    })
})