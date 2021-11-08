import  Button  from "../UI/Button/Button";
import colors from '../../manager/themeManager/colors';
import googleImage from '../../assets/images/google.svg';
const Login = () => {
    
    return ( 
        <div>
Login
            <Button  text={'Login with Google'}
        image={googleImage}
        borderColor={colors.loginButtonBorderColor}
        isInversionTextColor />
        </div>
        
    )
}
export default Login;