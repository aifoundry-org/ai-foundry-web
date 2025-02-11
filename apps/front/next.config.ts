import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    HIDE_SECTIONS: "true",
    STRAPI_BASE_URL: "http://127.0.0.1:1337",
    STRAPI_API_TOKEN: "c375777f18a26c74c4b008eb3a7ba58cbf1ee0287d957214072d1ffe2d8aab6733ab5d8b750ada597947ac524517746671ce83d45722d14022100ae95613396bdddc2b2b5d6a2babf11f0823f30a3e4c692420e0ebd1bebef16cb608ffecb5dd2d19ebb834a55edde3c76efc8ac16fc621056f000dd7853b1d1aab68efb11e5e"
  },
};

export default nextConfig;
