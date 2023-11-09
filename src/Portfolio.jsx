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

        <div className = "hackathons mb-8">
        <div className = "pl-10 text-3xl">Hackathons</div>
        <div className = "flex flex-col justify-center gap-8 pt-7">
            <div className = "flex gap-10 pl-8 pr-8">
                <div className="card bg-base-100 shadow-xl w-1/2">
                        <div className="card-body">
                            <h2 className="card-title font-bold">Artspire App, first place in Adahacks 2023</h2>
                            <Youtube x= "500" y ="300" embedId = "WfqKnqkhtGY"/>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl w-1/2">
                    <div className="card-body">
                        <h2 className="card-title font-bold">CliMate</h2>
                        <p>This was my first ever hackathon for Lancer Hacks, providing resources on how to make a positive impact on the earth.  </p>
                        <div className="card-actions justify-end">
                        <button className="btn btn-primary"><a href = "https://treasure-classic-dessert.glitch.me/" target ="_blank">website</a></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className = "flex gap-10 pr-8 pl-8">

                <div className="card bg-base-100 shadow-xl w-1/2">
                    <div className="card-body">
                        <h2 className="card-title font-bold">Trivia Hub</h2>
                        <p> This was my second hackathon, but the first one where I was heavily involved in the coding. I created it with my friend, and looking back on the code, I was able to realize how much I have progressed.  </p>
                        <div className="card-actions justify-end">
                        <button className="btn btn-primary"><a href = "https://triviahub.thestrugglers.repl.co/index.html" target ="_blank">website</a></button>
                        </div>
                    </div>
                </div>
                    <div className="card bg-base-100 shadow-xl w-1/2">
                    <div className="card-body">
                        <h2 className="card-title font-bold">Mental Health Matters</h2>
                        <p>This was a website I made with a group of five in the 2020 AMD All Girl Online International Hackathon. The website targets the issue of declining mental health in teens. We provided resources to educate on mental health and combat it, featuring interactive images and components that lead to music playlists and encouraging words. </p>
                        <div className="card-actions justify-end">
                        <button className="btn btn-primary"><a href = "https://mental-health-matters.pbrc.repl.co/index.html" target ="_blank">website</a></button>
                        </div>
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
                        <h2 className="card-title font-bold">Impromptu Op. 90 No. 2 in E Flat Major Franz Schubert, performed 2023</h2>
                        <Youtube x="853" y = "480" embedId = "SA4IBMjyXk0"/>
                    </div>
                </div>
                <br/>
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title font-bold">Arabesque No.1 By Claude Debussy, performed 2022</h2>
                        <Youtube x="853" y = "480" embedId = "bYYRLeenATU"/>
                    </div>
                </div>
                <br/>
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title font-bold">Concerto No. 1 for 2 Clarinets, Op. 35, 2nd Movement by Franz Krommer, performed 2021 </h2>
                        <Youtube x="853" y = "480" embedId = "alrFop9YNNM"/>
                    </div>
                </div>
                <br/>
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title font-bold">Divertimento for Flute, Clarinet and Piano by Mariano Obiols, performed 2020 </h2>
                        <Youtube x="853" y = "480" embedId = "954pNU8LZ8E"/>
                    </div>
                </div>
            </div>
            </div>
        </div>

    </div>
    )
}

export default Portfolio