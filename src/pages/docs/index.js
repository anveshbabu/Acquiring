import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.scss'
import { DocMenuCards } from '@/components/common'

import { Header, DocLayout } from '@/layout'

export default function Home() {




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

        <DocLayout  >


        </DocLayout>


      </main>
    </>
  )
}
