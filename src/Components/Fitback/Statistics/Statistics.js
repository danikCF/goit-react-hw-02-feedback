import React from 'react'

export default function Statistics({countTotalFeedback,countPositiveFeedbackPercentage,good,neutral,bad}) {
  return (
    
    <div>
      <p>Good:{good}</p>
      <p>Neutral:{neutral}</p>
      <p>Bad:{bad}</p>
      <p>Total:{countTotalFeedback}</p>
      <p>Positive Feedback:{countPositiveFeedbackPercentage}  %</p>
    </div>
  )
}
