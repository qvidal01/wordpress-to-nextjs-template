# WordPress to Next.js Migration Template

A production-ready template for migrating WordPress sites to modern Next.js applications. Built with Next.js 14+, TypeScript, and Tailwind CSS.

## Features

- **Modern Stack**: Next.js 14+ with App Router, TypeScript, Tailwind CSS
- **Static Export**: Optimized for performance with `output: 'export'`
- **Reusable Components**: Navigation, Footer, Chat Widget, Hero, Services Grid
- **CI/CD Ready**: GitHub Actions workflow for automated deployment
- **SEO Optimized**: Meta tags, OpenGraph, structured data support
- **Mobile-First**: Responsive design with smooth animations

## Quick Start

```bash
# Clone this template
git clone https://github.com/YOUR_USERNAME/wordpress-to-nextjs-template my-site
cd my-site

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout (nav, footer, global styles)
│   ├── page.tsx            # Homepage
│   ├── about/page.tsx      # About page
│   ├── services/page.tsx   # Services page
│   ├── contact/page.tsx    # Contact page
│   └── api/                # API routes (contact form, newsletter)
├── components/
│   ├── Navigation.tsx      # Header navigation
│   ├── Footer.tsx          # Site footer
│   ├── HeroSection.tsx     # Hero banner component
│   ├── ServicesGrid.tsx    # Services display grid
│   └── AIChatWidget.tsx    # Optional AI chat widget
├── content/
│   └── pages/              # Markdown content (migrated from WordPress)
├── lib/
│   └── content.ts          # Content utilities
├── public/
│   └── [assets]            # Images, icons, favicon
└── .github/
    └── workflows/
        └── deploy.yml      # CI/CD deployment pipeline
```

## Migration Checklist

### 1. Content Migration
- [ ] Export WordPress content (posts, pages) to Markdown
- [ ] Move images to `/public` directory
- [ ] Update internal links to Next.js routes
- [ ] Migrate forms to API routes

### 2. Customization
- [ ] Update `app/layout.tsx` with your branding
- [ ] Replace logo in `/public`
- [ ] Update colors in `tailwind.config.ts`
- [ ] Customize components in `/components`

### 3. Configuration
- [ ] Update `package.json` with project name
- [ ] Configure `next.config.mjs` for your domain
- [ ] Set up environment variables in `.env.local`
- [ ] Update GitHub Actions secrets for deployment

### 4. Deployment
- [ ] Choose hosting: Vercel, Cloudflare Pages, or self-hosted
- [ ] Configure CI/CD workflow
- [ ] Set up domain and SSL
- [ ] Test and go live

## Deployment Options

### Option A: Vercel (Recommended for beginners)
```bash
npm i -g vercel
vercel
```

### Option B: Cloudflare Pages
1. Connect GitHub repo to Cloudflare Pages
2. Build command: `npm run build`
3. Output directory: `out`

### Option C: Self-Hosted (Proxmox/VPS)
See `.github/workflows/deploy.yml` for automated deployment to:
- Proxmox LXC containers
- Any Linux VPS with Apache/Nginx
- Docker containers

## WordPress Migration Guide

### Step 1: Export WordPress Content
```bash
# Using WP-CLI
wp export --post_type=page --output=pages.xml
wp export --post_type=post --output=posts.xml

# Alternative plugins:
# - WP All Export
# - Simply Static
# - All-in-One WP Migration
```

### Step 2: Convert to Markdown
Use [wordpress-export-to-markdown](https://github.com/lonekorean/wordpress-export-to-markdown):
```bash
npx wordpress-export-to-markdown --wizard
```

Place converted files in `/content/pages/`

### Step 3: Migrate Images
1. Download WordPress media library (`/wp-content/uploads/`)
2. Place in `/public/images/`
3. Update image paths in markdown content:
   - From: `https://yoursite.com/wp-content/uploads/2024/image.jpg`
   - To: `/images/image.jpg`

### Step 4: Replace Forms
WordPress Contact Form 7 → Next.js API routes

Example API route (`app/api/contact/route.ts`):
```typescript
export async function POST(request: Request) {
  const data = await request.json();
  // Send email or save to database
  return Response.json({ success: true });
}
```

### Step 5: Update Navigation
Replace WordPress menu with React component:
- Edit `components/Navigation.tsx`
- Update links to match your page structure

## WordPress to Next.js Mapping

| WordPress | Next.js Equivalent |
|-----------|-------------------|
| Pages | `app/[page]/page.tsx` |
| Posts | `app/blog/[slug]/page.tsx` |
| Categories | `app/blog/category/[slug]/page.tsx` |
| Theme | Tailwind CSS + components |
| Plugins | Custom React components |
| Media Library | `/public` directory |
| Contact Form 7 | API routes |
| Yoast SEO | Next.js Metadata API |
| WP Admin | Git + CI/CD |

## Customization Guide

### Changing Brand Colors
Edit `tailwind.config.ts`:
```ts
theme: {
  extend: {
    colors: {
      primary: '#YOUR_PRIMARY_COLOR',
      secondary: '#YOUR_SECONDARY_COLOR',
    }
  }
}
```

### Adding New Pages
1. Create folder in `app/` (e.g., `app/pricing/`)
2. Add `page.tsx`:
```tsx
export default function PricingPage() {
  return (
    <main className="container mx-auto py-16">
      <h1>Pricing</h1>
      {/* Your content */}
    </main>
  );
}
```
3. Update navigation in `components/Navigation.tsx`

### Adding a Blog
1. Create `app/blog/page.tsx` for blog index
2. Create `app/blog/[slug]/page.tsx` for individual posts
3. Store posts in `/content/posts/`
4. Use dynamic routes to render posts

## Environment Variables

Create `.env.local`:
```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://yoursite.com
NEXT_PUBLIC_SITE_NAME=Your Company Name

# Contact Form (optional)
SMTP_HOST=smtp.yourprovider.com
SMTP_USER=your@email.com
SMTP_PASS=your-password

# Analytics (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## Performance Benefits vs WordPress

| Metric | WordPress | Next.js (This Template) |
|--------|-----------|------------------------|
| Time to First Byte | 500-2000ms | 50-100ms |
| Lighthouse Score | 40-70 | 95-100 |
| Monthly Hosting Cost | $10-50 | $0-5 |
| Security Updates | Constant | Minimal |
| Build Time | N/A | 15-30 seconds |

## Common Issues & Solutions

### Images not loading
- Ensure images are in `/public` directory
- Use relative paths: `/images/logo.png`
- For external images, add domain to `next.config.mjs`

### Build errors
```bash
# Clear cache and rebuild
rm -rf .next out node_modules
npm install
npm run build
```

### Deployment fails
- Check GitHub Actions secrets are set
- Verify SSH key permissions (chmod 600)
- Ensure target server is accessible

## Professional Migration Services

Need help migrating your WordPress site?

**AIQSO** offers professional WordPress to Next.js migration services:
- Full content migration
- Custom design implementation
- SEO preservation
- Performance optimization
- Training and support

**Contact:**
- Website: https://aiqso.io
- Email: contact@aiqso.io

## License

MIT License - Free to use for personal and commercial projects.

---

**Template by AIQSO - AI-Powered Infrastructure Solutions**
