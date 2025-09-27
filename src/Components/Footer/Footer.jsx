import Styles from "./Footer.module.css"
export default function Footer(){
    return(
        <>
            <footer className={Styles.Footer_root}>
                <div className={Styles.Footer_inner}>
                    <div className={Styles.Brand_block}>
                        <h2 className={Styles.Brand_name}>Ayush Semwal</h2>
                        <p className={Styles.Brand_tag}>Turning code into beautiful experiences.</p>
                    </div>
                    <div className={Styles.Links_block}>
                        <h4>Navigate</h4>
                        <ul>
                            <li><a href="#Home">Home</a></li>
                            <li><a href="#About">About</a></li>
                            <li><a href="#project">Projects</a></li>
                        </ul>
                    </div>
                    <div className={Styles.Contact_block}>
                        <h4>Contact</h4>
                        <ul>
                            <li><a href="mailto:ayushsemwal26@gmail.com">ayushsemwal26@gmail.com</a></li>
                            <li><a href="https://github.com/Ayush-z090" target="_blank" rel="noreferrer">GitHub</a></li>
                            <li><a href="https://linkedin.com/in/ayush-semwal-3032b8387" target="_blank" rel="noreerrerf">LinkedIn</a></li>
                        </ul>
                    </div>
                    <div className={Styles.CTA_block}>
                        <p>Have a project in mind?</p>
                        <a className={Styles.CTA_btn} href="mailto:ayushsemwal26@gmail.com">Let’s collaborate</a>
                    </div>
                </div>
                <div className={Styles.Footer_bottom}>
                    <p>© {new Date().getFullYear()} Ayush Semwal. All rights reserved.</p>
                </div>
            </footer>
        </>
    )
}


