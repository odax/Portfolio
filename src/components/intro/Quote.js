import React, { Component } from 'react'
import './IntroView.css';

const quoteList = {
    0: ['The city’s central computer told you?  R2D2, you know better than to trust a strange computer!',
    'C3PO'],
    1: ['The Internet?  Is that thing still around?',   
        'Homer Simpson'],
    2: ["Just remember: you’re not a ‘dummy,’ no matter what those computer books claim.  The real dummies are the people who–though technically expert–couldn’t design hardware and software that’s usable by normal consumers if their lives depended upon it.",
        'Walter Mossberg']
};

const quoteGen = () => {
    return quoteList[Math.floor(Math.random() * 3)];
}

export default class Quote extends Component {
  render() {
    return (
      <div>
        <div className = 'quoteGen'>{quoteGen()}</div>
      </div>
    )
  }
}
