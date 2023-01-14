import {defineConfig} from 'astro/config';
import storyblok from "@storyblok/astro";


// https://astro.build/config
export default defineConfig({
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
