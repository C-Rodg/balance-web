import React, {lazy, Suspense, useEffect} from 'react';
import {Commute, Business, Book, Theaters, SportsEsports, Cake, Hiking, OutdoorGrill, SportsScore, SportsFootball, SportsGolf, SportsBasketball, Flight, Hotel, ShoppingCart, Pets, Agriculture, HomeWork, Home, PestControl, AcUnit, Plumbing, PersonalVideo, Healing } from '@styled-icons/material'
import PropTypes from 'prop-types';

let size=40

let iconObj = {
    Commute: <Commute size={size} title="Commute" />,
    
    Business: <Business size={size} title="Bussiness Expense" />,
    
    Book: <Book size={size} title="Book" />,
    
    Theaters: <Theaters size={size} title="Theaters" />,
    
    SportsEsports: <SportsEsports size={size} title="Computer" />,
    
    Cake: <Cake size={size} title="Birthday" />,
    
    Hiking: <Hiking size={size} title="Hiking" />,
    
    OutdoorGrill: <OutdoorGrill size={size} title="Grilling" />,
    
    SportsScore: <SportsScore size={size} title="General Sports" />,
    
    SportsFootball: <SportsFootball size={size} title="Football" />,
    
    SportsGolf: <SportsGolf size={size} title="Golf" />,
    
    SportsBasketball: <SportsBasketball size={size} title="Basketball" />,
    
    Flight: <Flight size={size} title="Flights" />,
    
    Hotel:<Hotel size={size} title="Hotel" />,
    
    ShoppingCart: <ShoppingCart size={size} title="Groceries" />,
    
    Pets: <Pets size={size} title="Pets"/>,
    
    Agriculture: <Agriculture size={size} title="Vegetables" />,
    
    HomeWork: <HomeWork size={size} title="Homework" />,
    
    Home: <Home size={size} title="Rent" />,
    
    PestControl: <PestControl size={size} title="Pest Control" />,
    
    AcUnit: <AcUnit size={size} title="AC" />,
    
    Plumbing: <Plumbing size={size} title="Water" />,
    
    PersonalVideo: <PersonalVideo size={size} title="Camera" />,
    
    Healing: <Healing size={size} title="Medical Expenses" />,

}


const Icon = (props) => {
    console.log(props.name)

    const DynamicIcon = iconObj[props.name]
  
    // const MaterialIcon = (name) => {
    //     let resolved = require(`@styled-icons/material/${name}`).default

    //     console.log(resolved)
        
    //     if (!resolved) {
    //         throw Error(`Could not find ${name}`)
    //     }
    
    //     return React.createElement(resolved)
    // }

    // return <MaterialIcon name={props.name}/>

    return (


    //   <Suspense fallback={<div>Loading ...</div>}>
    //     <DynamicIcon />
    //   </Suspense>
    <>
        {DynamicIcon ? DynamicIcon : null}

    </>
    );
};

// props and their types
Icon.propTypes = {

    name: PropTypes.string.isRequired,

}

export default Icon