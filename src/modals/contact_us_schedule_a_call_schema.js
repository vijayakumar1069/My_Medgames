// models/Inquiry.js
const mongoose = require('mongoose');

const InquirySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },
  phone: {
    type: String,
    required: true,
    trim: true
  },
  
  // Unified Inquiry Types
  inquiries: [{
    type: {
      type: String,
      enum: ['contact', 'schedule'],
      required: true
    },
    course: String,
    message: String,
    preferredContact: {
      type: String,
      enum: ['email', 'phone', 'zoom']
    },
    schedules: [{
      date: Date,
      fromTime: String,
      toTime: String
    }],
    createdAt: {
      type: Date,
      default: Date.now
    }
  }]
},
{
  timestamps: true
});

// Create indexes for performance
InquirySchema.index({ email: 1 });
InquirySchema.index({ createdAt: -1 });

// Pre-save middleware to update timestamps
InquirySchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

// Method to create a new inquiry
// Single submission method
InquirySchema.statics.submitInquiry = async function(userData, inquiryDetails) {
  try {
    // Find existing user or create new
    let user = await this.findOne({ email: userData.email });
    
    if (!user) {
      user = new this(userData);
    }
    
    // Add new inquiry to user's inquiries
    user.inquiries.push({
      type: inquiryDetails.type,
      course: inquiryDetails.course || null,
      message: inquiryDetails.message || null,
      preferredContact: inquiryDetails.preferredContact || null,
      schedules: inquiryDetails.schedules || []
    });
    
    return await user.save();
  } catch (error) {
    throw new Error(`Inquiry submission error: ${error.message}`);
  }
};

// Method to find inquiries by email
InquirySchema.statics.findInquiriesByEmail = async function(email) {
  return await this.find({ email }).sort({ createdAt: -1 });
};

const Inquiry = mongoose.models?.Inquiry || mongoose.model('Inquiry', InquirySchema);

export default Inquiry;
