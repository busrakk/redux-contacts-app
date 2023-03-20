import React from 'react'

const Item = ({contact}) => {
  return (
    <div>
      {contact.name}
      {contact.phone_number}
    </div>
  )
}

export default Item
