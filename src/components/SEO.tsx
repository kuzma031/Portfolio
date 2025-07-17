import Head from "next/head"
import { SEOProps } from "@/types"

import ogImage from "../../public/images/og.jpeg"

const siteMetadata = {
  title: "Đorđe Kuzmanović",
  description:
    "Full-Stack Software Developer. Expert in JavaScript, React and Node.js.",
  author: "Đorđe Kuzmanović",
  siteUrl: "https://djordjekuzmanovic.com",
  twitterHandle: "@djordjekuzmanovic",
}

function SEO({
  title,
  description,
  image = ogImage.src,
  url,
  type = "website",
  publishedAt,
  modifiedAt,
  section,
  tags = [],
  noindex = false,
  nofollow = false,
  children,
}: SEOProps) {
  const metaDescription = description || siteMetadata.description
  const canonical = url ? `${siteMetadata.siteUrl}${url}` : siteMetadata.siteUrl
  const ogImageUrl = image.startsWith("http")
    ? image
    : `${siteMetadata.siteUrl}${image}`

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={canonical} />

      {/* Robots */}
      {noindex && <meta name="robots" content="noindex" />}
      {nofollow && <meta name="robots" content="nofollow" />}
      {noindex && nofollow && <meta name="robots" content="noindex,nofollow" />}

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content={siteMetadata.title} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={siteMetadata.twitterHandle} />
      <meta name="twitter:creator" content={siteMetadata.twitterHandle} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={ogImageUrl} />

      {/* Article specific meta tags */}
      {type === "article" && (
        <>
          {publishedAt && (
            <meta property="article:published_time" content={publishedAt} />
          )}
          {modifiedAt && (
            <meta property="article:modified_time" content={modifiedAt} />
          )}
          {section && <meta property="article:section" content={section} />}
          {tags.map(tag => (
            <meta key={tag} property="article:tag" content={tag} />
          ))}
        </>
      )}

      {/* Additional meta tags */}
      <meta name="author" content={siteMetadata.author} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {children}
    </Head>
  )
}

export default SEO
