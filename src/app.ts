import express from 'express'
import urlRoutes from './routes/url.routes'
import cors from 'cors'
import rateLimiter from './middlewares/rateLimiter.middleware'

const app = express();
app.use(cors())
app.use(express.json({ limit: "16kb" }))

app.use('/', rateLimiter, urlRoutes);
app.get('/api/v1', (req, res) => {
  res.status(200).json({ message: "OK" })
})

export default app;



