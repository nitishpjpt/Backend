import app from './app.js';
import { connectDB } from './db.js';

const serverPort = 5000;

const serverInit = () => {
  connectDB();

  app.listen(serverPort);
  console.log('server is running on %d', serverPort);
};

serverInit();
