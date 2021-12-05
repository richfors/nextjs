import Layout from "../components/Layout";
import { fetchAPI } from "../lib/api";
import Trending from "../components/Trending";

const Home = ({ trending }) => {
  console.log(trending);

  return (
    <Layout>
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>Title</h1>
          <Trending trending={trending} />
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  const trending = await Promise.all([fetchAPI("/trending/all/day?")]);

  return {
    props: { trending },
    revalidate: 1,
  };
}

export default Home;
