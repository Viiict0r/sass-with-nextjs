import Head from 'next/head';
import styles from '../styles/Home.module.scss';

import { Todo } from '../components/Todo';

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Next.js with SASS</title>
      </Head>
      <div className={styles.container}>
        <h3>Next.js with SASS modules</h3>
        <div className={styles.separator} />
        <div className={styles.todo_content}>
          <Todo />
          <Todo />
          <Todo />
          <Todo />
          <Todo />
          <Todo />
        </div>
      </div>
    </>
  );
}
