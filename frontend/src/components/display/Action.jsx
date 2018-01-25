import React from 'react'

const styles = {
  text: {
    fontWeight: 'bold'
  }
}
const Action = (props) => {
  return (
    <p style={styles.text}>{ props.text }</p>
  )
}

export default Action;