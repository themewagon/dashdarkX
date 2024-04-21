import { Box } from "@mui/material";
import TopbarLeft from "./TopbarLeft";
import TopbarRight from "./TopbarRight";

const Topbar = () => {
    return (
        <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <TopbarLeft/>
            <TopbarRight/>
        </Box>
    );
}

export default Topbar;