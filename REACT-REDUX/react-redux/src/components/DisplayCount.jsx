import React from 'react'
import { Card } from 'react-bootstrap'

const DisplayCount = () => {
  return (
    <div>
      <Card className='shadow-sm border border-0'>
        <Card.Body>
            <h4>Number of Todo:4</h4>
        </Card.Body>
      </Card>
    </div>
  )
}

export default DisplayCount
