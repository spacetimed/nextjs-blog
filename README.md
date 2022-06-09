<p align="center">
    <img width="256" src="assets/logo.png" />
</p>


--- 

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
![Language: JavaScript](https://img.shields.io/badge/language-JavaScript-green.svg)

A blog system written with the **React** library and **NextJS** framework.

Created for educational purposes. Concepts used include:
* React
* NextJS
* Node
* Express (RESTful API)
* CSS/HTML

---

## To-do list 


Status | Category | Function
-------|----------|----------
⏳ | UI | Pagination on homepage
⏳ | Backend/Security | Sanitize all user input 
⏳ | UI | Implement view counter function
⏳ | UI | Implement dark mode switcher

---

## NextJS
* Uses **Static Site Generation** (SSG)
* Uses *remark* to transform HTML to Markdown
* Basic implementation of *mui* icons. 

---

## Express API
* Stateless (REST API)
* Markdown posts are stored in `/api/storage/{post_file_name}.md` 
* **Table** is stored in `/api/storage/{table}.json`
    * Each entry is "hashed" by ID 

*Basic structure of a post entry:*
```json
[
    {
        "id" : 0,
        "title" : "title",
        "author" : "author",
        "timestamp" : 0,
        "views" : 0,
        "content" : "content"
    }
]
```

*API Endpoints:*
Function | Method | Endpoint
---------|--------|-----------
Retrieve frontpage feed | `GET` | /feed `?start=` `?limit=`
Retrieve post data | `GET` | /post/id `?id=`
