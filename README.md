# WALLHAVEN Apollo Server
## This is an example project for Apollo server with a wallhaven rest api and typescript.

### Requirements
- NodeJs 12+
### Installing dependencies
- Open a terminal and run ```npm i```
### Running
- Open a terminal and run ```npm run build:dev```
- In a second terminal run ```npm run start:env```
- By default the project is going to run in ```http://localhost:4000/graphql``` the port can be changed in the .env file.
- Enjoy!!


### Generate Schema
- The project is intended to generate a concatenated schema from the all the gql files that you add in the folder schema, this approach can be also done in the client side and save some time generating automatically types, mutations, queries etc. to generate the schema run in a terminal ```npm run gql```
### Playground and env variables.
- In order to have the playground, the project need to have a .env file. and the content should be like the content in the env.sample, 

### Resources

https://wallhaven.cc/help/api

https://www.apollographql.com/docs/apollo-server/

https://nodejs.org/en/download/
