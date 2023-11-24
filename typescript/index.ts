
function getFirstElement<T>(arr: T[]){
 return arr[0];
}

const arr1 = [1,3,4,"3"]
const arr2 = ["a","b","3"] 

const response2 = getFirstElement(arr1);
const response = getFirstElement(arr2);

response.toLowerCase();