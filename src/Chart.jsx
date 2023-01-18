import React from 'react';
import  styles from './Contents.module.css'; 
import { MdOutlineFlashOn } from 'react-icons/md';

function Chart(props) {
  return (
    <div className={styles.chart}>
    <div className={styles.bigTitle}>
OES/VI 
<button className={styles.applyBtn}>APPLY</button>
<div className="spacer" >


</div>
<button className='circleBtn'>
<MdOutlineFlashOn/>
</button>
<button className='circleBtn'>1</button>
<button className='circleBtn'>1</button>
<button className='circleBtn'>1</button>
<button className='circleBtn'>1</button>
<div className="sizedbox" style={{width:"10px"}}></div>
확대아이콘
<div className="sizedbox" style={{width:"10px"}}></div>
</div>
<div>
차트
</div>
    </div>
  );
}

export default Chart;