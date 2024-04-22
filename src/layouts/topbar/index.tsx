import Box from "@mui/material/Box";
import TopbarLeft from "./TopbarLeft";
import TopbarRight from "./TopbarRight";

interface TopbarProps {
    isClosing: boolean;
    mobileOpen: boolean;
    setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Topbar = ({isClosing, mobileOpen, setMobileOpen}: TopbarProps) => {
    return (
        <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <TopbarLeft isClosing={isClosing} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen}/>
            <TopbarRight/>
        </Box>
    );
}

export default Topbar;