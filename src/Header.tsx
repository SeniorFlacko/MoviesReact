import React from 'react';

interface IProps {}

const Header: React.FC<IProps> = ({children}) => {

  return (
    <div style={styles.header}>
        {children}
    </div>
  );
};

export default Header;

const styles = {
    header: {
        backgroundImage: 'url("./assets/Header.png")',
        height: '400px',
    }
}