import React from 'react'
import Contactus from '../shared/contactus/Contactus'
import { HelmetProvider } from 'react-helmet-async'
import { Helmet } from 'react-helmet'
function ContactusPage() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>AJARCSE - Contact Us</title>
          <link rel="icon" type="image/png" href="/assets/images/Faviico.png" />
          <meta name="keywords"  content="AJARCSE,American Journal of Advanced Research in Computer Science & Engineering,Computer Science Research,Open Access Journals,Engineering Innovations,Artificial Intelligence(AI),Machine Learning (ML),Data Science and Analytics,Cybersecurity,Cloud Computing,Blockchain Technology,Robotics and Automation,Software Engineering,Quantum Computing,IoT Research,Natural Language Processing(NLP),Computer Vision." />
          <meta name="description" content="Explore cutting-edge research in computer science and engineering with the American Journal of Advanced Research in Computer Science & Engineering (AJARCSE). A platform for academics, professionals, and innovators to publish groundbreaking studies and foster technological advancements." />
          <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="/images/Logo.png" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:title" content="AJARCSE - American Journal of Advanced Research in Computer Science & Engineering" />
          <meta property="og:description" content="Explore cutting-edge research in computer science and engineering with the American Journal of Advanced Research in Computer Science & Engineering (AJARCSE). A platform for academics, professionals, and innovators to publish groundbreaking studies and foster technological advancements." />
          <meta property="og:url" content="https://ajarcse.com/" />
          <meta property="og:site" content="AJARCSE" />
          <meta property="og:site_name" content="AJARCSE" />
          <link rel="canonical" href="https://ajarcse.com/" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="" />
          <meta name="twitter:title" content="AJARCSE - American Journal of Advanced Research in Computer Science & Engineering" />
          <meta name="twitter:description" content="Explore cutting-edge research in computer science and engineering with the American Journal of Advanced Research in Computer Science & Engineering (AJARCSE). A platform for academics, professionals, and innovators to publish groundbreaking studies and foster technological advancements" />
          <meta name="twitter:image" content="/images/Logo.png" />
        </Helmet>
      </HelmetProvider>
      <Contactus />
    </>
  )
}
export default ContactusPage