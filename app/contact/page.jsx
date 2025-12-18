import MainContactPage from '@/component/contact/MainContactPage'
import React from 'react'

// 1. Metadata for Conversion and Hiring
export const metadata = {
  title: 'Contact | Robiul Islam Ashiq - Hire a MERN Stack Developer',
  description: 'Looking for a full-stack developer? Get in touch with Robiul Islam Ashiq for project inquiries, collaborations, or technical consultations.',
  keywords: ['Hire MERN Developer', 'Freelance Web Developer Dhaka', 'Contact Software Engineer', 'Hire React Developer'],
  openGraph: {
    title: 'Work with Robiul Islam Ashiq',
    description: 'Let’s discuss your next big project. Reach out via the contact form or email.',
    url: 'https://yourportfolio.com/contact',
    images: [{ url: 'https://yourportfolio.com/contact-og.jpg' }],
  },
};

const ContactPage = () => {
  // 2. JSON-LD for "ContactPoint"
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Robiul Islam Ashiq",
    "url": "https://yourportfolio.com",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Technical Support / Hiring",
      "email": "your@email.com",
      "url": "https://yourportfolio.com/contact"
    }
  };

  return (
    <>
      {/* Schema for search engines to identify your contact intent */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <main>
        {/* The component you created earlier with the enhanced design */}
        <MainContactPage />
      </main>
    </>
  )
}

export default ContactPage;