import { defineConfig, presetAttributify, presetIcons, presetTypography, presetUno, presetWebFonts, transformerDirectives, transformerVariantGroup } from 'unocss'

export default defineConfig({
  shortcuts: [
    // ...
  ],
  theme: {
    colors: {
      dark: '#0C0C0C',
      gray: '#999999',
      container: '#161616',
    },
  },
  safelist: [
    'i-hugeicons-user',
    'i-hugeicons-settings-03',
    'i-hugeicons-code',
    'i-hugeicons-checkmark-circle-02',
    'i-hugeicons-alert-circle',
    'i-hugeicons-computer-programming-01',
    'i-hugeicons-briefcase-01',
    'i-hugeicons-clock-01',
    'i-hugeicons-file-attachment',
    'i-hugeicons-graduation-scroll',
    'i-hugeicons-contact',
    'i-hugeicons-call',
    'i-hugeicons-mail-01',
    'i-hugeicons-new-twitter',
    'i-hugeicons-github',
    'i-hugeicons-link-square-02',
    'i-hugeicons-linkedin-02',
    'i-hugeicons-folder-01',
    'i-hugeicons-arrow-left-02',
    'i-hugeicons-arrow-right-02',
    'i-hugeicons-text-align-left-01',
    'i-hugeicons-arrow-down-01',
    'i-logos-vue',
    'i-logos-nuxt-icon',
    'i-logos-javascript',
    'i-logos-typescript-icon',
    'i-logos-unocss',
    'i-logos-npm-icon',
    'i-logos-sass',
    'i-logos-pinia',
    'i-logos-firebase',
    'i-logos-git-icon',
    'i-logos-vercel-icon',
    'i-logos-figma',
    'i-logos-zod',
    'i-logos-visual-studio-code',
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
        // ...
      },
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        ibm: [
          {
            name: 'IBM Plex Mono',
            provider: 'google',
            weights: ['100', '200', '300', '400', '500', '700'],
            italic: true,
          },
          {
            name: 'monospace',
            provider: 'none',
          },
        ],
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
