import { sveltekit } from '@sveltejs/kit/vite'
import svg from '@poppanator/sveltekit-svg'

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
    optimizeDeps: {
        include: ['lodash.get', 'lodash.isequal', 'lodash.clonedeep'],
    },
    plugins: [sveltekit(), svgPlugin],
}

export default config
