let cities = ['Kolkata','Hydrabad','Madraas','Goa'];

// Changing value through index number
cities[2]= "Chennei";
console.log(cities);

// pop method is used to eliminate last item from the array
cities.pop();
console.log(cities);

// push method is used to add a item to the array at the last
cities.push('Mumbai');
console.log(cities);

// .length is used to find the length of an array
let length = cities.length;
console.log(length);


// sort method is used to sort the elements of an array in alphabetical order
let newCities = cities.sort();
console.log(newCities);

