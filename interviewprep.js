// function bark (name, age) {
//     if(age > 8){
//         console.log( name + " sorry you are not the right age")
//     }
//     else if (age < 8) {
//         console.log(name + " you are the perfect age")
//     }
// }

// bark("kim", 9)

// var genres = []; 
// genres.push("Rockabilly"); 
// genres.push("Ambient"); 
// var size = genres.length;

// console.log(size)


// var taxi = {
//      make: "Webville Motors",
//      model: "Taxi",
//      year: 1955,
//      color: "yellow",
//      passengers: 4, 
//      convertible: false, 
//      mileage: 281341
//     };

//     function prequal(car) {
//     if (car.mileage > 10000) {
//     return false;
//     } 
//     else if (car.year > 1960) {
//     return false; 
//        }
//     return true; 
// }
// var worthALook = prequal(taxi);
// if (worthALook) {
// console.log("You gotta check out this " + taxi.make + " " + taxi.model);
// } else {
// console.log("You should really pass on the " + taxi.make + " " + taxi.model);
// }


// if (99 == "99") {
//     console.log("A number equals a string!");
//     } else {
//     console.log("No way a number equals a string");
   
//     }


function cubes(a) {
	return a * (a * a);
}

console.log(cubes(3));