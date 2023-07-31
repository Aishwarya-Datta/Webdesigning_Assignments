let nos = [10,20,30,40,50];
//shift method
console.log("The initial array is :", nos);
let fno = nos.shift();
console.log("Array after shift:" , nos);
console.log("The no get shifted:", fno);
//unshift
nos.unshift(50);
console.log("Array after unshift:" , nos);
let nums=[10,25,35,45,50];
nums.splice(0,1,);
console.log("Array after splice deletion:" , nums);
nums.splice(3,2,6);
console.log("Array after spolice insertion:" , nums);
