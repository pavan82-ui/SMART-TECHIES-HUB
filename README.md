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

i want to hide some content then we have template tag
<template>
<div>hide thid div</div>
</template>  // template will not display on browser.template is readily available element
Purpose of semantic element
once u deploy application.googlw will read metadata and semantic element data and hold that info
google maintaining history of website and fetch it
when user entered smart techies hub youtube ,insta is coming but not website because website not searched too much.google not holding seo.if u search multiple times then it reads.not only semantic elements it can reads also tags.so browser needs to understood and fetch the relevant websites based on semantic element

Why Semantic Elements are Important for SEO
Benefits:
1. Better search engine crawling 2. Improves website accessibility 3. Cleaner code structure
4. Helps screen readers
5. Improves website ranking
Example:
<article>
<h2>Al Technology</h2>
<p>Latest trends in Al...</p> </article>
seo requires meta info and semantic 
p,h1... why these elements occupy full width because it has predefined display block style

Empty Elements
Elements that do not have content inside them.
Example:
<br>
<hr>
<img>
I
Void Elements
Elements that do not have closing tags.
Examples:
<img>
<input>
<br>
<meta>
<hr>