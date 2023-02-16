///
///
////  FUNCTIONS
//
//

//
//FUNCTION DECLARATION
//

function showMessage () {
    alert ("Hello world!  I am a function!")
}

showMessage();



//
//
//LOCAL VARIABLES
//
//

//A variable declared inside a function is only visible inside that function.

function showMessage() {
    let message = "Hello, I'm JavaScript!"; // local variable
  
    alert( message );
  }
  
  showMessage(); // Hello, I'm JavaScript!
  
  alert( message ); // <-- Error! The variable is local to the function

//
//
//OUTER VARIABLES
//
//

//A function can access an outer variable as well.

let userName = "John";    //OUTER VARIABLE

function showMessage() {
    let message = "Hello, " + userName;
    alert(message);
}

showMessage();



// Functions have full access to outer variables.  They can modify them too.

let userName = 'Rob';

function showMessage() {
    userName = "Claire";  /// changed outer variable

    let message = "Hello, " + userName;
    alert(message);
}

alert (userName);

showMessage();

alert (userName);


//
//
//PARAMETERS
//
//

function showMessage (from, text) {   //2 parameters: from, and text.  these are local variables.
    alert(from + ': ' + text);
}

showMessage('Ann', 'Hello!');
showMessage('Ann', "What's up?");

showMessage("ShopKeep", "Buy somethin', will ya?");


function showMessage(from, text) {

    from = '*' + from + '*'; // make "from" look nicer
  
    alert( from + ': ' + text );
  }
  
  let from = "Ann";
  
  showMessage(from, "Hello"); // *Ann*: Hello

//the value of "from" is the same, the function modified a local copy

alert (from);


//
//
//DEFAULT VALUES
//
//

function showMessage(from, text = "no text given") {
    alert ( from + ": " + text);
}

showMessage("Ann");


//
//
//ALTERNATIVE DEFAULT PARAMETERS
//
//

function showMessage(text) {
    if (text === undefined) {
        text = 'empty message'
    }
    alert(text);
}

showMessage();

//This is the same as above

function showMessage(text) {
   if ( text = text || 'empty' ) {
    text = 'Empty' 
   }
   alert(text);
}

showMessage();


//You can use the nullish coalescing operator ??

function showCount(count) {
    alert(count ?? "unknown");
}

showCount(0);
showCount(null);
showCount();

//
//RETURNING A VALUE
//

//addition

function sum(a, b) {
    return a + b;
}

let result = sum(1, 2);
alert (result);


//multiplying
function multiply(a, b) {
    return a * b;
}

let product = multiply(1, 2);
alert (product);


//
//
//Using the directive RETURN
//
//


function checkAge(age) {
    if (age >= 18) {
      return true;
    } else {
      return confirm('Do you have permission from your parents?');
    }
  }
  
  let age = prompt('How old are you?', 18);
  
  if ( checkAge(age) ) {
    alert( 'Access granted' );
  } else {
    alert( 'Access denied' );
  }



  //
  //
  /// Functions == Comments
  //
  //

  function showPrimes(n) {
    nextPrime: for (let i = 2; i <n; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j == 0) continue nextPrime;
        }

        alert(i);
    }
  }

 //Prime Number Creator


  function showPrimes (n) {

    for (let i = 2; i < n; i++) {
        if (!isPrime(i)) continue;

        alert(i);
    }
  }


  //2nd variant to write it


  function isPrime(n) {
    for (let i =2; i < n; i++) {
        if (n % 1 == 0) return false;
        
    }
    return true;
  }

//Variant A is the same as Variant B (no else)

//A
  function checkAge(age) {
    if (age > 18) {
        return true; 
    } else {
        return confirm("Did your parents allow you to use this?");
    }
  }


  //B
  function checkAge(age) {
    if (age > 18) {
        return true; 
    } 
        return confirm("Did your parents allow you to use this?");
    
  }



  function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        return confirm('Did your parents allow you to use this?');
    }
  }

// using "?" operator

function checkAge(age) {
    return (age > 18) ? true : confirm ("Did parents allow you?");
}

//using OR ||

function checkAge(age) {
    return (age > 18) || confirm('DId parents allow you?');
}


function bestBunky(name) {
    return (name === "Bunky") || alert ('That is not the best dog.');
}


