import React from 'react'

const Social = () => {
    return(
        <div className="home__social">
            <a 
                href="https://www.instagram.com/k_quann.7/" 
                className="home__social-icon" 
                target="_blank"
            >
                <i class="uil uil-instagram"></i>
            </a>

            <a 
                href="https://www.facebook.com/DuongBuiKhanhQuan1811/" 
                className="home__social-icon" 
                target="_blank"
                >
                <i class="uil uil-facebook"></i>
            </a>

            <a 
                href="" 
                className="home__social-icon" 
                target="_blank"
                >
                <i class="uil uil-github-alt"></i>
            </a>
        </div>
    );
};
export default Social;