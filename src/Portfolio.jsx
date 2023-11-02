import React from 'react'
import { Link } from 'react-router-dom'
import Youtube from "./Youtube";

const Portfolio = () => {
    return (
    <div className = "flex flex-col justify-center bg-white">
        <div className = "websites">
            <div className = "pl-10 pt-5 text-3xl">Websites</div>
            <div className = "grid grid-cols-3 gap-16 p-7 justify-center">
                
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title font-bold">Stare Decisis</h2>
                        <p>This is a website I made for a group called Stare Decisis, which is a student-founded organization looking to educate the youth on political issues persisting in our world today.</p>
                        
                        <div className="card-actions justify-end">
                        <button className="btn btn-primary"><a href = {"https://staredecisis.netlify.app"} target ="_blank">website</a></button>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title font-bold">AAPI Hate</h2>
                        <p>I created this websisite during 2020, peak of Covid-19 to spread awareness on hate towards the Asian American Pacific Islander community. The website features Bay Area organizations to support and an action page to report crimes.</p>
                        <div className="card-actions justify-end">
                        <button className="btn btn-primary"><a href = "https://asianhate.pbrc.repl.co/index.html" target ="_blank">website</a></button>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title font-bold">WE</h2>
                        <p>This is a website that I created for the Congregational App Challenge, inspired by my online class teacher. I decided to create this app for online classes, in order to encourage better behavior, better participation, and student interactions, offering incentives and engagement. Originally, the design had been to make a Google Docs extension for online classes, but eventually developed into a separate app. </p>
                        <div className="card-actions justify-end">
                        <button className="btn btn-primary"><a href = "https://intuit-social.vercel.app/" target ="_blank">website</a></button>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div className = "music">
            <div className = "pl-10 text-3xl">Music</div>
            <div className = "flex justify-center">
            <div className = "w-11/12 p-7">
            <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title font-bold">Impromptu Op. 90 No. 2 in E Flat Major Franz Schubert</h2>
                        <Youtube embedId = "SA4IBMjyXk0"/>
                    </div>
                </div>
            </div>
            </div>
        </div>

    </div>
    )
}

export default Portfolio