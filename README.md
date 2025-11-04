# Rohim Dev Portfolio

A modern, responsive portfolio website built with Next.js 15, showcasing professional experience in full-stack development and infrastructure management. Features stunning animations, interactive code editor simulation, and a seamless user experience.

## 🚀 Features

- **Modern Design**: Clean, professional UI with glassmorphism effects and smooth animations
- **Interactive Code Editor**: Simulated IDE experience with typing animations
- **Responsive Layout**: Fully optimized for mobile, tablet, and desktop devices
- **Project Showcase**: Filterable portfolio with category and technology filters
- **Work Experience**: Detailed professional experience with achievements and metrics
- **Contact Form**: Integrated Web3Forms for seamless communication
- **SEO Optimized**: Complete metadata, structured data, sitemap, and robots.txt
- **Performance**: Optimized with Next.js 15, TypeScript, and Tailwind CSS
- **Accessibility**: ARIA labels, keyboard navigation, and semantic HTML

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Form Handling**: [Web3Forms](https://web3forms.com/)
- **Deployment**: [Vercel](https://vercel.com/)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) 18.x or later
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/tobangado69/rohimdev-next.git
   cd rohimdev-next
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` and add your Web3Forms access key:
   ```env
   NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
rohimdev-next/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact form page
│   ├── projects/          # Project portfolio page
│   ├── services/          # Services page
│   ├── work/              # Work experience page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── globals.css        # Global styles
│   ├── robots.ts          # Robots.txt generator
│   └── sitemap.ts         # Sitemap generator
├── components/            # React components
│   ├── animations/        # Animation components
│   ├── layout/            # Layout components (Header, Footer)
│   └── sections/          # Page sections
├── lib/                   # Utility functions
├── public/                # Static assets
└── package.json           # Dependencies
```

## 🌐 Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key_here
```

### Getting a Web3Forms Access Key

1. Visit [Web3Forms](https://web3forms.com/)
2. Enter your email address
3. Copy the generated access key
4. Add it to your `.env.local` file

## 📝 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🚢 Deployment

### Deploy on Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com/)
3. Add environment variables in Vercel dashboard
4. Deploy!

The easiest way to deploy is using the [Vercel Platform](https://vercel.com/new):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/tobangado69/rohimdev-next)

### Manual Deployment

```bash
npm run build
npm run start
```

## 🎨 Customization

### Update Personal Information

1. **Homepage Hero**: Edit `components/sections/HeroSection.tsx`
2. **About Page**: Edit `app/about/page.tsx`
3. **Work Experience**: Edit `app/work/page.tsx` and `components/sections/ProfessionalExperienceSection.tsx`
4. **Projects**: Edit `app/projects/page.tsx`
5. **Contact**: Update email in `app/contact/page.tsx`
6. **Metadata**: Update SEO metadata in `app/layout.tsx`

### Styling

- Global styles: `app/globals.css`
- Tailwind config: `tailwind.config.ts`
- Component styles: Use Tailwind classes directly in components

### Colors

The color palette is defined in Tailwind config:
- Primary: Black (`#000000`)
- Secondary: White (`#ffffff`)
- Accent: Blue gradient (`#3b82f6` to `#8b5cf6`)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Abdul Rohim**

- Portfolio: [rohimdev.com](https://rohimdev.com)
- Email: rohimjoy70@gmail.com
- GitHub: [@tobangado69](https://github.com/tobangado69)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [Lucide](https://lucide.dev/) for beautiful icons
- [Web3Forms](https://web3forms.com/) for form handling

## 📞 Contact

For inquiries, collaborations, or just to say hello:

- **Email**: rohimjoy70@gmail.com
- **Portfolio**: [rohimdev.com](https://rohimdev.com)

---

Made with ❤️ by Abdul Rohim

