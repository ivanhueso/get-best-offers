import React from 'react'

const ProgressBar = ({ step }) => (
  <div className="surveyStepProgressBar">
    <div className="surveyStepProgressCounter" style={{ width: step }} />
  </div>
)

export default ProgressBar
