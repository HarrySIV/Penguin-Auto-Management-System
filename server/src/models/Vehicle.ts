import mongoose from 'mongoose';
const { Schema } = mongoose;

export type TVehicle = {
  title: string;
  description: string;
  price: number;
  quantity: number;
};

const vehicleSchema = new Schema({
  make: { type: String },
  model: { type: String },
  year: { type: String },
  email: { type: String },
});

export default mongoose.model('Vehicle', vehicleSchema);
