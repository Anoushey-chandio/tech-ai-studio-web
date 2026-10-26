# tech.ai.studio | Anoushey Chandio

Portfolio website for **Anoushey Chandio**, a content creator, AI-native full-stack developer and agentic AI engineer.

The site shows UGC-style video ads, edited reels and AI-generated clips, and lists web development services (websites, landing pages, full-stack apps, MVP tools and AI websites with LLM integration).

## Developer projects

Explore my tech projects: websites, web apps and AI tools I have built.

[View my tech projects](https://next-js-portfolio-anbhub.vercel.app/)

## Tech stack

- [Next.js](https://nextjs.org/) (App Router) and React
- TypeScript (no JavaScript files)
- Tailwind CSS v4
- [lucide-react](https://lucide.dev/) icons
- [Formspree](https://formspree.io/) (`@formspree/react`) for the contact form

## Features

- Home page with a 3D phone hero, services, video projects and contact form
- Separate pages: `/about`, `/services`, `/projects`, `/contact`
- Horizontal video carousels with equal card sizes (swipe on phones, arrows on larger screens)
- Interactive hamburger menu for mobile
- Scroll and entrance animations, with reduced-motion support
- Fully responsive for mobile, tablet and desktop
- Contact form that sends messages to email through Formspree

## Getting started

You need Node.js 18.18 or newer.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To check a production build:

```bash
npm run build
npm start
```

## Folder structure

```text
app/
  layout.tsx          Root layout (fonts, metadata, Navbar, Footer)
  page.tsx            Home: Hero, Services, Projects, Contact
  about/page.tsx
  services/page.tsx
  projects/page.tsx
  contact/page.tsx
  not-found.tsx       404 page
  globals.css         Theme colors, buttons, animations
  api/contact/        Old contact API route (not used by the form now)
components/
  hero/Hero.tsx
  Navbar.tsx
  Footer.tsx
  About.tsx
  Services.tsx
  Projects.tsx        Video data and carousels
  Carousel.tsx
  Reveal.tsx          Scroll animation wrapper
  Contact.tsx
  Wordmark.tsx
lib/
  contact-info.ts     Phone, email, social links, developer portfolio link
public/
  videos/             Video files (.mp4)
  posters/            Poster image for each video (.jpg)
```

## Customizing

### Contact details and links

Edit `lib/contact-info.ts`. This one file updates the Contact section, the Footer and the developer portfolio buttons.

### Adding a new video

1. Put the video in `public/videos/` (for example `my-video.mp4`).
2. Put a poster image with the same name in `public/posters/` (`my-video.jpg`).
3. Add an item to the right list in `components/Projects.tsx`:

```ts
{
  title: "Video title",
  description: "One short line about the video.",
  file: "my-video",
  width: 360,
  height: 640,
},
```

The three lists are `ugcAds` (UGC-Style Ads), `realReels` (Real reels and vlogs) and `aiClips` (AI-generated clips). `width` and `height` are the real video size.

Keep videos small (about 1 to 3 MB each). Large files slow down the site and can hit hosting limits.

### Theme colors

Colors are set in the `@theme` block at the top of `app/globals.css`: white and light blue backgrounds, black text, blue (`#6fabe7`, from the logo dot) and yellow accents.

### Contact form

The form uses Formspree. The form ID is set in `components/Contact.tsx`:

```ts
const [state, handleSubmit] = useForm("YOUR_FORM_ID");
```

Messages arrive in your Formspree dashboard and at the email set in the form's Workflow settings.

## Deploy

1. Push the project to GitHub.
2. On [vercel.com](https://vercel.com), choose **Add New**, then **Project**, and select the repository.
3. Click **Deploy**. No extra settings are needed.

After deploying, send a test message through the contact form to confirm it reaches your email.

## Contact

- Instagram: [@tech.ai.studio](https://instagram.com/tech.ai.studio)
- Developer portfolio: https://next-js-portfolio-anbhub.vercel.app/

## License

All videos, text and brand assets belong to Anoushey Chandio. All rights reserved.