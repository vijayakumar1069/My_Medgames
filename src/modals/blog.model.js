import mongoose from "mongoose";
import { v4 as uuidv4 } from 'uuid';

const FileSchema = new mongoose.Schema({
  filename: {
    type: String,
    required: true
  },
  mimetype: {
    type: String,
    required: true
  },
  data: {
    type: String,
    required: true
  }
});

const BlogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
     
    
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    photo: {
      type: FileSchema,
      required: true
    },
    tags: {
      type: [String],
      default: [],
    },
    documentFile: {
      type: FileSchema,
      required: true
    },
    postedDate: {
      type: Date,
      default: Date.now,
    },
    postedTime: {
      type: String,
      default: () => new Date().toLocaleTimeString("en-US", { hour12: false }),
      validate: {
        validator: function (v) {
          return /^([0-1]\d|2[0-3]):([0-5]\d):([0-5]\d)$/.test(v);
        },
        message: "Invalid time format. Use HH:MM:SS format.",
      },
    }
  },
  {
    timestamps: true,
  }
);

BlogSchema.index({ ObjectId: 1 }, { unique: true });

const Blog = mongoose.models?.Blog || mongoose.model("Blog", BlogSchema);

export default Blog;
