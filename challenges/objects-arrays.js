// ==== Objects ====

/* 
  Given the following information about dinosaurs, create 3 objects: 
  Use this pattern to create your objects: 
  object name, diet, weight, length, period
*/

const obj1 = {
  name: "tyrannosaurus",
  diet: "carnivorous",
  weight: 7000,
  length: 12,
  period: "Late Cretaceious",
  roar: function () {
    return "RAWERSRARARWERSARARARRRR!"
  }
}
const obj2 = {
  name: "stegosaurus",
  diet: "herbivorous",
  weight: 2000,
  length: 9,
  period: "Late Jurassic"
}

const obj3 = {
  name: "velociraptor",
  diet: "carnivorous",
  weight: 15,
  length: 1.8,
  period: "Late Cretaceious"
}
// tyrannosaurus, carnivorous, 7000kg, 12m, Late Cretaceious

// stegosaurus, herbivorous, 2000kg, 9m, Late Jurassic

// velociraptor, carnivorous, 15kg, 1.8m, Late Cretaceious

// Using your dinosaur objects, log answers to these questions:

// How much did tyrannosaurus weigh?
console.log(`Tyrannosaurus weighs ${obj1.weight} kg`);

// What was the diet of a velociraptor?
console.log(`Velociraptor  is a ${obj3.diet} animal`);

// How long was a stegosaurus?
console.log(`Stegosaurus length is ${obj2.length} m`);

// What time period did tyrannosaurus live in?
console.log(`Tyrannosaurus lived in ${obj1.period} period`);


// Create a new roar method for the tyrannosaurus.  When called, return "RAWERSRARARWERSARARARRRR!" Log the result.
console.log(obj1.roar());

console.log('--------------[END Problem 1]---------------');

// ==== Arrays ====

// Given an array of college graduates.  Complete the following requests WITHOUT using any array methods like .forEach(), .map(), .reduce(), .filter()

const graduates = [{
    "id": 1,
    "first_name": "Cynde",
    "university": "Missouri Southern State College",
    "email": "ctorry0@macromedia.com"
  },
  {
    "id": 2,
    "first_name": "Saundra",
    "university": "The School of the Art Institute of Chicago",
    "email": "swhal1@state.gov"
  },
  {
    "id": 3,
    "first_name": "Lambert",
    "university": "Marian College",
    "email": "lparham2@techcrunch.com"
  },
  {
    "id": 4,
    "first_name": "Modestine",
    "university": "International Medical & Technological University",
    "email": "mdolder3@symantec.com"
  },
  {
    "id": 5,
    "first_name": "Chick",
    "university": "Sultan Salahuddin Abdul Aziz Shah Polytechnic",
    "email": "camorts4@google.com.au"
  },
  {
    "id": 6,
    "first_name": "Jakob",
    "university": "Fachhochschule Rosenheim, Hochschule für Technik und Wirtschaft",
    "email": "jharken5@spiegel.de"
  },
  {
    "id": 7,
    "first_name": "Robbi",
    "university": "Salem University",
    "email": "rbrister6@redcross.org"
  },
  {
    "id": 8,
    "first_name": "Colline",
    "university": "Coastal Carolina University",
    "email": "cbrosh7@alibaba.com"
  },
  {
    "id": 9,
    "first_name": "Michail",
    "university": "Universidad Católica de Ávila",
    "email": "mrome8@shinystat.com"
  },
  {
    "id": 10,
    "first_name": "Hube",
    "university": "Universitat Rovira I Virgili Tarragona",
    "email": "hlethbrig9@foxnews.com"
  }
]

/* Request 1: Create a new array called universities that contains all the univeristies in the graduates array.  

Once you have the new array created, sort the universities alphabetically and log the result. */

console.log(`*********** University  array ************`)
const universities = graduates.map(currentValue => currentValue.university);
console.log(universities);

console.log(`*********** Alphabeically sorted array ************`)
const sortedUni = universities.sort();
console.log(sortedUni);

/* Request 2: Create a new array called contactInfo that contains both first name and email of each student. 

The resulting contact information should have a space between the first name and the email information like this: 
Name email@example.com

Log the result of your new array. */

