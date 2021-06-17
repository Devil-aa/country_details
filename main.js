const countriesList = document.getElementById("countries");
// Global Variables
let countries; //will contain "fetched" data
//
countriesList.addEventListener("change",function(event){    
    //console.log(event.target.value);
    displayCountryInfo(event.target.value);
	

});

fetch("https://restcountries.eu/rest/v2/all")
.then(res => res.json())
.then(data =>initialize(data))
.catch(err => console.log("Error:",err));


function initialize(countriesData){
    countries = countriesData;
    let options ="";
    
    countries.forEach(country =>options+=`<option value="${country.alpha3Code}">${country.name}</option>`);
    //document.getElementById("countries").innerHTML = options;
    countriesList.innerHTML = options;
    console.log(countriesList.value);
    //console.log(countriesList.lenght);//to get lenght of country list
    //console.log(countriesList[45]);//search  specific country by using index no.
    console.log()
    displayCountryInfo("AFG");
}

function displayCountryInfo(countryByAlpha3Code) {
    const countryData = countries.find(country =>country.alpha3Code === countryByAlpha3Code);
    console.log(countryData);
    document.querySelector("#flag-container img").src = countryData.flag;
    //document.getElementById('flag-container').value = n;
    document.querySelector("#flag-container img").alt =`flag of ${countryData.name}`;
    document.querySelector("#link-container a").href = countryData.flag;
    document.getElementById("name").innerHTML =countryData.flag;
    document.getElementById("capital").innerHTML = countryData.capital;
    document.getElementById("dialing-code").innerHTML=`+${countryData.callingCodes[0]}`;
    document.getElementById("population").innerHTML = countryData.population.toLocaleString("en-us");
    document.getElementById("region").innerHTML = countryData.region;
    //document.getElementById("currencies").innerHTML = countryData.currencies.filter(c => c.name).map(c => `${c.name} (${c.code})`).join(", ");
    //document.getElementById("currencies").innerHTML = countryData.currencies.filter(c =>`${c.name}(${c.code})`).join(",");
    //console.log(countryData.flag);
}
