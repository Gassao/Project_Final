🎬 Cinema Management System – Full Stack Final Project

A full-stack web application for managing movies, members, and subscriptions.
The system is built using a React client, Node.js REST APIs, and MongoDB, and includes authentication, authorization, and role-based permissions.

This project was developed as a Final Project for a B.Sc. in Computer Science and demonstrates full end-to-end system design, server-side logic, and client-server integration.

🧠 System Overview

The system enables administrators and users to manage:

Movies

Members

Subscriptions

User permissions and roles

The application is based on a micro-services style architecture, separating concerns across multiple services and databases.

🏗️ Architecture
Client

React

Handles UI, navigation, and user interaction

Communicates with backend services via REST APIs

Server (Backend)

Two independent Node.js web services:

Cinema Web Service

Manages movies, users, and permissions

Handles authentication and authorization

Subscriptions Web Service

Manages members and subscriptions

Integrates external APIs for initial data

Databases

MongoDB

Users Database

Subscriptions Database

External APIs

TVMaze API – movies data

JSONPlaceholder API – members data

🔐 Authentication & Authorization

Login system with session timeout

Role-based access control

Permissions per user:

View Movies

Create Movies

Update Movies

Delete Movies

View Subscriptions

Create Subscriptions

Update Subscriptions

Delete Subscriptions

Only authorized users can access specific actions and screens.

✨ Key Features

Full CRUD operations (Movies, Members, Subscriptions)

User management with admin/user roles

Permissions management per user

Integration with external APIs

Server-side business logic and validation

Clean separation between client and server

RESTful API design

🧰 Technologies Used
Client

React

JavaScript

HTML

CSS

Server

Node.js

Express.js

REST APIs

Database

MongoDB (NoSQL)

Additional Tools

Git & GitHub

Linux / Unix

VS Code

▶️ How to Run (High Level)

Run MongoDB

Start both backend services:

Cinema Web Service

Subscriptions Web Service

Start the React client

Access the system via the browser

(Exact commands depend on local setup and configuration.)

🎓 Academic Context

This project was developed as part of a Bachelor’s Degree in Computer Science & Mathematics
and demonstrates:

Full-stack development

Server-side architecture

RESTful services

Database modeling

Authentication & authorization

Integration with third-party APIs

📌 Notes for Reviewers / Recruiters

The project showcases real backend responsibilities, not only frontend UI

Emphasis on system architecture, permissions, and data flow

Designed as a complete, production-style application
