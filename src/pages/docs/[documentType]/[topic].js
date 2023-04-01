import Head from 'next/head'
import Image from 'next/image'
import {pageContent} from '@/utlity/pageData';
import styles from '@/styles/Home.module.scss'
import { DOCS_MENU } from '@/utlity/constants'
import { getPageData } from '@/utlity/commonMethods'
import { Header, DocLayout } from '@/layout'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
export default function HtmlIntroduction() {
  const router = useRouter()

  const [pageData, setPageData] = useState('');


  useEffect(() => {
    const {documentType,topic } = router.query;
    let data =pageContent?.find((data,i)=>(data.document === documentType && data.topic.toLowerCase() === topic.toLowerCase() ));
    setPageData(data)
  }, [router.query])


  return (
    <>
      <Head>
        <title>Acquiring technologies</title>
        <meta name="description" content="acquiring technologies" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

      </Head>
      <main className={styles.main}>
        <Header pageHeader={false} />

        <DocLayout menuList={DOCS_MENU.HTML}>
          {pageData?.data}

        </DocLayout>


      </main>
    </>
  )
}
