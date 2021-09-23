/** @type {import('next').NextConfig} */
const { PHASE_PRODUCTION_BUILD } = require("next/constants");

module.exports = (phase) => {
  const isProd = phase === PHASE_PRODUCTION_BUILD;

  const redirects = async () => {
    return [
      {
        source: "/products",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/about",
        destination: "/#features",
        permanent: true,
      },
      {
        source: "/blogs",
        destination: "/docs",
        permanent: true,
      },
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
    ];
  };
  return {
    reactStrictMode: true,
    env: {
      // social media links
      url: "https://guilhermeabel.tk",
      github: "https://github.com/guilhermeabel99",
      instagram: "https://instagram.com/oguilhermeabel",

      // counts sections info
      projects_count: "+100",
      clients_count: "20",
      docs_count: "1",
      coding_years_count: "3",

      // contact section info
      email: "not found",
      call: "+none none",
      location: "Oman Muscat",

      // backend API section info
      // BACKEND_API: isProd ? "https://guilhermeabel.com/" : "http://localhost:8080",

      //github states image URL
      // language_states:
      //   "https://github-readme-stats.vercel.app/api/top-langs?username=guilhermeabel99&show_icons=true&locale=en&layout=compact",
      // github_states:
      //   "https://github-readme-stats.vercel.app/api?username=guilhermeabel99&show_icons=true&locale=en",
      // streak_states:
      //   "https://github-readme-streak-stats.herokuapp.com/?user=guilhermeabel99&",
    },
    redirects,
  };
};
