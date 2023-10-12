export class BerlinClock {
    minuteLine(time){
        if(time.getMinutes() === 0) return "0 block jaune";        
        if(time.getMinutes() === 1) return "1 block jaune";        
        if(time.getMinutes() === 2) return "2 block jaune";        
        if(time.getMinutes() === 3) return "3 block jaune";        
        if(time.getMinutes() === 4) return "4 block jaune";       
        if(time.getMinutes() === 5) return "0 block jaune";
    }
    fiveMinuteLine(time){
        if(Math.floor(time.getMinutes()/5) === 0) return "0 block jaune";                       
        if(Math.floor(time.getMinutes()/5) === 1) return "1 block jaune";                       
        if(Math.floor(time.getMinutes()/5) === 2) return "2 block jaune";                       
        if(Math.floor(time.getMinutes()/5) === 3) return "2 block jaune et 1 block rouge";                       
        if(Math.floor(time.getMinutes()/5) === 4) return "3 block jaune et 1 block rouge";                       
        if(Math.floor(time.getMinutes()/5) === 5) return "4 block jaune et 1 block rouge";                       
        if(Math.floor(time.getMinutes()/5) === 6) return "4 block jaune et 2 block rouge";                       
        if(Math.floor(time.getMinutes()/5) === 7) return "5 block jaune et 2 block rouge";                       
        if(Math.floor(time.getMinutes()/5) === 8) return "6 block jaune et 2 block rouge";                       
        if(Math.floor(time.getMinutes()/5) === 9) return "6 block jaune et 3 block rouge";                       
        if(Math.floor(time.getMinutes()/5) === 10) return "7 block jaune et 3 block rouge";                      
        if(Math.floor(time.getMinutes()/5) === 11) return "8 block jaune et 3 block rouge";
    }
}






