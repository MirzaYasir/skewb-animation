import { FaPlus } from "react-icons/fa6";
import { IoIosClose } from "react-icons/io";

const RightSidebar = ({ sideMenuOpen, setSideMenuOpen }) => {
    return (
        <div className={`offcanvas ${sideMenuOpen ? 'open' : ''}`}>
            {sideMenuOpen && <button className="toggle-button" onClick={() => setSideMenuOpen(!sideMenuOpen)}>
                <IoIosClose color="white" size={30} />
            </button>
            }
            <div className="menu">
                <ul>
                    <li><FaPlus /> Life at Skewb</li>
                    <li><FaPlus /> The Skewb Way</li>
                    <li><FaPlus /> Experience Skewb</li>
                    <li><FaPlus /> Solutions</li>
                    <li><FaPlus /> Products</li>
                    <li><FaPlus /> Citizenship</li>
                    <li><FaPlus /> Knowledge Centre</li>
                    <li><FaPlus /> Contact</li>
                </ul>
            </div>
        </div>
    );
};

export default RightSidebar;
