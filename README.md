# cookie-stand
lab6
'use strict';
//random number per hour
function sum(a, b) { 
    var sumOut = a + b; 

   return sumOut;
}
//cookies sold per hour
var cookSoldPH = function(locat){    
    var custPerH = function() {
       return  (Math.round(Math.random()*(locat.maxCust - locat.minCust))+locat.minCust);
     }   
    locat.cookiSold.push(custPerH(locat) * locat.avgCook);
}
//csph loop



//object literals
//1st and pike
var pike1 = {
    minCust: 23,
    maxCust: 65,
    avgCook: 6.3,
    cookiSold: []
    totalCooks: function(){
            var sumNum = 0;
            for (var i = 0; i < this.cookiSold.length; i++){
                var sumNum = sum(this.cookiSold[i], sumNum );
             }
             return sumNum;
    
    };
};

//seatac
/*var seaTac = {
    minCust: 3,
    maxCust: 24,
    avgCook: 1.2,
};*/