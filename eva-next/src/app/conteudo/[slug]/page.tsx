import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE_URL, pageMeta } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import ArticlePage from "@/components/eden/pages/ArticlePage";
import { SEGMENTS } from "@/components/eden/pages/segments";
import { ARTICLES, articleBySlug, articleCard, readingMinutes } from "@/content/articles";

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const article = articleBySlug((await params).slug);
  if (!article) return {};
  const meta = pageMeta({
    path: `/conteudo/${article.slug}/`,
    og: `artigo-${article.slug}`,
    title: article.seoTitle,
    description: article.description,
  });
  return {
    ...meta,
    openGraph: { ...meta.openGraph, type: "article", publishedTime: article.published },
  };
}

export default async function Page({ params }: Params) {
  const article = articleBySlug((await params).slug);
  if (!article) notFound();
  const url = `${SITE_URL}/conteudo/${article.slug}/`;
  const seg = SEGMENTS[article.segment];

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.published,
    dateModified: article.published,
    inLanguage: "pt-BR",
    mainEntityOfPage: url,
    image: `${SITE_URL}/og/artigo-${article.slug}.png`,
    author: { "@type": "Organization", name: "Eva Inteligência", url: SITE_URL },
    publisher: {
      "@type": "Organization",
      name: "Eva Inteligência",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo-eva.png` },
    },
  };
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: article.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Conteúdo", item: `${SITE_URL}/conteudo/` },
      { "@type": "ListItem", position: 2, name: seg.label, item: `${SITE_URL}${seg.path}` },
      { "@type": "ListItem", position: 3, name: article.title, item: url },
    ],
  };

  return (
    <>
      <JsonLd data={articleLd} />
      <JsonLd data={faqLd} />
      <JsonLd data={breadcrumbLd} />
      <ArticlePage
        article={article}
        minutes={readingMinutes(article)}
        related={[
          ...ARTICLES.filter((x) => x.segment === article.segment && x.slug !== article.slug),
          ...ARTICLES.filter((x) => x.segment !== article.segment),
        ]
          .slice(0, 2)
          .map(articleCard)}
      />
    </>
  );
}
