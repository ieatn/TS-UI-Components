import { useState } from "react"

export default function Navbar() {

    const [mobile, setMobile] = useState(false)

    const toggleMobile = () => {
        setMobile(!mobile)
    }

    return (
        <nav>
            <div>
                <div>logo</div>
                <div className="nav-links">
                    <a href="#">about</a>
                    <a href="#">about</a>
                    <a href="#">about</a>
                </div>
                {/* mobile */}
                <button className="mobile-btn" onClick={toggleMobile}>mobile</button>
            </div>
            <div className={`mobile-nav ${mobile ? 'show' : 'hidden'}`}>
                <a href="#">about</a>
                <a href="#">about</a>
                <a href="#">about</a>
            </div>
        </nav>
    )
}
