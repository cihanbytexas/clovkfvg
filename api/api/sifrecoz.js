export default function handler(req, res) {
  if (req.method === 'POST') {
    const { sifrelenmis_message } = req.body;
    if (!sifrelenmis_message) {
      return res.status(400).json({ error: 'Şifrelenmiş mesaj alanı gereklidir' });
    }
    // Base64 çözme
    const sifre = Buffer.from(sifrelenmis_message, 'base64').toString('utf-8');
    res.status(200).json({ sifre: sifre });
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
