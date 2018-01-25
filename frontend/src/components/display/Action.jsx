import React from 'react'

const styles = {
  text: {
    fontWeight: 'bold'
  }
}
const Action = (props) => {
  return (
    <div className="action-link">
      <a href={props.link}><p style={styles.text}>{props.anchor}</p></a>
    </div>
  )
}

export default Action;