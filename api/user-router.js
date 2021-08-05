const express = require('express')
const router = express.Router();

const users = [
    {name: 'Alph', password: 'Drake1'},
    {name: 'Brittany', password: 'Fruit$'},
    {name: 'Charlie', password: 'Crew4Life'},
    {name: 'Olimar', password: 'TreasurePleasure'}
]

router.get('/users', (req, res) => {
    res.status(200).json(users)
})

router.post('/register', (req, res) => {

    users.push({name: `${req.body.name}`, password: `${req.body.password}`})
    const newAddition = users.length -1

    res.status(201).json(users[newAddition].name)
})

router.post('/login', (req, res) => {
    const name = req.body.name
    const password = req.body.password

    const auth = users.filter(user => 
        name === user.name && password === user.password
    )

     const message = () =>{
         if(auth.length === 1){
            return(`Welcome ${name}`)
        }else{
            return("Wrong Credentials")
        }
    }

    res.json({message: `${message()}`})

})

module.exports= router

    // return(`Welcome ${user.name}!`)
    //     }else{
    //         return('Wrong Credentials')
    //     }