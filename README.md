# LinguaGroq

A modern web application that leverages the power of Groq's API for natural language processing and generation.

## Features

- Real-time text generation using Groq's API
- Modern and responsive UI built with React and Tailwind CSS
- TypeScript support for better development experience
- Fast development environment with Vite

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Groq API key ([Get it here](https://console.groq.com))

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yigitatakan/lingua-groq.git
cd lingua-groq
```

2. Install dependencies:
```bash
npm install
# or if you use yarn
yarn install
```

3. Create a `.env` file in the root directory and add your Groq API key:
```env
VITE_GROQ_API_KEY=your_api_key_here
```

4. Start the development server:
```bash
npm run dev
# or
yarn dev
```

## Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

To preview the production build locally:
```bash
npm run preview
# or
yarn preview
```

## Deployment

This project can be deployed on Vercel with minimal configuration:

1. Push your code to GitHub
2. Log in to [Vercel](https://vercel.com)
3. Click "New Project"
4. Select your GitHub repository
5. Configure the following environment variables:
   - `VITE_GROQ_API_KEY`: Your Groq API key
6. Click "Deploy"

The project will be automatically built and deployed.

## Tech Stack

- [React](https://reactjs.org/) - UI Framework
- [TypeScript](https://www.typescriptlang.org/) - Type Safety
- [Vite](https://vitejs.dev/) - Build Tool
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Groq SDK](https://www.npmjs.com/package/groq-sdk) - AI Integration

## Development

### Project Structure

```
lingua-groq/
├── src/              # Source files
├── public/           # Static assets
├── index.html        # Entry HTML file
├── vite.config.ts    # Vite configuration
├── tailwind.config.js # Tailwind CSS configuration
└── tsconfig.json     # TypeScript configuration
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
