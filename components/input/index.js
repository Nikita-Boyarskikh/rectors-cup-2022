import styles from './input.module.css'

const Input = ({ value = '', onChange = () => {} } = {}) => {
  return <input onInput={onChange} value={value} className={styles.input} />
}

export default Input
