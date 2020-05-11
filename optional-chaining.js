const test = {
  name: "foo",
  age: 25,
  address: {
    number: 44,
    street: "Sesame Street"
  }
};

if (test.address.city.name) {
  console.log("City name exists!");
}

// TypeError: Cannot read property 'name' of undefined

const test = {
  name: "foo",
  age: 25,
  address: {
    number: 44,
    street: "Sesame Street"
  }
};

// much cleaner.
if (test?.address?.city?.name) {
  console.log("City name exists!");
}

// no TypeError thrown!

const nestedProp = obj?.["prop" + "Name"]; // computed properties

const result = obj.customMethod?.(); // functions

const arrayItem = arr?.[42]; // arrays
