import express from 'express'
import store from './controllers/userController'
import router from './routes/router'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())
app.use(router)
app.listen(3000, () =>{ 
    console.log('listen on port 3000')
})
