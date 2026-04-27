import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
    dir: './',
})

const config = {
    // coverageProvider: 'v8',
    testEnvironment: 'jsdom',
    modulePaths: ['<rootDir>/src'],
    collectCoverage: true,
    // collectCoverageFrom: [
    //     '**/*.{ts,tsx}',
    //     '**/*.d.ts',
    //     '!**/node_modules/**',
    //     '!**/.next/**',
    //     '!**/coverage/**',
    //     '!**/jest.config.mjs',
    //     '!**/next.config.mjs',
    //     '!**/types/**',
    //     '!**/views/**',
    //     '!**/pages/api/**',
    // ],
    collectCoverageFrom: [
    "src/pages/produk/index.tsx",
    "src/views/product/index.tsx"
],
}

export default createJestConfig(config)