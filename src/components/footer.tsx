import "./styles/footer.css";

const Footer = () => {

    return (
        <div>
            <footer id="footer" className="footer light-background">

                <div className="container">
                <div className="copyright text-center ">
                    <p>© <span>Copyright</span> <strong className="px-1 sitename">Logo</strong> <span>All Rights Reserved<br/></span></p>
                </div>
                <div className="social-links d-flex justify-content-center">
                    <a href="https://x.com/elonmusk" className="twitter"><i className="bi bi-twitter-x"></i></a>
                    <a href="https://www.facebook.com/TypeScript.TS/" className="facebook"><i className="bi bi-facebook"></i></a>
                    <a href="https://www.instagram.com/rocoderes24x7/" className="instagram"><i className="bi bi-instagram"></i></a>
                    <a href="https://www.youtube.com/" className="youtube"><i className="bi bi-youtube"></i></a>
                </div>
                <div className="credits">
                    {/* <!-- All the links in the footer should remain intact. -->
                    <!-- You can delete the links only if you've purchased the pro version. -->
                    <!-- Licensing information: https://bootstrapmade.com/license/ -->
                    <!-- Purchase the pro version with working PHP/AJAX contact form: [buy-url] --> */}
                    Designed by <a href="https://bootstrapmade.com/">D'Andre Nicholson</a>
                </div>
                </div>

            </footer>
        </div>
    )
}

export default Footer;