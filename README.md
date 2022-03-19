# Eyewitness
Eyewitness is a dashboard to monitor and interact with Localstack SQS.

## Table of Contents

- [Project Overview](#project-overview)
  - [Server](#server)

## Project Overview

A quick GUI to interact with your Localstack SQS services.  

The output of this project is a singular bundled image to be run via [Docker](https://nodejs.org/), containing the server and client of the application.

### Server

The server, an Express.js application, is written using endpoints to execute AWS CLI commands to interact with the Localstack services.

### Code Structure
```
eyewitness/
┃
┣━━ server/               # Express.js application to interact with Localstack
┃   ┃ 
┃   ┣━━ docker/           # Instantiate Localstack SQS services for stand-alone
┃   ┣━━ src/           
┃       ┃
┃       ┣━━ api/          # Express route controllers for all the endpoints
┃       ┣━━ config/       # Environment variables and configuration
┃       ┣━━ loaders/      # Start up processes
┃       ┣━━ services/     # Business logic
┃       ┣━━ subscribers/  # Event handlers
┃       ┣━━ types/        # Type declarations
┃       ┣━━ index.ts      # Express route controllers for all the endpoints
┃       ┗━━ package.json  # Contains scripts and dependencies for the server
