const express = require('express')
const {
    graphqlHTTP
} = require('express-graphql')

const app = express()

app.use('/graphql', graphqlHTTP({

}))

app.listen(5000, (err) => {
    if (err) throw err
    console.log(`Server running on port 5000`)
})