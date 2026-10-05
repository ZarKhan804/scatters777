
import { Helmet } from "react-helmet-async";

import HeroSection from "./HeroSection";
import GameSection from "./GameSection";
import ContentSection from "./ContentSection";
import InternalLinksArticle from "./InternalLinksArticle";

function Home() {
  return (
    <>
      <Helmet>
        <title>Scatter Game Online | Scatter Game Official Website</title>

        <meta
          name="description"
          content="Explore Scatter Game for platform information, game features, mobile access, gameplay guides, account security, and responsible gaming tips."
        />

        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        <link
          rel="canonical"
          href="https://www.scatters777.com/"
        />

        <meta
          property="og:title"
          content="Scatter Game Online | Scatter Game Official Website"
        />

        <meta
          property="og:description"
          content="Explore Scatter Game platform information, game features, mobile access, gameplay guides, account security, and responsible gaming resources."
        />

        <meta
          property="og:url"
          content="https://www.scatters777.com/"
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
          content="Scatter Game Online | Scatter Game Official Website"
        />

        <meta
          name="twitter:description"
          content="Explore Scatter Game platform information, game features, mobile access, gameplay guides, account security, and responsible gaming resources."
        />

        <meta
          name="twitter:image"
          content="https://www.scatters777.com/og-image.webp"
        />
      </Helmet>

      <main id="main-content">
        <HeroSection />
        <GameSection />
        <ContentSection />
        <InternalLinksArticle />
      </main>
    </>
  );
}

export default Home;
