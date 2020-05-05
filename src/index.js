import http from 'http';
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const server = http.createServer(app);
const port = process.env.PORT || 3000;
console.log('zzzzz');

server.listen(port, () => {
  console.log('server is running ' + port);
});
