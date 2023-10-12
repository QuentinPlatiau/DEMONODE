export class BerlinClock {
    minuteLine(time){
        if(Math.floor(time.getMinutes()/5) === 0) return "0 block jaune";                       
        if(Math.floor(time.getMinutes()/5) === 1) return "1 block jaune";                       
        if(Math.floor(time.getMinutes()/5) === 2) return "2 block jaune";                       
        if(Math.floor(time.getMinutes()/5) === 3) return "3 block jaune";                       
        if(Math.floor(time.getMinutes()/5) === 4) return "4 block jaune";                       
        if(Math.floor(time.getMinutes()/5) === 5) return "5 block jaune";                       
        if(Math.floor(time.getMinutes()/5) === 6) return "6 block jaune";                       
        if(Math.floor(time.getMinutes()/5) === 7) return "7 block jaune";                       
        if(Math.floor(time.getMinutes()/5) === 8) return "8 block jaune";                       
        if(Math.floor(time.getMinutes()/5) === 9) return "9 block jaune";                       
        if(Math.floor(time.getMinutes()/5) === 10) return "10 block jaune";                      
        if(Math.floor(time.getMinutes()/5) === 11) return "11 block jaune";
    }
}






