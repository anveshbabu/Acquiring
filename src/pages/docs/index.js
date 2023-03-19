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

          <header class="docs-header">
            <h1 class="docs-heading">Introduction<span class="docs-time">Last updated: 2019-06-01</span></h1>
            <section class="docs-intro">
              <p>HTML (Hypertext Markup Language) is a language used to create the structure and content of websites. It is the foundation upon which all websites are built, and every web developer must have a good understanding of HTML to create dynamic and engaging web pages.</p>
            </section>
          </header>
          <section class="docs-section" id="item-1-1">
            <ul>
              <li> HTML stands for  <strong class="me-1">Hyper Text Markup Language</strong></li>
              <li>HTML was invented by Tim Berners-Lee in 1991.</li>
              <li>HTML is used for creating web pages and web applications.</li>
              <li>It is used to describe the structure of Web pages using markup tags.</li>
            </ul>
            <p>Markup languages use sets of markup tags to characterize text elements within a document, which gives instructions to the web browsers on how the document should appear.</p>

          </section>

          <section>
            <h5>Getting Started with HTML</h5>
            <p>Getting started with HTML is easy, all you need is a text editor and a basic understanding of HTML tags and attributes. HTML tags are used to mark up the content of a web page and define its structure. For example, the <code>{' <h1>'}</code> tag is used for headings, the  <code>{' <p>'}</code> tag is used for paragraphs, and the  <code>{' <a>'}</code> tag is used for links.</p>
          </section>

          <section>
            <h5>Important HTML Tags</h5>
            <p>There are several important HTML tags that you should be familiar with as a web developer. Here are some of the most commonly used HTML tags:</p>
            <ul>
              <li> <code>{"<html>"}</code>: This tag is the root element of an HTML document and contains all the other HTML elements</li>
              <li><code>{'<head>'}</code>: This tag contains information about the document, such as the title, which is displayed in the {"browser's"} tab.</li>
              <li><code>{"<body>"}</code>: This tag contains the content of the web page.</li>
              <li><code>{'<h1> '}</code> to <code>{'<h6>'}</code>: These tags are used for headings, with<code>{' <h1> '}</code>being the most important heading and<code>{' <h6>'} </code>being the least important.</li>
              <li><code>{'<p>'}</code> : This tag is used for paragraphs</li>
              <li><code>{'<a>'}</code>: This tag is used for links.</li>
              <li><code>{'<ul>'}</code> and <code>{'<li>'}</code>: These tags are used to create unordered lists.</li>
              <li><code>{'<img>'}</code>: This tag is used to embed images in a web page.</li>
            </ul>
          </section>

          <section>
            <h5>Fundamental of HTML Tags</h5>
            <p>HTML is written in the form of HTML elements consisting of markup tags. These markup tags are the fundamental characteristic of HTML. Every markup tag is composed of a keyword, surrounded by angle brackets</p>
            <strong>{'<tagname>content</tagname>'}</strong>

            <ul>
              <li>HTML tags normally come in pairs like <code>{'<p>'}</code> and <code>{'</p>'}</code></li>
              <li>The first tag in a pair is the start tag, the second tag is the end tag.</li>
              <li>The end tag is written like the start tag, but with a slash before the tag name.</li>
            </ul>
          </section>

          <section>
            <h5>Basic Structure of HTML</h5>
            <p>Each HTML page consists of a set of tags or elements which are known as the building blocks of web pages. They create a hierarchy that structures the content into sections, paragraphs, headings, and other content blocks.</p>
            <strong>{'<tagname>content</tagname>'}</strong>

            <ul>
              <li>HTML tags normally come in pairs like <code>{'<p>'}</code> and <code>{'</p>'}</code></li>
              <li>The first tag in a pair is the start tag, the second tag is the end tag.</li>
              <li>The end tag is written like the start tag, but with a slash before the tag name.</li>
            </ul>
            <div className={'w-75'}>
              <Image src={'/images/htmlPageStructure.png'} fill className='w-50 h-100 position-relative object-fit-cover ' />

              <ul>
                <li> The <code>{"<html></html>"}</code> tag is the highest level element that encloses every HTML page.</li>
                <li>The  <code>{'<head></head>'}</code>: tag holds meta information such as the page’s title and charset.</li>
                <li>The <code>{"<body></body>"}</code>  tag encloses all the content that appears on the page.</li>
              </ul>
            </div>

          </section>

        </DocLayout>


      </main>
    </>
  )
}
