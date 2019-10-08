import React from 'react';

function Contact(props){
    return(
    <div className='Contact'>
      <img className='avatar'
        src={props.avatar}>
      </img>
      <div>
        <div className='name'>
          {props.name}
        </div>
        <div className='status'>
          {props.online ? <i className='status-online'></i> : <i className='status-offline'></i>}
          {props.online ? 'Online' : 'Offline'}
        </div>
      </div>
    </div>
    );
  }

export default Contact;