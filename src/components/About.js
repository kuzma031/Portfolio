import React from 'react';

import Page from './Page';
import { InterestIcons } from '../components/Icons';

const About = () => {

    return (
        <Page title="Hi, I'm Đorđe" className='page__about' id='about'>
            <div className="about__container">
                <div className="about__content">
                    <p className="about__text">
                        I'm full-stack software developer from Serbia. I help teams, organizations and business bring their ideas to life. My primary focus is web development. 
                    </p>
                    <p className="about__text">
                        Currently I work as a freelancer for various clients and agencies. My favourite language is JavaScript and I mainly work with it. Next language in my learning curve will probably be Solidity. I think the blockchain is great technology and it will transform the world. 
                    </p>
                    <p className="about__text">
                        Languages, frameworks and tools get popular and pass on - but there is one thing that powers all developers - coffee. My average project is created by drinking 117 coffees. <span role="img" aria-label="emoji">😄</span> 
                    </p>
                    <p className="about__text">
                        Many people think development is easy and relaxing job, but the reality is totally different. You need lots of creativity and dedication. Deadlines are tight. Many developers burn out fast. When I need to chill my brain out, I play basketball or go out for a couple of drinks. Also, I like to travel and explore new places around my country and around the world. 
                    </p>
                    <p className="about__text">
                        {/* I'm a perfectionist person. It has advantages and disadvantages. One of the advantages that is good for business is that I don't stop until everything is perfect.  */}
                        If you want to work with dedicated developer, I'm currently open for new opportunities.
                    </p>
                    <p className="about__text"> 
                        <a href="#contact">Let's make something special!</a>
                    </p>
                </div>
                <div className="about__icons">
                    <h3 className="about__heading subheading">
                        Interests
                    </h3>
                    <div className="about__icons--container">
                        <div className="about__icons--box">
                            <div className="icon">
                                <div className="desc">
                                    Computer Science
                                </div>
                                <InterestIcons.HackerIcon />
                            </div>
                            <div className="icon bottom-big">
                                <div className="desc">
                                    Cofee
                                </div>
                                <InterestIcons.CoffeeIcon />
                            </div>
                            <div className="icon no-content" />
                        </div>
                        <div className="about__icons--box">
                            <div className="icon bottom-big">
                                <div className="desc">
                                    Basketball
                                </div>
                                <InterestIcons.BasketballIcon />
                            </div>
                            <div className="icon no-content" />
                            <div className="icon top-small">
                                <div className="desc">
                                    Traveling
                                </div>
                                <InterestIcons.TravelIcon />
                            </div>
                        </div>
                        <div className="about__icons--box">
                            <div className="icon no-content" />    
                            <div className="icon top-big">
                                <div className="desc">
                                    Drink ( 1 or 2 drinks <span role="img" aria-label="emoji">&#128522;</span> )
                                </div>
                                <InterestIcons.CocktailIcon />
                            </div>
                            <div className="icon">
                                <div className="desc">
                                    Development
                                </div>
                                <InterestIcons.CodingIcon />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Page>
    )
}

export default About;