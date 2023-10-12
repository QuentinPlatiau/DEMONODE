export class BerlinClock {
    minuteLine(time){
        if(Math.floor(time.getMinutes()/5) === 0) return "0 block jaune";                       
        if(time.getMinutes() === 5) return "1 block jaune";
    }
}






