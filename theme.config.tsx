import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const currentYear = new Date().getFullYear(); // Get the current year dynamically

const config: DocsThemeConfig = {
  logo: <span className="text-green-500">Replyke Docs</span>,
  project: {
    link: "https://github.com/Tsabary/replyke-v4-docs",
  },
  // chat: {
  //   link: 'https://discord.com',
  // },
  docsRepositoryBase: "https://github.com/shuding/nextra-docs-template",
  footer: {
    content: `© Replyke ${currentYear}`, // Add the year dynamically here
  },
};

export default config;
