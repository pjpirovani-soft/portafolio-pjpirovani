# ARCHITECTURE — portafolio-pjpirovani

**Actualizado:** 2026-10-21

## Stack

- Framework: Next.js 16 (App Router)
- Lenguaje: TypeScript
- UI: React 19 + Tailwind 4
- Base de datos: Supabase (PostgreSQL + RLS)
- Auth: Supabase Auth
- Validacion: Zod
- Tests: Vitest + RTL
- Deploy: Vercel
- CI: GitHub Actions

## Estructura

```napp/           # rutas Next.js (App Router)
components/    # componentes React
lib/           # utilidades, schemas, actions
public/        # assets estaticos
supabase/      # migraciones SQL
```n
## Decisiones clave (ADR)

### ADR-001: Next.js 16 + Supabase
- **Contexto:** proyecto landing-page para cliente.
- **Decision:** Next.js 16 App Router + Supabase.
- **Razon:** stack conocido, RLS nativo, deploy simple en Vercel.

## Integraciones externas

- (ninguna por ahora)
