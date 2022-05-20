console.log("working..");

// 1. Create one function with zero parameter having a console statement;

function display(){
    console.log("Hello I am in America");
}

display();

// 2. Create one function which takes two values as a parameter and print the sum of them as "Sum of 3, 4 is 7"

function add(a,b){
    console.log(a+b);
}

add(3,4);

// 3. Create one arrow function

const arrow = (a,b) => {
    console.log(a+b);

}

arrow(8,5);

//  4. "Print output: 
var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
girl ();//answer undefined

// 5. "Print output: 
var x = 21;
girl ();
console.log(x)
function girl() {
    console.log(x);
    var x = 20;
};//answer is 21 

//6. // Write a function that accepts parameter n and returns factorial of n

function factorial(n){
    let number = 1;
    if(n==0 || n==1){
        return number;
    }
    else{
        for (let i=1; i<=n ; i++ ){
            number = number *i;
        }
    }
    console.log(number);
}
factorial(5);