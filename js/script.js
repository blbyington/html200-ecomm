//test console log
console.log("banana")

//cart defined
var cart = [ ];

//scarf information
var products = [
  {
    "name": "Reversible Plaid",
    "price": 26.99,
    "description": "Two classic patterns in one great look: This supersoft and cozy reversible scarf instantly doubles your street-style cred. 100% acrylic.",
    "imageTitle": "reversible-plaid.jpg"
  },
  {
    "name": "Wool Cable Knit",
    "price": 49.99,
    "description": "Warm yourself with this women's natural cable knit scarf, crafted from 100% Merino wool. Imported.",
    "imageTitle": "wool-cable.jpeg"
  },
  {
    "name": "Northern Lights",
    "price": 29.99,
    "description": "Handmade by women in Agra, sales provide medical and educational support in this remote area of India. Crinkly 100% cotton.",
    "imageTitle": "northern-lights.jpg"
  },
  {
    "name": "Ombre Infinity",
    "price": 11.99,
    "description": "A dip-dye effect adds color and dimension to a cozy infinity scarf featuring a soft, chunky knit. 100% acrylic.",
    "imageTitle": "ombre-infinity.jpg"
  },
  {
    "name": "Fringed Plaid",
    "price": 18.99,
    "description": "Generously sized, extra soft and featuring a dazzling fringe, this scarf is rendered in a versatile gray, black and white plaid. Expertly beat the cold with style. 100% acrylic.",
    "imageTitle": "fringed-plaid.jpeg"
  },
  {
    "name": "Multi Color",
    "price": 22.99,
    "description": "The Who What Wear Oversize Color-Block Square Scarf is big, bold, and designed to twist and wrap any way you wish. All the colors of the season are harmonized in this oversize accent, so you can adjust to contrast or match your outfit, soft and lush, it’s your stylish standoff against cold AC and unexpected fall breezes. 100% acrylic",
    "imageTitle": "multi-color.jpeg"
  },
  {
    "name": "Etro Paisley-Print Silk",
    "price": 249.99,
    "description": "Luxurious silk scarf with subtle paisley pattern. 100% silk",
    "imageTitle": "etro.jpg"
  },
  {
    "name": "Ashby Twill",
    "price": 70.99,
    "description": "Faribault brings you the Ashby Twill Scarf in Natural. Woven with a 'broken' twill technique, the Ashby Twill Scarf has a slight zigzag texture. Made in USA, this timeless scarf is crafted with luxurious merino wool and finished with heather gray fringe. 100% Merino wool",
    "imageTitle": "twill.jpg"
  }
]

//sort by script
function filterProducts() {

  var sortMethod = document.sortBy.filter.value;
  if(sortMethod == "name") {
    sortByName();
  }
  
  else if (sortMethod == "price") {
     { 
      sortByPrice();
  } 
}
  event.preventDefault();
}

//sort by name
function sortByName(){
  products.sort(function(a,b){
    if(a.name.toLowerCase() < b.name.toLowerCase())
      return -1;
    if(a.name.toLowerCase() > b.name.toLowerCase())
      return 1;
    return 0;
  });
  console.log(products);
}

function sortByPrice() {
  products.sort(function(a,b){
    return a.price - b.price;
});
  console.log(products);
}



//sum price of cart items
function sumPrices(cartArray) {

  var total = 0;
  
  for(var i=0; i<cartArray.length; i++){
  console.log(cartArray[i].price);
    
    total = total + cartArray[i].price;
    }
  console.log("Total: " + total);

}

//number of items in cart - html halp on cart icon...
function sumPrices(cartArray) {
  // for loop through array, sum value of price attributes for each object
  var total = 0;
  
  for(var i= 0; i < cartArray.length; i++) {

    if(cartArray[i].price){
          total = total + cartArray[i].price;
    }
  }

  console.log(total);
}

//addItem script
function addItem(item) {
  var ProductIndex = cart.indexOf(item); //cart is not defined error... 
  
  if (ProductIndex <= 0) {
    cart.push(item);
  }
  console.log(cart);
}

//removeItem
function removeItem(item) {
  var ProductIndex = cart.indexOf(item);
  if (ProductIndex != -1) {
    cart.splice(ProductIndex, 1);
  }
  console.log(cart);
}


/*cheri's solution
-for (var i in products) {
 +// This is the syntax for looping through arrays that we learned in class 1. We'll use it to loop through the products array.
 +for(var i = 0; i<products.length; i++){
 +  // "i" here is a temporary variable that refers to the index of the object we're currently on while looping through the array.
 +
 +  // We reference the element of the array that we're on using brackets
 +  // notation with the counter/i variable. That element is an object,
 +  // so we can refer to it's attributes using dot notation.
    console.log(products[i].name);
    console.log(products[i].description);
    console.log(products[i].price);
  }*/
for (var i = 0; i<products.length; i++) {
    console.log(products[i].name);
    console.log(products[i].description);
    console.log(products[i].price);
    }

function capture(){
  console.log(document.filterBy.filter.value);
  event.preventDefault();
}

//to-do: print total as html to page next to cart icon, runs when item added or taken away.



//Add +/- button to item listings in HTML - done


//Define a global variable in JS, array “cart”.


//Write onclick handler in JS that takes item names, pushes them into “cart” array if they are not yet there, removes them if they are, console logs cart.length.

//Add onclick() to +/- button to trigger handler.


//WIP if else sorting... 

//var price = products.slice(0);
//byPrice.sort(function(a,b) {
//    return a.price - b.price;
//});
//console.log('by price:');
//console.log(byPrice);

//var name = products.slice(0);
//byName.sort(function(a,b) {
//    return a.name - b.name;
//});
//console.log('by name:');
//console.log(byName);