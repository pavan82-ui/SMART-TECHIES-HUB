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
Components:
React JS Components
Definitions
A component in React JS is a reusable, independent piece of UI that defines how a part of the user interface looks and behaves.
Components are building blocks of a React application. SHUB
A component is a JavaScript function or class that returns JSX (UI) and can accept inputs called props.
Types of Components
1. Functional Components
2. Class Components
React JS
fc are j.s fn's that returns jsx.
modern react 16.8 prefers fn because of hooks.
ways to create fc:
general fn:
fn Header()
{
    return <h1>React </h1>
}
Anonymous function:
const Header =function()
{
     return <h1>React </h1>
}
margin,padding:
wrt element outer space is margin ,inner space is padding
if u use default then no need to use brace while importing
Why Preferred Today?
Simpler syntax
Hooks support
Better performance optimizations • Easier testing
Cleaner code
Rendering Behaviour
Functional components:
• Re-render when props or state change
Can be optimized using:
React.memo
useMemo
Class component Life cycle events:
constructor to component did mount there are 3 phases,Mounting ,updating,unmounting
render is for mounting,updating
How to maintain state in class component:define constructor,constructor has base class constructor(super which is mandatory)
this.state={
    title:"class component"
}
class component must have return this is lifecycle event for redenering means dispaly on UI
constructor is also life cycle event used for initialization(variables or data).How to maintain state by using this.state, setsttae is used to update state,class components has extra syntaxes compared to fn component
Pure & Impure component
Pure Components Normal Component Re-renders whenever:
• Parent re-renders
Props change
State changes
Pure Component
React JS
Automatically performs shallow comparison of props & state.
when parent rerenders child also rerenders that is why we need pure component,encapsulate child component inside React.memo

React.memo
React.memo is a performance optimization HOC that prevents unnecessary re-renders of functional components when their props have not changed.
It works like a pure component for functional components.
If the props are the same as the previous render → React skips re-rendering that component.
Reconsilation:
it is concept of virtual dom
in class component it is Pure component
First class functions are nothing but by using the function only, we have implemented these components, right. What is meant by first class component? A component that can be called from another component, a component that can be created from a declarative syntax, a component that can be created from an expression-based syntax by assigning to a variable and a component passing as input parameter to another component. By satisfying all these one, we can say a first class component.

So first class component, a higher order component, do not be confused. If anybody asking like what is the difference between a higher order component versus a first class component or higher order function versus a first class function, simple. First class functions will follow all the rules, higher order functions follow only one rule that is a function that taking another function as input parameter, clear.

First class function is only one rule, a function taking another function as input parameter. If I say a first class function, it should behave like a higher order function, variable function, anonymous function and expression-based function, all three rules, okay. If you want to take the difference, higher order component versus first class component.

So React did not say about the comparison, all these things, this comparison will come from our experience, people will ask and try to compare. So higher order components means a component taking another component as input parameter. In case of first class component, tell me, so what is the first class component? A component, follow three rules, what are three rules? It could be declarative function, it can be expression-based function.

Declarative function, so do not simply say like, I mean here it is okay, but in the interview, please try to explain what is the declarative function and expression-based function also, okay. Expression, what is mean by expression function? So again it will become, so a component, if a declarative function, a component can be anonymous function and a component can be assigned to a variable also, okay. So that one I just simplified and just to remember I am saying this one, if you are saying simply three rules, they may ask like, can I assign to a variable, okay, next one is the higher order component, okay.

So while explaining an interview, you must be, what are the points you understood, right, try to explain the points. So some situations, interviews are not like us, right, whatever they are thinking in that prospective, they will be thinking and expecting answers, so we should add like all the points, they will be clear, okay. So as for a real-time project, how many types of keys are there, how many types, one is a feature component, in a real-time project wise I am saying component, okay.

If I am asking about types of houses, you may answer like, I have two questions, one is types of houses and construction types of houses. If I am asking the types of houses means apartment, individual house or villa, okay, or else you can say like a shop, these are the types of houses. If I am same asking like a construction types, you can say like a complete cement waste, sand under bricks plus cement waste.

Next like a simply a rock construction type, these are the types. So these components while you are explaining as per your real-time project, these are the types, usage, I mean to say usage types. So those are the construction types or the two types, one is the functional component, last one is construction types.

These are real-time project usage type. Feature component, nothing but your login, product, dashboard, these are. Next one is the shared component.

