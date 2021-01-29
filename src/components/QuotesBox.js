import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

export const QuotesBox = ({ quote, author, onQuoteChange }) => {

    return (
        <div className='quoteBox'>
            <blockquote>
                <FontAwesomeIcon icon={faQuoteLeft} />
                <h1 className='quote'>{quote}</h1>
                <FontAwesomeIcon icon={faQuoteRight} />
                <h3 className='author'>- {author}</h3>
            </blockquote>
            <div className='btns'>
                <a
                    className='btn tweet'
                    href={`https://twitter.com/intent/tweet?text=${quote}-${author}`}
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
                <button className='btn' onClick={onQuoteChange}>
                    New Quote
                </button>
            </div>
        </div>
    )
}