import React from 'react'

const Portfolio = () => {
    return (
    <div className = "flex flex-col justify-center">
        <div className = "websites">
            <div className = "pl-10 pt-5 text-3xl">Websites</div>
            <div className = "grid grid-cols-3 gap-16 p-7 justify-center">
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title font-bold">Stare Decisis</h2>
                        <p>This is a website I made for a group called Stare Decisis, which is a student-founded organization looking to educate the youth on political issues persisting in our world today.</p>
                        <div className="card-actions justify-end">
                        <button className="btn btn-primary"><a href = "https://asianhate.pbrc.repl.co/index.html" target ="_blank">website</a></button>
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
                        <h2 className="card-title font-bold">Stare Decisis</h2>
                        <p>This is a website I made for a group called Stare Decisis, which is a student-founded organization looking to educate the youth on political issues persisting in our world today.</p>
                        <div className="card-actions justify-end">
                        <button className="btn btn-primary"><a href = "https://asianhate.pbrc.repl.co/index.html" target ="_blank">website</a></button>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div className = "music">
            <div className = "pl-10 text-3xl">Music</div>
            <div className = "p-7">
            <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title font-bold">Stare Decisis</h2>
                        <p>This is a website I made for a group called Stare Decisis, which is a student-founded organization looking to educate the youth on political issues persisting in our world today.</p>
                        <div className="card-actions justify-end">
                        <button className="btn btn-primary"><a href = "https://asianhate.pbrc.repl.co/index.html" target ="_blank">website</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    )
}

export default Portfolio