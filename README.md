<p align="center">
    <span style="font-size:32px;font-weight:700;color:rgb(147, 161, 202);">
<span style='color:#93a1ca;'>n</span><span style='color:#9395ca;'>e</span><span style='color:#9993ca;'>x</span><span style='color:#a493ca;'>t</span><span style='color:#a793ca;'>j</span><span style='color:#ac93ca;'>s</span><span style='color:#b193ca;'>-</span><span style='color:#b793ca;'>b</span><span style='color:#bb93ca;'>l</span><span style='color:#c093ca;'>o</span><span style='color:#c393ca;'>g</span>
    </span><br>
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
⏳ | UI | Pagination
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
