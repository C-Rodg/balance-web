import React from 'react'
import {Commute, Business, Book, Theaters, SportsEsports, Cake, Hiking, OutdoorGrill, SportsScore, SportsFootball, SportsGolf, SportsBasketball, Flight, Hotel, ShoppingCart, Pets, Agriculture, HomeWork, Home, PestControl, AcUnit, Plumbing, PersonalVideo, Healing } from '@styled-icons/material'
import PropTypes from 'prop-types'
import './style.css';

function Icons (props) {

    // size for all icons
    let size = 35

    // allow for on click selection
    const selectIcon = (e, item) => {
        props.selected(item)
    }

    return (
        <div className="iconOverallContainer">
            
            <div className="iconContainer">
                <div className="title">
                    <h3>Work</h3>
                </div>
                <div className="iconsRow">
                    <div className="icon">
                        <Commute size={size} title="Commute" onClick={(e) => selectIcon(e, 'Commute')}/>
                    </div>
                    <div className="icon">
                        <Business size={size} title="Bussiness Expense" onClick={(e) => selectIcon(e, 'Business')}/>
                    </div>
                </div>
            </div>


            <div className="iconContainer">
                <div className="title">
                    <h3>Leisure</h3>
                </div>
                <div className="iconsRow">
                    <div className="icon">
                        <Book size={size} title="Book" onClick={(e) => selectIcon(e, 'Book')}/>
                    </div>
                    <div className="icon">
                        <Theaters size={size} title="Theaters" onClick={(e) => selectIcon(e, 'Theaters')}/>
                    </div>
                    <div className="icon">
                        <SportsEsports size={size} title="Computer" onClick={(e) => selectIcon(e, 'SportsEsports')}/>
                    </div>
                    <div className="icon">
                        <Cake size={size} title="Birthday" onClick={(e) => selectIcon(e, 'Cake')}/>
                    </div>
                    <div className="icon">
                        <Hiking size={size} title="Hiking" onClick={(e) => selectIcon(e, 'Hiking')}/>
                    </div>
                    <div className="icon">
                        <OutdoorGrill size={size} title="Grilling" onClick={(e) => selectIcon(e, 'OutdoorGrill')}/>
                    </div>
                    <div className="icon">
                        <SportsScore size={size} title="General Sports" onClick={(e) => selectIcon(e, 'SportsScore')}/>
                    </div>
                    <div className="icon">
                        <SportsFootball size={size} title="Football" onClick={(e) => selectIcon(e, 'SportsFootball')}/>
                    </div>
                    <div className="icon">
                        <SportsGolf size={size} title="Golf" onClick={(e) => selectIcon(e, 'SportsGolf')}/>
                    </div>
                    <div className="icon">
                        <SportsBasketball size={size} title="Basketball" onClick={(e) => selectIcon(e, 'SportsBasketball')}/>
                    </div>
                </div>
            </div>

            <div className="iconContainer">
                <div className="title">
                    <h3>Vacation</h3>
                </div>
                <div className="iconsRow">
                    <div className="icon">
                        <Flight size={size} title="Flights" onClick={(e) => selectIcon(e, 'Flight')}/>
                    </div>
                    <div className="icon">
                        <Hotel size={size} title="Hotel" onClick={(e) => selectIcon(e, 'Hotel')}/>
                    </div>

                </div>
            </div>

            <div className="iconContainer">
                <div className="title">
                    <h3>Shopping</h3>
                </div>
                <div className="iconsRow">
                    <div className="icon">
                        <ShoppingCart size={size} title="Groceries" onClick={(e) => selectIcon(e, 'ShoppingCart')}/>
                    </div>
                    <div className="icon">
                        <Pets size={size} title="Pets" onClick={(e) => selectIcon(e, 'Pets')}/>
                    </div>
                    <div className="icon">
                        <Agriculture size={size} title="Vegetables" onClick={(e) => selectIcon(e, 'Agriculture')}/>
                    </div>
                </div>
            </div>


            <div className="iconContainer">
                <div className="title">
                    <h3>Home</h3>    
                </div>
                <div className="iconsRow">
                    <div className="icon">
                        <HomeWork size={size} title="Homework" onClick={(e) => selectIcon(e, 'HomeWork')}/>
                    </div>
                    <div className="icon">
                        <Home size={size} title="Rent" onClick={(e) => selectIcon(e, 'Home')}/>
                    </div>
                    <div className="icon">
                        <PestControl size={size} title="Pest Control" onClick={(e) => selectIcon(e, 'PestControl')}/>
                    </div>
                    <div className="icon">
                        <AcUnit size={size} title="AC" onClick={(e) => selectIcon(e, 'AcUnit')}/>
                    </div>
                    <div className="icon">
                        <Plumbing size={size} title="Water" onClick={(e) => selectIcon(e, 'Plumbing')}/>
                    </div>
                </div>
            </div>

            <div className="iconContainer">
                <div className="title">
                    <h3>Other</h3>
                </div>
                <div className="iconsRow">
                    <div className="icon">
                        <PersonalVideo size={size} title="Camera" onClick={(e) => selectIcon(e, 'PersonalVideo')}/>
                    </div>
                    <div className="icon">
                        <Healing size={size} title="Medical Expenses" onClick={(e) => selectIcon(e, 'Healing')}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

// props and their types
Icons.propTypes = {

    selected: PropTypes.func.isRequired,

}

export default Icons