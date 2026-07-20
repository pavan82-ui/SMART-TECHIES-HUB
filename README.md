why use Effect is calling alert 2 times:
because in index.js <React.StrictMode></App><React.StrictMode>
it calls 2 times in development mode ,in prod it will call 1 time
useeefect is mountimg 2 times unmounting 2 time when in case of strict mode
In production mode babel removes this strict mode
what is babel
React follows  component architecture where we can make reusable UI
It si open source j.s Library used to create UI developed by fb
React follows SOC(Seperation of concerns) architecture
Rules of jsx
1)one component must have single root element
React Fragment
is used to create parent node
why fragment?
each element in jsx having its own properties. so use React.Fragments or <>, it will not allow any default properties
2)Properties are camelcase eg:className
3)Jsx must have closing tag
advantage of jsx
ui and logic can writer together
use of Key property:
used to identify as unique element
build dynamic product listing ui using reusable components
Tailwind css is Framework ,so compilation not psooible we cannot use in stackblitz
[dummyjason/products](https://dummyjson.com/products)
useState is used to hold data
useeffect takes 2 things one is callback function ,2nd is dependency
detch is used to make API calls then is callback from APi we get Raw data format it to json

React has strict mode.In development mode we have strict mode enabled in the index.tsf file,But once it is compiled in Production mode strict mode will be removed
Use of Strict mode:
React folows unidirectional data flow:this is called declarative programming.this is called predictable programming(we can predict what data is flowing top to bottom or bottom to top but not both) egLwater flowing 100% water is flowing from top to bottom
data binding is one wat data binding
Parent to child ->Using Props
Child to Parent>need to expose Event
After installing bootstrap import that referenc ein indx.tsx file
sharable component rendering continuously
React.memo is a pure component
class component also has pure component, with this we can decrease re rendering 
product.tsx is utility component or feature specific component
soc architecture has independent component and independent services

Clean Architecture:
Presentation layer
Application Layer/Core Layer
Domain Layer
Infrastructure Layer
Which layer interacts with databse operations nd API Calling -Infrastructure
api-context  : as we have hyphen it is snake case
storage:session or local or cookies
Interceptor:It is service or middleware used to add token related information adding within the .before api call is going to API we intercept and add token related info
infrastructure layer:It will interact with backend data
web socket:
I will create seperate amount of memory and make API call.It works independent of application.It will not come Under event loop
Domain:
deals with mOdels/Entities.Entities contains Enums.enum is nothing but a named constact eg:success always 1, error always -1.
Application layer:
contains Business Logic
State ->hold data and bind to jsx

4.clean architecture:
Presentation - components
Application -use cases ports
Domain-Entities,Interfaces,Enums
Infrastructure:Apicontext service,Repositories,LOcalstorageAdapter
1st infrastructure calls the API
why typescript:
js cannot detect compile time issues
why user-props.ts
user is specific to one item one user user is having one email,id,firstname
HOC:
A component taking component as input parameter is called HOC  (export default React.Memo(UserInfo))
React.memo is HOC which Improves Performance
create component with react.memo(functional component) -> functional pure component
Pure vs impure component
react.memo is pure ,normal is impure
Use of Shared Component:reusable component, control rerenders when creating pure components
Functions:
Declarative (General,Parameterized & Returnable),Expression(Anonymous,Variable defined,Arrow function),Self Invoking -- these are synchronous functions
If u define a function what type of scope u see:Global scope,Functional scope,block scope,Lexical scope
closure will hold the previous value,It store previous value,we can treated as lexical scope
First Class Function:
2 ways of Functions based on operation 1)Synchronous2)Asynchronous
add(1,2)
function add(1,2)
{
return a+b;
}// this is declarative function, only declarative fc are hoisted, during compilation function will move to top then add(1,2) due to hoisting, while js loading browser declarative function go at top level
Function Expression:(Anonymous,variable defined,arrow function)
sub(1,2)
const sub=function(a,b){console.log(a-b)}//this will throw error becasue it is expression based fn.it will not hoist
Arow function is part of synchronous based fn
Arrow Function -Es6,callback,shorthand of anonymous fn
arrow functions part of synchronous.In synchronius we have 2 things declarative fn,expression fn,arrow will come under expression fn
Parameter and Argument:
the values inside functions are parameters eg: const sub=(a,b) =>{consol}
actual values are arguments 
sub(1,2) this is argument
Rest Parameter: allows allors infinite no. of arguments as an array
Rest vs Spread operator:
rest used in function paramer... function fn(...args)
spread:in function call or array/object Math.max(...[1,2,3]) .it streads array into single parameters

6.Functions:
function is reusable logic to perform certain task
2operations -sync(operations which completes immediately),Async(after sometime-API,timer)
3 types
1)Declarative fn(named function) types
  1)General function which is non returnable,no parameter
  2)Parameterized fn
  3)Returnable fn
2)Expression fn (eg: a=b) - no named fns
  1)Anonymous fn
  2)variable defind fn
  3)arrow fn- short hand of anonymous fn
3)SIF /IIF
Parameterized: named param,optional param,rest(...),de-structure
Scope & Closure:
Scope:
Global Scope  -define variable outside of function
Functional / Local Scope - define variable inside of function
  function greet()
  {
    var name="pavan"// function scope
    console.log(name);
  }
  greet();
  console.log(name); //reference error
Block Scope - define variable inside of braces({})
function details()
{
    {
    var name="krishna";
    }
    {
        consol.log(name);
    }
}
details(); // i will get 2 krisha. if u use let u will get only one krisha; var is not block scope variable let is block scope variable
Lexical Scope - clouser (store info/data.it will consume previous data and do next operation)
Scope Chain
Scope Pollution
Scope Shadowing
function x()
{
 a=10;
}
console.log(a); // a is not defined

