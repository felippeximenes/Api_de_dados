import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app  = express()
app.use(express.json())

const users = []

app.post('/usuarios', (req, res) => {
    
    users.push(req.body)

    res.status(201).json(req.body)

})


app.get('/usuarios', (req, res) => {
    res.status(200).json(users)
})


app.listen(3000)



/* Usuario: felippelorran
   senha: 27610252Fe */