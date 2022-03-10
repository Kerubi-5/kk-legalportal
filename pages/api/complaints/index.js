import dbConnect from "../../../lib/dbConnect";
import Complaint from "../../../models/Complaint";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const complaints = await Complaint.find({});
        res.status(200).json({ success: true, data: complaints });
      } catch (error) {
        res.status(400).json({ success: false, data: error.errors });
      }
      break;
    case "POST":
      try {
        const complaint = await Complaint.create(
          req.body
        ); /* create a new model in the database */
        res.status(201).json({ success: true, data: complaint });
      } catch (error) {
        res.status(400).json({ success: false, data: error.errors });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
