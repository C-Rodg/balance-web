import React, {lazy, Suspense, useEffect} from 'react';
import {material} from 'styled-icons';
import PropTypes from 'prop-types';

let size=40

let iconObj = {
    commute: <material.Commute size={size} title="Commute" />,
    
    Business: <material.Business size={size} title="Bussiness Expense" />,
    
    Book: <material.Book size={size} title="Book" />,
    
    Theaters: <material.Theaters size={size} title="Theaters" />,
    
    SportsEsports: <material.SportsEsports size={size} title="Computer" />,
    
    Cake: <material.Cake size={size} title="Birthday" />,
    
    Hiking: <material.Hiking size={size} title="Hiking" />,
    
    OutdoorGrill: <material.OutdoorGrill size={size} title="Grilling" />,
    
    SportsScore: <material.SportsScore size={size} title="General Sports" />,
    
    SportsFootball: <material.SportsFootball size={size} title="Football" />,
    
    SportsGolf: <material.SportsGolf size={size} title="Golf" />,
    
    SportsBasketball: <material.SportsBasketball size={size} title="Basketball" />,
    
    Flight: <material.Flight size={size} title="Flights" />,
    
    Hotel:<material.Hotel size={size} title="Hotel" />,
    
    ShoppingCart: <material.ShoppingCart size={size} title="Groceries" />,
    
    Pets: <material.Pets size={size} title="Pets"/>,
    
    Agriculture: <material.Agriculture size={size} title="Vegetables" />,
    
    HomeWork: <material.HomeWork size={size} title="Homework" />,
    
    Home: <material.Home size={size} title="Rent" />,
    
    PestControl: <material.PestControl size={size} title="Pest Control" />,
    
    AcUnit: <material.AcUnit size={size} title="AC" />,
    
    Plumbing: <material.Plumbing size={size} title="Water" />,
    
    PersonalVideo: <material.PersonalVideo size={size} title="Camera" />,
    
    Healing: <material.Healing size={size} title="Medical Expenses" />,

}


const Icon = (props) => {

    const DynamicIcon = iconObj[props.name]
  
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