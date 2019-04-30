import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';

export default () => {
  const mongod = new MongoMemoryServer();

  return {
    connect: async () => {
      const connectionString = await mongod.getConnectionString('test');
      await mongoose.connect(connectionString, { useNewUrlParser: true });
    },
    disconnect: async () => {
      await mongoose.disconnect();
      await mongod.stop();
    },
  };
};