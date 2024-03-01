import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';
import Home from '@/styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Navigationbar = () => {
  return (
    <>
      <Navbar className={`${Home.navbg}`} variant="dark" expand="lg">
      {/* fixed="top" */}
      <Container className="ps-0">
        <Navbar.Brand href="/" className={`${Home.navwid}`}>
          <img
            src="../../logo.webp"
            alt="Logo"
            className={`${Home.navlogo}`}
            loading="lazy"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="/" className="text-white" >Home</Nav.Link>
            <Nav.Link href="/aboutus" className="text-white">About</Nav.Link>
            <Nav.Link href="/gallery" className="text-white" >Gallery</Nav.Link>
            <Nav.Link href="/contactus" className="text-white" >Contact</Nav.Link>
            <Nav.Link href="/blog" className="text-white" >Blog</Nav.Link>
            <Nav.Link href="/faq"className="text-white" >FAQ</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
};

export default Navigationbar;
