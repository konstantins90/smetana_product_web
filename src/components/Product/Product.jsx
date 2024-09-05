import React, {useState} from 'react';
import './Product.css';
import banner from '../../assets/images/banner.jpg';
import {Link} from "react-router-dom";

const Product = () => {
    return (
        <div>
            <div className="image">
                <img src={banner} alt="banner" />
            </div>
            <div className='container mx-auto p-4'>
                <div className="headline text-center py-10">
                    <h2 className="text-3xl font-bold">
                        Innovative Technologie für Ihr Wohlbefinden
                    </h2>
                    <h1 className='text-2xl mt-5'>
                        Erleben Sie die Zukunft der Hydration mit der CellPower Wasserstoff Wasserflasche
                    </h1>
                </div>
                <p className='text-center'>Die CellPower Wasserstoff Wasserflasche von LUMIVITEA ist mehr als nur eine gewöhnliche Flasche. Sie nutzt modernste Elektrolisetechnologie, um Ihre Wasseraufnahme mit reinem Wasserstoff anzureichern. Dies verbessert nicht nur die Hydration, sondern unterstützt auch Ihre Gesundheit und Vitalität. Ideal für alle, die auf der Suche nach einem effektiven Weg sind, ihre Flüssigkeitszufuhr zu optimieren und gleichzeitig von den gesundheitsfördernden Eigenschaften von Wasserstoff zu profitieren.</p>
            </div>
            <div className='py-10'>
                <Link to='/form' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Bestellen</Link>
            </div>
        </div>
    );
};

export default Product;
