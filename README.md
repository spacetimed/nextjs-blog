# Blog

A simple blog system, written in React. 

Technologies include React, SCSS (SASS), Node, Express, NoSQL, and NextJS.

## Roadmap 
Status | Category | Function
-------|----------|----------
⌛ | Backend | Port to NextJS 
⌛ | UI | Rewrite CSS with SCSS (use REM units, SCSS) 
⌛ | Backend | Begin Express API 
TBD | UI | Optimize mobile responsiveness 
TBD | UI | Pagination
TBD | UI | Post creation page, requires token to post
... | UI | View counter
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