export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const crmPayload = req.body;

    const response = await fetch('https://patrickscrm.in/api/webhook/website-lead', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CRM-Secret': process.env.CRM_SECRET
      },
      body: JSON.stringify(crmPayload)
    });

    if (!response.ok) {
      throw new Error(`CRM API responded with ${response.status}`);
    }

    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    console.error('Error submitting lead to CRM:', error);
    return res.status(500).json({ error: 'Failed to submit lead' });
  }
}
