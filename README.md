# Eyewitness
Eyewitness is a dashboard to monitor and interact with Localstack SQS.

## Table of Contents

- [Project Overview](#project-overview)
  - [Server](#server)
  - [Client](#client)

## Project Overview

A quick GUI to interact with your Localstack SQS services.  

The output of this project is a singular bundled image to be run via [Docker](https://nodejs.org/), containing the server and client of the application.

### Server

The server, an Express.js application, is written using endpoints to execute AWS CLI commands to interact with the Localstack services.

### Client

The client, a Vue.js application, will make interacting with Localstack SQS queues painless and increase developer efficiency.

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
┃
┣━━ client/               # Vite + Vue.js 3 front-end
┃   ┃
┃   ┣━━ cypress/          # Automated UI test suite
┃   ┣━━ config/           # Project and build configuration
┃   ┣━━ src/
┃       ┃
┃       ┣━━ components/   # Reusable components
┃       ┣━━ domain/       # Type definitions and contracts
┃       ┣━━ infra/        # Implementations of the domain types and services
┃       ┣━━ mocks/        # Mock adaptors to use for test implementations
┃       ┣━━ public/       # Public assets for the front-end
┃       ┣━━ types/        # Type declarations
┃       ┣━━ App.vue       # Main Vue application
┃       ┣━━ main.ts/      # Build file for development
┃       ┗━━ package.json  # Contains scripts and dependencies for the server
