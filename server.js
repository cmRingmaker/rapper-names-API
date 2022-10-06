const express = require('express')
const app = express() // use express and store it in app
const PORT = 8000

const rappers = {
    '21 savage': {
        'age': 29,
        'birthName': 'Sheyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England'
    },
    'chance the rapper': {
        'age': 29,
        'birthName': 'Chancelor Bennet',
        'birthLocation': 'Chicago, Illinois'
    },
    'dylan': {
        'age': 29,
        'birthName': 'Dylan',
        'birthLocation': 'Dylan'
    }
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:rapperName', (req, res) => {
    // make a request, pull parameters off an object, then specify rapperName parameter, then store it in a var
    const rappersName = req.params.rapperName.toLowerCase()
    // using bracket notations instead of .notations so we can have whitespice
    // if our users search for a rapper in the API respond with their name, otherwise respond with Dylan
    if ( rappers[rappersName] ) {
        res.json( rappers[rappersName] )
    } else {
        res.json( rappers['dylan'] )
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on port ${PORT}!`)
})