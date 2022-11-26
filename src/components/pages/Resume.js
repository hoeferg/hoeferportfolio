import React from 'react';
import './Resume.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';

export default function Resume() {
    return (
        <div>
            <h1>Gayle's Skills</h1>

            <iframe src="https://docs.google.com/document/d/e/2PACX-1vQGBMIHDpIqvHhSsm6zerOcDUNtfHMUoSCA-O2Sus44eCQswXe55BQuHwR0pbHqjg/pub?embedded=true"></iframe>

            <button><p>
                <a href={process.env.PUBLIC_URL+"/assets/hoeferGayleResume.pdf"} download>            View Gayle's Resume Online</a></p>
            </button>

            <h2>Technical Skills</h2>

            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Bootstrap</li>
                <li>Node.js</li>
                <li>React</li>
                <li>Express</li>
            </ul>

            <ul>
                <li>MySQL</li>
                <li>Templating Engines: Handlebars</li>
                <li>PWA</li>
                <li>React</li>
                <li>GraphQl</li>
                <li>GitHub</li>
            </ul>

        </div >
    );
}
