// ============================================
// Portafolio — Pedro J. Pirovani
// Validacion de formulario + envio via Resend (Vercel Function)
// ============================================

const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

if (form) {
  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const nombre = form.nombre.value.trim();
    const email = form.email.value.trim();
    const mensaje = form.mensaje.value.trim();

    status.textContent = '';
    status.className = 'form-status';

    // Validacion cliente
    if (!nombre || nombre.length < 2) {
      status.textContent = 'Por favor, ingresa tu nombre.';
      status.className = 'form-status error';
      return;
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      status.textContent = 'Por favor, ingresa un email valido.';
      status.className = 'form-status error';
      return;
    }
    if (!mensaje || mensaje.length < 10) {
      status.textContent = 'El mensaje debe tener al menos 10 caracteres.';
      status.className = 'form-status error';
      return;
    }

    // Deshabilitar boton mientras envia
    const btn = form.querySelector('button[type="submit"]');
    const btnText = btn.textContent;
    btn.disabled = true;
    btn.textContent = 'Enviando...';

    try {
      const res = await fetch('/api/send-contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre, email, mensaje })
      });

      const data = await res.json();

      if (res.ok) {
        status.textContent = 'Mensaje enviado. Te respondo a la brevedad.';
        status.className = 'form-status ok';
        form.reset();
      } else {
        status.textContent = data.error || 'Error al enviar. Proba por WhatsApp.';
        status.className = 'form-status error';
      }
    } catch (err) {
      status.textContent = 'Error de red. Proba por WhatsApp.';
      status.className = 'form-status error';
    } finally {
      btn.disabled = false;
      btn.textContent = btnText;
    }
  });
}

// --- Scroll suave ---
document.querySelectorAll('a[href^="#"]').forEach(function (link) {
  link.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});