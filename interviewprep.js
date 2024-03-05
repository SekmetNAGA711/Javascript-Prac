function bark (name, age) {
    if(age > 8){
        console.log( name + " sorry you are not the right age")
    }
    else if (age < 8) {
        console.log(name + " you are the perfect age")
    }
}

bark("kim", 9)

var genres = []; 
genres.push("Rockabilly"); 
genres.push("Ambient"); 
var size = genres.length;

console.log(size)


var taxi = {
     make: "Webville Motors",
     model: "Taxi",
     year: 1955,
     color: "yellow",
     passengers: 4, 
     convertible: false, 
     mileage: 281341
    };

    function prequal(car) {
    if (car.mileage > 10000) {
    return false;
    } 
    else if (car.year > 1960) {
    return false; 
       }
    return true; 
}
     console.log(prequal(taxi));