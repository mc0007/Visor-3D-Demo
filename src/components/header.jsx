import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUser } from '@fortawesome/free-regular-svg-icons';

const Header = () => {
    return (
        <header style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 50px', alignItems: 'center', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)'
    }}>
            <div>
                <img src="./logo.png" alt="Wave Logo" style={{ height: '40px' }} />
            </div>
            <div style={{ flexBasis: '50%'}}>
                <input type="text" placeholder="Buscar" style={{ width: '100%', padding: '10px', backgroundColor: '#f1f5f9', borderRadius: '10px', border: '1px solid transparent'}} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <FontAwesomeIcon icon={faBell}  style={{ height: '24px', marginRight:'15px'}}/>
                <FontAwesomeIcon icon={faUser}  style={{ height: '24px', marginRight:'15px'}}/>
                
            </div>
        </header>
    );
}

export default Header;