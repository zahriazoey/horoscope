import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../App.css'

export default function HomePage() {
    return (
        <div style={{maxWidth: '100%'}}>
            <h1 style={{color: 'white', margin: '45px'}}>~Horoscopes and Hits~</h1>
            <Card className="text-center"> 
                <Card.Body>
                    {/* <Card.Title>~Horoscopes and Hits~</Card.Title> */}
                    <Card.Text style={{fontSize: '25px'}}>
                        This app is all about Zodiac signs. You can get your daily horoscope, along 
                        with yesterday's and tomorrow's horoscopes. You can also discover new music based on your
                        sign through Spotify. 

                    </Card.Text>
                    <Link to={'/horoscope'}>
                        <Button style={homeBtns} variant="outline-secondary">Get Your Horoscope</Button></Link>
                    <a href='https://horoscope-hits.herokuapp.com/login'><Button  style={homeBtns} variant="outline-secondary">Log into Spotify to Discover New Music</Button></a>
                </Card.Body>
            </Card>
        </div>
    )
}

const homeBtns = {
    background: 'none!important',
    border: 'none',
    padding: '0!important',
    textDecoration: 'underline'
}


