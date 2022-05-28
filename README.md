# Blog

A simple blog system, written in React. 

Technologies include React, SCSS (SASS), Node, Express, NoSQL, and NextJS.

## Planned features 
Status | Category | Function
-------|----------|----------
⌛ | Backend | Port to NextJS 
⌛ | UI | Rewrite CSS (use REM units) 
⌛ | Backend | Begin Express API for post CRUD 
TBD | UI | Optimize mobile responsiveness 
TBD | UI | Pagination
TBD | UI | Post creation page, requires token to post
... | UI | View counter
... | UI | Markdown 
... | UI | Sidebar
... | UI | Dark mode switcher

## Express API:
* NoSQL
* Handle all CRUD operations (Create, Read, Update, Delete)
* Handle post likes/views

## To do
* Read about Hooks (usehooks.com)
* NextJS

---

## NextJS:
* Uses **Static Generation**
### **Pages/structures:**

* Homepage / (index.js)
    * utils/fetchPosts.js
        * getFrontFeed

* View Post /1-title1 , /2-title2 , ...
    * Dynamic Routing
    * /[id]-[title]
    * utils/fetchPosts.js
        * getPostParams
        * getPostData
       
* /about (about.js)
    * Purely static [?]

api
* [?]