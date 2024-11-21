// // first video went over using the console to view the document and how to get the elements in the javascript also how to store them in variables  
// // second video also shows us how to query the dom based on class names and tag names. 
// var titles = document.getElementsByClassName('title')

// // console.log(Array.isArray(titles));
// // console.log(Array.isArray(Array.from(titles)))


// Array.from(titles).forEach(function(item){
//     console.log(item);
// })

// // Third video 
// const wmf = document.querySelector('#book-list li:nth-child(2) .name');
// // console.log(wmf);

// var books = document.querySelector('#book-list li .name');

// books = document.querySelectorAll('#book-list li .name');
// //  console.log(books);

// Array.from(books).forEach(function(book){
//     console.log(book)
// });

// // fourth and last video
// var books = document.querySelectorAll('#book-list li .name');

// Array.from(books).forEach(function(book){
//     book.textContent += '(book title)';
// });

// const bookList = document.querySelector('#book-list');
// //bookList.innerHTML = '<h2>Books and more books...</h2>';
// bookList.innerHTML += '<p>This is how you add HTML</p>'

// // 6th vid
// const banner = document.querySelector('#page-banner');

// console.log('#page-banner node type is:', banner.nodeType);
// console.log('#page-banner node name is:', banner.nodeName);
// console.log('#page-banner has child nodes:', banner.hasChildNodes());

// const clonedBanner = banner.cloneNode(true);
// console.log(clonedBanner);



// // 7th vid
// const bookList = document.querySelector('#book-list');

// console.log('book list parent element:', bookList.parentElement);
// console.log('book list parent node:', bookList.parentNode);

// console.log('all node children:');
// Array.from(bookList.childNodes).forEach(function(node){
//   console.log(node);
// });

// console.log('all element children:');
// Array.from(bookList.children).forEach(function(node){
//   console.log(node);
// });

// const titles = bookList.querySelectorAll('.name');

// console.log('Book titles:');
// Array.from(titles).forEach(function(title){
//   console.log(title.textContent);
// });


// // 8th vid
// const bookList = document.querySelector('#book-list');

// console.log('#book-list next sibling:', bookList.nextSibling);
// console.log('#book-list next element sibling:', bookList.nextElementSibling);
// console.log('#book-list previous sibling:', bookList.previousSibling);
// console.log('#book-list previous element sibling:', bookList.previousElementSibling);

// bookList.previousElementSibling.querySelector('p').innerHTML += '<br />Too cool for everyone else!';


// // 9th vid
// const listItems = document.querySelectorAll('#book-list ul li');

// Array.from(listItems).forEach(function(item){
//   item.addEventListener('click', (e) => {

//     const li = e.target.parentElement;
//     console.log('child element to remove:', li);
//     console.log('parent element to remove child from:', li.parentElement);
//     li.parentNode.removeChild(li);

//   });
// });

// // prevent default behaviour

// const link = document.querySelector('#page-banner a');

// link.addEventListener('click', function(e){
//   e.preventDefault();
//   console.log('Navigation to', e.target.textContent, 'was prevented');
// });


// 10th vid
// var btns = document.querySelectorAll('#book-list .delete');

// Array.from(btns).forEach(function(btn){
//     btn.addEventListener('click'.function(e) {
//         const li = e.target.parentElement;
//         li.parentNode.removeChild(li);
//     });
// });
const list = document.querySelector('#book-list ul');

//delete book
list.addEventListener('click'.function(e){
    if(e.target.className == 'delete'){
        const li = e.target.parentElement;
        list.removeChild(li);
    }
});