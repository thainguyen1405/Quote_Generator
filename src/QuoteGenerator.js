import {useState} from 'react';
import './Quote.css'
import Balloons from './Balloons.js';

function QuoteGenerator(){
    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");
    const [category, setCategory] = useState("");

    async function fetchQuote() {
        try {
            const response = await fetch("https://api.api-ninjas.com/v1/quotes", {
                headers: {
                    "X-Api-Key": "QDs8RX8hUD4ZAh7o7ehNrg==dCJoy8EvUfQhzqbc"
                }
            });

            if(!response.ok){
                throw new Error("Sorry could not fetch quote");
            }

            const data = await response.json();
            
            setQuote(data[0].quote);
            setAuthor(data[0].author);
            setCategory(data[0].category);

            console.log(data);

        } catch(error) {
            console.error(error);
            setQuote("Failed to fetch quote");
            console.log("Error fetching quote:", error);
        }
    }




    return(
        <body className = "body">
            <h1 className = "heading">Quote Generator</h1>
            <div className = "quote-box">    
                {quote && (   /* Conditional reder to check if quote is not empty and put the "" around the quote */
                    <p className = "quote-text">"{quote}"</p>
                )}
                <p className = "quote-author">{author}</p>
                <p className = "quote-category">{category}</p>
            </div>
            <button className = "new-box" onClick={fetchQuote}>Get Quote</button>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet" />  {/* Link to Google Fonts for Poppins font */}
            <Balloons />
            {/*Social Media Icons*/}
            <div className = "social-icons">
                <a href = "https://github.com/thainguyen1405"
                    target="_blank"
                    rel="noopener noreferrer">
                    <ion-icon name="logo-github"></ion-icon>
                </a>

                <a href = "https://www.linkedin.com/in/thainguyen1405/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <ion-icon name="logo-linkedin"></ion-icon>
                </a>

            </div>
        </body>
        
    )
}



export default QuoteGenerator;