console.log(`**********FirstName and Email id array ************`)
const contactInfo = graduates.map(currentValue => currentValue.first_name + " " + currentValue.email)
console.log(contactInfo);


/* Request 3: Find out how many universities have the string "Uni" included in their name. Create a new array called uni that contains them all. Log the result. */

console.log(`**********Array with string Uni ************`)
const uni = universities.filter(currentValue => currentValue.includes("Uni"))
console.log(uni);

console.log('--------------[END Problem 2]---------------');
// ==== ADVANCED Array Methods ====

// Given this zoo data from around the United States, follow the instructions below.  Use the specific array methods in the requests below to solve the problems.


zooAnimals = [{
    "animal_name": "Jackal, asiatic",
    "population": 5,
    "scientific_name": "Canis aureus",
    "state": "Kentucky"
  },
  {
    "animal_name": "Screamer, southern",
    "population": 1,
    "scientific_name": "Chauna torquata",
    "state": "Alabama"
  },
  {
    "animal_name": "White spoonbill",
    "population": 8,
    "scientific_name": "Platalea leucordia",
    "state": "Georgia"
  },
  {
    "animal_name": "White-cheeked pintail",
    "population": 1,
    "scientific_name": "Anas bahamensis",
    "state": "Oregon"
  },
  {
    "animal_name": "Black-backed jackal",
    "population": 2,
    "scientific_name": "Canis mesomelas",
    "state": "Washington"
  },
  {
    "animal_name": "Brolga crane",
    "population": 9,
    "scientific_name": "Grus rubicundus",
    "state": "New Mexico"
  },
  {
    "animal_name": "Common melba finch",
    "population": 5,
    "scientific_name": "Pytilia melba",
    "state": "Pennsylvania"
  },
  {
    "animal_name": "Pampa gray fox",
    "population": 10,
    "scientific_name": "Pseudalopex gymnocercus",
    "state": "Connecticut"
  },
  {
    "animal_name": "Hawk-eagle, crowned",
    "population": 10,
    "scientific_name": "Spizaetus coronatus",
    "state": "Florida"
  },
  {
    "animal_name": "Australian pelican",
    "population": 5,
    "scientific_name": "Pelecanus conspicillatus",
    "state": "West Virginia"
  }
];

/* Request 1: .forEach()

The zoo wants to display both the scientific name and the animal name in front of the habitats.  Return an array with only the animal and scientific names in it.  The individual values in the array should look like this "Name: Jackal, asiatic, Scientific: Canis aureus."

*/
console.log(`**********Array of Scientific name and Animal name ************`)
const animalNames = [];
zooAnimals.forEach(currentValue => animalNames.push(`Name:${currentValue.animal_name} ,Scientific:${ currentValue.scientific_name}`))
console.log(animalNames);

/* Request 2: .map()    

The zoos need a list of all their animal's names (names only, not scientific) converted to lower case.  Create a new array named lowerCase and map over each name to convert them all to lower case.  Log the resut.

*/
console.log(`**********Array of Animal names in lowercase************`)
const lowerCase = zooAnimals.map(currentValue => currentValue.animal_name.toLowerCase())
console.log(lowerCase);


/* Request 3: .filter() 

The zoos are concenred about animals with a lower population count. Find out which animals have a population less than 5.

*/
console.log(`**********Array of animals with population less than 5 ************`)
const largerPopulation = zooAnimals.filter(currentValue => currentValue.population < 5)
console.log(largerPopulation);

let newanimals = largerPopulation.map(function (currentValue) {
  return currentValue.animal_name;
})
console.log(newanimals);


/* Request 4: .reduce() 

The zoos need to know their total animal population across the United States.  Find the total population from all the zoos using the .reduce() method.

*/
const populationTotal = zooAnimals.reduce((accumulator, currentValue) => accumulator + currentValue.population, 0)
console.log(`The total population is ${populationTotal}`);

console.log('--------------[END Problem 3]---------------');

/* 

Stretch: If you haven't already, convert your array method callbacks into arrow functions.

*/