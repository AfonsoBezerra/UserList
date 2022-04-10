import Layout from '@components/Layout';
import Head from 'next/head';
import type { NextPage } from 'next';
import Table from '@components/Table';
import { ReloadIcon } from '@styles/components/Icons';
import { useDataContext } from '../hooks/useDataUser';

const Home: NextPage = () => {
  const { fetchData } = useDataContext();
  function handleClick() {
    fetchData();
  }
  return (
    <>
      <Head>
        <title>GBrogio Company</title>
        <meta name="description" content="Creating form table" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Layout>

        <h2>
          Opus igitur est dicere possit dura omni specie. Tu autem in specie, non videntur,
          nex omnino res est. Et examine ab eis praecpta eius quae habes, et promo
          et principaliter dignissimos quia.

        </h2>
        <Table />

        <button type="button" className="loading" onClick={handleClick}>
          <ReloadIcon className="buttonReload" />
          <div>
            <h3>Loading more...</h3>
          </div>
        </button>
      </Layout>
    </>
  );
};

export default Home;
