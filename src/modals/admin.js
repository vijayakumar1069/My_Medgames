
import mongoose from 'mongoose'

const adminSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: 'admin',
   
  },
}, { timestamps: true })

export const Admin = mongoose.models?.Admin || mongoose.model('Admin', adminSchema)
