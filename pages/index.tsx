import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout children={undefined}>
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>Title from Layout</h1>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
