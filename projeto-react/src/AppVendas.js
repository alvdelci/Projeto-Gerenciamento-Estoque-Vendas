import React from 'react';
import Headers from './components/vendas/Headers';
import Article from './components/vendas/Article';
import Footer from './components/vendas/Footer';
import './App.css';


/*class App extends Component {

  state = {
    Nome: [], //estado nome para nomes
  }

  async componentDidMount() {
    const response = await api.get('nome');//requisição pode ser vazio tbm

    this.setState({ Nome: response.data }); //recebe dados de  response
  }

  render() {

    const { Nome} = this.state;

    return (
      <div>
        <h1>Resultado produto</h1>
        {Nome.map(Nome => (
          <li key={Nome.show.code}>
            <h2>
              <strong>Produto: </strong>
              {Nome.show.name}
            </h2>
            <p>
              {Nome.show.description}
            </p>

          </li>
        ))}
      </div>
    );
  };
};
   */
function AppVendas (props) {
  return (
    <div>
        <Headers/>
        <Article />
        <Footer />
    </div>    
  );
};

export default AppVendas;
