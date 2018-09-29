'use strict';
var storeHoursOpen = ['', '6am', '7am', '8am', '9am','10 am', '11 am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Total'];
//constructor func
var Store = function(name, minCust, maxCust, avgCook, storeHour, cookiSold, totalSales){
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCook = avgCook;
  this.storeHour = storeHour;
  this.cookiSold = cookiSold;
  this.totalSales = totalSales;
};
var pike1 = new Store ('1st and Pike', 23, 65, 6.3, 15, [], 0);
var seaTac = new Store ('SeaTac Airport', 3, 24, 1.2, 15, [], 0);
var seaCenter = new Store ('Seattle Center', 11, 38, 3.7, 15, [], 0);
var capHill = new Store ('Capitol Hill', 20, 38, 2.3, 15, [], 0);
var alki = new Store ('Alki', 2, 16, 4.6, 15, [], 0);

var storesArray = [pike1, seaTac, seaCenter, capHill, alki];
//=================================================================
Store.prototype.cookSoldPH = function(){
  var custPerH = Math.round((Math.random() * (this.maxCust - this.minCust)) + this.minCust);
  this.cookiSold.push(Math.round(custPerH * this.avgCook));
};
//============================================================
Store.prototype.csphad = function(){
  for (var i = 0; i < this.storeHour; i++) {
    this.cookSoldPH();
  }
};
//================================================================pike1.csphad();
Store.prototype.cooksDay = function(){
  this.csphad();
  for(var i = 0; i < this.cookiSold.length; i++){
    this.totalSales = this.cookiSold[i] + this.totalSales;
  }
};
//pike1.cooksDay();
//Table rendering
var makeSHTR = function(){
  var mytable = document.getElementById('theTable');
  var trEl = document.createElement('thead');
  for(var i in storeHoursOpen ){
    var thEl = document.createElement('th');
    thEl.textContent = storeHoursOpen[i];
    trEl.appendChild(thEl);
  }

  mytable.appendChild(trEl);
};
//===============================
Store.prototype.makeGraphRow = function(){
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
  thEl = document.createElement('th');
  thEl.textContent = this.totalSales;
  trEl.appendChild(thEl);
  mytable.appendChild(trEl);
};
//============================================
var makeTotalsRow = function(){
  //make totals box
  var myTable = document.getElementById('theTable');
  var trEl = document.createElement('tr');//
  var thEl = document.createElement('th');
  thEl.textContent = 'Totals';
  trEl.appendChild(thEl);
  //make totals loop
  for(var x = 0; x < 15; x++){
    var allCooksSold = 0;
    for(var i in storesArray){
      allCooksSold = storesArray[i].cookiSold[x] + allCooksSold;
    }
    thEl = document.createElement('th');
    thEl.textContent = allCooksSold;
    trEl.appendChild(thEl);
  }
  //make totals total
  var totalTotal = 0;
  for(var a in storesArray){
    totalTotal = storesArray[a].totalSales + totalTotal;
  }
  thEl = document.createElement('th');
  thEl.textContent = totalTotal;
  trEl.appendChild(thEl);
  myTable.appendChild(trEl);
};

//=============================================

var makeDisShit2 = function(){
  makeSHTR();
  for(var i in storesArray){
    storesArray[i].makeGraphRow();
  }
  makeTotalsRow();
};
makeDisShit2();


