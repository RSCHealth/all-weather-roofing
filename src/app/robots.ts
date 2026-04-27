import type { MetadataRoute } from "next";
import { BUSINESS } from "@/lib/constants";

/**
 * Owner can flip this to false to opt out of LLM-bot training scrapes
 * (GPTBot, ClaudeBot, PerplexityBot, GoogleExtended). Default: allow.
 */
const ALLOW_LLM_BOTS = true;

const LLM_BOTS = [
  "GPTBot", // OpenAI
  "ClaudeBot", // Anthropic
  "anthropic-ai",
  "PerplexityBot",
  "Google-Extended", // Gemini training
  "CCBot", // Common Crawl (used by many AI projects)
  "Applebot-Extended",
  "Bytespider", // ByteDance / TikTok
  "Cohere-AI",
] as const;

export default function robots(): MetadataRoute.Robots {
  const rules: MetadataRoute.Robots["rules"] = [
    {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/_next/", "/admin/"],
    },
  ];

  for (const bot of LLM_BOTS) {
    rules.push({
      userAgent: bot,
      ...(ALLOW_LLM_BOTS
        ? { allow: "/" }
        : { disallow: "/" }),
    });
  }

  return {
    rules,
    sitemap: [
      `${BUSINESS.url}/sitemap.xml`,
      `${BUSINESS.url}/sitemap-llms.xml`,
    ],
    host: BUSINESS.url,
  };
}
