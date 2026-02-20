# rohimdev.com

Portfolio site for **Abdul Rohim** — Full-Stack Developer & Infrastructure Specialist. Built with Next.js 15, React 19, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean UI with sidebar layout and smooth animations
- **Responsive Layout**: Optimized for mobile, tablet, and desktop
- **Project Showcase**: Portfolio with featured work and metrics
- **Work Experience**: Professional experience and achievements
- **Services**: Full-stack development and infrastructure solutions
- **Contact Form**: Web3Forms integration (no backend required)
- **SEO Optimized**: Per-page metadata, sitemap, and robots.txt
- **Data-Driven**: JSON content in `data/` for easy updates

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **UI**: [React 19](https://react.dev/), [Tailwind CSS v4](https://tailwindcss.com/), [Geist](https://vercel.com/font) font
- **Icons**: [Lucide React](https://lucide.dev/)
- **Contact**: [Web3Forms](https://web3forms.com/)

## 📋 Prerequisites

- [Node.js](https://nodejs.org/) 18+
- [pnpm](https://pnpm.io/) (or npm/yarn)

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/tobangado69/rohimdev.com.git
   cd rohimdev.com
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and add your Web3Forms access key:
   ```env
   NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key_here
   ```

4. **Run the development server**
   ```bash
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
rohimdev.com/
├── data/                  # JSON content (site, pages, layout)
│   ├── site.json          # Site metadata, SEO, social links
│   ├── home.json          # Homepage content
│   ├── about.json         # About page content
│   ├── work.json          # Work experience
│   ├── services.json      # Services content
│   ├── contact.json       # Contact page content
│   └── ...
├── src/
│   ├── app/               # Next.js App Router
│   │   ├── about/         # About page
│   │   ├── contact/       # Contact form page
│   │   ├── services/      # Services page
│   │   ├── work/          # Work experience page
│   │   ├── layout.tsx     # Root layout
│   │   ├── page.tsx       # Homepage
│   │   ├── globals.css    # Global styles
│   │   ├── robots.ts      # Robots.txt generator
│   │   └── sitemap.ts     # Sitemap generator
│   ├── components/        # React components
│   │   ├── home/          # Homepage sections
│   │   ├── layout/        # Sidebar, footer, mobile nav
│   │   ├── contact/       # Contact form, founder section
│   │   ├── work/          # Work experience
│   │   └── ui/            # Shared UI components
│   └── lib/               # Utilities (seo.ts, constants.ts)
├── public/                # Static assets
└── package.json
```

## 🌐 Environment Variables

Create a `.env` file in the root directory:

```env
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key_here
```

### Getting a Web3Forms Access Key

1. Visit [Web3Forms](https://web3forms.com/)
2. Enter your email address
3. Copy the generated access key
4. Add it to your `.env` file

## 📝 Available Scripts

- `pnpm dev` — Start development server
- `pnpm build` — Build for production
- `pnpm start` — Start production server
- `pnpm lint` — Run ESLint

## 🚢 Deployment

### Deploy on Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com/)
3. Add environment variables in Vercel dashboard
4. Deploy!

The easiest way to deploy is using the [Vercel Platform](https://vercel.com/new):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/tobangado69/rohimdev.com)

### Manual Deployment

```bash
pnpm build
pnpm start
```

## 🎨 Customization

### Content (Data-Driven)

- **Site metadata & SEO**: `data/site.json`
- **Homepage**: `data/home.json`
- **About**: `data/about.json`
- **Work experience**: `data/work.json`
- **Services**: `data/services.json`
- **Contact**: `data/contact.json`
- **Layout (sidebar, footer)**: `data/layout.json`

### Styling

- Global styles: `src/app/globals.css`
- Tailwind v4: `postcss.config.mjs` (no separate tailwind.config)
- Component styles: Tailwind classes in components

## 👤 Author

**Abdul Rohim**

- Portfolio: [rohimdev.com](https://rohimdev.com)
- Email: rohimjoy70@gmail.com
- GitHub: [@tobangado69](https://github.com/tobangado69)
- LinkedIn: [tobangado](https://www.linkedin.com/in/tobangado)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the framework
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [Geist](https://vercel.com/font) for typography
- [Lucide](https://lucide.dev/) for icons
- [Web3Forms](https://web3forms.com/) for contact form

---

Built by Abdul Rohim

