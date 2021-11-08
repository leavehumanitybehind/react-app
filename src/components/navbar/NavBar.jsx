import Button from "../UI/Button/Button.jsx"
import Image from "../UI/Image/Image.jsx"
import { ButtonContainer, NavbarWrapper, StyledLink } from "./styledComponents.js";
import logo from '../../assets/images/q.svg';
import * as constants from '../../constants/constants';

const NavBar = () => {
    let user=false;
    const signOut = () => {
        console.log('sign out')
    }
    return (
        <NavbarWrapper>
            { user ? <>
                <Image image={logo}
                    width={'55px'}
                    height={'55px'}
                    margin={'0 40px'} />
                <ButtonContainer>
                    <StyledLink to={constants.MAIN_ROUTE}>
                        <Button text={'Logout'} callback={signOut} />
                    </StyledLink>
                </ButtonContainer>
            </> :

                <StyledLink to={constants.LOGIN_ROUTE}>
                    <Image image={logo}
                        width={'55px'}
                        height={'55px'}
                        margin={'0 40px'} />
                </StyledLink>

            }

        </NavbarWrapper>
    )
}

export default NavBar;