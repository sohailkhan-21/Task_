//Map(): creates a new array by providing function to each element  of original array,
//like tranformation or modification
//syntax
//variable name.map((value,index,actualArray)=>)



//filter
//syntax
//variable name.filter((value,index,actual_array)=>)

let number =[11,22,33,44,55,100,111,156,45]
let number2=number.filter((number)=>number>44)
console.log(number2);



//reduce
//synatx
//variable name.reduce((accumulator,actualArray)=>)
let num=[10,20,30,40,50]
let num2=num.reduce((x,y)=>x*y)
console.log(num2);

