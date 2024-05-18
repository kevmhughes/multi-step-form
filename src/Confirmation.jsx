import React from 'react'
import thankYouIcon from "./assets/images/icon-thank-you.svg"

const Confirmation = () => {
  return (
    <div className="final-right-side-container">
        <img className="tick-icon" src={thankYouIcon} alt="red confirmation tick icon" />
        <h1 className='thank-you-message'>Thank you!</h1>
        <div className='confirmation-message'>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com</div>
    </div>
  )
}

export default Confirmation