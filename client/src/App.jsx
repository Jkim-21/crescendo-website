// App.jsx
import React from 'react';
import { AboutUs, Chapters, Footer, Hero, Navbar, Impact, DonationForm, QueryProvider, Work, AnimationLayout } from './components';
import { styles } from './style';
import { ThemeProvider } from '@mui/material/styles';
import theme from './themes/theme';

const App = () => {
  return (
      <AnimationLayout>
        <div 
        className='navy-bg'
        id='home'>
          <Navbar />
          <div 
          className='navy-bg w-full overflow-hidden'>
            <div className={`${styles.boxWidth}  m-auto`}>
              <Hero />
            </div>
          </div>
          <div className='beige-bg'>
            <div className={`${styles.boxWidth} m-auto`}>
              <Impact />
            </div>
          </div>
          <div className='navy-bg'>
            <div className={`${styles.boxWidth} m-auto`}>
              <ThemeProvider theme={theme}>
                <QueryProvider>
                  <DonationForm />
                </QueryProvider>
              </ThemeProvider>
            </div>
          </div>
          <div className='beige-bg'>
            <div className={`${styles.boxWidth} m-auto`}>
              <Work />
            </div>
          </div>
          <div className='navy-bg'>
            <div className={`${styles.boxWidth} m-auto`}>
              <AboutUs />
            </div>
          </div>
          <div className='beige-bg'>
            <div className={`${styles.boxWidth} m-auto`}>
              <Chapters />
            </div>
          </div>
            <Footer />  
        </div>
      </AnimationLayout>
  );
}


export default App;
