// first video went over using the console to view the document and how to get the elements in the javascript also how to store them in variables  
// second video also shows us how to query the dom based on class names and tag names. 
var titles = document.getElementsByClassName('title')

// console.log(Array.isArray(titles));
// console.log(Array.isArray(Array.from(titles)))


Array.from(titles).forEach(function(item){
    console.log(item);
})

