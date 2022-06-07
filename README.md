# nextjs-blog 

A simple blog system, written with the *React* library and *NextJS* framework. 

Technologies include *React, NextJS, Node, Express (RESTful API), CSS, HTML*.

Created for educational purposes as a proof of concept.

---

## To do 
Status | Category | Function
-------|----------|----------
⏳ | UI | Pagination
⏳ | Backend/Security | Restrict all forms of user input -> check for 'isInt' from params in api
⏳ | Backend/Security | Prevent file access for vulnerable locations 
⏳ | UI | View counter
⏳ | UI | Implement dark mode switcher

---

## NextJS
* Uses **Static Site Generation** (SSG)
* Uses *remark* to transform HTML to Markdown.
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

*Endpoints:*
Function | Method | Endpoint
---------|--------|-----------
Retrieve frontpage feed | `GET` | /feed `?start=` `?limit=`
Retrieve post data | `GET` | /post/id `?id=`
