import { useTranslations } from 'next-intl';

export default function Home() {
    const t = useTranslations('HomePage');
    return (
        <main className="flex min-h-screen flex-col items-center p-24">
            <h1>Havamal</h1>
            <h2 className="text-center max-w-4xl">{t('about')}</h2>
        </main>
    );
}
