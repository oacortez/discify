import React, { useContext } from 'react'
import { Errors } from '../Contexts/ErrorsProvider'
import '../Styles/ErrorModal.scss'

const ErrorModal = () => {

  const {errorMessage, setErrorMessage} = useContext(Errors)

  return(
    <>
      {
        errorMessage &&
        <div className='modal'>
          <article className='modal-box'>
            <p>{errorMessage}</p>
            <button 
              className='modal-btn' 
              onClick={() => setErrorMessage({error: null})}
            >OK</button>
          </article>
        </div>
      }
    </>
  )
}

export default ErrorModal
