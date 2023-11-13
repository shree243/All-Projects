import React, { useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Form , Button} from 'react-bootstrap';
import DisplayCount from './DisplayCount';
import { addTodo } from '../redux/actions/todo';
import { connect } from 'react-redux';

const AddTodo = ({addTodo}) => {


    const [todo, setTodo]= useState(
        {
            title:'',
            description:''
        }
    );

    const handleSubmit =(event) => {
        event.preventDefault();
        console.log(todo)
        // add todo in store 

        setTodo({
            title:'',
            description:''
        })
    }
  return (
    <Container>
      <Row>
        <Col md={12}>
          <Card className='shadow-sm'>
            <Card.Body>
              <h3>Add Todo Here</h3>
                <DisplayCount/>
              <Form onSubmit={handleSubmit}>
                {/* title */}
                <Form.Group>
                  <Form.Label>Todo Title</Form.Label>
                  <Form.Control type='text' placeholder='Enter here the todos name'
                  value={todo.title}
                  onChange={(event) => setTodo({...todo,title:event.target.value})}
                  />
                </Form.Group>

                {/* description */}
                <Form.Group className='mt-5'>
                  <Form.Label>Todo Description</Form.Label>
                  <Form.Control as={'textarea'} placeholder='Enter here the todos description'
                  value={todo.description}
                  onChange={(event) => setTodo({...todo,description:event.target.value})}
                  
                  />
                </Form.Group>
                <Container className='text mt-5'>
                    <Button type='submit' variant='primary'>
                        Add Todo
                    </Button>
                </Container>
              </Form>

            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

const mapStateToProps= (state)=>({})

const mapDispatchToProps=(dispatch)=>({
    addTodo:(todo)=>(dispatch(addTodo(todo)))
})

export default connect(mapDispatchToProps, mapStateToProps) (AddTodo);
