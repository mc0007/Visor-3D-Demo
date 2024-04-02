import React from 'react';

function Footer() {
    return (
    <footer style={styles.footer}>
        <p>&copy;Visor web</p>
    </footer>
    );
}

const styles = {
    footer: {
        backgroundColor: 'white',
        color: 'black',
        textAlign: 'center',
        padding: '20px 0',
        position: 'fixed',
        left: 0,
        bottom: 0,
        width: '100%',
    },
};

export default Footer;