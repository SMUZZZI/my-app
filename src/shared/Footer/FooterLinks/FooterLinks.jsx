import React from "react";
import FooterLinkLinks from "./FooterLinkLinks/FooterLinkLinks";
import "./footerLinks.css";

function FooterLinks() {
    return (
        <section className="footerlink">
            <a href="#" className="footerlink-logo">
                <svg width="178" height="50" viewBox="0 0 178 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M45.38 39V38.6L46.18 38.28C46.7133 38.0933 47.06 37.84 47.22 37.52C47.4067 37.2 47.5 36.7733 47.5 36.24V15.36C47.5 14.8267 47.42 14.4 47.26 14.08C47.1 13.76 46.74 13.5067 46.18 13.32L45.38 13V12.6H55.66V13L54.86 13.32C54.3267 13.5067 53.9667 13.76 53.78 14.08C53.62 14.4 53.54 14.8267 53.54 15.36V36.24C53.54 36.7733 53.62 37.2 53.78 37.52C53.9667 37.8133 54.3267 38.0667 54.86 38.28L55.66 38.6V39H45.38ZM57.3313 39V38.6L57.8913 38.44C58.8246 38.1733 59.2913 37.52 59.2913 36.48V23.96C59.2913 23.3733 59.1979 22.9467 59.0113 22.68C58.8246 22.3867 58.4646 22.1867 57.9313 22.08L57.3313 21.92V21.52L64.1713 19.2L64.5713 19.6L64.8913 22C65.8246 21.1733 66.8779 20.4933 68.0513 19.96C69.2246 19.4267 70.3846 19.16 71.5313 19.16C73.2913 19.16 74.6379 19.64 75.5713 20.6C76.5313 21.56 77.0113 23.0267 77.0113 25V36.52C77.0113 37.56 77.5179 38.2133 78.5313 38.48L78.8913 38.6V39H69.4513V38.6L69.9713 38.44C70.9046 38.1467 71.3713 37.4933 71.3713 36.48V23.72C71.3713 22.0133 70.5179 21.16 68.8113 21.16C67.6379 21.16 66.3579 21.7467 64.9713 22.92V36.52C64.9713 37.56 65.4379 38.2133 66.3713 38.48L66.7313 38.6V39H57.3313ZM87.8609 39.6C86.1543 39.6 84.8209 39.1733 83.8609 38.32C82.9276 37.4667 82.4609 36.1067 82.4609 34.24V20.56H79.7009V20.16L80.6609 20C81.4876 19.8133 82.1943 19.5467 82.7809 19.2C83.3943 18.8533 83.9943 18.3867 84.5809 17.8L87.8609 14.16H88.2609L88.1409 19.76H92.6209V20.56H88.1009V34.96C88.1009 35.8933 88.3009 36.6 88.7009 37.08C89.1276 37.56 89.6609 37.8 90.3009 37.8C90.8609 37.8 91.3543 37.6667 91.7809 37.4C92.2076 37.1067 92.6343 36.72 93.0609 36.24L93.4609 36.64C92.9276 37.5467 92.1943 38.2667 91.2609 38.8C90.3276 39.3333 89.1943 39.6 87.8609 39.6ZM104.637 19.16C106.37 19.16 107.85 19.52 109.077 20.24C110.304 20.9333 111.237 21.8933 111.877 23.12C112.544 24.32 112.877 25.6933 112.877 27.24C112.877 27.5333 112.864 27.84 112.837 28.16C112.81 28.4533 112.757 28.72 112.677 28.96H100.757C100.784 31.84 101.29 33.92 102.277 35.2C103.29 36.4533 104.784 37.08 106.757 37.08C108.09 37.08 109.17 36.8667 109.997 36.44C110.824 36.0133 111.597 35.3867 112.317 34.56L112.717 34.92C111.89 36.3867 110.784 37.5333 109.397 38.36C108.037 39.1867 106.397 39.6 104.477 39.6C102.584 39.6 100.904 39.2 99.4369 38.4C97.9702 37.5733 96.8235 36.4 95.9969 34.88C95.1702 33.36 94.7569 31.5467 94.7569 29.44C94.7569 27.2533 95.2369 25.4 96.1969 23.88C97.1569 22.3333 98.3835 21.16 99.8769 20.36C101.397 19.56 102.984 19.16 104.637 19.16ZM104.517 19.96C103.744 19.96 103.077 20.2 102.517 20.68C101.984 21.1333 101.557 21.96 101.237 23.16C100.944 24.3333 100.784 26 100.757 28.16H107.597C107.864 25.2533 107.757 23.16 107.277 21.88C106.797 20.6 105.877 19.96 104.517 19.96ZM114.87 39V38.6L115.47 38.44C116.004 38.28 116.364 38.04 116.55 37.72C116.764 37.4 116.87 36.9867 116.87 36.48V23.96C116.87 23.3733 116.764 22.9467 116.55 22.68C116.364 22.3867 116.004 22.1867 115.47 22.08L114.87 21.92V21.52L121.75 19.2L122.15 19.6L122.51 23.04V23.36C122.884 22.6133 123.364 21.9333 123.95 21.32C124.564 20.68 125.23 20.16 125.95 19.76C126.697 19.36 127.43 19.16 128.15 19.16C129.164 19.16 129.937 19.44 130.47 20C131.004 20.56 131.27 21.2667 131.27 22.12C131.27 23.0267 131.004 23.7333 130.47 24.24C129.964 24.72 129.35 24.96 128.63 24.96C127.51 24.96 126.524 24.4 125.67 23.28L125.59 23.2C125.324 22.8267 125.017 22.6267 124.67 22.6C124.324 22.5467 124.004 22.7067 123.71 23.08C123.444 23.32 123.217 23.6133 123.03 23.96C122.87 24.28 122.71 24.6533 122.55 25.08V36.24C122.55 37.3067 123.017 37.9733 123.95 38.24L125.23 38.6V39H114.87ZM132.527 39V38.6L133.087 38.44C134.02 38.1733 134.487 37.52 134.487 36.48V23.96C134.487 23.3733 134.393 22.9467 134.207 22.68C134.02 22.3867 133.66 22.1867 133.127 22.08L132.527 21.92V21.52L139.367 19.2L139.767 19.6L140.087 22C141.02 21.1733 142.073 20.4933 143.247 19.96C144.42 19.4267 145.58 19.16 146.727 19.16C148.487 19.16 149.833 19.64 150.767 20.6C151.727 21.56 152.207 23.0267 152.207 25V36.52C152.207 37.56 152.713 38.2133 153.727 38.48L154.087 38.6V39H144.647V38.6L145.167 38.44C146.1 38.1467 146.567 37.4933 146.567 36.48V23.72C146.567 22.0133 145.713 21.16 144.007 21.16C142.833 21.16 141.553 21.7467 140.167 22.92V36.52C140.167 37.56 140.633 38.2133 141.567 38.48L141.927 38.6V39H132.527ZM165.772 39.6C163.745 39.6 161.985 39.1867 160.492 38.36C158.998 37.5067 157.838 36.3067 157.012 34.76C156.212 33.2133 155.812 31.4 155.812 29.32C155.812 27.24 156.238 25.44 157.092 23.92C157.972 22.4 159.158 21.2267 160.652 20.4C162.172 19.5733 163.878 19.16 165.772 19.16C167.665 19.16 169.358 19.5733 170.852 20.4C172.345 21.2 173.518 22.36 174.372 23.88C175.252 25.4 175.692 27.2133 175.692 29.32C175.692 31.4267 175.278 33.2533 174.452 34.8C173.652 36.32 172.505 37.5067 171.012 38.36C169.545 39.1867 167.798 39.6 165.772 39.6ZM165.772 38.8C166.705 38.8 167.452 38.5333 168.012 38C168.572 37.4667 168.972 36.52 169.212 35.16C169.478 33.8 169.612 31.88 169.612 29.4C169.612 26.8933 169.478 24.96 169.212 23.6C168.972 22.24 168.572 21.2933 168.012 20.76C167.452 20.2267 166.705 19.96 165.772 19.96C164.838 19.96 164.078 20.2267 163.492 20.76C162.932 21.2933 162.518 22.24 162.252 23.6C162.012 24.96 161.892 26.8933 161.892 29.4C161.892 31.88 162.012 33.8 162.252 35.16C162.518 36.52 162.932 37.4667 163.492 38C164.078 38.5333 164.838 38.8 165.772 38.8Z" fill="#292F36" />
                    <path d="M0.5 42.0003H13.9588V32.499C13.9588 30.4853 15.5898 28.8543 17.6035 28.8543C19.6172 28.8543 21.2482 30.4853 21.2482 32.499V42.0003H34.4975V8C15.7211 8 0.5 23.2211 0.5 42.0003Z" fill="#CDA274" />
                </svg>
            </a>
            <p className="footerlink-p">It is a long established fact that a reader will be distracted lookings.</p>
            
            <FooterLinkLinks />
        </section>
    );
}

export default FooterLinks;