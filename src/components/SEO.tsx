
import React from 'react';
import { Helmet } from 'react-helmet';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "Salman Ahmed - Game & Web Developer",
  description = "Portfolio of Salman Ahmed, a Game & Web Developer specializing in creating immersive games and building sleek, performant web experiences.",
  keywords = "game developer, web developer, Salman Ahmed, Unity, C#, React, Next.js, portfolio",
  ogImage = "/og-image.png",
  ogUrl = "https://salmanahmed.dev",
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Salman Ahmed" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={ogUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      
      {/* Accessibility and SEO improvements */}
      <html lang="en" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#8855ff" />
      <link rel="canonical" href={ogUrl} />
    </Helmet>
  );
};

export default SEO;
