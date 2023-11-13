import React, { useState } from 'react'
import { Container, ListGroup, Modal } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import DisplayCount from './DisplayCount';
import { connect } from 'react-redux';
const DisplayTodos = ({todos}) => {
  return (
    <div>
      <Container>
        <Row>
            <Col>
            <Card className='m3-3 shadow-sm'>
                <Card.Body>

                    <h3>All todo</h3>
                    <DisplayCount/>
<ListGroup>
                    {
                        todos.map((todo, index) => (
<ListGroup.Item key={index}>
    <h4>{todo.title}</h4>
    <p>{todo.description}</p>
</ListGroup.Item>

                            ))
                        }
                        </ListGroup>
                </Card.Body>
            </Card>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

const mapStateToProps=(state) => {
    return {todos:state.todos}
}
const mapDispatchToProps=(dispatch)=>({})


export default connect(mapDispatchToProps, mapStateToProps)(DisplayTodos)
