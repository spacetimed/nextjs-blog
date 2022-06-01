# nextjs-blog 

A simple blog system, written in React and NextJS. 

Technologies include **React, NextJS, Node, Express**.

Created for demonstration purposes as a proof of concept.

---

## Roadmap
Status | Type | Function
-------|----------|----------
✅ | Backend | Rewrite with NextJS 
✅ | UI | Rewrite CSS (use REM units, NextJS modules) 
✅ | Backend | Begin Express API for post fetching 
✅ | Backend | Use hashtable to store/manage posts
... | UI | Pagination
... | UI | Optimize mobile responsiveness 
... | UI | Post creation page, requires token to post
... | UI | View counter
... | UI | Markdown 
... | UI | Sidebar
... | UI | Dark mode switcher
... | Backend | Restrict all forms of user input
... | Backend | Prevent file access for vulnerable locations 

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
    * Index ("hashed") by ID, because that's how they will be requested
    * Table structure contains post information and stored file
```
{
    'id' : id,
    'title' : title,
    'author' : author,
    'timestamp' : timestamp,
    'views' : views,
    'content' : content
}
```

```
[
    {id, title, ...},
    {id, title, ...},
]
```

### **Endpoints**
Function | Method | Endpoint
---------|--------|-----------
Retrieve frontpage feed | `GET` | /feed `?start=` `?limit=`
Retrieve post data | `GET` | /post/id `?id=`

---

## Issues

* Hydration error when directly accessing blog posts (seems to randomly be fixed?)