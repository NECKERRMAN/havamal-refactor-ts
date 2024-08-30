import { useTranslations } from 'next-intl';
import Header from '../components/app/Header/Header';
import { unstable_setRequestLocale } from 'next-intl/server';
type Props = {
    params: { locale: string };
};
export default function Home({ params: { locale } }: Props) {
    // Enable static rendering
    unstable_setRequestLocale(locale);
    const t = useTranslations('HomePage');
    return (
        <main>
            <Header />
            <section className="flex min-h-screen flex-col items-center p-24">
                <h1>Havamal</h1>
                <h2 className="text-center max-w-4xl">{t('about')}</h2>
            </section>
        </main>
    );
}
