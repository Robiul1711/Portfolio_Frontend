import WaveTransition from '@/component/blog/WaveTransition'
import React from 'react'

// 1. Static Metadata for SEO
export const metadata = {
  title: 'Blog | Robiul Islam Ashiq - MERN Stack Developer',
  description: 'Insights into MERN stack development, Next.js tutorials, and modern web performance. Read the latest articles by Robiul Islam Ashiq.',
  keywords: ['MERN Stack', 'React Developer', 'Next.js Blog', 'Web Development Tutorials', 'JavaScript'],
  authors: [{ name: 'Robiul Islam Ashiq' }],
  openGraph: {
    title: 'Blog | Robiul Islam Ashiq',
    description: 'Deep dives into modern web technologies and software engineering.',
    url: 'https://yourportfolio.com/blog', // Replace with your domain
    siteName: 'Robiul Islam Ashiq Portfolio',
    images: [
      {
        url: 'https://yourportfolio.com/og-blog.jpg', // Path to your blog share image
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Robiul Islam Ashiq | Blog',
    description: 'Latest articles on web development and programming.',
    creator: '@yourtwitterhandle',
    images: ['https://yourportfolio.com/og-blog.jpg'],
  },
};

const BlogPage = () => {
  // 2. JSON-LD Structured Data for Google (Rich Results)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Robiul Islam Ashiq's Tech Blog",
    "description": "Educational content about Full Stack Web Development.",
    "url": "https://yourportfolio.com/blog",
    "author": {
      "@type": "Person",
      "name": "Robiul Islam Ashiq"
    }
  };

  return (
    <>
      {/* Inject JSON-LD to help Google understand the page content */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <main className='min-h-screen section-padding-x section-padding-y  bg-gradient-to-b  from-[#09161a]/40 to-black'>
        <WaveTransition />
        
        {/* This is where your blog list component would go */}
      </main>
    </>
  )
}

export default BlogPage;