import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Transitions from '../components/Transition'

export default function NewsDetail() {

    // to display news detail, get news from Params, and find news
    // ID that match with backend and display photo and information

    const { id, category } = useParams();

    return (
        <Transitions>
            <div>
                <Navbar />
                <h2>News Detail</h2>
                <p>News ID: {id}</p>
                <p>Category: {category}</p>
                {/* Display the news details */}
                <Footer />
            </div>
        </Transitions>
    )
}