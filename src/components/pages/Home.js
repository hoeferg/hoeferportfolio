import React from 'react';
import './Home.css';

export default function Home() {
    return (

        <div>
            <section>
                <h1>About Me</h1>
                <div id="id-card" className="w3-center w3-container w3-theme-l2 w3-col s11 l2 w3-round-large w3-card">
                    <img className="w3-col s10 w3-margin-top w3-round" src="./assets/images/IMG_0372.jpg" alt="" style={{float: "none"}} />
                    <figcaption className="{{w3-large w3-col s12}}" />
                    <h2>Gayle Hoefer</h2>
                </div>
            </section>

            <section id="welcome" className="w3-container w3-theme-l3 w3-col s11 l9 w3-round-large">
                <article className="w3-margin-top w3-container w3-margin-bottom w3-theme-d2 w3-col s12 l12 w3-round-xlarge w3-card-4" >
                    <h2 className="w3-center">
                        Welcome!</h2>

                    <p className="welcome-p">
                        Hello, my name is Gayle Hoefer and welcome to my online portfolio. I am creating new web
                        applications as we speak, so check back often for new developments.
                    </p>
                    <p className="welcome-p">
                        I am currently in the University of Arizona full-stack development boot camp. The goal of this site
                        is to display and share my progress as I get through this fast paced curriculum. As I progress I
                        will update this site to include new code that I have learned.
                    </p>
                    <p className="welcome-p">
                        Already the boot camp has been a great experience and I am now very familiar (working every day)
                        with the following platforms and technologies:

                        <li>GitHub</li>
                        <li>Git Bash</li>
                        <li>HTML5</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>Node.js</li>

                    </p>
                    <p className="welcome-p">
                        I am finding that I like to take a design first approach to building a website. I do realize that a
                        site that does not function is not worth visiting but I find that when function following design can
                        make for less refactoring to allow for the style desired.
                    </p>
                    </article>
            </section>
        </div>

    )
}
