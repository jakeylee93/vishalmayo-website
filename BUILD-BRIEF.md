# Vishal Mayo Portfolio — Full Build Brief

## About
Vishal Mayo is a UI/UX & Product Designer based in London and Essex. Senior UI/UX designer at Hachette Learning (formerly Hodder Education). Also runs freelance design services.

Current site: https://vishalmayo.com (WordPress/Avada theme — dated, needs modernising)

## Design Direction
- Super modern, clean, minimal portfolio
- Dark theme with subtle accent colour
- Think: Apple-level polish, Awwwards-worthy
- Font: Inter or DM Sans (body) + something striking for headings
- Primary colours: #161616 (near-black), #ffffff (white), one accent (pick a tasteful green like #a4c3b2 or mint)
- Smooth scroll animations with framer-motion
- Large typography, generous whitespace
- No WordPress feel — this should look like a senior designer's portfolio

## Tech Stack
- Next.js 14, TypeScript, Tailwind CSS, Framer Motion
- App directory (src/app/)
- pnpm

## Pages to Build (12 total)

### 1. Home (src/app/page.tsx)
- Full-height hero: "Hello, my name's Vish" + "Designing with users in mind"
- Subtitle: "I'm a UI/UX & Product Designer based in London and Essex."
- Brief intro paragraph about combining UI/UX design with branding/marketing knowledge
- Featured projects grid (show 3-4 projects with thumbnails, name, type)
- "Solutions made with purpose and strategy" section
- Client logos bar ("Proud to have worked with these amazing companies")
- CTA: "Let's work on your project together"

### 2. About (src/app/about/page.tsx)
- Photo area (placeholder gradient for now)
- Bio: "I'm a UI/UX designer with a passion in creating beautiful user-friendly products..."
- Current role: Senior UI/UX designer at Hachette Learning
- Freelance: provides UX/UI design, branding, website building
- Skills/tools section
- Featured projects grid

### 3. Projects (src/app/projects/page.tsx)
- Grid/masonry layout of all 8 projects
- Each card: thumbnail (placeholder gradient), project name, type (Web Design & Build / UI/UX Design)
- Links to individual project pages
- Filter by type would be nice

### 4. Contact (src/app/contact/page.tsx)
- "Let's collaborate!" heading
- Contact form: First name, Last name, Email, Message
- Social links: Facebook, Instagram, LinkedIn, Email (hello@vishalmayo.com)
- Clean, minimal layout

### 5-12. Individual Project Pages (src/app/projects/[slug]/page.tsx)
Use dynamic routing. Each project page follows this structure:
- Hero banner with project name + type
- Project description
- "The challenge" section
- "The user" section (target audience)
- Design decisions section
- Results/screenshots area (gradient placeholders)

#### Project Data:

**TM Event Hire** (slug: tm-event-hire)
- Type: Web Design & Build
- Description: Marquee and event equipment hire company in Essex. Covers London, Hertfordshire.
- Challenge: Replace outdated website, create quote form to reduce phone enquiries
- Users: 18+, weddings, birthdays, garden parties
- Design: Blue, white, grey brand colours. High-quality imagery focus. Quote form solution.

**Hachette Learning** (slug: hachette-learning)
- Type: UI/UX Design
- Description: Global educational publisher (formerly Hodder Education). 150+ years history.
- Challenge: First-ever UI/UX designer role. Shape digital UX across platforms. New corporate website for 2024 brand refresh.
- Design: Established UI/UX design function, scalable design systems, user-centred practices.

**The Bar People** (slug: the-bar-people)
- Type: Web Design & Build
- Description: Mobile bar company across Essex, London, Hertfordshire.
- Challenge: More professional website to target higher-end corporate events and larger events.
- Users: Newly engaged couples, venues, corporate companies (Mon-Thu), birthday/wedding parties (weekends)
- Design: Black & white with pink accents. High-quality imagery. 17Hats integration for instant quotes.

**Assemble Media Group** (slug: assemble-media-group)
- Type: Web Design & Build
- Description: Independent publisher and events business in East London.
- Challenge: New website for company rebrand. Hub for all B2B brands (some 180 years old).
- Users: Professionals in the built environment.
- Design: Stripped back black & white with turquoise accent.

**Sanigone** (slug: sanigone)
- Type: Web Design & Build
- Description: Antiviral/antibacterial products for families and businesses. Grew during Covid-19.
- Challenge: Improve website for ecommerce and showcasing products. New dog market expansion.
- Users: Companies/industries (primary), home owners, dog owners.
- Design: Vibrant green and white. Industry-specific pages. Reviews for trust.

**JHD Builders** (slug: jhd-builders)
- Type: Web Design & Build
- Description: Building contractor for one of UK's largest private landlords. 30+ years.
- Challenge: More professional website to attract new clients and showcase expanded services.
- Users: Local authorities, landlords, property owners, businesses.
- Design: Minimalist. Dark grey background with green highlights. Mission statements, services, accreditations.

**Tiny Mites Music** (slug: tiny-mites-music)
- Type: Web Design & Build
- Description: Children's learning and entertainment company using custom songs.
- Challenge: Outdated website lacking info. Needed to attract parents, nurseries, potential franchisees.
- Users: Parents, nurseries/schools, potential franchisees. Children aged 0-7.
- Design: Bright primary colours (blue, yellow, red). Reviews, videos. Franchise info section.

**Outdoor Entertainment Jersey** (slug: outdoor-entertainment-jersey)
- Type: Web Design & Build
- Description: Premium outdoor events company in Jersey. Started during pandemic with cinema screens.
- Challenge: New website for new company. Showcase outdoor/indoor entertainment hire.
- Users: Adults/parents for birthday parties, weddings, corporate events, home entertainment.
- Design: Black & white with yellow accents. Imagery-focused. Google/Facebook reviews. Booking system.

## Components to Create
- Header (sticky, minimal — logo "Vishal Mayo", nav links, "Contact me today" CTA)
- Footer (copyright, social links)
- ProjectCard (for grids)
- ProjectHero (for individual pages)
- SectionHeading (reusable)
- AnimatedSection (framer-motion wrapper)
- ContactForm

## Social Links
- Facebook: https://www.facebook.com/vishalmayodesigns/
- Instagram: https://www.instagram.com/vishalmayodesigns/
- LinkedIn: https://www.linkedin.com/in/vishal-mayo/
- Email: hello@vishalmayo.com

## After Building
```bash
cd /tmp/vishalmayo-website
pnpm run build
git add -A
git commit -m "feat: full portfolio site — home, about, projects (8 case studies), contact"
git push origin main
openclaw system event --text "Done: Vishal Mayo portfolio — 12 pages built, all projects included" --mode now
```
