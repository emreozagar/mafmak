import React from 'react'
import { Link } from 'react-router-dom';



const ENIdiom = () => {
  const langs = [
    {
      icon: '/images/uk.png',
      link: '/en/',
      submenu: true,
      subidioms: [
        {icon: '/images/tc.png', link:'/'},
        {icon: '/images/re.png', link:'/es/'},
      ]
    
    }]
    
    return (
      <div className='flex'>
      {
        langs.map((lang, index) => (
        <div className='group'>
          <div  className='h-8 w-8'>
           <Link to={lang.link}> <img src={lang.icon}/> </Link>
          </div>
           {lang.submenu && (
            <div className='hidden absolute group-hover:md:block hover:md:block'>
              {
                lang.subidioms.map((idioms)=> (
                <div className='h-8 w-8'>
                  <a href={idioms.link}> <img src={idioms.icon}/> </a>
                </div>
                ))
              }
            </div>
           )}
        </div>
        ))
      }
    </div>
    )
  }
  
  
export default ENIdiom