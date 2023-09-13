var animal = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
}

var myCity = {
    city: "Seattle"
}

var animalTwo = {
    pet: "kitten",
    bed: "sleigh"
}

function checkObj(caca) {
   
    if (myCity.hasOwnProperty(caca)) {
      return myCity[caca];
    } else {
      return "Not Found"
    }
    
   
  }


console.log(checkObj("caca"));

const myMusic = [
  {
    "artist": "Billy Joel", "artist": "Alex",
    "title": "Piano Man", "title": "Bite",
    "release_year": 1973, "release_year": 2020,
    "formats": [
      "Ok",
      "Ouais"
    ],
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
  {
    "artist": "Billy Joel", "artist": "Alex",
    "title": "Piano Man", "title": "Bite",
    "release_year": 1973, "release_year": 2020,
    "formats": [
      "Ok",
      "Ouais"
    ],
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  }
];