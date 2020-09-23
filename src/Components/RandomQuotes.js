import React, {useState, useEffect} from 'react'

function RandomQuotes() {
    const [quote, setQuotes] = useState('');
    const [quoteAuthor, setAuthor] = useState('');

   

    useEffect(()=>{
        const randomNo = Math.floor(Math.random() * 1643);

        fetch('https://type.fit/api/quotes')
        .then(quotes=> {return quotes.json()})
        .then(data => {
            setQuotes(data[randomNo].text);
            setAuthor(data[randomNo].author)
              })
        .catch(err =>{console.log('Unable to fetch data:' + err);
        });   
    },[])


    return (
        <>
             <h5 className='quote tertiary-header'>{quote} <br /> 
             <span className='quote_author'> - {quoteAuthor}</span>
             </h5>
        </>

    )
}

export default RandomQuotes
