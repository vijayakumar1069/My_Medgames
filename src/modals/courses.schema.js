import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true, // Unique value for the name field
    },
    description: {
      type: String,
      required: true,
    },
    img_for_course_details_page: {
      url: {
        type: String,
        required: true, // Image URL for the course details page
      },
      cloudinary_id: {
        type: String,
        required: true, // Image URL for the course details page
      },
      fileName: {
        type: String,
        required: true, // Image URL for the course details page
      },
    },
    img_for_home: {
      url: {
        type: String,
        required: true, // Image URL for the course details page
      },
      cloudinary_id: {
        type: String,
        required: true, // Image URL for the course details page
      },
      fileName: {
        type: String,
        required: true, // Image URL for the course details page
      },
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
    shown_on_home_screen: {
      type: Boolean,
      default: false, // Default value
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
    },
    endDate: {
      type: Date,
    },
    dailyStartTime: {
      type: String, // Store time as string in HH:mm format

      validate: {
        validator: function (value) {
          return /^\d{2}:\d{2}$/.test(value); // Validates HH:mm format
        },
        message: (props) => `${props.value} is not a valid time format (HH:mm)`,
      },
    },
    dailyEndTime: {
      type: String, // Store time as string in HH:mm format

      validate: {
        validator: function (value) {
          return /^\d{2}:\d{2}$/.test(value); // Validates HH:mm format
        },
        message: (props) => `${props.value} is not a valid time format (HH:mm)`,
      },
    },
    classDays: {
      type: [String], // Array of strings for class days

      enum: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ], // Restrict values to valid days
    },
    via: {
      type: String,
      enum: ["Zoom", "Microsoft Teams", "Google Meet", "Offline Classes"],
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
    reviews: [
      {
        name: {
          type: String,
          required: true,
        },
        image: {
          type: String,
        },
        cloudinaryPublicId: {
          type: String,
        },
        fileName: {
          type: String,
        },
        review_content: {
          type: String,
          required: true,
        },
        rating: {
          type: Number,
          required: true,
        },
        small_description: {
          type: String,
        },
      },
    ],
    downloadable_pdf: [
      {
        cloudinaryPublicId: {
          type: String,
        },
        secureUrl: {
          type: String,
        },
        originalFilename: {
          type: String,
        },
        bytes: {
          type: Number,
        },
        format: {
          type: String,
        },
        resourceType: {
          type: String,
        },
      },
    ],
    video_section: [
      {
        cloudinaryPublicId: {
          type: String,
        },
        secureUrl: {
          type: String,
        },
        originalFilename: {
          type: String,
        },
        bytes: {
          type: Number,
        },
        format: {
          type: String,
        },
        resourceType: {
          type: String,
        },
      },
    ],
    redirect_link: {
      type: String,
    },
    shown_on_home_screen_courses_section: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models?.Course ||
  mongoose.model("Course", courseSchema);
