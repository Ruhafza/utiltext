import React from 'react'

export default function  Alert
(props) {

  const capital=(words)=>{
      const cap=words.toLowerCase();
      return cap.charAt(0).toUpperCase()+cap.slice(1);

  }  
  return ( props.alert &&
    
    <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
    <strong>{capital(props.alert.type)}</strong>! {props.alert.msg}
  </div>

  )
}
