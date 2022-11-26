import React from 'react';
import './Portfolio.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';

export default function Portfolio() {
    return (
        <div id="portfolio">


            <h2 className='p-2'>My Portfolio</h2>
            <div id="works" className="page-section p-2  d-flex flex-wrap justify-content-evenly">
                <div id="nonsocial-drinker" className='border border-primary project'>
                    <a href="https://trufl.github.io/nonsocial-drinker/" className="flex-item work1 flex-container">
                        <div>
                            <h3>Social Interaction</h3>
                            <span>
                                Generate a joke to enter a conversation and an excuse to leave the conversation.
                            </span>
                        </div>
                    </a>
                </div>

                <div id="weather-dashboard" className='border border-primary project'>
                    <a href="https://hoeferg.github.io/weather-dashboard/" className="flex-item work2 ">
                        <div>
                            <h3>Weather Dashboard</h3>
                            <span>
                                See the current weather and future forecast.
                            </span>
                        </div>
                    </a>
                </div>

                <div id="jate" className='border border-primary project'>
                    <a href="https://git.heroku.com/service-worker-bootcamp.git" >
                        <div>
                            <h3>JATE</h3>
                            <span>
                                A downloadable text editor application.
                            </span>
                        </div>
                    </a>
                </div>

                <div id="e-commerce" className='border border-primary project'>
                    <a href="https://github.com/hoeferg/e-commerce" >
                        <div>
                            <h3>E-commerce</h3>
                            <span>
                                This application is the backend of a e-commerce that keeps track of stock.
                            </span>
                        </div>
                    </a>
                </div>

                <div id="note-taker" className='border border-primary project'>
                    <a href="#" >
                        <div>
                            <h3>Horiseon</h3>
                            <span>
                                code refactor
                            </span>
                        </div>
                    </a>
                </div>

                <div className='border border-primary project'>
                    <a href="#" >
                        <div>
                            <h3>Horiseon</h3>
                            <span>
                                code refactor
                            </span>
                        </div>
                    </a>
                </div>

            </div>
        </div >

    );
}
