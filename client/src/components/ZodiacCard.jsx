import React, { Component } from "react";
import Horoscope from "./Horoscope";
import { ButtonGroup, Button } from 'react-bootstrap'
import '../App.css'
import { connect } from 'react-redux'
import { toggleDay, getToday, getTomorrow, getYesterday } from '../redux/action'
import NavBar from './NavBar'

class ZodiacCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            today: '',
            tomorrow: '',
            yesterday: '',
            showHoroscope: false,
            displaying: 'today'
        };
    }

    todayHoroscope = (zodiac) => {
        const sign = zodiac;
        fetch(`https://aztro.sameerkumar.website/?sign=${sign}&day=today`, {
            method: "POST",
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                this.props.getToday(data)
            });
    };

    tomorrowHoroscope = (zodiac) => {
        const sign = zodiac;
        fetch(`https://aztro.sameerkumar.website/?sign=${sign}&day=tomorrow`, {
            method: "POST",
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                this.props.getTomorrow(data)
                
            });
    };

    yesterdayHoroscope = (zodiac) => {
        const sign = zodiac;
        fetch(`https://aztro.sameerkumar.website/?sign=${sign}&day=yesterday`, {
            method: "POST",
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                this.props.getYesterday(data)
                
            });
    };

    handleClick = (name) => {
        this.props.toggleDay(name)
        this.setState({
            displaying: name
        }, () => console.log(this.state.displaying));
    }

    componentDidMount() {
        this.todayHoroscope(this.props.match.params.sign);
        this.yesterdayHoroscope(this.props.match.params.sign);
        this.tomorrowHoroscope(this.props.match.params.sign);
    }

    render() {
        return (
            <div>
                <NavBar />
                <h1 style={{color:'white', margin: '20px', fontSize: '75px'}}>~{this.props.match.params.sign}~</h1>
                <div>
                { this.props.state.displaying && 
                    <ButtonGroup aria-label="Basic example">
                        <Button className={this.state.displaying === 'yesterday' ? 'underlinestyle' : ''} style={buttonStyle} variant="secondary" onClick={()=>this.handleClick('yesterday')}>Yesterday</Button>
                        <Button className={this.state.displaying === 'today' ? 'underlinestyle' : ''} style={buttonStyle} variant="secondary" onClick={()=>this.handleClick('today')}>Today</Button>
                        <Button className={this.state.displaying === 'tomorrow' ? 'underlinestyle' : ''} style={buttonStyle} variant="secondary" onClick={()=>this.handleClick('tomorrow')}>Tomorrow</Button>
                    </ButtonGroup> }
                </div>
                    <Horoscope details={this.props.state.displaying} />
            </div>
        );
    }
}

const buttonStyle = {
    textAlign: 'center',
    textDecoration: 'none',
    position: 'relative',
    transition: 'left 0.3s ease, width 0.3s ease',
    margin: '30px',
    background: 'none',
    border: 'none',
    padding: '0',
    color: 'white',
    fontSize: '30px',
    display: 'flex',
    flexDirection: 'column'
}


const mapDispatchToProps = {
    toggleDay,
    getToday,
    getTomorrow, 
    getYesterday,
}

const mapStateToProps = (state) => {
    return {
        state
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ZodiacCard)


