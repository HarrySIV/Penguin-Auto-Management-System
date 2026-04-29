import { RequestHandler } from 'express';
import mongoose from 'mongoose';

import { HttpError } from '../utility/http-error';
import Vehicle, { TVehicle } from '../models/Vehicle';

export const createVehicle: RequestHandler = async (req, res, next) => {
  if (!req.body) {
    const err = new HttpError('there was no req.body', 500);
    return next(err);
  }
  const { make, model, year, email } = req.body;

  const createdVehicle = new Vehicle({
    make: make,
    model: model,
    year: year,
    email: email,
  });
  try {
    const currentSession = await mongoose.startSession();
    await createdVehicle.save();
    await currentSession.endSession();
  } catch (error) {
    const err = new HttpError('could not create vehicle', 500);
    return next(err);
  }

  res
    .status(201)
    .json({ vehicle: createdVehicle, message: 'vehicle created!' });
};

export const getVehicles: RequestHandler = async (req, res, next) => {
  if (!req.body) {
    const err = new HttpError('there was no req.body', 500);
    return next(err);
  }
  const { email } = req.body;
  let vehicles = null;

  try {
    vehicles = await Vehicle.find({ email: email });
  } catch (error) {
    const err = new HttpError('could not find vehicles', 500);
  }

  res.status(200).json({ vehicles: vehicles, email: email });
};
