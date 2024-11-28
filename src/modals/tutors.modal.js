const mongoose = require('mongoose')

const socialLinkSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { 
    type: String, 
    enum: ['whatsapp', 'Instagram', 'LinkedIn'],
    required: true 
  },
  link: { 
    type: String, 
    required: true,
    validate: {
      validator: function(v) {
        return /^https?:\/\/\w+\.\w+/.test(v)
      },
      message: props => `${props.value} is not a valid URL!`
    }
  }
})

const tutorSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true,
    trim: true
  },
  description: { 
    type: String, 
    required: true 
  },
  rating: { 
    type: Number, 
    min: 0, 
    max: 5, 
    default: 0 
  },
  reviews: { 
    type: Number, 
    default: 0 
  },
  college: { 
    type: String, 
    required: true 
  },
  specialist: { 
    type: String, 
    required: true 
  },
  image: { 
    type: String, 
    default: '/default-avatar.png' 
  },
  location: { 
    type: String, 
    enum: ['Alberta', 'British Columbia', 'Ontario'],
    required: true 
  },
  socialsLinks: [socialLinkSchema],
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
})

// Ensure unique index for name
tutorSchema.index({ name: 1 }, { unique: true })

module.exports = mongoose.models?.Tutor || mongoose.model('Tutor', tutorSchema)
