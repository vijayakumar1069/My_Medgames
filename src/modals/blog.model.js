import mongoose from "mongoose";


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
      url: {
        type: String,
        required: true
      },
      cloudinary_id: {
        type: String,
        required: true
      },
      fileName:
      {
        type: String,
        required: true
      }
    },
    documentFile: {
      url: {
        type: String,
        required: true
      },
      cloudinary_id: {
        type: String,
        required: true
      },
      fileName:
      {
        type: String,
        required: true
      }
    },
    tags: {
      type: [String],
      default: [],
    },
    postedDate: {
      type: Date,
      default: Date.now,
    },
    postedTime: {
      type: String,
      default: () => new Date().toLocaleTimeString("en-US", { hour12: false }),
    }
  },
  {
    timestamps: true,
  }
);



const Blog = mongoose.models?.Blog || mongoose.model("Blog", BlogSchema);

export default Blog;
