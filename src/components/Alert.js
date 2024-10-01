import React from 'react'

export default function Alert(props) {
  return (
    props.alert && <div>
        <div className={`alert alert-${props.alert.typeOfAlert}`} role="alert">
            {props.alert.message}
        </div>
    </div>
  )
}
