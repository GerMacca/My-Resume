//CSS
import './App.css'

//Components
import Header from '../Components/Header/Header.jsx';
import MainContent from '../Components/MainContent/MainContent.jsx';

export default function App() {
  const toggleTheme = () => {
    document.body.classList.toggle('dark');
  };
  return (
    <>
      <Header />
      <MainContent />
    </>
  );
}
