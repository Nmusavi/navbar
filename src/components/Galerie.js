import React from 'react';
import Navigation from './Navigation';
import styles from './Style';
const Galerie = () => {
    return ( 
        <section>
            <Navigation/>
            <article style={styles.article}>Galerie</article>
        </section>
        
     );
}
 
export default Galerie;