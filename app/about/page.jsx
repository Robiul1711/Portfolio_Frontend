import AboutPage from '@/component/about/AboutPage'
import React from 'react'

// 1. Metadata for Personal Branding
export const metadata = {
  title: 'About Me | Robiul Islam Ashiq - Full Stack Developer',
  description: 'Learn more about Robiul Islam Ashiq, a passionate MERN stack developer. Discover my journey, core values, and the technologies I use to build modern web solutions.',
  keywords: ['Robiul Islam Ashiq', 'Full Stack Developer Bangladesh', 'MERN Stack Expert', 'React Developer Journey'],
  openGraph: {
    title: 'Who is Robiul Islam Ashiq?',
    description: 'A deep dive into my professional background, skills, and passion for web development.',
    url: 'https://yourportfolio.com/about',
    siteName: 'Robiul Islam Ashiq Portfolio',
    type: 'profile',
    images: [{ url: 'https://yourportfolio.com/profile-og.jpg' }],
  },
};

const Page = () => {
  // 2. Person & Occupation Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "mainEntity": {
      "@type": "Person",
      "name": "Robiul Islam Ashiq",
      "jobTitle": "Full Stack Web Developer",
      "description": "Specializing in React, Next.js, Node.js, and MongoDB to build scalable web applications.",
      "image": "https://yourportfolio.com/your-photo.jpg",
      "sameAs": [
        "https://github.com/yourusername",
        "https://linkedin.com/in/yourusername",
        "https://twitter.com/yourusername"
      ],
      "knowsAbout": ["JavaScript", "React", "Node.js", "Express.js", "MongoDB", "Next.js"]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <main>
        <AboutPage />
      </main>
    </>
  )
}

export default Page;