import React from "react"
import memesData from "../memesData.js"

export default function Meme() {

    const [meme, setMeme] = React.useState({
        topText: "ya",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })
    const [allMemeImages, setAllMemeImages] = React.useState(memesData)
    
    //function that picks a random number and gets image from index
    //updates state
    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            topText: "",
            bottomText: "",
            randomImage: url
        }))
        
    }

    function updateState(event){
        setMeme(prev => ({
            topText: "",
            bottomText: "",
            randomImage: url,
            [event.target.name]: event.target.value
        }))
    }
    
    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    value={meme.topText}
                    onChange={updateState}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={updateState}
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image! 🖼
                </button>
            </div>
            <div>
                <img src={meme.randomImage} className="meme--image" />
                <h2>{meme.topText}</h2>
            </div>
        </main>
    )
}