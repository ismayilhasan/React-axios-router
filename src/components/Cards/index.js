import React from 'react'
import  './index.scss'
import {Button,Card,Col,Container,Row} from 'react-bootstrap'
import { cardService } from '../../APIs/Services/CardService';
import {useHistory} from "react-router-dom";

function Cards() {
  const [users,setUsers] = React.useState([]);
  const history = useHistory()
  React.useEffect((e) => {
    // const usersFormAPI = axios.get("https://jsonplaceholder.typicode.com/posts")   //stupid version :)
    // usersFormAPI.then(({data}) => {
    //   setUsers(data);
   
    // })
    // getAllPosts(setUsers)   clever version :)


    
  },[])

    const callUsers = () => {
      cardService.getAllPosts().then(({data:userData}) => {
        setUsers(userData)
        console.log(users);
      })
    } 

    const getCommentsbyUser = (id) => {
      cardService.getUserComments(id).then(({data:comments}) => {
        history.push("/comments",id)
      })
    }
  return (
    <>
     

    <Container>
     <button onClick={callUsers} className='btn btn-success w-100 mt-3'>Send Request</button>
     <h1 className=''>Click button And Show Result</h1>
      <Row>
          {users.map(({id,title},index) => (
             <Col key={index} md = {4}>
             <Card className='my-3' style={{ width: '18rem' }}>
           <Card.Img variant="top" src="holder.js/100px180" />
           <Card.Body>
             <Card.Title>{id}</Card.Title>
             <Card.Text>
              {title}
             </Card.Text>
             <Button onClick={() => getCommentsbyUser(id)} variant="primary">Go somewhere</Button>
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