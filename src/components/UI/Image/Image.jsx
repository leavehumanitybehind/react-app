import React from 'react';
import {
    Img,
    ImageWrapper,
} from './styledComponents';

const Image = ({
    image,
    width,
    height,
    margin,
    padding,
    borderRadius,
}) => {
    return (
        <ImageWrapper
            margin={margin}
            padding={padding}
        >
            <Img
                src={image}
                width={width}
                height={height}
                borderRadius={borderRadius}
            />
        </ImageWrapper>
    );
};

export default Image;