const express = require('express')

const connectDB = require('./config/db')
var cors = require('cors')

const books = require('./routes/api/books')

const app = express()

connectDB();

app.use(cors({origin: true, credentials: true}))

app.use(express.json({ extended: false}))

app.get('/', (req, res) => res.send('Hello world!'))

app.use('/api/books', books);

const PORT = process.env.port || 8080;
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))