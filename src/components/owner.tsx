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
                    <Card style={{ backgroundColor : '#ffffff82', minHeight: '320px'}} className='border-4 border-white '>
                        <Card.Body className='p-5'>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the cards content. Some quick example text to build on the card title and make up the
                                bulk of the cards content. Some quick example text to build on the card title and make up the
                                bulk of the cards content
                            </Card.Text>
                            <div className='d-flex gap-2 justify-content-center'>
                            <Image src="/clove.png" width={80} height={80} className='roundedCircle' alt='Image' />
                                <div style={{paddingLeft :'3vw'}}>
                                    <h2>Nameeee</h2>
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