function x()
{
 a=10;
}
x();
console.log(a);  //10 because a is global scope
Assign data to a variable without var/let/ const will become global scope

console.log(a);  //error
x();

function x()
{
 var a=10;
}
x();
console.log(a);  //reference error 

Scope Shadowing:
var a=1; 
function details(){
var a=10;
}
details() /polluting a this is scope pollution

let a=1;
function details()
{
var a=10;
}
details();
console.log(a); //1

function details()
{
var a=10;
}
details();
console.log(a); //reference error
closure:
closure is a combination of variable and function

function increment()
{
 let cnt=0; //state
return function inc() //logic
{
let res =cnt++
console.log(res);
return res
}
 
}

const counter=increment()
counter();   //0
counter();   //1
counter();   //2

it is rememebering previos value the scope is called lexical scope anonymous returnable function we need to use
const counter=increment()
counter calls function increment()

counter();   //0
counter();   //1
counter();   //2
counter calls return function()

convert to employee details


function empdetails()
{
let details = []; //State
return function (emp) { //logic
details.push(emp);
console.log(details);
return details;
}
}
const ed =empdetails();
ed({id:1, name: "Krishna"});
counter({id:2, name: "Jai"});
counter({id:3, name: "Jaikumar"});
 add to cart example use this
what ever present in betwwn curly braces of empdetails is lexical scope
Scope Chain:

const a=1;
function outer()
{
const b=2;
function inner()
{
const c=3;
console.log(a,b,c);

}
inner();
}
outer();
when resolvig a variable js serches inner->outer->global menas c=3 first
IIFE:
(function ()
{
//logic
})()

Scope Pollution:
creating same variable again and again with multiple variablesin a file
Scope Shadowing:
creating variable with same name

Higher Order Functions:
A fn taking another function as an argument eg:map,filter
Callback:
A fn passed as an argument to another fn
fetch().then(()=>{})  this is callback arrw functions used as calback

First class fn:
Call back hell:
async await removes call back hell

Pure fn:
A fn that always returns same o/p for the same i/p and has no side effects
function add(a,b){ return a+b }
Impure fn:
same type i/p getting different o/p's
let count=0;
fn increment()
{
count++;
return count;
}
currying:
fn applyDisount(discount)
{
return fn(price){
return price -(price*discount);
};
}
const disc10=applyDiscount(10);
disc10(10);
disc10(20);
price is changing bu discount remains same

interview  can u sort out below eg 
fn calPrice(dis,price)
{
console.log(dis,price);
}
calPrice(10,10);
calPrice(10,20);
calPrice(10,30);
create nested fn
fn calPrice(dis){
return fn(price){
console.log(dis,price);
}
}
let disc=calPrice(10);
disc(10);
disc(20);
disc(30);  this is called currying
Transforming a fn that takes multiple arguments into sequence of fn's that take one argument each
currying is nothing but closure without state
DeBouncing:
once user type is ending then only perform API call
call stack will execute imediately
 async function search(event: any) {
        setTimeout(async () => {
            const searchTerm = event.target.value;
            let res = await searchUsers(searchTerm);
            setUsers(res.users);
        }, 1000);

    }it will call multiple times.Here i want to memorize previous id then which concept i need closure.Closure is nothing but state and returnable function
    Debouncing:perform operation once user types stopping, taking id,clearing id and pushing
    debouncing is a technique  work with closure with timing functionality
    Throttling:closure + time interval. It executes one in given time during scroll we can use this
    for(var i=0; i<3; i++)
{
console.log(i);
}
console.log(i);
o/p: 0,1,2,3 undefined     var global scope

for(let j=0; j<3; j++)
{
console.log(j);
}
console.log(j);
0,1,2, j is undefined  here we are controlling memory leak ,on top still execution completed still we can access from ur memory use let to control memory leak

for(var k=0; k<5; k++)
{
 setTimeout(()=>{console.log(k)},1)
}
o/p:5 5times

for(let k=0; k<3; k++)
{
 setTimeout(()=>{console.log(k)},1)
}
o/p:0,1,2

Declarative fn are defined by name which are hoisted,these fn's are early loading means memory created and load in browser
Lazy Loading fn:not hosited because these fn's are not loaded or initialized
Declarative fn's are early loading fn's(hoisted).Expression based fn's are lazy loading(not hoisted)
Var -Global scope or functional scope
let,const -ES6 version which does not support hoisted
Why let and const were Introduced Problems with var:
·
No block scope
Silent redeclaration
Loop + async bugs
• Global pollution
I
Hard-to-debug hoisting behavior
Modern JS needed:
• Predictable scoping
• Safer variables
Immutable references by default
Hoisting
Hoisting is JavaScript's default behaviour of moving declarations of variables and functions to the top of their containing scope during compilation. Only declarations are hoisted, not initializations.
function d()
{
{
var x=10;
let y=11;
}
console.log(x);
console.log(y);
}
d()
10
error
block is ended still geting 10 becoz var will not support block to avoid these type of runtime issues will be cause u withdraw all amount from account,still getting block that is wrong

Temporal Dead Zone:(from unavailable to undefined)
The Temporal Dead Zone is the time between:
• Entering scope
And variable declaration
During this time, accessing let or const throws a ReferenceError.
console.log(a); // ReferenceError
let a = 5;
Even though let is hoisted, it is:
Hoisted but not initialized
Placed in TDZ until execution reaches declaration