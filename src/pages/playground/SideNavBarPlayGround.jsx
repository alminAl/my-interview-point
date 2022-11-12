import { useState } from "react"
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';


const SideNavBarPlayGround = () => {
    const [oepn, setOpen] = useState(false)
    return (
        <div>
            <Button onClick={()=> setOpen(!oepn)}>Hamburger logo</Button>
            <Drawer
                anchor={'left'}
                open={oepn}
                onClose={()=> setOpen(!oepn)}
            >
                {/* menu lisy */}
               <div className="h-screen">
               <Button onClick={()=> setOpen(!oepn)}>Cross logo</Button>
                <p>hello world</p>
               </div>
            </Drawer>
        </div>
    )
}

export default SideNavBarPlayGround