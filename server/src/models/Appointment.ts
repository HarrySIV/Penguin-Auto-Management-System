import mongoose from 'mongoose';
const { Schema } = mongoose;

export type TAppointment = {
  date: string;
  time: number;
  period: string;
  email: string;
};

const appointmentSchema = new Schema({
  date: { type: String },
  time: { type: Number },
  period: { type: String },
  email: { type: String },
});

export default mongoose.model('Appointment', appointmentSchema);
