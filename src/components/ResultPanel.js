import React from 'react';
import ResultCard from '../components/ResultCard'

function ResultPanel({emojiListProps}) {

  function displayResult() {
    if (emojiListProps != null) {
      var resultCardList = []
      emojiListProps.map((item, index) => resultCardList.push(<ResultCard key={index} item={item} />))
      return resultCardList
    } else {
      return ("Nothing to display")
    }
  }

  return (
    <div>
      {displayResult()}
    </div>
  )

}

export default ResultPanel;
