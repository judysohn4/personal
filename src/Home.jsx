import React from 'react'
import keeb from "./assets/keyboard.jpg";
import judy from "./assets/judy.JPG"

const Home = () => {
    return (
        <span data-theme = "winter">
            <div className = "bg-white flex flex-col">
                <div className = "text-3xl p-4">Judy Sohn</div>
                <div className = "p-5"> click the texts to learn more about me</div>
            <div className = "p-10">

                <div className = "chat chat-start">
                    <div class = "flex flex-col items-center text-black chat-bubble ">
                    <details class="collapse flex justify-center p-4 text-white">
                        <summary class="collapse-title text-xl font-medium">
                            <p className = "w-32">intro</p>
                            </summary>
                        <div class="collapse-content z-5"> 
                            <div>
                                my name is judy sohn, a senior at leland high school
                            </div>
                            <div>
                                i'm 17 years old
                            </div>
                            <div>

                            </div>
                        </div>
                    </details>
                    </div>
                </div>

                    <br/>
                  
                    <div className = "chat chat-end">
                    <div class = "flex flex-col items-center text-black chat-bubble ">
                    <details class="collapse flex justify-center p-4 text-white">
                        <summary class="collapse-title text-xl font-medium">
                            <p className = "w-32">hobbies</p>
                            </summary>
                        <div className="collapse-content w-100 z-5"> 
                        <div>
                            i like:
                        </div>
                        <br/>
                            <div>∙ to code</div>
                            <div>∙ to play the piano, flute, and guitar</div>
                            <div>∙ to eat</div>
                            <div>∙ mechanical keyboards</div>
                            <div>∙ to listen to music</div>
                        </div>
                    </details>
                    </div>
                </div>

                <div className = "chat chat-start">
                    <div class = "flex flex-col items-center text-black chat-bubble">
                    <details class="collapse flex justify-center p-4 text-white">
                        <summary class="collapse-title text-xl font-medium">
                            <p className = "w-40">3 attachments</p>
                            </summary>
                        <div class="collapse-content flex items-center grid-col-3 grid-row-2 gap-4"> 
                        <img src = {keeb} className = "w-1/2 h-1/4"/>
                            <img src = {judy} className = "w-1/4 h-1/4"/>
                            <img src = {judy} className = "w-1/4 h-1/4"/>
                        </div>
                    </details>
                    </div>
                </div>

            </div>

            </div>
        </span>
    )
}

export default Home