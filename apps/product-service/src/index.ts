import exress, { Request, Response } from 'express';
import cors from "cors"
import { clerkMiddleware, getAuth } from '@clerk/express'
import { shouldBeUser } from './middleware/authMiddleware.js';

const app = exress();
app.use(cors({
    origin: ['http://localhost:3002', 'http://localhost:3003'],
    credentials: true
}))


app.use(clerkMiddleware())

app.get('/', shouldBeUser, (req: Request, res: Response) => {
  const auth = getAuth(req);
  console.log('User ID:', req.userId);
  res.send('Product service is up and running!');
});

app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'OK',
    uptime: process.uptime(),
    timestamp: Date.now()
  })
});

app.listen(8000, () => {
  console.log('Product service is running on port 8000');
});