'use client';

import { Link } from '@/routing';
import { config } from '@/config';

// Render the default Next.js 404 page when a route
// is requested that doesn't match the middleware and
// therefore doesn't have a locale associated with it.

export default function NotFound() {
    return (
        <html lang="en">
            <body className="w-screen h-screen flex flex-col justify-center items-center">
                <h1>404</h1>
                <p>Page not found</p>
                <Link href={'/'} className="link">
                    Go back home
                </Link>
            </body>
        </html>
    );
}
