import { useState } from "react"

export default function Sidebar() {

    const [sidebar, setSidebar] = useState(false)

    const toggleSidebar = () => {
        setSidebar(!sidebar)
    }

    return (
        <>
            <button onClick={toggleSidebar} className="sidebar-btn">sidebar</button>
            <div className={`sidebar ${sidebar ? 'show' : 'hidden'}`}>
                <button onClick={toggleSidebar} className="sidebar-close">x</button>
                <p>Sidebar</p>
            </div>
        </>
    )
}
