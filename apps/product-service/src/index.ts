import exress, { Request, Response } from 'express';
import cors from "cors"

const app = exress();
app.use(cors({
    origin: ['http://localhost:3002', 'http://localhost:3003'],
    credentials: true
}))

app.get('/', (req: Request, res: Response) => {
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