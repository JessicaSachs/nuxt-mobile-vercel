# Nuxt ❤️ Mobile ❤️ Vercel

This is a tiny demo to show off **Nuxt's route rules integration with a Mobile App built on top of Ionic's Capacitor and deployed on Vercel's infrastructure**.

Here are a few different pages to try:

- [/](https://nuxt-mobile-vercel.vercel.app/) - revalidated every 60 seconds, in the background
- [/static](https://nuxt-mobile-vercel.vercel.app/static) - generated on demand and then cached permanently
- [/prerendered](https://nuxt-mobile-vercel.vercel.app/prerendered) - generated at build time and cached permanently
- [/dynamic](https://nuxt-mobile-vercel.vercel.app/dynamic) - always fresh

The only config required:

```js
export default defineNuxtConfig({
  routeRules: {
    // all routes (by default) will be revalidated every 60 seconds, in the background
    '/**': { isr: 60 },
    // this page will be generated on demand and then cached permanently
    '/static': { isr: true },
    // this page is generated at build time and cached permanently
    '/prerendered': { prerender: true },
    // this page will be always fresh
    '/dynamic': { isr: false },
    // you can do lots more with route rules too!
    '/redirect': { redirect: '/static' },
    '/headers': { headers: { 'x-magic-of': 'nuxt and vercel' } },
    '/spa': { ssr: false },
  },
})
```

## Setup

Enable corepack:

```bash
npx corepack enable
```

Make sure to install the dependencies:

```bash
pnpm install
```

## Credits

It's all prior art.

🐢 This is a direct fork of [nuxt-vercel-isr](https://github.com/danielroe/nuxt-vercel-isr) by [@DanielRoe](https://github.com/danielroe).
🐢 Which was inspired by [nuxt-on-the-edge](https://github.com/pi0/nuxt-on-the-edge) by [@pi0](https://github.com/pi0)
🐢 Which itself was inspired by [other](https://github.com/Rich-Harris/sveltekit-on-the-edge) [projects](https://github.com/vercel-labs/react-on-the-edge).

## Development

Start the development server on http://localhost:3000

```bash
pnpm dev
```

## Production

The easiest way to deploy your app is to link the repo to your Vercel account. Alternatively, you can create a production build locally using `pnpm build`.

Checkout the [deployment documentation](https://nuxt.com/docs/getting-started/deployment#presets) for more information.
