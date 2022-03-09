import React from 'react'
import { Navbar, Container , Nav ,Form} from 'react-bootstrap'
import {Rating} from "@mui/material"
const Search = ({setSearchTitle,setSearchRating}) => {

    return (
        <div>
              <Navbar bg="light" variant="light">
    <Container>
    <Navbar.Brand href="#home">My Anime Tier list</Navbar.Brand>
    <Nav className="me-auto">
      <Form.Group className="mb-3" style={{float:"left"}}>
      <Form.Control type="text" placeholder="search anime" onChange={(e)=>setSearchTitle(e.target.value)} />

   

  </Form.Group>
  <Rating style={{margin:"0px 200px"}}
  name="simple-controlled"
//   value={value}
  onChange={(event, newValue) => {
    setSearchRating(newValue);
  }}
/>
    </Nav>
    </Container>
  </Navbar>
        </div>
    )
}

export default Search
