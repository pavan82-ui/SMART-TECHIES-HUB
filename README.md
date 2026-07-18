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