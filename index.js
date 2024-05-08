const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const totalBatteries = batteryBatches.reduce((total, batch) => total + batch);

// reduce the array into a single value by taking two arguments (total and batch) and 
// adding that together until all elements of the array have been reduced to a single value
