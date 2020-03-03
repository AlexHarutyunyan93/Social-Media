import React from 'react';
import {Header} from "../Header";
import {Card} from '../Controls/Card';

const HomePageComponent = ({user}) => {
    return (
        <div className="col-md-6 col-md-offset-3">
            <Header />
            <h1>{`${user.firstName} ${user.lastName}`}</h1>
            <Card />
        </div>
)};
export default HomePageComponent;