import mongoose from 'mongoose';
const { Schema } = mongoose;

export type TInvoice = {
  repairs: {
    repairs: string[];
    amount: number;
  };
  total: number;
  email: string;
};

const invoiceSchema = new Schema({
  repairs: [{ type: String }, { type: Number }],
  id: { type: Number },
  total: { type: Number },
  date: { type: Date },
  email: { type: String },
  vehicle: {
    make: { type: String },
    model: { type: String },
    year: { type: String },
  },
});

export default mongoose.model('Invoice', invoiceSchema);
