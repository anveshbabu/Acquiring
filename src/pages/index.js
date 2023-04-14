import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.scss'
import { DocMenuCards } from '@/components/common'
import { Header } from '@/layout'
export default function Home() {

  const docMenuList = [
    {
      icon: "fa-brands fa-html5",
      title: "HTML",
      discussion: "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It is often assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript",
      url: "docs/html"
    },
    {
      icon: "fa-brands fa-css3-alt",
      title: "CSS",
      discussion: "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScriptt",
      url: "docs/css"
    },
    {
      icon: "fa-brands fa-js",
      title: "CSS",
      discussion: "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries.",
      url: "docs/js"
    },
    {
      icon: "fa-brands fa-react",
      title: "React js",
      discussion: "React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies.",
      url: "docs/react-js"
    }
  ]


  return (
    <>
      <Head>
        <title>Acquiring technologies</title>
        <meta name="description" content="Acquiring technologies" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header pageHeader={true} />


        <div className="page-content">
          <div className="container">
            <div className="docs-overview py-5">
              <div className="row justify-content-center">
                {docMenuList?.map((data, i) =>
                  <div className="col-12 col-lg-4 py-3" key={i}>
                    <DocMenuCards data={data} />
                  </div>
                )}

              </div>
            </div>
          </div>
        </div>

      </main>
    </>
  )
}
