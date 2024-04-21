import { TextField, InputAdornment, IconButton } from "@mui/material";
import { Icon } from '@iconify/react';

const TopbarLeft = () => {
    return (
        <TextField
            variant="filled"
            placeholder="Type here..."
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <IconButton>
                            <Icon icon='ion:search' style={{fontSize: '1.4rem'}} />
                        </IconButton>
                    </InputAdornment>
                ),
            }}
        />
    );
}

export default TopbarLeft;