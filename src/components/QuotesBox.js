import React from 'react'

export const QuotesBox = ({ quote, author, onQuoteChange }) => {

    return (
        <div className='quoteBox'>
            <h1 className='quote'>{quote}</h1>
            <h3 className='author'>- {author}</h3>
            <div className='btns'>
                <a
                    className='btn'
                    href={`https://twitter.com/intent/tweet?text=${quote}-${author}`}
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Tweet
                </a>
                <button className='btn' onClick={onQuoteChange}>
                    New Quote
                </button>
            </div>
        </div>
    )
}