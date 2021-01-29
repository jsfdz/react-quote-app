import React, { useState } from 'react'
import dataBase from './quotes.json'
import { QuotesBox } from './components/QuotesBox'
import { getRandomNumber } from './helpers/getRandomNumber'
import { getRandomColor } from './helpers/getRandomColor'

function App() {
  const
    QUOTE_LIST = dataBase.quotes,
    QUOTES_INDEX = QUOTE_LIST.length,
    QUOTE_RANDOM = getRandomNumber(QUOTES_INDEX)

  const
    [quote, setQuote] = useState(QUOTE_LIST[QUOTE_RANDOM]),
    [color, setColor] = useState(getRandomColor),

    handleClick = () => {
      setQuote(QUOTE_LIST[QUOTE_RANDOM])
      setColor(getRandomColor())
    }

  return (
    <div className='App' style={{ '--current-color': `${color}` }}>
      <QuotesBox
        quote={quote.quote}
        author={quote.author}
        onQuoteChange={handleClick}
      />
    </div>
  )
}

export default App
