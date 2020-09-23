import React, {useState, useEffect} from 'react'

function RandomQuotes() {
    const [quotes, setQuotes] = useState([]);

    const randomNo = Math.floor(Math.random() * 1643);

    useEffect(()=>{
  
        fetch('https://type.fit/api/quotes')
        .then(quotes=> {return quotes.json()})
        .then(data => {return setQuotes(data[randomNo])})
        .catch(err =>{console.log('Unable to fetch data:' + err);
        });   
    },[randomNo])
   

    return (
        <>
             <h5 className='quote tertiary-header'>{quotes.text} <br /> 
             <span className='quote_author'> - {quotes.author}</span>
             </h5>
        </>

    )
}

export default RandomQuotes
