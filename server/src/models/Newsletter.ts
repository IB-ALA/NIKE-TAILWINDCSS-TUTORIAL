import { Schema, model, Document } from "mongoose";

export interface NewsletterDocument extends Document {
  email: string;
}

const newsletterSchema = new Schema<NewsletterDocument>({
  email: {
    type: String,
    required: [true, "Please provide email"],
    unique: true,
    lowercase: true,
  },
});

export default model<NewsletterDocument>("Newsletter", newsletterSchema);
