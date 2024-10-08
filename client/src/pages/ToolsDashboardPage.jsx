import React, {useEffect} from 'react';
import {Footer, Sidebar } from '../components';
import {styles} from '../style';
import '../index.css';
import SouthIcon from '@mui/icons-material/South';
import { projectDescriptions } from '../data/tools-pages.js';
import {useNavigate} from 'react-router-dom';
import useBodyBackgroundColor from '../hooks/useBodyBackgroundColor';
import { useAuth } from '../context/AuthContext';

const ToolsPage = () => {

    const {user} = useAuth();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const navigate = useNavigate()
    useBodyBackgroundColor('#f6f8fe');

    return (
        <div className='flex'>
            <Sidebar
                structure='lightest-blue-bg basis-[18%] z-[1]'/>
            <div className={`m-auto black-text basis-[82%] z-[50]`}>
                <div className={`w-[80%] m-auto pt-[2rem] pb-[2rem]
                                md:pt-[4rem] md:pb-[4rem] xl:max-w-[1280px]`}>
                    <div className='flex justify-between items-center mb-[5rem]'>
                        <h2 className = {`${styles.heading2} basis-[40%] font-[500] leading-[3.75rem]`}>
                            Hi, {user ? user.displayName : null}
                        </h2>
                        <h3 className={`${styles.heading4} basis-[50%] font-normal`}>
                            Welcome to your tools dashboard. Please select one of the tools to use down below.
                        </h3>
                    </div>
                    <SouthIcon
                    sx={{fontSize: 35}}
                    className='display mb-[5rem]'/>
                    <div className='mb-[3rem]'>
                        {projectDescriptions.map((project, index) => (
                            <div key={project.id}>
                                <div 
                                onClick={() => navigate(`${project.link}`)}
                                className='project-card flex items-center justify-between cursor-pointer p-[2rem] mx-[-2rem] rounded-[10px]'>
                                    <div className='basis-[40%]'>
                                        <h4 className={`${styles.heading4} mb-[1.5rem]`}>
                                            {project.number} / {project.name}
                                        </h4>
                                        <p className='font-normal text-[1rem] mb-[1.5rem] leading-[1.25rem]'>
                                            {project.description}
                                        </p>
                                        <p className = 'text-[0.875rem] leading-[1.1rem] font-light'>
                                            {project.subDescription}
                                        </p>
                                    </div>
                                    <div className='basis-[50%]'>
                                        <img src={project.image} alt={`Preview of project ${project.name}`}/>
                                    </div>
                                </div>
                                {projectDescriptions.length - 1 == index ? null : 
                                <hr className='border-t-[2px] border-gray-300 my-[3rem]'/>}
                            </div>
                        ))}
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default ToolsPage;