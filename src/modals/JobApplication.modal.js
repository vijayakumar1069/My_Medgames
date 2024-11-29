// models/JobApplication.js

import mongoose from "mongoose";

// Create the Mongoose Schema
const JobApplicationSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'First name is required'],
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true,
    match: [
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      'Please fill a valid email address'
    ]
  },
  phoneNumber: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true,
  },
  position: {
    type: String,
    required: [true, 'Position is required'],
    trim: true,
  },
  address: {
    type: String,
    required: [true, 'Address is required'],
    trim: true,
  },
  city: {
    type: String,
    required: [true, 'City is required'],
    trim: true,
  },
  state: {
    type: String,
    required: [true, 'State is required'],
    trim: true,
  },
  zipcode: {
    type: String,
    required: [true, 'Zipcode is required'],
    trim: true,
  },
  resume: {
    filename: {
      type: String,
      required: [true, 'Resume filename is required']
    },
    mimetype: {
      type: String,
      required: [true, 'Resume mimetype is required']
    },
    fileBuffer: {
      type: Buffer,
      required: [true, 'Resume file is required']
    },
    uploadedAt: {
      type: Date,
      default: Date.now
    }
  }
}, {
  timestamps: true // Adds createdAt and updatedAt fields
});

// Create and export the model
const JobApplication = mongoose.models?.JobApplication ||
  mongoose.model('JobApplication', JobApplicationSchema);

export default JobApplication;
