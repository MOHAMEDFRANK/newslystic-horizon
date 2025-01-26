# PULSE NEW HORIZON by Avodstudio

A modern, multilingual news aggregation platform built with React and TypeScript, featuring real-time news updates, category filtering, and comprehensive search capabilities.

![Pulse Logo](/favicon.ico)

## Overview

Pulse New Horizon is a sophisticated news platform that aggregates and displays news from various sources using the NewsAPI.org API. The application supports multiple languages, theme switching, and responsive design for optimal viewing across all devices.

## Features

- 🌐 **Multilingual Support**: Available in English, Spanish, French, German, and Chinese
- 🎨 **Theme Switching**: Dynamic light/dark mode with custom styling
- 📱 **Responsive Design**: Optimized for all screen sizes
- 🔍 **Advanced Search**: Real-time news search functionality
- 📑 **Category Filtering**: News filtering by categories (Business, Technology, Entertainment, etc.)
- 🔄 **Real-time Updates**: Latest news updates using Supabase Edge Functions
- 🎯 **SEO Optimized**: Built with best practices for search engine optimization

## Tech Stack

### Frontend
- **React 18**: Modern UI library for building user interfaces
- **TypeScript**: Static typing for enhanced development experience
- **Vite**: Next-generation frontend tooling
- **TailwindCSS**: Utility-first CSS framework
- **shadcn/ui**: High-quality React components
- **i18next**: Internationalization framework
- **React Router**: Client-side routing
- **Tanstack Query**: Powerful data synchronization
- **Lucide Icons**: Beautiful, consistent icon set

### Backend (Supabase)
- **Edge Functions**: Serverless functions for API integration
- **Supabase Client**: Database and authentication management
- **NewsAPI.org Integration**: Real-time news data fetching

## Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── CategoryFilter/  # News category filtering
│   ├── NewsCard/       # Individual news article display
│   ├── NewsGrid/       # News articles grid layout
│   ├── SearchBar/      # Search functionality
│   ├── Navbar/         # Navigation and language selection
│   ├── Footer/         # Application footer
│   └── ThemeToggle/    # Theme switching component
├── i18n/                # Internationalization
│   └── locales/        # Translation files
├── integrations/        # External service integrations
│   └── supabase/       # Supabase client and types
├── pages/              # Application routes/pages
├── services/           # API and data services
└── types/              # TypeScript type definitions
```

## Key Components

### NewsCard
Displays individual news articles with:
- Article image
- Title and description
- Publication date
- Source and author information

### CategoryFilter
Implements category-based filtering with:
- Multiple category support
- Responsive design
- Internationalized labels

### SearchBar
Real-time search functionality with:
- Debounced search
- Query highlighting
- Error handling

## Supabase Integration

### Edge Functions
Located in `supabase/functions/`:

#### news-proxy
- Handles NewsAPI.org API requests
- Implements caching and rate limiting
- Manages API key security

```typescript
// Example usage
const { data, error } = await supabase.functions.invoke('news-proxy', {
  body: { 
    endpoint: 'top-headlines',
    category,
    page,
    pageSize: 10
  }
});
```

### Environment Setup
Required secrets in Supabase:
- `NEWS_API_KEY`: NewsAPI.org API key
- Other Supabase-specific keys (automatically configured)

## NewsAPI.org Integration

The application integrates with NewsAPI.org through Supabase Edge Functions to fetch:
- Top headlines
- Category-specific news
- Search results

### API Endpoints Used
- `/v2/top-headlines`: Latest news by category
- `/v2/everything`: Search across all articles

## Getting Started

1. **Install Dependencies**
```bash
npm install
```

2. **Set Up Supabase**
- Create a Supabase project
- Configure Edge Functions
- Set required environment variables

3. **Development**
```bash
npm run dev
```

4. **Build**
```bash
npm run build
```

## Deployment

The application can be deployed through:
1. Lovable's built-in deployment
2. Custom deployment using Netlify/Vercel
3. Manual deployment to any static hosting

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Push to the branch
5. Open a Pull Request

## License

This project is licensed under the GPL License - see the LICENSE file for details.

## Credits

Developed by Avodstudio

## Support

For support, please open an issue in the repository or contact the development team.
