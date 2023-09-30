import {pool} from './database.js'
import './dotenv.js'
import blogData from '../data/blog.js'

const createBlogsTable = async () => {
    const createTableQuery = `
        DROP TABLE IF EXISTS blogs;

        CREATE TABLE IF NOT EXISTS blog (
            id SERIAL PRIMARY KEY,
            title TEXT NOT NULL,
            imageURL TEXT NOT NULL,
            description TEXT NOT NULL,
            datePosted TIMESTAMP NOT NULL
        )   
    `

    try {
        const res = await pool.query(createTableQuery)
        console.log('🎉 blog table created successfully')
    } catch (err) {
        console.error('⚠️ error creating gifts table', err)
    }
}

const seedBlogTable = async () => {
    await createBlogsTable()
    blogData.forEach((post) => {
        const insertQuery = {
            text: 'INSERT INTO blog (id, title, imageURL,  description, datePosted) VALUES ($1, $2, $3, $4, $5)'
          }

          const values = [
            post.id,
            post.title,
            post.imageURL,
            post.description,
            post.datePosted,
        ]

        pool.query(insertQuery, values, (err, res) => {
            if (err) {
                console.error('⚠️ error inserting blog', err)
                return
            }
        
            console.log(`✅ ${post.title} added successfully`)
        })
    })
  }

seedBlogTable();