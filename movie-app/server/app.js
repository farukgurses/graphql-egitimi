const express = require("express");
const cors = require('cors')
const expressGraphQL = require('express-graphql').graphqlHTTP;

const schema = require('./schema/schema')

const app = express();

app.use(cors())

//dotenv
require('dotenv').config()

//db
const db = require('./helpers/db')()

app.use('/graphql', expressGraphQL({
    schema,
    graphiql: true
}));

app.listen(5000, () => {
	console.log("Server is running");
});
