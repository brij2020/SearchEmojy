import React, { Component } from 'react'
import EmojiResultRow from './EmojiResultRow';

export default class Render extends Component {
  render() {
    return (
      <div>{
        this.props.emojyList.map((el)=>(
            <EmojiResultRow
                key = {el.title}
                symbol={el.symbol}
                title ={el.title}
            />
        ))
    }
      </div>
    )
  }
}
