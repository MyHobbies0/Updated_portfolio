import React from 'react';
import { ThemeContext } from '../../Context/theme';
import GitHubCalendar from 'react-github-calendar';
export const Github = () => {
  const colourTheme = {
    background: 'transparent',
    text: '#ffffff',
    grade4: '#8400b8',
    grade3: '#b22ff4',
    grade2: '#b265f6',
    grade1: '#c084f5',
    grade0: '#ecd9fc',
  };
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <div className={'section ' + themename} data-aos='fade-right'>
        <h2 className='section__title different'>
          Days I <span className='different'> Code</span>
        </h2>
        {/* <Githubcalendar
          username='Md-Irshad-Alam'
          blockSize={15}
          blockMargin={5}
          theme={colourTheme}
          fontSize={16}
        /> */}
         <GitHubCalendar
          username='MdIrshadAlam'
          blockSize={15}
          blockMargin={5}
          // theme={colourTheme}
          fontSize={16}
        /> 
      </div>
    </>
  );
};
