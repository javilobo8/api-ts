import {
  default as mongoose,
  Document,
  Schema
} from 'mongoose';

const collectionName = 'products';

export interface IProduct extends Document {
  name?: string;
  description?: string;
}

const ProductSchema: Schema = new Schema({
  name: { type: String },
  description: { type: String },
}, { collection: collectionName, timestamps: true, versionKey: false });

export default mongoose.model<IProduct>(collectionName, ProductSchema);
