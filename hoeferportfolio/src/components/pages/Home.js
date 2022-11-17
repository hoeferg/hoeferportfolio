import React from 'react';

export default function Home() {
    return (

        <div>
            <h1>Home Page</h1>

            <h2 className="w3-center">
                Welcome!

            </h2>
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
                <ul id="welcome-list">
                    <li>GitHub</li>
                    <li>Git Bash</li>
                    <li>HTML5</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Node.js</li>
                </ul>
            </p>
            <p className="welcome-p">
                I am finding that I like to take a design first approach to building a website. I do realize that a
                site that does not function is not worth visiting but I find that when function following design can
                make for less refactoring to allow for the style desired.
            </p>
            <p className="welcome-p">
                Please take a look at some of my tinkering below
            </p>

        </div>

    )
}
