import React, {useEffect} from 'react';
import { chapterBackground } from '../assets';
import { colby, harvard, northwestern, stevenson, ucsb } from '../data/chapter-details';
import { Involvements, Officers, Contacts, Navbar } from '../components';
import {styles} from "../style";
import { useParams } from 'react-router-dom';


const chapters = {
  colby, harvard, northwestern, stevenson, ucsb
}

const ChapterPage = () => {
  let {chapterName} = useParams();
  const chapterData = chapters[chapterName];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div 
      style={{backgroundImage: `url(${chapterData.background})`}}
      className='w-full bg-center bg-cover overflow-hidden'>
        <div className={`${styles.flexCenter}`}>
          <div className={`w-full chapter-navbar`}>
            <Navbar pageStyles='chapter-drop-shadow'/>
          </div>
        </div>
        <div className={`${styles.flexCenter} bg-no-repeat h-[25rem] w-full`}>
          <h1 className={`chapter-text-shadow font-medium text-[2.5rem] leading-[44.25rem] text-white`}>
          {chapterData.header}</h1>
        </div>
      </div>
      <div 
      style={{backgroundImage: `url(${chapterBackground})`}} 
      className={`${styles.flexCenter} ${styles.paddingY}`}>
        <div className={`${styles.boxWidth} max-w-[95%]`}>

          <div className='m-auto rounded 
                          lgs:max-w-[85%]'>
            {chapterData.aboutInformation.map((aboutSection, index) => (
                <p
                key={index}
                className={`${styles.paragraph} text-gray-200 mb-5`}>
                  {aboutSection}
                </p>
            ))}
            <p className={`${styles.paragraph} white-text mb-10`}>
              {chapterData.emailAddress && `You can contact us at ${chapterData.emailAddress}`}
            </p>
          </div>

          <h2 className={`${styles.heading2} gold-text text-center mb-[1.25rem]`}>Get Involved</h2>
          <div className={`${styles.flexCenter} flex-wrap gap-[1rem] items-stretch w-full mb-[2.5rem] 
                           lg:gap-[1rem] m-auto`}>
            {chapterData.involvements.map((involvement, index) => (
                <Involvements key={involvement.id} {...involvement} boxColor={index % 2 === 0 ? 'navy-bg' : 'gold-bg'} />
            ))}

          </div>

          <h4 className={`${styles.heading2} font-semibold gold-text text-center mb-5`}>Officers</h4>
          <div className={`${styles.flexCenter} gap-x-[4rem] gap-y-[2rem] flex-wrap
                          md:gap-y-[4rem]`}>
            {chapterData.officers.map((officer) => (
                <Officers key={officer.id} {...officer}/>
            ))}
          </div>
        </div>
      </div>
      <Contacts/>
    </>
  )
}

export default ChapterPage;