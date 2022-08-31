import React from 'react'
import  './index.scss'
import {Button,Card,Col,Container,Row} from 'react-bootstrap'
import { cardService } from '../../APIs/Services/CardService';


function Cards() {
  const [users,setUsers] = React.useState([]);

  React.useEffect((e) => {
    // const usersFormAPI = axios.get("https://jsonplaceholder.typicode.com/posts")   //stupid version :)
    // usersFormAPI.then(({data}) => {
    //   setUsers(data);
   
    // })
    // getAllPosts(setUsers)   clever version :)

    cardService.getAllPosts().then(({data:userData}) => {
      setUsers(userData)
    })
    
    
  },[])
  return (
    <>
     

    <Container>
      <Row>
          {users.map((item,index) => (
             <Col key={index} md = {4}>
             <Card style={{ width: '18rem' }}>
           <Card.Img variant="top" src="holder.js/100px180" />
           <Card.Body>
             <Card.Title>{item.id}</Card.Title>
             <Card.Text>
               Some quick example text to build on the card title and make up the
               bulk of the card's content.
             </Card.Text>
             <Button variant="primary">Go somewhere</Button>
           </Card.Body>
         </Card>
             </Col>
          ))}
      </Row>
    </Container>
    </>
  )
}

export default Cards