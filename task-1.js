const logItems = function (array) {
  for (let i = 0; i < array.length; i++) {
    const listItems = i + 1;
    console.log(`${listItems} - ${array[i]}`);
  }
};

logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);
