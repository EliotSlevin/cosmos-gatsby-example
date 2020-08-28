import React from 'react'
import styles from './button.module.css'

const Button = ({ children }) => (<div className={styles.button}>
  {children}
</div>
)

export default Button