export interface BlogPost {
  id: number
  title: string
  slug: string
  excerpt: string
  content: string
  image: string
  category: string
  tags: string[]
  date: string
  readTime: string
  featured: boolean
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Building Scalable React Applications with TypeScript",
    slug: "building-scalable-react-applications-typescript",
    excerpt:
      "Learn how to structure large React applications using TypeScript, best practices for component architecture, and strategies for maintaining code quality as your project grows.",
    content: `
      <p>Building scalable React applications is one of the most challenging aspects of modern web development. When you add TypeScript to the mix, you get powerful type safety but also need to consider additional architectural decisions.</p>
      
      <h2>Why TypeScript for React?</h2>
      <p>TypeScript brings several advantages to React development:</p>
      <ul>
        <li>Compile-time error detection</li>
        <li>Better IDE support with autocomplete</li>
        <li>Self-documenting code through types</li>
        <li>Easier refactoring of large codebases</li>
      </ul>
      
      <h2>Project Structure</h2>
      <p>A well-organized project structure is crucial for scalability. Here's a recommended approach:</p>
      <pre><code>src/
  components/
    ui/
    forms/
    layout/
  hooks/
  utils/
  types/
  services/
  pages/</code></pre>
      
      <h2>Component Architecture</h2>
      <p>When building components, consider these patterns:</p>
      <ul>
        <li>Composition over inheritance</li>
        <li>Single responsibility principle</li>
        <li>Proper prop typing with interfaces</li>
        <li>Generic components for reusability</li>
      </ul>
      
      <p>By following these principles, you'll create applications that are not only scalable but also maintainable and enjoyable to work with.</p>
    `,
    image: "/react-typescript-architecture.png",
    category: "React",
    tags: ["React", "TypeScript", "Architecture", "Best Practices"],
    date: "Dec 15, 2024",
    readTime: "8 min read",
    featured: true,
  },
  {
    id: 2,
    title: "Modern CSS Techniques for Better Web Performance",
    slug: "modern-css-techniques-web-performance",
    excerpt:
      "Explore cutting-edge CSS features and optimization techniques that can significantly improve your website's performance and user experience.",
    content: `
      <p>CSS has evolved tremendously in recent years, offering new features that can dramatically improve both performance and developer experience.</p>
      
      <h2>CSS Container Queries</h2>
      <p>Container queries allow components to respond to their container's size rather than the viewport size, enabling truly modular responsive design.</p>
      
      <h2>CSS Grid and Subgrid</h2>
      <p>Modern layout techniques that reduce the need for JavaScript-based solutions and improve rendering performance.</p>
      
      <h2>Performance Optimization</h2>
      <ul>
        <li>Critical CSS inlining</li>
        <li>CSS-in-JS considerations</li>
        <li>Reducing layout thrash</li>
        <li>Optimizing animations</li>
      </ul>
    `,
    image: "/modern-css-performance.png",
    category: "CSS",
    tags: ["CSS", "Performance", "Web Development", "Optimization"],
    date: "Dec 10, 2024",
    readTime: "6 min read",
    featured: false,
  },
  {
    id: 3,
    title: "The Future of Web Development: What's Coming in 2025",
    slug: "future-web-development-2025",
    excerpt:
      "A comprehensive look at emerging technologies, frameworks, and trends that will shape web development in the coming year.",
    content: `
      <p>As we look ahead to 2025, several exciting trends are emerging in web development that promise to change how we build applications.</p>
      
      <h2>Server Components Evolution</h2>
      <p>React Server Components are becoming more mature, offering better performance and developer experience.</p>
      
      <h2>Edge Computing</h2>
      <p>Edge functions and distributed computing are becoming mainstream, reducing latency and improving user experience globally.</p>
      
      <h2>AI Integration</h2>
      <p>AI-powered development tools and features are becoming integral parts of the development workflow.</p>
    `,
    image: "/future-web-development.png",
    category: "Trends",
    tags: ["Future", "Trends", "AI", "Edge Computing", "React"],
    date: "Dec 5, 2024",
    readTime: "10 min read",
    featured: false,
  },
  {
    id: 4,
    title: "Database Design Patterns for Modern Applications",
    slug: "database-design-patterns-modern-applications",
    excerpt:
      "Essential database design patterns and best practices for building robust, scalable applications with proper data modeling.",
    content: `
      <p>Proper database design is crucial for application performance and maintainability. Let's explore key patterns and practices.</p>
      
      <h2>Normalization vs Denormalization</h2>
      <p>Understanding when to normalize for consistency and when to denormalize for performance.</p>
      
      <h2>CQRS Pattern</h2>
      <p>Command Query Responsibility Segregation can help separate read and write operations for better scalability.</p>
      
      <h2>Event Sourcing</h2>
      <p>Storing events rather than current state can provide better audit trails and flexibility.</p>
    `,
    image: "/database-design-patterns.png",
    category: "Backend",
    tags: ["Database", "Architecture", "Backend", "Design Patterns"],
    date: "Nov 28, 2024",
    readTime: "12 min read",
    featured: false,
  },
  {
    id: 5,
    title: "Mastering Git Workflows for Team Collaboration",
    slug: "mastering-git-workflows-team-collaboration",
    excerpt:
      "Learn advanced Git techniques and workflows that improve team productivity and code quality in collaborative development environments.",
    content: `
      <p>Effective Git workflows are essential for successful team collaboration. Here are proven strategies for different team sizes and project types.</p>
      
      <h2>Git Flow vs GitHub Flow</h2>
      <p>Understanding the differences and when to use each workflow pattern.</p>
      
      <h2>Advanced Git Techniques</h2>
      <ul>
        <li>Interactive rebasing</li>
        <li>Cherry-picking strategies</li>
        <li>Conflict resolution</li>
        <li>Bisecting for debugging</li>
      </ul>
      
      <h2>Code Review Best Practices</h2>
      <p>How to structure pull requests and conduct effective code reviews.</p>
    `,
    image: "/git-workflows-collaboration.png",
    category: "DevOps",
    tags: ["Git", "Collaboration", "DevOps", "Team Work"],
    date: "Nov 20, 2024",
    readTime: "7 min read",
    featured: false,
  },
]
