import './globals.css';

export const metadata = {
    title: 'Skynet Intelligence | AI for Finance, Audit & Controls',
    description: 'Enterprise-grade AI system designed to turn financial workflows into structured, actionable outputs.',
    keywords: 'AI, Finance, Audit, Controls, Business Intelligence',
    openGraph: {
          title: 'Skynet Intelligence',
          description: 'AI for Finance, Audit & Controls',
          type: 'website',
    }
};

export default function RootLayout({ children }) {
    return (
          <html lang="en">
                <head>
                        <meta name="viewport" content="width=device-width, initial-scale=1" />
                        <meta name="theme-color" content="#0f172a" />
                </head>head>
                <body>
                  {children}
                </body>body>
          </html>html>
        );
}</html>