//function min (a,b)

min(2, 5) == 2

function min (a, b) {
  if (a < b) {
    alert (a + " is the smaller number")
  } else {
    alert (b + " is the smaller number")
  }


}

//function shows power of

function pow(x,n) {
    let firstNumberX = prompt ("Please input the first number.");
    let secondNumberN = prompt ("Please input the second number.");
    alert (firstNumberX ^ secondNumberN);
}


function pow(x,n) {
    let result = x;

    for (let i = 1; i < n; i++) {
        result *=x;
    }

    return result;
}

let x = prompt("Input X");
let n = prompt("Input N");

if (n < 1 ) {
    alert(`Power ${n} is not supported, use a positive integer`);
} else {
    alert (pow(x,n));
}



///
/////
///FUNCTION EXPRESSIONS
/////
//

//Create a new function in the middle of an expression.

let sayHi = function() {
    alert("Hello!");
}

alert(sayHi);

//You can copy a function into another variable

function sayHi() {  //(1)  Function Declaration.  Creates function and puts it into variable sayHi
    alert ("Hello");
}

let func = sayHi;  //(2) copies variable 

func();
sayHi();     


//
//
//CALL BACK FUNCTIONS
//
//


function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

function showOk() {   //callback function
    alert ("You agreed.");
}

function showCancel() {     //callback function
    alert ("You cancelled the execution.")
}

ask ("Do you agree?", showOk, showCancel);

//Same function expression as above, written shorter:

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  ask(
    "Do you agree?",
    function() { alert("You agreed."); },
    function() { alert("You canceled the execution."); }
  );


  //function expression examples


  //Example 1
  let age = prompt ("What is your age?", 18);

  let welcome;

  if (age < 18) {

    welcome = function(){
        alert("Get the fuck outta here!");
    };
  } else {
    welcome = function() {
        alert("Greetings!");
    };
  }

  welcome();

///Example 2

  let userName = prompt ("What is the name of the Best Boy?", "Enter name");

  let welcome;

  if (userName === "Harold" || userName === "Bunky") {
    welcome = function(){
        alert("Good morning, sir!");
    };
  } else {
    welcome = function() {
        alert ("You are not the Best Boy.  Get out!")
    };
  }

  welcome();


  //
  //
  ///ARROW FUNCTIONS
  //
  //


  let sum = (a, b) => a + b;

  alert (sum(10,1));
//
//
//
//same as above, as below
//
//
  let sum = function(a,b) {
    return a + b;
  };

  alert (sum(10,1));


  //if there is only one argument, the code can be simpler ( no parethensis)

  let double = n => n * 2;

  alert( double(3));


  let triple = x => x * 3;
  alert(triple(3));

  let sixer = z => triple(z) + 6      // 4 * 3 = 12 + 6 = 18
  alert(sixer(4));  //18


  //No arguments = must have parenthesis

  let sayHi = () => alert("Hello!");

  sayHi();


  //
  //Arrow functions can be used the same way as Function Expressions.
  //They can create a function dynamically.

  let age = prompt("What is your age?", 18);

  let welcome = (age < 18)?
  () => alert("Get outta here!"):
  () => alert("Greetings!");

  welcome();

  //same as above and below

  let age = prompt("What is your age?", 18);

  if (age < 18) {
    alert("Get outta here!")
  } else {
    alert("Welcome.  You are of legal age.");
  }


  //// Arrow functions are used to be convenient for one-line actions.

  //Multiline arrow functions

  let sum = (a, b) => {    // curly brace opens a multiline function
  let result = a + b; 
  return result;
};

alert ( sum(1,2));

//


let product = (a, b) => {
  let result = a * b;
  return result;
};

alert(product(1,2));
//


let subtract = (a, b) => {
  let result = a - b;
  return result;
};

alert (subtract(1,2));


//
//Arrow functions can come with curly braces or none.


function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);
//
//
//

function ask (question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Choose OK or cancel!",
  () => alert("You agreed."),
  () => alert("You cancelled.")
);




function ask ()


let ask = (question, yes, no) => confirm(question) ? yes() : no();
ask(
'Do you agree?',
() => console.log('You agreed'),
() => console.log('You interrupted execution'),
);