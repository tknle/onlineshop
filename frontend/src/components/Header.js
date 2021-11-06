import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Navbar, Nav, Container, Row, NavDropdown, Form, FormControl,Button} from 'react-bootstrap'
import Logo from '../logo.svg';
import {LinkContainer} from 'react-router-bootstrap'
import { logout } from '../actions/userActions'
import SearchBox from './SearchBox'
function Header() {

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch(logout())
    }


    return (
       <header>
             <Navbar bg="light" variant="light" expand="lg" collapseOnSelect>
                <Container>

                    <LinkContainer to='/'>
                    <Navbar.Brand>
                    <img src={Logo}
                     width="30"
                     height="30"
                     className="d-inline-block align-top"
                      alt="Logo" 
                     
                      /> shop online
                       </Navbar.Brand>
                    </LinkContainer>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                      
                    <SearchBox/>

                    {/* <Nav className="ml-auto">

                      
                        <Nav.Link>NEW</Nav.Link>                                        
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <LinkContainer to='/'>
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to='/'>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to='/'>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>                   
                        </LinkContainer>
                        </NavDropdown>                
                       

                    </Nav> */}
                    <Nav className="ms-auto " >

                    <LinkContainer to='/cart'>
                    <Nav.Link ><i className="fas fa-shopping-cart" > </i>Cart</Nav.Link>
                    </LinkContainer>

                    {userInfo ? (
                        <NavDropdown title={userInfo.name} id='username'>
                            <LinkContainer to='/profile'>
                                <NavDropdown.Item>Profile</NavDropdown.Item>
                            </LinkContainer>

                            <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                        </NavDropdown>
                 ) : (
                         <LinkContainer to='/login'>
                             <Nav.Link><i className="fas fa-user"></i>Login</Nav.Link>
                         </LinkContainer>
                     )}
                        {userInfo && userInfo.isAdmin && (
                            <NavDropdown title='Admin' id='adminmenu'>

                                <LinkContainer to='/admin/userlist'>
                                    <NavDropdown.Item>Users</NavDropdown.Item>
                                </LinkContainer>   

                                <LinkContainer to='/admin/productlist'>
                                    <NavDropdown.Item>Products</NavDropdown.Item>
                                </LinkContainer>  

                                <LinkContainer to='/admin/orderlist'>
                                    <NavDropdown.Item>Orders</NavDropdown.Item>
                                </LinkContainer>  

                            </NavDropdown>             
                        )}
                       
                      

                    {/* <Form className="d-flex ">
                        <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        />
                        <Button variant="outline-dark" size="sm"><i className="fas fa-search"> </i></Button>
                    </Form> */}

                   </Nav>
                  
                    </Navbar.Collapse>
                </Container>
        </Navbar>
       </header>
    )
}

export default Header
