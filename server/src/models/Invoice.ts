import mongoose from 'mongoose';
const { Schema } = mongoose;

export type TInvoice = {
  repairs: string[];
  amount: number;
  email: string;
};

const invoiceSchema = new Schema({
  repairs: [{ type: String }],
  amount: { type: Number },
  email: { type: String },
});

export default mongoose.model('Invoice', invoiceSchema);
