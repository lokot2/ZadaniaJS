//zad 1

class Persone {
    constructor(imie, nazwisko , wiek, kraj, jezyk) {
     this.imie=imie;
     this.nazwisko=nazwisko;
     this.wiek=wiek;
     this.kraj=kraj;
     this.jezyk-jezyk;

    }

    zmienawieku(age) {
        this.wiek = age;
    }

    zmianakraju(panstwo) {
        this.kraj = panstwo;
    }

}

const norbert= new Persone('norbert','lekki',22,'Polska','Polski');
const pawel=new Persone('pawel','kowalski',30,'Anglia','Angielski');
const Nina=new Persone('Nina','Aniol',25,"Polska","Ukrainski");
const Bogdan=new Persone('Bogdan','Dobnry',50,"Polska","Angielski");
const Katarzyna=new Persone('Katarzyna',"Trudna",48,'Polska','Polski');

console.log(norbert);
norbert.zmienawieku(25);
norbert.zmianakraju("Ukraina");
console.log(norbert);

//zad 2
class kalkulator{
    constructor(){
        this.pamiec=new Array();
    }

dodawanie(a,b){
  const wynik=a+b;
  this.pamiec.push([`${a} + ${b} = ${wynik}`])
  console.log(wynik);
}
odejmowanie(a,b){
  const wynik=a-b;
  this.pamiec.push([`${a} - ${b} = ${wynik}`])
  console.log(wynik);
}
mnozenie(a,b){
  const wynik=a*b;
  this.pamiec.push([`${a} * ${b} = ${wynik}`])
  console.log(wynik);
}
dzielenie(a,b){
if(b!=0){
  const wynik=a/b;
  this.pamiec.push([`${a} / ${b} = ${wynik}`])
  console.log(wynik);
  }
  else   console.log("Nie dziel przez zero");
}
historia(){
    this.pamiec.forEach(function(item){
        console.log(item);
    });
}
wyczysc_pamiec(){
    this.pamiec=[];
}



  }
const liczydlo=new kalkulator();
liczydlo.dodawanie(2,2);
liczydlo.odejmowanie(2,2);
liczydlo.mnozenie(2,2);
liczydlo.dzielenie(2,2);
liczydlo.historia();
liczydlo.wyczysc_pamiec();
liczydlo.dodawanie(2,2);
liczydlo.historia();

const liczydlo2=new kalkulator();


liczydlo2.dodawanie(6,5);
liczydlo2.odejmowanie(2,1);
liczydlo2.mnozenie(35,2);
liczydlo2.dzielenie(2,10);
liczydlo2.historia();
liczydlo2.wyczysc_pamiec();
liczydlo2.dodawanie(2,2);
liczydlo2.historia();

//zad 3 

class ruletka{

constructor(){

}

losuj(){
ruletka.prototype.odliczanie = setInterval(() => {
            ruletka.prototype.czas = Math.round(Math.random() * 10);
            console.log(ruletka.prototype.czas);
        }, 1000);
    }

    sprawdz() {
        ruletka.prototype.sprawdzanie = setInterval(() => {
            if (ruletka.prototype.czas > 5) {
                console.log('koniec');
                clearInterval(this.odliczanie);
                clearInterval(this.sprawdzanie);
            }
        }, 1000);
    }
}

const rzut=new ruletka;
const rzut2=new ruletka;
rzut.losuj();
rzut2.sprawdz(); 