What is mean by shared? For example, you are having one model, okay, you are having a drop-down, you are having a pagination, the same pagination, can I use it in multiple? You are having a grid, can I use this grid in multiple places? So that is nothing but shared component. Next atomic component, what is mean by atomic component? In the grid, we are having grid cells, right. So just you two understood, I just give you like a, this is your atomic component, nothing but this one.

So input label and text box. So the atomic can have some placeholder and the behaviour. So this atomic can be used as an email, correct? This atomic can, I can use like a user name, the same atomic I can use like a first name, last name, kind of anything.

So one component, multiple behaviour, okay. See here, two atomic components I am using, email and password. So input type is a password, input type is an email, that you can pass as a property and you can play, okay.

My context, that is a text box. That atomic component finally used inside of a template. So at the end, here you are having a login page.

In this login page, this having a two atomic components which will be targeted. So page, page will have a template. Template will be organised by using a multiple atomic components.
Controlled vs UnControlled Components:
this.stae in class component is controlled component means internally component controlling it the state of component controlled by itself, in fc usestate
State controlled by DOM is uncontrolled component means instead of recat state using differenet ways to handle data
in real time use controlled component. the controlled component manages virtal dom etc.For uncontrooled component need to explicitly manage DOM
How ur veryfing code in Inspect:using React Developer tools whre we can see rendering also
class com;onent life cycle events:
3 phases 1)mounting2)updating3)unmounting
getDerivedStateFromProps:mostly we don't use (when we have parent-child relation to get props)
render:to render jsx
componentDidmount: ui is loaded need to perform API call

button clicked then state changed then getDerivedStateFromProps will call then render fn will call
ShouldComponentUpdate:
if ShouldComponentUpdate is true then rerenders component happen
getSnapshotBeforeUpdate: before ui update want to trace any changes
componentDidUpdate:fire after component update
componentWillUnmount:
//any objects created during the comonent lifecycle should be destroyed here to avoid memory leaks
Strict Mode:
use strict in js:
 "use strict"
x=1;
console.log(x); error// es6it will not allow undeclared variables
rerendering comonent questions::
React Fiber, Reconsilation process,virtual dom,time slicing, rerender phase,commit phase
Classic component lifecycle having the three phases, one is like a mounting phases, second one is updating phases, third one is unmounting phases. So in the mounting what it will happen, which is nothing but the component is loading. In the updating phase, while user is modifying right, as a user you will modify something, text box is changing, I want to save this data, update this data.

So that will become in the updating phase. Next one is unmounting. What is mean by unmounting? Your component is unmounted, which is loading out of the DOM.

So there are three phases in case of classic component. So that is the reason if you are observing the class component, there is a lifecycle you must follow. So this is the declarative syntax or a sugar-coated syntax, extra you need to be add to your component, then only it will become a class component.

In case of the React functional components are simple, whatever you want you can plug and play, like by using a hooks. Okay. So when this component will be start up from a mounting, my component is loaded.

First constructor will be called. Yesterday we have seen right, I just created a state variables and binding a default value. Next.

Next method is the get derived from, get a derived state from props. I will show you with the example. Okay.

Next one is a render function, it will be render the UI. Next component did mount, like you have the user to perform AP calls and a timer actions. This is the one part of mounting phase.

Next one is updating phase. In case of update also, if you are changing the parent component or passing the data to a child component, again get derived state from props will be called. Okay.

Next one is the should component update. What does this mean by should component update? So if you want to update that before going to update the component or before going to render this one, if you want to update or not. So these methods are important.

Nowadays this question is not asking frequently, but you should are good to know before going for an interview about the lifecycle. Next, get a snapshot before update. Next component did update.

Next one is unmounting. Unmounting in the sense of once you are away from that component. For example, I open a registration page.

I'm going out of a registration page. Okay. At that time, it will be unmount from or unload from the UI.

That is called unmounting phase. Okay. So don't worry.

Let us see all these methods with the example. So let me go to this class component. Yesterday I have added a constructor, right? So let me add a console.log of a constructor.

So first method is a constructor. What is the second method? Get a derived state from props. This is the parent class itself.

You don't have it, but I'm just adding a get a derived state from props. Okay. So let me add a console.log like get a derived state from props.

Okay. So what is the next method? Next, you are having the render. Render is already added in the last.

