//bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

// mui
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

//css
import './MyNavbar.css';

function MyNavbar() {
    return (
        <Navbar collapseOnSelect expand="lg" variant="light" sticky='top'>
            <Container>
                <Navbar.Brand href="/">Karolina Czak</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/kontakt">Kontakt</Nav.Link>
                        <Nav.Link href="/kwalifikacje">Kwalifikacje</Nav.Link>
                        <NavDropdown title="produkty" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/product/:0"> Wszystkie</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/product/:1">Darmowe</NavDropdown.Item>
                            <NavDropdown.Item href="/product/:2">Płatne</NavDropdown.Item>

                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">
                            <AccountCircleOutlinedIcon />
                        </Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            <div className="cartIcon">
                                <ShoppingCartOutlinedIcon />
                                <span>0</span>
                            </div>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MyNavbar;