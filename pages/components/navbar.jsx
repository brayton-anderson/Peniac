import Link from 'next/link';
import Image from 'next/image';
import react, {Component, useState} from 'react';

class Navbar extends Component {
    state = { clicked: false};
    handleClick = () =>{
        this.setState({clicked: !this.state.clicked}) 
    } 
    // const [navActive, setNavActive] = useState(false);
    // const [activeIdx, setActiveIdx] = useState(0)
    render(){
    return (        
        <nav className="navbar" id="navbar">
                <div className="logo">
                    <Link href="/">< Image src="/logopn.png" width={575} height={150} alt="" /></Link>
                </div>
                <ul id="menu-nav" className={this.state.clicked ? "#menu-nav active" : "#menu-nav"}>
                    <li className="active" >
                        <Link href="/" >
                            HOME
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            ABOUT US
                        </Link>
                    </li>                                                          
                    <li className="dropdown"><Link href="#" >SERVICES </Link>
                        
                            <ul id="submenu" className="submenu">
                                <li>
                                    <Link href="/digimarketing">DIGITAL MARKETING</Link>
                                </li>
                                <li>
                                    <Link href="/tech_hub">TECH HUB</Link>
                                </li>
                                
                            </ul>
                        
                    </li> 
                    <li >
                        <Link href="/blog" className="blogged">
                            BLOG
                        </Link>
                    </li>
                    <li>
                        <Link href="/contacts">
                            CONTACTS
                        </Link>
                    </li>
                </ul>

               
                
                
                <ul className="social_icon1">
                    <li><a href="https://web.facebook.com/peniaccds">
                            <i className="fab fa-facebook"></i>
                            </a>
                    </li>
                    <li><a href="https://instagram.com/peniaccds"><i className="fab fa-instagram"></i>
                        </a>
                    </li>
                    <li><a href="https://twitter.com/peniaccds"><i className="fab fa-twitter"></i>
                        </a>
                    </li>
                    <li><a href="https://linkedin.com/in/peniaccdigitalsolutions"><i className="fab fa-linkedin"></i>
                        </a>
                    </li>               
                </ul>

                

                <div id="mobile" onClick={this.handleClick}>
                    <i id="bar" className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                
        </nav>


    );


}
}
export default Navbar;