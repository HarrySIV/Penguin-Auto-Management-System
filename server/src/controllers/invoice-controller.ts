import { RequestHandler } from 'express';
import mongoose from 'mongoose';

import { HttpError } from '../utility/http-error';
import Invoice, { TInvoice } from '../models/Invoice';

export const createInvoice: RequestHandler = async (req, res, next) => {
  if (!req.body) {
    const err = new HttpError('there was no req.body', 500);
    return next(err);
  }
  const {} = req.body;

  const createdInvoice = new Invoice({});
  try {
    const currentSession = await mongoose.startSession();
    await createdInvoice.save();
    await currentSession.endSession();
  } catch (error) {
    const err = new HttpError('could not create invoice', 500);
    return next(err);
  }

  res
    .status(201)
    .json({ account: createdInvoice, message: 'invoices created!' });
};

export const getInvoices: RequestHandler = async (req, res, next) => {
  if (!req.body) {
    const err = new HttpError('there was no req.body', 500);
    return next(err);
  }
  const { email } = req.body;
  let invoices: TInvoice[] = [];

  try {
    invoices = await Invoice.find({ email: email });
  } catch (error) {
    const err = new HttpError('could not find invoices', 500);
  }

  res.status(200).json({ invoices: invoices, email: email });
};
