import { Fragment } from "react";
import ListPokemon from "../organisms/ListPokemon";
import Layout from "../organisms/Layout";

const App = () => {
  return (
    <Fragment>
      <Layout>
        <ListPokemon />
      </Layout>
    </Fragment>
  );
};

export default App;
