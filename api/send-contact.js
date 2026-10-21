// api/send-contact.js
// Vercel Function: recibe el formulario y envía email via Resend.

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { nombre, email, mensaje } = req.body || {};

  // Validacion server-side
  if (!nombre || !email || !mensaje) {
    return res.status(400).json({ error: 'Faltan campos obligatorios' });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Email invalido' });
  }
  if (mensaje.length < 10) {
    return res.status(400).json({ error: 'Mensaje muy corto' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'RESEND_API_KEY no configurada' });
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'Portafolio <onboarding@resend.dev>',
        to: ['pirovanipedrojose@gmail.com'],
        reply_to: email,
        subject: `Contacto de ${nombre}`,
        text: `Nombre: ${nombre}\nEmail: ${email}\n\n${mensaje}`
      })
    });

    if (!response.ok) {
      const err = await response.text();
      console.error('Resend error:', err);
      return res.status(502).json({ error: 'Error al enviar el email' });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Handler error:', err);
    return res.status(500).json({ error: 'Error interno' });
  }
}