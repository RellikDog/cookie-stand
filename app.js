'use strict';

//cookies sold per hour
var cookSoldPH = function (locat) {
    var custPerH = function (locat) {
        return (Math.round(Math.random() * (locat.maxCust - locat.minCust)) + locat.minCust);
    }
    locat.cookiSold.push(Math.round(custPerH(locat) * locat.avgCook));
}
//csph loop
var csphad = function (locat) {
    for (var i = 0; i < locat.storeHour; i++) {
        cookSoldPH(locat);
    }

    //console.log(locat.cookiSold);
    return locat.cookiSold;
}

//add up total days sales  
var cooksDay = function (locat) {
    csphad(locat);
    var totalSales = 0;
    for (var i = 0; i < locat.cookiSold.length; i++) {
        var totalSales = locat.cookiSold[i] + totalSales;
    }
    locat.totalSales = totalSales;
}


//1st and pike  
var pike1 = {
    name: '1st and Pike',
    minCust: 23,
    maxCust: 65,
    avgCook: 6.3,
    storeHour: 15,
    cookiSold: [],
    totalSales: '',
};
//csphad(pike1);
//console.log(pike1.cookiSold);
//console.log(pike1.totalSales);
//seatac
var seaTac = {
    name: 'Seatac Airport',
    minCust: 3,
    maxCust: 24,
    avgCook: 1.2,
    storeHour: 15,
    cookiSold: [],
    totalSales: '',
};
//seacenter
var seaCenter = {
    name: 'Seattle Center',
    minCust: 11,
    maxCust: 38,
    avgCook: 3.7,
    storeHour: 15,
    cookiSold: [],
    totalSales: '',
};
//cap hill
var capHill = {
    name: 'Capitol Hill',
    minCust: 20,
    maxCust: 38,
    avgCook: 2.3,
    storeHour: 15,
    cookiSold: [],
    totalSales: '',
};
//alki
var alki = {
    name: 'Alki',
    minCust: 2,
    maxCust: 16,
    avgCook: 4.6,
    storeHour: 15,
    cookiSold: [],
    totalSales: '',
};
//pop arrays an totals
cooksDay(pike1);
cooksDay(seaTac);
cooksDay(seaCenter);
cooksDay(capHill);
cooksDay(alki);

// dom work
//var cookStore1 = document.getElementById('secId');
pike1.storePop = function(){
    var cookStore1 = document.getElementById('secId');
    console.log(cookStore1);
    //
    var titEl = document.createElement('h2');
    titEl.textContent = this.name; 
    //
    cookStore1.appendChild(titEl); 
    //ul   
    var ulEl = document.createElement('ul');
    for (var i = 0; i < this.cookiSold.length;i++){
        var liEl = document.createElement('li');
        liEl.textContent = this.cookiSold[i];
        ulEl.appendChild(liEl);
    }
    cookStore1.appendChild(ulEl);
}
    pike1.storePop();


/*var ulEl = document.createElement('ul');
for (var i in this.cookiSold){
    var liEl = document.createElement('li')
    liEL.textContent = this.cookiSold[i]
    ulEl.appendChild(liEl)
}
cookStore1.appendChild('ulEl');







*/