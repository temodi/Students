// object assign
let math = {
    min: function(a, b) { return Math.min(a, b) },
    max: function(a, b) { return Math.max(a, b) },
    isAverage: function(tomb) {
        let sum = 0;
        for (let i = 0; i < tomb.length; i++) {
            sum += tomb[i]
        }
        return sum / tomb.length
    },
    isIntNumber: function(value) {
        let parsedValue = parseInt(value);
        if (parsedValue && !isNaN(parsedValue)) {
            return true;
        }
    }
}




let math2 = Object.assign({}, math)



Object.entries(math)

Object.keys(math)

Object.values(math)

console.log(math.hasOwnProperty('isAverage'))



//extends

class Plant {
    plantType;
}

class Fruit extends Plant {
    fruitType;
}

let plant1 = new Plant();
let apple = new Fruit();


//inheritance


//static property

class Staticclass {
    static customMethod()
}






class Szemely {
    #nev;
    #kor;
    constructor(nev, kor) {
        this.#nev = nev;
        this.#kor = kor
    }

    get person(){
        return this.#nev;
    }

    set person(newName){
        this.#nev = newName;
    }

    get age(){
        return this.#kor;
    }
    set age(newAge){
        this.#kor = newAge;
    }

}


//Órai Motyó


class Alakzat {
    meret;
    xCoord;
    yCoord;
    constructor () {

    }
    setMeret(ujMeret) {
      this.meret = ujMeret;
    }

    setPozicio(x, y) {
      this.xCoord = x;
      this.yCoord = y;
    }

    setSzin(ujSzin) {
      this.szin = ujSzin;
    }

    getAlakazatInfo() {
      console.log('pozicio:'+this.xCoord+','+this.yCoord);
    }
}

class Negyzet extends Alakzat {
     #oldalMeret;
     constructor(oldalMeret) {
       super();
       this.#oldalMeret = oldalMeret;
     }
     setOldalMeret(ujOldalMeret) {
       this.#oldalMeret = ujOldalMeret;
     }
}

class Kor extends Alakzat {
    #sugar;
    constructor(sugar, nev) {
      super();
      this.#sugar = sugar;
      this.nev = nev;
    }

    setSugar(ujSugar) {
      this.#sugar = ujSugar;
    }
}

  class Kor2 {

  }

  let kicsiNegyzet = new Negyzet(12)

  kicsiNegyzet.setMeret(12)
  kicsiNegyzet.setPozicio(1,1);
  kicsiNegyzet.setSzin('#FFFFFF');

  let kicsiKor = new Kor(2);
  kicsiKor.setPozicio(2,2);
  kicsiKor.setSugar(3)

  let altalanosAlakzat = new Alakzat();
  altalanosAlakzat.setPozicio(100, 200);

  // Alakazat osztalybol var objektumot
  function alakzatMuvelet(alakzat) {
    alakzat.getAlakazatInfo()
  }

  alakzatMuvelet(altalanosAlakzat)
  
  alakzatMuvelet(kicsiNegyzet);
  
  alakzatMuvelet(kicsiKor);

  let kicsiKor2 = new Kor2();

  alakzatMuvelet(kicsiKor2);
  


  