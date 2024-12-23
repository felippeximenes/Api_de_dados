import express from 'express'

const app  = express()

const users = []

app.post('/usuarios', (req, res) => {
    
    console.log(req)
    res.send('ok aqui deu certo')

})


app.get('/usuarios', (req, res) => {
    res.send('ok deu bom')
})


app.listen(3000)
