import { Box, BoxProps } from '@mui/material';

interface ImageProps extends BoxProps {
    src: string;
    alt?: string;
}

const Image = ({ src, alt, ...rest }: ImageProps) => {
    return <Box component="img" src={src} alt={alt} {...rest}/>
};

export default Image;