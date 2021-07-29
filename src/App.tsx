import './styles.scss';
import 'bootswatch/dist/superhero/bootstrap.min.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

export const App = () => {
  return (
    <>
      <Header />
      <Main />
    </>
  );
};

export default App;
