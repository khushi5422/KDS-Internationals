import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from "../styles/Home.module.css";
import Image from 'next/image';


export default function Owner() {
    return (
        <>

            <div className={`${styles.parallaxContainer}`}>
                <div className={`${styles.parallaxCaaard} ${styles.parallaxowner} mt-3`}></div>
                <div className={`${styles.parallaxCard}`}>
                    <Card style={{ backgroundColor: '#ffffff82', minHeight: '320px' }} className='border-4 border-white '>
                        <Card.Body className='p-5'>
                            <Card.Text>
                                Indulge in the essence of India with J K Exports, where every spice tells a story of tradition and quality. As the proud owner, 
                                I invite you on a global culinary journey. Our spices, handpicked for excellence, promise to transform your dishes into flavorful 
                                masterpieces. Join us in celebrating the vibrant tapestry of tastes that only J K Exports can bring to your kitchen. Lets spice up your 
                                world together!
                            </Card.Text>
                            <div className='d-flex gap-2 justify-content-center'>
                                <Image src="/ellipse.png" width={80} height={80} className='rounded-circle' alt='Image' />
                                <div style={{ paddingLeft: '3vw' }}>
                                    <h2>PRUTHVI PATEL</h2>
                                    <p>Owner</p>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </div>

        </>
    )
}
