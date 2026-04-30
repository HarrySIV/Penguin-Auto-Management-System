import { RequestHandler } from 'express';
import mongoose from 'mongoose';

import { HttpError } from '../utility/http-error';
import Appointment, { TAppointment } from '../models/Appointment';

export const createAppointment: RequestHandler = async (req, res, next) => {
  if (!req.body) {
    const err = new HttpError('there was no req.body', 500);
    return next(err);
  }
  const {} = req.body;

  const createdAppointment = new Appointment({});
  try {
    const currentSession = await mongoose.startSession();
    await createdAppointment.save();
    await currentSession.endSession();
  } catch (error) {
    const err = new HttpError('could not create invoice', 500);
    return next(err);
  }

  res
    .status(201)
    .json({ appointment: createdAppointment, message: 'appointment created!' });
};

export const getAppointments: RequestHandler = async (req, res, next) => {
  if (!req.body) {
    const err = new HttpError('there was no req.body', 500);
    return next(err);
  }
  const { email } = req.body;
  let appointments = null;

  try {
    appointments = await Appointment.find({ email: email });
  } catch (error) {
    const err = new HttpError('could not find appointments', 500);
  }

  res.status(200).json({ appointments: appointments, email: email });
};

export const getAllAppointments: RequestHandler = async (req, res, next) => {
  let appointments = null;
  try {
    appointments = await Appointment.find();
  } catch (error) {
    const err = new HttpError('could not find appointments', 500);
  }

  res.status(200).json({ appointments: appointments });
};
