// Part 1
const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
  const newObj = { ...driver };

  newObj[key] = value;

  return newObj;
}

//Part 2
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  const newObj = Object.assign(driver, { [key]: value });
  return newObj;
}

//Part 3
function deleteFromDriverByKey(driver, key) {
  // const newDriver = Object.assign({}, driver, key);
  const newDriver = Object.assign({}, driver);
  delete newDriver[key];
  //newDriver.key does not call the parameter passed in
  return newDriver;
}

//Part 4
function destructivelyDeleteFromDriverByKey(driver, key) {
  Object.assign({}, driver);
  delete driver[key];
  return driver;
}
