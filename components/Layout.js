import Head from 'next/head'
import styles from '@/styles/Layout.module.css'
import Footer from './Footer'
import Header from './Header'
import { useRouter } from 'next/router'
import Showcase from './Showcase'

export default function Layout({title, description, keywords, children}) {
    const router = useRouter();
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name='description' content={description} />
                <meta name='keywords' content={keywords} />
            </Head>

            <Header/>

            {
                router.pathname === '/' && <Showcase/>
            }

            <div className={styles.container}>
                {children}
            </div>
            <Footer/>
        </div>
    )
}

Layout.defaultProps = {
    title:'DJ Events | The hottest Parties on the Earth',
    description:'Find the hottest parties on the earth',
    keywords:'music, dj, events'
}
