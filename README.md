# nextjs-blog 

A simple blog system, written in React and NextJS. 

Technologies include **React, NextJS, Node, Express**.

Created for demonstration purposes.

---

## Roadmap
Status | Type | Function
-------|----------|----------
✅ | Backend | Rewrite with NextJS 
✅ | UI | Rewrite CSS (use REM units, NextJS modules) 
⌛ | Backend | Begin Express API for post CRUD 
⌛ | Backend | Use hashtable to store/manage posts
... | UI | Pagination
... | UI | Optimize mobile responsiveness 
... | UI | Post creation page, requires token to post
... | UI | View counter
... | UI | Markdown 
... | UI | Sidebar
... | UI | Dark mode switcher

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
* NoSQL
* Handle all CRUD operations (Create, Read, Update, Delete)
* Stateless (REST API)
* Blog post information includes:
    * `{id, title, author, timestamp, views, content}`

### Storage
* Markdown posts are stored in `/api/storage/{post}.md` 
* **HashTable** is stored in `/api/storage/{table}.json`
    * Hashed by ID, because that's how they will be requested
    * Table structure contains post information and stored file

### **Endpoints**
Function | Method | Endpoint
--------|--------|-----------
Retrieve frontpage feed | `GET` | /feed `?start=` `?limit=`
Retrieve post data | `GET` | /post `?id=`