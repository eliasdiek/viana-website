import React from 'react'
import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'
import { useRouter } from 'next/router'

export default function Post({ postData }) {
    const router = useRouter();

    function zoomImage(url) {
        window.location = url
    }

    React.useEffect(() => {
        const articleContainer = document.querySelector('.portfolio-content')
        const imgs = articleContainer.getElementsByTagName('img')

        if (imgs.length) {
            for(const img of imgs) {
                img.addEventListener('click', function() {
                    zoomImage(img.getAttribute('src'))
                })
            }
        }

        return () => {
            if (imgs.length) {
                for(const img of imgs) {
                    img.removeEventListener('click', function() {
                        zoomImage(img.getAttribute('src'))
                    })
                }
            }
        }
    }, [])

    return (
        <Layout>
            <Head>
                <title>{`${postData.title} | Mabel de Jesus Viana Arias | Full Stack Developer`}</title>
                <meta name="title" content={`${postData.title} | Mabel de Jesus Viana Arias | Full Stack Developer`} />
                <meta name="description" content={postData.description} />

                <meta property="og:title" content={`${postData.title} | Mabel de Jesus Viana Arias | Full Stack Developer`} key="title" />
                <meta property="og:site_name" content="Mabel de Jesus Viana Arias | Full Stack Developer" />
                <meta property="og:url" content={`https://www.heyadev.com/portfolio/${postData.id}`} />
                <meta property="og:type" content="website" />
                <meta property="og:description" content={postData.description} />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={`${postData.title} | Mabel de Jesus Viana Arias | Full Stack Developer`} />
                <meta name="twitter:description" content={postData.description} />
            </Head>
            <article>
                <h1 className={`${utilStyles.headingXl} ${utilStyles.textCenter}`}>{postData.title}</h1>
                <div className={utilStyles.lightText}>
                <Date className={utilStyles.textCenter} dateString={postData.date} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} className="portfolio-content" />
            </article>
        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = getAllPostIds()

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}