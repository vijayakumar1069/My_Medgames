import mongoose from 'mongoose';

const TutorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    index: true
  },
  graduation: {
    type: String,
    required: [true, 'Graduation details are required'],
    trim: true
  },
  college: {
    type: String,
    required: [true, 'College is required'],
    trim: true,
    index: true
  },
  specialist: {
    type: String,
  
    trim: true,
    index: true
  },
  location: {
    type: String,
    required: [true, 'Location is required'],
    trim: true,
    index: true
  },
  image: {
    type: String,
    required: [true, 'Image is required'],
    
  }
}, {
  timestamps: true,
  indexes: [
  
    { location: 1 }
  ]
});

// Prevent model re-compilation
const Tutor = mongoose.models?.Tutor || mongoose.model('Tutor', TutorSchema);

export default Tutor;
