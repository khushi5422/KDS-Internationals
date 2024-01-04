import { FaMapMarkerAlt } from 'react-icons/fa';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { IoMdMail } from 'react-icons/io';
import { MdFiberManualRecord } from 'react-icons/md';
import React from 'react';
import Link from 'next/link';
export default function Footer() {
    return (
        <>
            <style jsx>
                {`
                *{
                    margin:0;
                    
                    color:white;
                    overflow-x:hidden !important;
                    font-family: 'Poppins', sans-serif;
                }
                
                a{
                    text-decoration:none !important;
                    min-width: fit-content;
                    width: fit-content;
                    width: -webkit-fit-content;
                    width: -moz-fit-content;
                }
                
                a, button{
                    transition:0.5s;
                }
                
                a, p{
                    font-size:14px;
                }
                
                h1, h2, h3, h4, h5, h6{
                    color:var(--primary);
                    font-weight:600;
                }
                
                a, button, input, textarea, select{
                    outline:none !important;
                }
                
                fieldset{
                    border:0;
                }
                
                .title{
                    color:var(--primary);
                }
                
                .flex, .fixed_flex{
                    display:flex;
                }
                
                .flex-content{
                    width:100%;
                    position:relative;
                }
                
                .padding_1x{
                    padding:1rem;
                }
                
                .padding_2x{
                    padding:2rem;
                }
                
                .padding_3x{
                    padding:3rem;
                }
                
                .padding_4x{
                    padding:4rem;
                }
                
                .btn{
                    padding:0.8rem 2rem;
                    border-radius:5px;
                    text-align:center;
                    font-weight:500;
                    text-transform:uppercase;
                }
                
                .btn_1{
                    border:1px solid var(--primary);
                    background-color:var(--primary);
                    color:var(--secondary);
                }
                
                .btn_1:hover{
                    background-color:transparent;
                    color:var(--primary);
                }
                
                .btn_2{
                    border:1px solid var(--secondary);
                    background-color:var(--secondary);
                    color:var(--primary);
                }
                
                .btn_2:hover{
                    border:1px solid var(--primary);
                    background-color:var(--primary);
                    color:var(--secondary);
                }
                
                @media (max-width:920px){
                    .flex{
                        flex-wrap:wrap;
                    }
                    
                    .padding_1x, .padding_2x, .padding_3x, .padding_4x{
                        padding:1rem;
                    }
                  
                    .btn{
                        padding:0.5rem 1rem;
                    }
                    
                    a, p{
                        font-size:12px;
                    }
                }
                /***************************
                               FOOTER
                ****************************/
                footer{
                    // background-image: url('footerimg.jpg');
                    // background-size: cover; /* Adjust to your preference */
                    // background-position: center center; /* Adjust to your preference */
                    // background-repeat: no-repeat;
                    // color:var(--lite);
                    background-color: #182933;
                    padding-bottom: 0px !important;
                }
                
                footer h3{
                    color:var(--white);
                    margin-bottom:1.5rem;
                }
                
                footer a{
                    color:var(--lite);
                    display:block;
                    margin:15px 0;
                }
                
                footer a:hover{
                    color:var(--white);
                }
                
                footer fieldset{
                    padding:0;
                }
                
                footer fieldset input{
                    background-color:#334f6c;
                    border:0;
                    color:var(--lite);
                    padding:1rem;
                }
                
                footer fieldset .btn{
                    border-radius:0;
                    border:0;
                }
                
                footer fieldset .btn_2:hover{
                    background-color:var(--secondary);
                    border:0;
                    color:var(--primary);
                }
                
                footer .flex:last-child{
                    align-items:center;
                }
                
                footer .flex:last-child .flex-content:last-child{
                    text-align:right;
                }
                
                footer .flex:last-child p{
                    color:var(--white);
                }
                
                footer .flex:last-child a{
                    width:40px;
                    display:inline-block;
                    background-color:#334f6c;
                    color:var(--white);
                    padding:0.5rem;
                    margin-right:3px;
                    text-align:center;
                }
                
                footer .flex:last-child a:hover{
                    background-color:var(--secondary);
                    color:var(--gray);
                }
                
                @media (max-width:1100px){
                    footer .flex:first-child{
                        flex-wrap:wrap;
                    }
                    
                    footer .flex:first-child .flex-content{
                        flex: 1 1 40%;
                    }
                }
                
                @media (max-width:920px){
                    footer .flex:last-child .flex-content:last-child{
                        text-align:left;
                    }
                }
                
                @media (max-width:320px){
                    footer .flex:first-child .flex-content{
                        flex:1 1 100%;
                    }
                }
                
                .image_logo{
                    width: 21%;
                }
                .bg{
                    background-color: #00000073;
                }

        
        `}
            </style>
            <div>
                <footer className="padding_2x">
                    <div className="flex">
                        <section className="flex-content padding_1x">
                            <img src='../../logo.png' alt='Loading..' className='image_logo'></img>
                            <p className="mt-4">JK Exports are a new edge od spice exporter who deliveres world best spice from heart of India.
                            We at JKExport having good associations with USA, Canada, Dubai, Saudi Arabia, Australia, Germany, UK, Russia and worldwide.
                                </p>
                        </section>
                        <section className="flex-content padding_1x">
                            <h3>Products</h3>
                            <Link href="/gallery">Dried Spices</Link>
                            <Link href="/gallery">Spicy Masalas</Link>
                            <Link href="/gallery"> Spice Seeds</Link>
                            <Link href="/gallery">Powdered Spices</Link>
                        </section>
                        <section className="flex-content padding_1x">
                            <h3>Get in touch</h3>
                            <Link href="#"><FaMapMarkerAlt color='orange' /> Ahmedabad , India</Link>
                            <Link href="tel://+91 9512154200"><BsFillTelephoneFill color='orange'/> +91 9512154200</Link>
                            <Link href="mailto:jkexports0220@gmail.com"><IoMdMail color='orange'/> jkexports0220@gmail.com</Link>
                            
                        </section>
                        <section className="flex-content padding_1x">
                            <h3>Quick Links</h3>
                            <Link href="/"><MdFiberManualRecord  color='orange'/>Home</Link>
                            <Link href="/aboutus"><MdFiberManualRecord  color='orange'/>About Us</Link>
                            <Link href="/gallery"><MdFiberManualRecord  color='orange'/>Gallery</Link>
                            <Link href="/contactus"><MdFiberManualRecord  color='orange'/>Contact</Link>
                        </section>

                    </div>
                    <div>
                        <section className="flex-content padding_1x text-center bg">
                            <p>Copyright ©2020 All rights reserved || JK Exports</p>
                        </section>
                    </div>
                </footer>
            </div>
        </>
    )
}
