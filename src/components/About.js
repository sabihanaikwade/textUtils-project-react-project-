import React, {useState} from 'react'

export default function About() {
    const [myStyle, setmyStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    })
    const [btntext, setbtntext]=useState(
        "Enable light mode"
    )
    const toggleStyle=()=>{
       if(myStyle.color==='black'){
           setmyStyle({
            color: 'white',
            backgroundColor: 'black',
            border:'2px solid white'
           })
           setbtntext("Enable light mode")
       }
       else{
        setmyStyle({
            color: 'black',
            backgroundColor: 'white'
           })
           setbtntext("Enable dark mode")
       }

    }
    return (
        <>
            <div className="container" style={myStyle}>
                <h1 className='my3'>About Us</h1>
                <div className="accordion" id="accordionPanelsStayOpenExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                            <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                Analyze your text
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                            <div className="accordion-body" style={myStyle}>
                                Textutils gives you a way to analyze your text quickly and efficiently.
                                Be it word count,character count.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                Free to use
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                            <div className="accordion-body" style={myStyle}>
                               Textutils is a free character counter tool that provides instant character count & word count statistics for a given text, Textutils reports the number of words and characters.Thus it is suitable for writing text with word/character limit.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                Browser Compatible
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                            <div className="accordion-body" style={myStyle}>
                               This word counter software works in any web browsers such as chrome,firefox,internet explorer,safari,opera.it suits to count characters in facebook,blog,books,excel,document,pfd document,essays,etc.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container my-3">
                    <button onClick={toggleStyle} type="button" className="btn btn-primary">{btntext}</button>
                </div>
            </div>
        </>
    )
}
