import { Helmet } from "react-helmet-async";

import ContactHero from "./ContactHero";
import ContactForm from "./ContactForm";
import InternalLinksArticle from "./InternalLinksArticle";
import Article from "./Article";

function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Scatter Game | Support & Assistance</title>

        <meta
          name="description"
          content="Contact Scatter Game for general questions, feedback, website information, account guidance, and assistance with gaming-related queries."
        />

        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        <link
          rel="canonical"
          href="https://www.scatters777.com/contact"
        />

        <meta
          property="og:title"
          content="Contact Scatter Game | Support & Assistance"
        />

        <meta
          property="og:description"
          content="Find Scatter Game contact information, website guidance, account security tips, and answers to general gaming-related questions."
        />

        <meta
          property="og:url"
          content="https://www.scatters777.com/contact"
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:image"
          content="https://www.scatters777.com/og-image.webp"
        />

        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content="Contact Scatter Game | Support & Assistance"
        />

        <meta
          name="twitter:description"
          content="Find Scatter Game contact information, website guidance, account security tips, and answers to general gaming-related questions."
        />

        <meta
          name="twitter:image"
          content="https://www.scatters777.com/og-image.webp"
        />
      </Helmet>

      <main id="main-content">
        <ContactHero />
        <ContactForm />
        <InternalLinksArticle />
        <Article />
      </main>
    </>
  );
}

export default Contact;