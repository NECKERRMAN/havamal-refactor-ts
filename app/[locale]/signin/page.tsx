import { Link } from '@/routing';
import React from 'react';

const SigninPage = () => {
    return (
        <main>
            <section className="w-screen h-screen flex justify-center items-center">
                <span className="absolute p-4 rounded-md bg-gray-800 text-white top-4 left-4">
                    <Link href={'/'}> Back to home</Link>
                </span>
                <div>
                    <h1>Sign-In</h1>
                    <p className="supabase-ex">Inloggen met Supabase</p>
                </div>
            </section>
        </main>
    );
};

export default SigninPage;
