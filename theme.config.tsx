import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Link from "next/link";
import Image from "next/image";

const currentYear = new Date().getFullYear(); // Get the current year dynamically

// const Logo = () => {
//   return (
//     <Link
//       href="/"
//       style={{
//         display: "inline-flex",
//         alignItems: "center",
//         justifyContent: "center",
//         borderRadius: "0.375rem",
//         outline: "none",
//         transition: "all 0.2s ease-in-out",
//         fontWeight: "bold",
//         fontSize: "1.25rem",
//         height: "2.5rem",
//         width: "2.5rem",
//         border: "1px solid black",
//         color: "black",
//         cursor: "pointer",
//       }}
//       onMouseEnter={(e) => {
//         e.currentTarget.style.backgroundColor = "transparent";
//         e.currentTarget.style.color = "#4b5563"; // Equivalent to gray-800
//       }}
//       onMouseLeave={(e) => {
//         e.currentTarget.style.backgroundColor = "initial";
//         e.currentTarget.style.color = "black";
//       }}
//     >
//       Re
//     </Link>
//   );
// };

const Logo = ()=>{
  return <Image src="/logo-black.webp" alt="logo" width={100} height={20}/>
}
const config: DocsThemeConfig = {
  logo: <Logo />,
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Replyke Docs" />
      <meta
        property="og:description"
        content="Build communities around your content"
      />
    </>
  ),
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
