//zad1

var car={marka:"Audi",
	model:"A3",
	silnik:2.0,
	rocnzik:2020};

for(const item in car)
{
	console.log(`${item}`);
}

//zad2
car.zmianarok=function (rocnzik){
	this.rocnzik=rocnzik;
};
car.zmianarok(2010);

//zad3

var liczydlo={ suma:0,
sumowanie:function(tablica){

tablica.forEach(function(item){
 liczydlo.suma+=item;
  
})
}

};
liczydlo.sumowanie([1,2,3]);
console.log(liczydlo.suma);

//zad4

var car={marka:"Audi",
	model:"A3",
	silnik:2.0,
	rocnzik:2020};

for(const item in car)
{
	console.log(`${item}: ${car[item]}`);
}
//zad 5


var car={marka:"Audi",
	model:"A3",
	silnik:2.0,
	rocnzik:2020,
	czesc:{
		hamulce:"brembo",
		zawieszenie:"OEM",
		kola:25,
	}
	
	};

for(const item in car.czesc)
{
	console.log(`${item}`);
}

//zad6
car.kolor="czerwony";
car.napis= function(){
	console.log('Hello');
};
car.napis();