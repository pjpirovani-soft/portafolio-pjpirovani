# Blueprint - Landing Page

Plantilla de landing page para proyectos nuevos. Copiala a `clients/<nombre>/`
y despues `npm install` **dentro del cliente**, no aca.

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS 4

## Stack planificado (Bloque 3)

- Zod (validacion)
- Resend (emails)
- Jest + RTL (minimo, solo schema Zod)

## Estructura

```napp/ layout, page, globals, api/contacto
components/ Hero, Features, CTA, ContactForm, Footer, ui/
lib/        schema.ts, site.ts
public/     assets
```

## Uso

1. Copiar a `clients/<cliente>/`
2. `.env.example` -> `.env.local` y completar
3. `npm install`
4. `npm run dev` / `npm run build`

## Estado

- [x] Bloque 1 - estructura + docs
- [ ] Bloque 2 - base Next.js + Tailwind
- [ ] Bloque 3 - contacto + Zod + Resend
