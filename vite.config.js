import { sveltekit } from '@sveltejs/kit/vite'
import svg from '@poppanator/sveltekit-svg'
import mkcert from 'vite-plugin-mkcert'

const svgPlugin = svg({
    svgoOptions: {
        multipass: true,
        plugins: [
            {
                name: 'preset-default',
                params: {
                    overrides: {
                        removeViewBox: false,
                    },
                },
            },
            'removeDimensions',
        ],
    },
})

/** @type {import('vite').UserConfig} */
const config = {
    ssr: { noExternal: ['svelte-image-gallery'] },
    server: { https: true },
    optimizeDeps: {
        include: ['lodash.get', 'lodash.isequal', 'lodash.clonedeep'],
    },
    plugins: [sveltekit(), svgPlugin, mkcert()],
}

export default config
