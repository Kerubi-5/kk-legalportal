import mongoose from "mongoose";

const ComplaintSchema = new mongoose.Schema({
  client: {
    type: String,
    required: [true, "Please provide the client id for this complaint"],
  },
  lawyer: {
    type: String,
    required: [true, "Lawyer id not provided"],
  },
  category: {
    type: String,
    required: [true, "Category not provided"],
  },
  description: String,
  adverseParty: String,
  caseFacts: String,
  caseObjectives: String,
  clientQuestions: String,
  meetingLink: String,
  caseStatus: { type: String, default: "PENDING" },
  caseFiles: [{ type: String }],
  solutions: [{ type: String, ref: "Solution" }],
});

export default mongoose.models.Complaint ||
  mongoose.model("Complaint", ComplaintSchema);
