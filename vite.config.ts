import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
    plugins: [react()],
    build: {
        rollupOptions: {
            input: {
                popup: resolve(__dirname, "src/popup/index.html")
            },
            output: {
                assetFileNames: `assets/[name].[ext]`
            }
        },
        outDir: 'dist',
        emptyOutDir: true,
    }
});
