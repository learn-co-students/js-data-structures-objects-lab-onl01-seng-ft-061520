// Write your solution in this file!
const driver = Object();

function updateDriverWithKeyAndValue(obj, key, value) {
    let Object = {...obj };
    Object[key] = value;

    return Object;
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
}

function deleteFromDriverByKey(obj, key, value) {
    let Object = {...obj };
    Object[key] = value;

    delete Object[key]
    return Object
}

function destructivelyDeleteFromDriverByKey(obj, key, value) {
    obj[key] = value;
    delete Object[key]
    return obj;
}