import {defineConfig} from 'astro/config';
import sitemap from "@astrojs/sitemap";
import storyblok from "@storyblok/astro";

// https://astro.build/config
export default defineConfig({
    site: 'https://geometricpanda.dev',
    integrations: [
        storyblok({
            accessToken: "li4bleLNJHRanaQG5lydNgtt",
            components: {
                page: "storyblok/Page"
            }
        }),
        sitemap(),
    ],
    vite: {
        ssr: {
            noExternal: ['@astro-community/astro-embed-youtube']
        }
    }
});
