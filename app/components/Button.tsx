import React, { FC } from 'react'
import styles from './button.module.css'

interface ButtonProps{
  action: () => void
  text: string
}

const Button: FC<ButtonProps> = ({ action, text }) => {
  return (
    <button className={styles.button} onClick={action}>{text}</button>
  )
}

export default Button