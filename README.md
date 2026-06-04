# Project Structure

The project structure is as follows:

```text
.
├── client
│ ├── Dockerfile
│ ├── .dockerignore
│ ├── package.json
│ ├── public
│ │ ├── favicon.ico
│ │ ├── index.html
│ │ ├── logo192.png
│ │ ├── logo512.png
│ │ ├── manifest.json
│ │ └── robots.txt
│ ├── README.md
│ ├── src
│ │ ├── App.jsx
│ │ ├── App.test.js
│ │ ├── components
│ │ │ ├── comment-list
│ │ │ │ └── comment-list.component.jsx
│ │ │ ├── create-comment
│ │ │ │ └── create-comment.component.jsx
│ │ │ ├── create-post
│ │ │ │ └── create-post.component.jsx
│ │ │ └── post-list
│ │ │ └── post-list.component.jsx
│ │ ├── index.css
│ │ ├── index.js
│ │ ├── logo.svg
│ │ ├── reportWebVitals.js
│ │ └── setupTests.js
│ └── yarn.lock
├── comments
│ ├── Dockerfile
│ ├── .dockerignore
│ ├── index.js
│ ├── package.json
│ └── yarn.lock
├── event-bus
│ ├── Dockerfile
│ ├── .dockerignore
│ ├── index.js
│ ├── package.json
│ └── yarn.lock
├── moderation
│ ├── Dockerfile
│ ├── .dockerignore
│ ├── index.js
│ ├── package.json
│ └── yarn.lock
├── posts
│ ├── Dockerfile
│ ├── .dockerignore
│ ├── index.js
│ ├── package.json
│ └── yarn.lock
├── query
│ ├── Dockerfile
│ ├── .dockerignore
│ ├── index.js
│ ├── package.json
│ └── yarn.lock
└── skaffold.yaml

16 directories, 59 files
```

## Project Overview

### Client Service

The `client` service is a React application that serves as the user interface. It communicates with other services to fetch and update posts, comments, and moderation status.

**Key Features:**

- Create new posts.
- List existing posts.
- Comment on posts.
- View post details.

### Comments Service

The `comments` service handles comment-related operations such as creating and retrieving comments for a specific post.

**Key Features:**

- Create new comments.
- Retrieve comments for a post.
- Update comments (not implemented in this version).

### Event Bus Service

The `event-bus` service acts as a central message broker that routes events between services. It is essential for asynchronous communication within the microservices architecture.

**Key Features:**

- Publish and subscribe to events.
- Handle event routing based on the event type.

### Moderation Service

The `moderation` service monitors new posts and comments for inappropriate content. It sends moderation requests to a moderation API and updates the status of the post or comment accordingly.

**Key Features:**

- Monitor posts for moderation.
- Send moderation requests to an external API.
- Update post or comment status based on moderation response.

### Posts Service

The `posts` service handles CRUD operations for posts. It allows users to create, read, update, and delete posts.

**Key Features:**

- Create new posts.
- Retrieve existing posts.
- Update posts.
- Delete posts.

### Query Service

The `query` service provides a way to search and filter posts based on various criteria. It supports advanced querying capabilities for better data retrieval.

**Key Features:**

- Search posts by title, content, author, etc.
- Filter posts based on categories, tags, dates, etc.

## Configuration Files

### Skaffold Configuration (`skaffold.yaml`)

```yaml
apiVersion: skaffold/v4beta13
kind: Config
manifests:
  rawYaml:
    - infra/k8s/*
build:
  local:
    push: false
  artifacts:
    - image: ahsan2882/client
      context: client
      docker:
        dockerfile: Dockerfile
      sync:
        manual:
          - src: "src/**/*.{js,jsx}"
            dest: .
    - image: ahsan2882/comments
      context: comments
      docker:
        dockerfile: Dockerfile
      sync:
        manual:
          - src: "*.js"
            dest: .
    - image: ahsan2882/event-bus
      context: event-bus
      docker:
        dockerfile: Dockerfile
      sync:
        manual:
          - src: "*.js"
            dest: .
    - image: ahsan2882/moderation
      context: moderation
      docker:
        dockerfile: Dockerfile
      sync:
        manual:
          - src: "*.js"
            dest: .
    - image: ahsan2882/posts
      context: posts
      docker:
        dockerfile: Dockerfile
      sync:
        manual:
          - src: "*.js"
            dest: .
    - image: ahsan2882/query
      context: query
      docker:
        dockerfile: Dockerfile
      sync:
        manual:
          - src: "*.js"
            dest: .
```

This configuration ensures that Skaffold builds and deploys the services whenever changes are made to their source code.

Let me know if you need any further assistance!
