import Link from "next/link";
import Image from "next/image";

export default function Footer(){
    return(
        <>
            <div className="footer">
                <ul className="social_icon">
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
                
                <div className="footersign">
                    <div className="copy">
                        <p className="copyright">© PENIACC DIGITAL SOLUTIONS LTD 2023. | All Rights Reserved. </p>
                        
                    </div>
                    
                </div>
            
            </div>
        </>
    );
}