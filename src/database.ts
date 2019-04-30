import mongoose from 'mongoose';

export default function connectDB(config: any) {
  mongoose.connection.once('connected', () => {
    console.log('Mongoose connected');
  });

  mongoose.connection.on('disconnect', () => {
    console.log('Mongoose disconnected');
  });

  return mongoose.connect(config.mongo.uri);
}
