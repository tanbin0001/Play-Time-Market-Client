import React from 'react';

const Footer = () => {
    return (
        <div><footer className="footer p-10 bg-base-200 text-base-content mt-20">
            <div>
                <div className='flex items-center space-x-3'>
                    <img src="https://files.catbox.moe/9criru.png" className='w-16' alt="" />
                    <h1 className='dragonFont text-2xl'>Play Time Market</h1>
                </div>
                <p>Are you crazy about action toys?</p>
                <p>Explore Awesome Action Toy Collections</p>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </div>
        </footer>
        </div>
    );
};

export default Footer;