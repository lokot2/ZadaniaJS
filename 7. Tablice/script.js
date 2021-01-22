//zad 1 

var  tablica=[1,3,5,7,9];

tablica.forEach(function(zmiene){
console.log(zmiene);
});
//zad2 

var tablica= [1,2,3,4,5,6,7,8,9,10,"samochod","rower","motor"];

console.log(tablica[0]+" "+tablica[1]);

console.log(tablica[tablica.length-1]);

tablica.forEach(function(zmiene){
console.log(zmiene);
});

for(var i=0;i<tablica.length;i=i+2)
{
	console.log(tablica[i]);
}

let wyrazy = tablica.filter(function(item) { 
return typeof item === 'string'; })
console.log(wyrazy);

let liczby = tablica.filter(function(item) { 
return typeof item === 'number'; })

console.log(liczby);

//zad3

var tablica= [1,2,3,4,5,6,7,8,9,10];

//zad 3-1. sumê wszystkich elementów

var sum=0;

tablica.forEach(function(zmiene){

 sum+=zmiene;

})
console.log(sum);
//zad 3-2. ró¿nicê wszystkich elementów


var roz=0;

tablica.forEach(function(zmiene){

 roz-=zmiene;

})
console.log(roz);
//zad 3-3. œredni¹ wszystkich elementów


console.log(sum/tablica.length);

//zad 3-4. elementy parzyste
for(var i=0;i<tablica.length;i++)
{
	if(tablica[i]%2==0)console.log(tablica[i]);

}


//zad 3-5. elementy nieparzyste
for(var i=0;i<tablica.length;i++)
{
	if(tablica[i]%2!=0)console.log(tablica[i]);
}


//zad 3-6. najwiêksz¹ liczbê
var max=tablica[0];
tablica.forEach(function(zmiene){

 if(max<=zmiene)max=zmiene;

})
console.log(max);



//zad 3-7. najmniejsz¹ liczbê
var min=tablica[0];
tablica.forEach(function(zmiene){

 if(min=>zmiene)max=zmiene;

})
console.log(min);

//zad 3-8. wypisz tablicê od ty³u


for(var i=tablica.length;i>=0;i--)
{
	console.log(tablica[i]);
}

//zad4

function tab(arr){

var sum=0;
arr.forEach(function(item){

 sum+=item
})
	return sum

}
console.log(tab(tablica));

//zad5

function tab(arr){

var sum=0;
arr.forEach(function(item){

 sum+=item;
})
	return sum;

}

function pomn(){
  
  
}
console.log(tab(tablica));
var srednia=tab(tablica)/tablica.length;
 tablica.forEach(function(zmiene){
   console.log(zmiene*srednia);
 });

 //zad6

 function tab(arr){

var sum=0;
  var ile=0;
arr.forEach(function(item){

if(item%2==0){
  sum+=item;
  ++ile;
  
}
})
	return sum/ile;

}
console.log(tab(tablica));

//zad7

function tab(arr){


console.log(arr.sort());

	
}
console.log(tab(tablica));

//zad 8

function tab(tab1,tab2){


return tab1.concat(tab2);
}
const  tablica2=[11,12,13,14,15,16,17,18,19,20];

console.log(tab(tablica,tablica2));

//zad9

function tab(tab1){
 const tablica2=[];

  tab1.forEach(function(item){
   tablica2.push(item*(-1));
  })
return tablica2;
}

console.log(tab(tablica));