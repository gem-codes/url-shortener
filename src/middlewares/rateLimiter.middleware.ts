import { rateLimit } from 'express-rate-limit'

const limiter = rateLimit({
  windowMs: 60 * 1000,
  limit: 100,
  message: "You have reached the limit"
})

export default limiter
