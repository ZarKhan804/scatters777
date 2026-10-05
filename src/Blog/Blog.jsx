
import { Helmet } from "react-helmet-async";

import BlogHero from "./BlogHero";
import BlogPosts from "./BlogPosts";
import InternalLinksArticle from "./InternalLinksArticle";

function Blog() {
  return (
    <>
      <Helmet>
        <title>Scatter Game Blog | Game Guides & Platform Information</title>

        <meta
          name="description"
          content="Explore Scatter Game guides, gameplay, mobile access, account security, and responsible gaming information in Pakistan."
        />

        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        <link
          rel="canonical"
          href="https://www.scatters777.com/blog"
        />

        <meta
          property="og:title"
          content="Scatter Game Blog | Game Guides & Platform Information"
        />

        <meta
          property="og:description"
          content="Explore Scatter Game platform guides, mobile access information, account security tips, and responsible gaming resources."
        />

        <meta
          property="og:url"
          content="https://www.scatters777.com/blog"
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
          name="twitter:title"
          content="Scatter Game Blog | Game Guides & Platform Information"
        />

        <meta
          name="twitter:description"
          content="Explore Scatter Game platform guides, mobile access information, account security tips, and responsible gaming resources."
        />

        <meta
          name="twitter:image"
          content="https://www.scatters777.com/og-image.webp"
        />
      </Helmet>

      <main id="main-content">
        <BlogHero />
        <BlogPosts />
        <InternalLinksArticle />
      </main>
    </>
  );
}

export default Blog;
