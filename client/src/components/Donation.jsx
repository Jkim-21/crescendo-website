import React from 'react'
import styles from '../style'
import Button from './Button'

const Donation = () => {
  return (
    <section id='donate' className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className='flex-1 flex flex-col'>
        <h2 className={styles.heading2}>Donate Now!</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Make an Impact Today.
        </p>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0`}>
        <Button/>
      </div>
    </section>
  )
}

export default Donation
