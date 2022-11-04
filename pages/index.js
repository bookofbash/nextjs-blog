import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home( {allPostsData} ) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I'm Bashir, a linguist, conversation designer, and creater of this site. My path to conversation design started while completing my masters in applied linguistics.

I became really interested in computer assisted language learning (CALL) and computer programming in general. That started my journey in learning how to code. I really enjoying creating things from my imagination and this gives me the ability to do that.

As a linguist who learned web development and natural language processing (NLP), conversation design feels like a natural fit. I'm happy to be part of the growing field and would love to encourage others to pursue it. There is so much to learn and do that it's really an exiting time to get envolved.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
          <li className={utilStyles.listItem} key={id}>
            <Link legacyBehavior href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}