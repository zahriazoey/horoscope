import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import NavBar from './NavBar'

export default function ZodiacPage(props) {
    // const handleClick = props.onClick
    const signs = props.signs
    return (
        <div>
            <NavBar />
            <h1 style={{ color: 'white', font: '150px'}}>Select Your Zodiac</h1>
            <div className='CardContainer'>
                {signs.map((sign, index) => {
                    return (
                        <div style={{ width: '22%' }}>
                            <div style={cardLabel}>
                                <Link style={StyledLink} to={`/horoscope/${sign.name}`}
                                    sign={sign} key={index}>{sign.name}
                                    <div style={{ margin: '5px' }}>
                                        <img src={sign.image} style={{ maxWidth: '100%'}} alt='zodiac' />
                                        <p>{sign.dateRange}</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

const cardLabel = {
    border: '2px dotted white',
    borderRadius: '15px',
    maxWidth: '100%',
    width: '205px',
    margin: '20px auto',
    display: 'flex',
    flexDirection: 'column',
    color: 'white',
    height: '78%',
    fontSize: '23px',
}

const StyledLink = {
    textDecoration: 'none',
    color: 'white'
}