Okay. So finally, component did mount. Component did mount, which is nothing but your use effect.

Virtual DOm:Replication of Real DOM
initial componenent render
Re-Render -where it si rerendering in Virtual DOM After rerender completed it commit the
render virtual Dom to a DOM in between we are having time slicing
React Fiber:
IN Event Loop we have 2 things 1)call stack 2)QUeue stack in queue asynchronous operatiosn will executeAeg:Timers API calling those will execute in time slising phase
Why React performance more than Angular:
Angular has seperate html file,Recat has jsx code react will create object and render on UI by using virtual dom 
reconsilation is comparing new value with old value 
vdom is pure js object
Key:
In js it is idenfied by using id ,in React it is identified using key
key is property of jsx element it is uniquly identify the jsx element
React reconsilitaion by comparing old value and current value they are using React fiber engine
In React fiber engine they are uniquly identifying uisng keys first.It will check keys are exist or not
Batching:
setstae is synchrinous eventhough multiple changes it will rerender only once
 
We are completed discussed on this reactor rendering architecture now, I'm giving a pause and tell me do you have any question? So how many pages will go for a rendering? re-rendering Please everybody unmute yourself. Take it as this is interview and try to answer How many phases are happening in the re-rendering? What are those? A Rendering phase and the commit Rendering happening on the two phases. Rendering phase, commit.

What happening in the rendering phase? Who will happen this, I mean, who will cause this rendering phase when you have updating the state or your props? Parent and the child. What happened when our rendering started faster? Reactor fibre created Nodes in the virtual DOM Reconciliation will be engine will become in the rendering phase compare the previous value under new value Previous value new value changes that is called re-render If the previous node or current node changes that is called a remount that will happen in the virtual DOM Okay in this virtual DOM instead of rendering or sending a bulk object to a UI it is going to be slice creating a chunks and forming a Fibre tree that fibre tree will go to a commit phase in the commit phase Re-render or object will be load In the priority, what are the priorities? High priority is nothing but a the less costlier elements like a text box dropdowns images Labels and then it will be complete Rendering run will come Now clear everyone on this diagram Yes Are you confident to explain but I know you can able to explain by the practise of reading two or three times So while you are reading this document, you may come to but still go to the video one time two time again So you will be more familiar So one of the theoretical and definitely asked a question from this Okay, maybe you can unmute yourself I will randomly ask a few questions from this topic right or wrong you can just give it What is the time slicing Is it only a synchronous operations Translating is the process of eating Large optic to a into a chance. Remember like the time slicing is the chance Thanks. 

Okay. What is a reactive fibre architecture? What is a reactive fibre architecture Reactive fibre is a engine Reactive fibre is a engine in the reactor. Don't worry in the one Session you may not able to get but please be tranquil It was introduced in which version of react react a 16 version what it will do It will compare the previous value current value by the shallow comparison hmm And will render the virtual down not real down remember virtual down Now tell me what is a reactive fibre It will compare the previous and current value in virtual down So reactive fibre is an engine which is introduced in a 16 version It will compare the previous value current value it will be rendered Before this reactive fibre right they are manually comparing taking the previous value current value comparison and execute Okay, so are you confident now So I'm just giving a path if you have any question you can ask me I'm stopping For example, anybody ask you the question from the what is the keys you know, right? The keys is a part of comparison. 

We will do the comparison Reactive fibre will do the comparison in where in the virtual now So you are not should like it should be what is the topic here? For example, this take it as a B, you know the A and C so keys are a part of the comparison uniquely identified by the reactive fibre engine the Virtual down this reactive fibre engine introduced in a reactor 16 version for a comparison purpose simple straightforward answer You have a even like a five to six points in a one arm Okay So while you are following not only the notes So just to go to that video again and again in the video explanation can be different from the notes, right? For example, they may ask a question like Randomly for example, they are asking this one. What is a priority levels in the reconciliation process? Okay Reconciliation process of follows the three priorities high priority medium priority low priority this priority will be come in the reconciliation process of To render and the committing the elements on the UI in the high priority it is going to be load the Images buttons layouts the medium priority fetching the data and loaded. So low priority It will be do like a large objects priority This process will happen from the rendering phase to a committee The rendering phases virtual DOM will prioritise by using a reconciliation process Okay, so whatever you are understanding right then put it in a votes Simple yeah Any questions Okay, thank you if you have a question, please do stay on this Which floor

