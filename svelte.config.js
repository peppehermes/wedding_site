import adapter from '@sveltejs/adapter-auto'
import preprocess from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    preprocess: [
        preprocess({
            postcss: true,
        }),
    ],

    kit: {
        adapter: adapter(),
        alias: {
            $src: 'src',
            $data: 'src/data',
            $com: 'src/lib/components',
            $stores: 'src/stores',
            $icon: 'src/lib/icons',
        },
    },
}

export default config
