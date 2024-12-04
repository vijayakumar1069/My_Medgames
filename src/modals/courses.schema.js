import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
   
  },
  description: {
    type: String,
    required: true,
  },
  img_for_course_details_page: {
    type: String,
   
  },
  img_for_home: {
    type: String,
   
  },
  price: {
    type: String,
    required: true,
  },
  lessons: {
    type: String,
  },
  instructorName: {
    type: String,
  },
  teachingLanguage: {
    type: String,
  },
  objective: {
    type: String,
    required: true,
  },
  key_features: {
    type: [String], // Array of strings
    required: true,
  },
  topic_covered: {
    type: [String], // Array of strings
    required: true,
  },
  benefits: {
    type: [String], // Array of strings
    required: true,
  },
  additional_resources: {
    type: [String], // Array of strings
    required: false, // Optional
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  dailyStartTime: {
    type: String, // Store time as string in HH:mm format
    required: true,
    validate: {
      validator: function (value) {
        return /^\d{2}:\d{2}$/.test(value); // Validates HH:mm format
      },
      message: (props) => `${props.value} is not a valid time format (HH:mm)`,
    },
  },
  dailyEndTime: {
    type: String, // Store time as string in HH:mm format
    required: true,
    validate: {
      validator: function (value) {
        return /^\d{2}:\d{2}$/.test(value); // Validates HH:mm format
      },
      message: (props) => `${props.value} is not a valid time format (HH:mm)`,
    },
  },
  classDays: {
    type: [String], // Array of strings for class days
    required: true,
    enum: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], // Restrict values to valid days
  },
  questions: [
    {
      question: {
        type: String,
        required: true,
      },
      answer: {
        type: String,
        required: true,
      },
    },
  ],
  reviews:[
    {
        name:{
            type: String,
            required: true
        },
        image:{
            type: String,
        },
        review_content:{
            type: String,
            required: true
        },
        rating:{
            type: Number,
            required: true
        },
        small_description:{
            type: String,
        }
    }
  ]
});


export default mongoose.models?.Course || mongoose.model("Course", courseSchema);