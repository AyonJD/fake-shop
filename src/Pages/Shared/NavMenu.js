import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import './NavMenu.css';
import { useForm } from 'react-hook-form';
import { SearchContext } from '../../App';
import { useContext } from 'react';

function NavMenu() {
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();
  const [searchData, setSearchData] = useContext(SearchContext);

  const onSubmit = data => {
    setSearchData(data)
    reset();
  };

  return (
    <Navbar bg="light" expand="lg" className='sticky-top shadow-sm'>
      <Container fluid>
        <Navbar.Brand onClick={() => navigate('/')} className="nav_logo fs-3">FakeShop</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to="/">Home</Link>
            <Link to="products">Products</Link>
          </Nav>
          <Form className="d-flex" onClick={handleSubmit(onSubmit)}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              {...register("inputValue", { required: true })}
            />
            <Button className='add-to-cart btn btn-default primary-bg' type='submit'>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavMenu;