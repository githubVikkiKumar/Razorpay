import React from 'react';
import Navbar from './components/navbar';
import Header from './components/Header';
import FinancePlatform from './components/FinancePlatform';
import AcceptPayments from './components/AcceptPayments';
import PoweringIndustries from './components/PoweringIndustries';
import InnovationCards from './components/InnovationCards';
import Build from './components/build';
import NoCodeSolutions from './components/NoCodeSolutions';
import ImageCarousel from './components/ImageCarousel';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <FinancePlatform/>
      <AcceptPayments/>
   <PoweringIndustries/>
   <InnovationCards/>
   <Build/>
   <NoCodeSolutions/>
   <ImageCarousel/>
   <Footer/>
      {/* Add other components here as needed */}
    </div>
  );
};

export default App;