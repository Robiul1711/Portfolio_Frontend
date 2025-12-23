import AllProjectsGallery from '@/component/projects/AllProjectsGallery'
import React from 'react'

// 1. Project-Specific Metadata
export const metadata = {
  title: 'Portfolio & Projects | Robiul Islam Ashiq',
  description: 'Explore a gallery of professional MERN stack projects, including E-commerce platforms, SaaS applications, and high-performance web tools built by Robiul Islam Ashiq.',
  keywords: ['Web Development Portfolio', 'MERN Stack Projects', 'React JS Portfolio', 'Full Stack Developer Case Studies', 'Node.js Projects'],
  openGraph: {
    title: 'Featured Projects | Robiul Islam Ashiq',
    description: 'A showcase of modern web applications built with precision and performance.',
    url: 'https://yourportfolio.com/projects',
    siteName: 'Robiul Islam Ashiq',
    type: 'website',
    images: [{ url: 'https://yourportfolio.com/projects-og.jpg' }],
  },
};

const ProjectsPage = () => {
  // 2. Schema.org Structured Data for a Collection Page
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Project Portfolio of Robiul Islam Ashiq",
    "description": "A collection of web development projects showcasing skills in React, Node.js, and MongoDB.",
    "url": "https://yourportfolio.com/projects",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Latest Web Application"
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Use <main> for the primary content of the page */}
      <main className='pt-6 2xl:pt-18  pb-6 sm:pb-12 md:pb-20 section-padding-x bg-gradient-to-b  from-[#09161a] to-black'>

        {/* The Gallery Component */}
        <section aria-label="Project Gallery">
          <AllProjectsGallery />
        </section>
      </main>
    </>
  )
}

export default ProjectsPage;