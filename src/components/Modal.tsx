import { useState } from "react"

export default function Modal() {

  const [modal, setModal] = useState(false)
  const toggleModal = () => {
    setModal(!modal)
  }

  return (

    <>
      <button onClick={toggleModal} className="modal-btn">click</button>
      <div className={`modal-bg ${modal ? 'show' : ''}`}>
        <div className="modal">
          <h1>Would you like to sign up for this and get 20% off?</h1>
          <button>yes</button>
          <button onClick={toggleModal} className="modal-close">x</button>
        </div>
      </div>
    </>
  )
}
