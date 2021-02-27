import styled from 'styled-components'
import Link from 'next/link'


const Nav = styled.nav`
    height: 80px;
    background:#000;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const StyledLink=styled.a`
    padding: 0rem 5rem;
`;

const NavBar = () => {
    return (
        <Nav>
            <div>
                <Link href="/">
                    <StyledLink>Etapas</StyledLink>
                </Link>
                <Link href="/">
                    <StyledLink>Noticias</StyledLink>
                </Link>
                <Link href="/">
                    <StyledLink>Participantes</StyledLink>
                </Link>    
            </div>
            <div>
               <Link href="/">
                    <StyledLink>Log In</StyledLink>
                </Link>  
            </div>
           
        </Nav>
    );
};

export default NavBar;
