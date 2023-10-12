export class BerlinClock {
    minuteLine(time) {
        console.log(time.getMinutes());
        if(time.getMinutes() === 0) return "blabkabv";
        return "fail"        
    }
}