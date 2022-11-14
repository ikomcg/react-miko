import React from 'react'
import Stack from './Stack'
import Libraries from './Libraries'
import Database from './Database'

// technology
import html from '../../images/skill/html.png'
import css from '../../images/skill/css.png'
import js from '../../images/skill/js.png'
import sass from '../../images/skill/Sass.png'



//libraries and frameworks
import bs from '../../images/skill/bs.png'
import tw from '../../images/skill/tw.png'
import rj from '../../images/skill/react.png'

//database
import php from '../../images/skill/php.png'
import mysql from '../../images/skill/mySql.png'
import mssql from '../../images/skill/msSql.png'


//other
import figma from '../../images/skill/figma.png'
import github from '../../images/skill/github.png'
import Other from './Other'

const stack = [
    {name: 'HTML', image:html, link: 'https://www.w3schools.com/html/default.asp'},
    {name: 'CSS', image:css, link: 'https://web.dev/learn/css/'},
    {name: 'Java Script', image:js, link: 'https://www.w3schools.com/js/default.asp'},
    {name: 'Sass', image:sass, link: 'https://www.w3schools.com/sass/default.php'},

]
const frameworks = [
    {name: 'Bootstrap', image:bs, link: 'https://getbootstrap.com/docs/5.2/getting-started/introduction/'},
    {name: 'Tailwind CSS', image:tw, link: 'https://tailwindcss.com/docs/installation'},
    {name: 'React JS', image:rj, link: 'https://reactjs.org/docs/getting-started.html'},

]
const DB = [
    {name: 'PHP', image:php, link: 'https://www.php.net/'},
    {name: 'MySQL', image:mysql, link: 'https://www.w3schools.com/sql/default.asp'},
    {name: 'MsSQL Server', image:mssql, link: 'https://www.w3schools.com/sql/default.asp'},

]
const other = [
    {name: 'Figma', image:figma, link: 'https://www.figma.com/downloads/'},
    {name: 'Git Hub', image:github, link: 'https://github.com/ikomcg'}
]


const Skill = () => {
    return (
        <section className='skill-page my-32'>
            <div className="px-8">
                <Stack skill={stack} heading='Technology Stack'/>
                <Libraries skill={frameworks} heading='Libraries and Frameworks'/>
                <Database skill={DB} heading='Database'/>
                <Other skill={other} heading = 'others'/>
            </div>

        </section>
    )
        
}

export default Skill
