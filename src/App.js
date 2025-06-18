import Header from 'components/Header/Header';
import Preview from './components/Preview/Preview';
import Founder from 'components/Founder/Founder';
import Stages from 'components/Stages/Stages';
import Experience from 'components/Experience/Experience';
import Callback from 'components/Callback/Callback';
import Classes from 'components/Classes/Classes';
import Courses from 'components/Courses/Courses';
import Footer from 'components/Footer/Footer';

import './App.css';
import './styles/fonts.scss';
import { lazy, Suspense } from 'react';
import Layout from 'components/Layout/Layout';

const LazyModale = lazy(() => import('components/Modale/Modale'))

function App() {
  return (
    <div className="App">
      <Header />
      <Preview />
      <Layout >
        <Founder />
        <Stages />
        <Experience />
        <Callback />
        <Classes />
        <Courses />
      </Layout>
      <Footer />
      <Suspense fallback={null}>
        <LazyModale />
      </Suspense>
    </div>
  );
}

export default App;
