import React from 'react';
import './Resume.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';

export default function Resume() {
    return (
        <div>
            <h1>Gayle's Skills</h1>

            <button>
                <a href="https://docs.google.com/document/d/1-Swy1amr-jTnt4_nbrbtTLZwdt4Ltg6U/edit?usp=sharing&ouid=101731218236967918748&rtpof=true&sd=true">

                </a>
                <p>View Gayle's Resume Online</p>
            </button>

            <h2>Technical Skills</h2>

            <div>
                <ls>HTML</ls>
                <ls>CSS</ls>
                <ls>JavaScript</ls>
                <ls>Bootstrap</ls>
                <ls>Node.js</ls>
                <ls>React</ls>
                <ls>Express</ls>
            </div>

            <div>
                <ls>MySQL</ls>
                <ls>Templating Engines: Handlebars</ls>
                <ls>PWA</ls>
                <ls>React</ls>
                <ls>GraphQl</ls>
                <ls>GitHub</ls>
            </div>

        </div>
    );
}
