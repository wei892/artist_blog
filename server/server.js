import express from 'express'
import blogRouter from './routes/blog.js';

const app = express()
app.use('/public', express.static('./public'));
app.use('/scripts', express.static('./public/scripts'));
app.use('/blog', blogRouter)

app.get('/', (req, res)=> {
    res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">Artists Blog API </h1>')
})

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`)
})