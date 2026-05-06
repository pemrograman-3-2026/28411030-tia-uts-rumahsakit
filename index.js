import express from "express"
import UserRoute from './routes/user.route.js'
import SpesialisRoute from './routes/spesialis.route.js'
import DokterRoute from './routes/dokter.route.js'


const app = express()
app.use(express.json())

app.get('/', (req, res)=> {
    res.send("Kristiaa!")
})

app.use('/user', UserRoute)
app.use('/spesialis', SpesialisRoute)
app.use('/dokter', DokterRoute)


app.listen(2000,()=>{
    console.log('server started')
})