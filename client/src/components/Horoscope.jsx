import React from 'react'
import { Card } from 'react-bootstrap'

export default function Horoscope(props) {
    const description = props.details.description
    const date = props.details.current_date
    const compatibility = props.details.compatibility
    const mood = props.details.mood
    const luckyNumber = props.details.lucky_number

        return (
                <Card style={horoscopeInfo}>
                    <Card.Body className='Today'>
                        <Card.Title style={details}>{date}</Card.Title>
                        <Card.Text style={details}> {description} </Card.Text>
                            <div>
                                <Card.Text style={details}> Mood: {mood} </Card.Text>
                                <Card.Text style={details}> Compatibility: {compatibility} </Card.Text>
                                <Card.Text style={details}> Lucky Number: {luckyNumber} </Card.Text>
                            </div>
                    </Card.Body>
                </Card>
        )
    }

const details = {
    fontWeight: 'bold',
    color: 'black'
}

const horoscopeInfo = {
    border: '1px solid white',
    borderRadius: '15px',
    margin: '20px auto',
    padding: '20px',
    width: '40%',
    height: '80%',
    fontSize: '20px',
    color: 'white',
}

