import React from 'react'
import Glossy from './Glossy'

export default function Counter() {
  return (
    <Glossy bg={`url("112.png")`} position={"right"} paddingInline={false}>
    <div className="stats-container">
      <div className="stats-sub-container">
        <div className="stats-item-a">1+</div>
        <div className="stats-item-b">Years of Business</div>
      </div>
      <div className="stats-sub-container">
        <div className="stats-item-a">15+</div>
        <div className="stats-item-b">Happy Clients</div>
      </div>
      <div className="stats-sub-container">
        <div className="stats-item-a">20+</div>
        <div className="stats-item-b">Projects Completed</div>
      </div>
      <div className="stats-sub-container">
        <div className="stats-item-a">15k+</div>
        <div className="stats-item-b">Lines of Code</div>
      </div>
    </div>
  </Glossy>
  )
}
