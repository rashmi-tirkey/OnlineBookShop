import express from 'express';
import path from 'path';
import { urlencoded, json } from 'body-parser';
import cors from 'cors';
import { Promise, connect } from 'mongoose';
import { DBconfig } from './config/DB';

const app = express();
import UserSchema from './routes/userAPI';
import BooksSchema from './routes/bookAPI';
import CartsSchema from './routes/cartAPI';
import AdminSchema from './routes/AdminAPI';

Promise = global.Promise;
connect(DBconfig.DB).then(
  () => { console.log('Database is connected') },
  err => { console.log('Can not connect to the database' + err) }
  );

app.use(urlencoded({ extended: false }))
app.use(json());
app.use(cors());
const Port = process.env.PORT || 4000;

app.use('/users', UserSchema);
app.use('/books', BooksSchema);
app.use('/carts', CartsSchema);
app.use('/admin', AdminSchema)
const server = app.listen(Port, function () {
  console.log('Listening on port ' + Port);
});

export default server