import React from 'react';
import {
    ButtonContent,
    ButtonText,
    CustomButtonWrapper,
} from './styledComponents';
import Image from "../Image/Image";

const Button = ({
    text,
    image,
    callback,
    fontSize,
    isDisabled,
    borderColor,
    backgroundColor,
    isInversionTextColor,
    activeBackgroundColor,
}) => {
    return (
        <CustomButtonWrapper
            isDisabled={isDisabled}
            borderColor={borderColor}
            backgroundColor={backgroundColor}
            activeBackgroundColor={activeBackgroundColor}
        >
            {image &&
                <Image
                    image={image}
                    width={'20px'}
                    height={'20px'}
                    padding={'8px'}
                />
            }
            <ButtonContent
                onClick={callback}
                backgroundColor={backgroundColor}
            >
                <ButtonText
                    children={text}
                    fontSize={fontSize}
                    isInversionTextColor={isInversionTextColor}
                />
            </ButtonContent>
        </CustomButtonWrapper>
    );
};

Button.defaultProps = {
    fontSize: '20px',
    isDisabled: false,
    borderColor: '#56bab7',
    isInversionTextColor: false,
    activeBackgroundColor: '#56bab7',
}

export default Button;