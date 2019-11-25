import React,{Component} from 'react';
import styles from './Style';
import {NavLink} from 'react-router-dom';
// const Navigation = () => {
//     return ( 
//         <nav style={styles.navText}>
//         <ul style={styles.ul}>
//             <li><Link to='/'  style={ active ? styles.dunkelButton :styles.hellButton}>SpeiseKarte</Link></li>
//             <li><Link to='/Kontakt'style={styles.hellButton}>Kontakt</Link></li>
//             <li><Link to='/OffnungsZeiten' style={styles.hellButton}>OffnungsZeiten</Link></li>
//             <li><Link to='/Galerie' style={styles.hellButton}>Galerie</Link></li>
//         </ul>
//     </nav>
//      );
// }
 class Navigation extends Component {
     constructor(props) {
         super(props);
         this.state = {  }
     }
     render() { 
         return ( 
            <nav style={styles.navText}>
            <ul style={styles.ul}>
                <li><NavLink exact to='/'  style={styles.hellButton} activeStyle={styles.dunkelButton}>SpeiseKarte</NavLink></li>
                <li><NavLink to='/Kontakt' activeStyle={styles.dunkelButton} style={styles.hellButton}>Kontakt</NavLink></li>
                <li><NavLink to='/OffnungsZeiten'  style={styles.hellButton} activeStyle={styles.dunkelButton}>OffnungsZeiten</NavLink></li>
                <li><NavLink to='/Galerie' style={styles.hellButton} activeStyle={styles.dunkelButton}>Galerie</NavLink></li>
            </ul>
        </nav>
          );
     }
 }
  

export default Navigation;