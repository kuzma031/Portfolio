import React from 'react';

import Page from './Page';
import useSkills from '../hooks/useSkills';

const Skills = () => {

    const skills = useSkills();

    return (
        <Page className='page__skills' id='tools' title='Tools' subtitle='Those are tools i have lot experience in. Underlined are tools i use daily and have advanced knowledge in.'>
            <div className="skills__wrapper">
                {skills.map((skill, index) => {
                    const { title, icon, iconClass, text } = skill;

                    return (
                        <div className="skills__container" key={index}>
                            <div className={`skills__container--icon ${iconClass}`} >
                                {icon}
                            </div>
                            <h5 className="skills__container--heading" dangerouslySetInnerHTML={{ __html: title }} />
                            <p dangerouslySetInnerHTML={{ __html: text }} />
                        </div>
                    )
                })}
            </div>
        </Page>
    )
}

export default Skills;