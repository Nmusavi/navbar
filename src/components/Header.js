import React from 'react';
import styles from './Style';
import {
    BrowserRouter,
    Switch,
    Route,
  } from 'react-router-dom'
import SpeiseKarte from './SpeiseKarte';
import Kontakt from './Kontakt';
import Offnungszeiten from './OffnungsZeiten';
import Galerie from './Galerie';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
        <div style={styles.header}>
            <img src='https://unsplash.com/photos/qHD5SJwj9gM' alt='' style={styles.logo}/>
            <p>
                Kim's cafe Koln
            </p>
            <BrowserRouter>
                 <Switch>
                 
                 <Route path='/' component={SpeiseKarte} exact/> 
                 <Route path='/Kontakt' component={Kontakt}/> 
                 <Route path='/Offnungszeiten' component={Offnungszeiten}/>
                 <Route path='/galerie' component={Galerie}/>  
                </Switch>
            </BrowserRouter>
            
        </div>
         );
    }
}
export default Header;