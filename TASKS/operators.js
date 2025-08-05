//operators

//arithemetic operators
    //add   +
    //sub   -
    //mul   *
    //div   /
    //modulos %
    //exponent **
    //increment ++
    //decrement --
    let a =55;
    let b= 5;
    console.log(a+b);
    console.log(a-b);
    console.log(a*b);
    console.log(a/b);
    console.log(a%b);
    console.log(a**b);

    let c=10;
    c++
    console.log(c);

    let d=10;
    d--
    console.log(d);
    
//assignment operators
    let x=10;
    x += 1
    console.log(x);
    x -= 2
    console.log(x);
    x *= 3
    console.log(x);
    x /= 4
    console.log(x);
    x %= 6
    console.log(x);
    x **= 8
    console.log(x);

   // x ++= 12
   // console.log(x);
    //  x --= 12
    //console.log(x);  cannot perfrom increment and decrement  in assignment operators
    
//comparison operators  : <   >    <=    >=  
 
let le=10;
let se=9;
console.log(le<se);
console.log(le>se);
console.log(le<=se);
console.log(le>=se);


//logical operators

//&& --> and
// || --> or
// !  --> not

let n=10;
let ot = 10;
console.log(n!=ot);


//strict operators

//   ==  --> loose equality / double equal
//   ===  --> strict equality / triple equal

let str = "10";
let num = 10;
console.log(str==num);
console.log(str===num);


//ternary operators
// syntax 
// variable_name(condition)? "true value":"false value"

let age = 24;
let result =(age>=18 && age<=100)? "eligible to vote":"not eligible to vote"
console.log(result);

let mark = 36
let rank =(mark>36|| mark==100)?"pass":"fail"
console.log(rank);
