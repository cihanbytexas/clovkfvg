export default function handler(req, res) {
  if (req.method === 'POST') {
    const { message } = req.body;
    if (!message) {
      return res.status(400).json({ error: 'Mesaj alanı gereklidir' });
    }
    // Base64 şifreleme
    const sifrelenmisMessage = Buffer.from(message).toString('base64');
    res.status(200).json({ sifrelenmis_message: sifrelenmisMessage });
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
