import {defineConfig} from 'astro/config';
import storyblok from "@storyblok/astro";
import netlify from '@astrojs/netlify';


// https://astro.build/config
export default defineConfig({
    output: 'server',
    adapter: netlify(),
    integrations: [
        storyblok({
            accessToken: "li4bleLNJHRanaQG5lydNgtt",
            components: {
                page: "storyblok/Page",
            }
        }),
    ],
    vite: {
        ssr: {
            noExternal: [ '@astro-community/astro-embed-youtube' ]
        }
    }
});
