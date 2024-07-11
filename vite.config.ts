import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA({
    includeAssets:['**/*.{png}*','**/*.{jpg}*'],
                    //'/assets/favicons/192x192.png',
                    // '/assets/favicons/256x256.png',
                    //'/assets/favicons/512x512.png',], 
                                   
    registerType: 'autoUpdate',//'prompt'
    injectRegister: false,

    pwaAssets: {
      disabled: false,
      config: true,
    },

    manifest: {
      //start_url:'/',
      name: '.',//MaxStone
      short_name: '.',//MaxStone
      description: 'my first game',
      theme_color: '#ffffff',
      background_color:'#46b4ac',
      display:'standalone',
      orientation:'landscape-primary',
      icons:[{
        src:"/assets/favicons/192x192.png",//????????????
        sizes:"192x192",
        type:"image/png"
      },
      {
        src:"/assets/favicons/512x512.png",
        sizes:"512x512",
        type:"image/png"
      },
      {
        src:"/assets/favicons/192x192.jpg",
        sizes:"192x192",
        type:"image/jpg",
        purpose:'maskable'
      },
      {
        src:"/assets/favicons/192x192.jpg",
        sizes:"192x192",
        type:"image/jpg",
        purpose:'maskable'
      },
    ]
    },

    workbox: {
      globPatterns: ['**/*.{js,css,html,svg,png,ico}'],
      cleanupOutdatedCaches: true,
      clientsClaim: true,
    },

    devOptions: {
      enabled: true,
      navigateFallback: 'index.html',
      suppressWarnings: true,
      type: 'module',
    },
  })],
})