import express from 'express'
import path from 'path'

import { fileURLToPath } from 'url'

import blogData from '../data/blog.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();
router.get('/', (req, res) => {
    res.status(200).json(blogData);
})

router.get('/:blogId', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../public/post.html'))
})

export default router