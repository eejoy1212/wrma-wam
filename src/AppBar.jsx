import React, { useEffect, useState } from 'react';
import whiteLogo from './whitelogo.svg'
import  styles from './AppBar.module.css'; 
export default function AppBar({logMsg}) {
useEffect(()=>{},[logMsg])
  return (
    <div className={styles.AppBar}>
      {/* appbar */}
      <img src={whiteLogo} className={styles.logo} alt="logo" />
      
      <div className={styles.logBar}>
      <div className={styles.bellIcon}></div>
      <div className="sizedbox" style={{width:"6px"}}></div>
      <div className={styles.txt}>
      {logMsg} </div>
      </div>
    </div>
  );
}
