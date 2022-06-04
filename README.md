# nextjs-blog 

A simple blog system, written in React and NextJS. 

Technologies include **React, NextJS, Node, Express (RESTful API), CSS, HTML**,.

Created for demonstration purposes entirely from scratch as a proof of concept.

---

## Roadmap
Status | Type | Function
-------|----------|----------
✅ | Backend | Rewrite with NextJS 
✅ | UI | Rewrite CSS (use REM units, NextJS modules) 
✅ | Backend | Begin Express API for post fetching 
✅ | Backend | Use hashtable to store/manage posts
⏳ | UI | Pagination
⏳ | UI | Optimize mobile responsiveness 
... | UI | Markdown 
... | UI | View counter
... | UI | Dark mode switcher
... | Backend | Restrict all forms of user input
... | Backend | Prevent file access for vulnerable locations 
... | UI | Post creation page, requires token to post
... | UI | Sidebar

---

## NextJS
* Uses **Static Site Generation** (SSG)

### **Pages**
* Homepage `/pages/index.js`
    * Fetch home feed. Endpoint: `/api/feed`
    * Pagination of JSON result

* View Post `/pages/posts/[id].js`
    * Dynamic Routing
    * Fetch individual post data. Endpoint: `/api/post`

* About `/pages/about.js` 
    * Static page

---

## Express API
* Stateless (REST API)
    * Used cURL for API debugging
* Blog post information includes:
    * `{id, title, author, timestamp, views, content}`

### Storage
* Markdown posts are stored in `/api/storage/{post}.md` 
* **Table** is stored in `/api/storage/{table}.json`
    * Index ("hashed") by ID 
    * Structure:
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

### **API Endpoints**
Function | Method | Endpoint
---------|--------|-----------
Retrieve frontpage feed | `GET` | /feed `?start=` `?limit=`
Retrieve post data | `GET` | /post/id `?id=`


```

    index.js
        |_ Layout (appContainer)
            |_ Navigation
            |_ Banner
            |_ (contentContainer) 
                |_ Frontpage
            |_ Footer
    
    [id].js
        |_ Layout
            |_ Post

```