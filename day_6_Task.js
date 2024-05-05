
//Day-o6-Tasks
var request = new XMLHttpRequest();
request.open('GET','https://restcountries.com/v3.1/all');
request.send();
request.onload  = function() {
var result = JSON.parse(request.response);
console.log(result)


//Q1.Get all the countries from Asia continent /region using Filter method

var data = result.filter((ele)=>ele.region== "Asia")
var asia_c = data.map((ele)=>ele.name.common)
console.log(asia_c);


//Q2.Get all the countries with a population of less than 2 lakhs using Filter method

var data1 = result.filter((ele)=>ele.population < 200000);
var pop = data1.map((ele)=>ele.name.common);
console.log(pop)

//Q4.Print the total population of countries using reduce method
//var data2 = result.filter((ele)=>ele.population);
var data3 = result.reduce((acc,cv)=>acc+cv.population,0)
console.log(data3)



//Q5.Print the country that uses US dollars as currency.

var data2 =result.filter((ele)=>ele?.currencies?.USD?.name ==="United States dollar");
 var data5 = data2.map((ele)=>ele.name.common);
console.log(data5);


//Q3.Print the following details name, capital, flag, using forEach method

result.forEach((country) => {
    console.log("Name:", country.name.common);
    console.log("Capital:", country.capital[0]);
    console.log("Flag:", country.flags.png);


});

}



