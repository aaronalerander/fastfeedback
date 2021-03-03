import { getAllFeedback } from '@/lib/db-admin';
import { db } from '@/lib/firebase-admin';

export default async function handler(req, res) {
  const siteId = req.query.siteId;
  const { feedback, error } = await getAllFeedback(siteId);

  if (result.error) {
    res.status(500).json({ error });
  }
  res.status(200).json({ feedback });
}
