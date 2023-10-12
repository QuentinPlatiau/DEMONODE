export class BerlinClock {
    minuteLine(time){
        return (time.getMinutes()%5)+" block jaune";
    }
    fiveMinuteLine(time){
        if(Math.floor(Math.floor(time.getMinutes()/5)/3) === 0) return (Math.floor(time.getMinutes()/5)) + " block jaune";
        return (Math.floor(time.getMinutes()/5) - Math.floor(Math.floor(time.getMinutes()/5)/3)) + " block jaune et "+ Math.floor(Math.floor(time.getMinutes()/5)/3) +" block rouge";
    }
}






