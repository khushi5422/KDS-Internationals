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
            src="../../logo.svg"
            alt="Logo"
            className={`${Home.navlogo}`}
            loading="lazy"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="/" className="text-dark" >Home</Nav.Link>
            <Nav.Link href="/aboutus" className="text-dark">About</Nav.Link>
            <Nav.Link href="/gallery" className="text-dark" >Gallery</Nav.Link>
            <Nav.Link href="/contactus" className="text-dark" >Contact</Nav.Link>
            <Nav.Link href="/blog" className="text-dark" >Blog</Nav.Link>
            <Nav.Link href="/faq"className="text-dark" >FAQ</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
};

export default Navigationbar;
