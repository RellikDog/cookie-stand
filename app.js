'use strict';
var storeHoursOpen = ['', '6am', '7am', '8am', '9am','10 am', '11 am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Total'];
//constructor func
var store = function(name, minCust, maxCust, avgCook, storeHour, cookiSold, totalSales){
    this.name = name;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCook = avgCook;
    this.storeHour = storeHour;
    this.cookiSold = cookiSold;
    this.totalSales = totalSales;
}
var pike1 = new store ('1st and Pike', 23, 65, 6.3, 15, [], 0);
var seaTac = new store ('SeaTac Airport', 3, 24, 1.2, 15, [], 0);
var seaCenter = new store ('Seattle Center', 11, 38, 3.7, 15, [], 0);
var capHill = new store ('Capitol Hill', 20, 38, 2.3, 15, [], 0);
var alki = new store ('Alki', 2, 16, 4.6, 15, [], 0);

//=================================================================
store.prototype.cookSoldPH = function(){
    var custPerH = Math.round((Math.random() * (this.maxCust - this.minCust)) + this.minCust);
    this.cookiSold.push(Math.round(custPerH * this.avgCook));
}
//============================================================
store.prototype.csphad = function(){
    for (var i = 0; i < this.storeHour; i++) {
        this.cookSoldPH();
    }
}
//================================================================pike1.csphad();
store.prototype.cooksDay = function(){
    this.csphad();
    for(var i = 0; i < this.cookiSold.length; i++){
        this.totalSales = this.cookiSold[i] + this.totalSales;
    }
}
//pike1.cooksDay();
//Table rendering
var makeSHTR = function(){
   var mytable = document.getElementById('theTable');
   var trEl = document.createElement('tr');
        for(var i in storeHoursOpen ){
        var thEl = document.createElement('th');
        thEl.textContent = storeHoursOpen[i];
        trEl.appendChild(thEl); 
        }

    mytable.appendChild(trEl);
}
//makeSHTR();
//===============================
store.prototype.makeGraphRow = function(){
    this.cooksDay();
    var mytable = document.getElementById('theTable');
    var trEl = document.createElement('tr');
        var thEl = document.createElement('th');
        thEl.textContent = this.name;
        trEl.appendChild(thEl);
            for(var i in this.cookiSold){
                var tdEl = document.createElement('td');
                tdEl.textContent = this.cookiSold[i];
                trEl.appendChild(tdEl);
            }
            tdEl = document.createElement('td');
            tdEl.textContent = this.totalSales;
            trEl.appendChild(tdEl);
        mytable.appendChild(trEl);
}
//pike1.makeGraphRow();

var makeDisShit = function(){
    makeSHTR();
    pike1.makeGraphRow();
    seaTac.makeGraphRow();
    seaCenter.makeGraphRow();
    capHill.makeGraphRow();
    alki.makeGraphRow();
}
makeDisShit();









/*cooksDay = function (locat) {
    csphad(locat);
    var totalSales = 0;
    for (var i = 0; i < locat.cookiSold.length; i++) {
        var totalSales = locat.cookiSold[i] + totalSales;
    }
    locat.totalSales = totalSales;
}*/



/*
//old  dom work
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
    var totSalesItem = document.createElement('li');
    totSalesItem.textContent = this.totalSales;
    ulEl.appendChild(totSalesItem);
    cookStore1.appendChild(ulEl);
}
   
cooksDay(pike1);
//pike1.storePop();

seaTac.storePop = function(){
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
    var totSalesItem = document.createElement('li');
    totSalesItem.textContent = this.totalSales;
    ulEl.appendChild(totSalesItem);
    cookStore1.appendChild(ulEl);
}
cooksDay(seaTac);
//seaTac.storePop();
*/



/*var ulEl = document.createElement('ul');
for (var i in this.cookiSold){
    var liEl = document.createElement('li')
    liEL.textContent = this.cookiSold[i]
    ulEl.appendChild(liEl)
}
cookStore1.appendChild('ulEl');

var store = function(name, min, max, avg, hours){
    this.name = name;
    this.min = minCust;
    this.max = maxCust;
    this.cookiSold = [];
    this
}
*/


//original list pop
/*//cookies sold per hour
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
}*/ 


//cooksDay(pike1);
//cooksDay(seaTac);
//cooksDay(seaCenter);
//cooksDay(capHill);
//cooksDay(alki);






/*
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
*/
//pop arrays an totals
//cooksDay(pike1);
//cooksDay(seaTac);
//cooksDay(seaCenter);
//cooksDay(capHill);
//cooksDay(alki);