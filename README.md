# Developer Portfolio

A professional portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, responsive design with dark/light mode
- 📱 Mobile-first approach
- ⚡ Fast performance with Next.js 14
- 🎭 Smooth animations and transitions
- 📝 Blog functionality
- 📧 Contact form with validation
- 🎯 SEO optimized

## Pages

- **Home**: Hero section with introduction and featured content
- **Projects**: Showcase of development projects with filtering
- **About**: Personal story, skills, experience, and education
- **Contact**: Contact form and professional information
- **Blog**: Technical articles and insights

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **Fonts**: Playfair Display & Source Sans Pro
- **Theme**: next-themes for dark/light mode

## Getting Started

1. **Install dependencies**:
   \`\`\`bash
   npm install
   \`\`\`

2. **Run the development server**:
   \`\`\`bash
   npm run dev
   \`\`\`

3. **Open your browser** and navigate to [http://localhost:3000](http://localhost:3000)

## Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## Project Structure

\`\`\`
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── blog/              # Blog pages
│   ├── contact/           # Contact page
│   ├── projects/          # Projects page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── ui/               # UI primitives
│   └── ...               # Feature components
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
└── public/               # Static assets
\`\`\`

## Customization

1. **Personal Information**: Update content in page components
2. **Styling**: Modify `app/globals.css` and Tailwind config
3. **Projects**: Add your projects in the projects data
4. **Blog Posts**: Add your blog content
5. **Contact**: Update contact information and form handling

## Deployment

This project is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

## License

This project is open source and available under the [MIT License](LICENSE).
