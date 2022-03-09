import React, { useState } from 'react'
import "./CategoryDisplay.css"
import { Container } from 'react-bootstrap'
import animals from '../../assets/images'

import { Link } from "react-router-dom"
import { gql, useQuery} from '@apollo/client'

const FETCH_CATEGORY_QUERY = gql`
    query{
        categories{
            id,
            category,
            image,
            slug
        }
    }
`;

function CategoryDisplay() {

    const { loading, error, data} = useQuery(FETCH_CATEGORY_QUERY);

    if(loading) { return <div>Loading.....</div> }

    if(error) { return <div>SOmething went worng</div> }

    return (
        <div className="CategoryDisplay">
            <Container className="CategoryDisplay-container">
                {data.categories.map(category => {
                    return (
                        <Link to={`/products/${category.slug}`} className="CategoryDisplay-card-container">
                            <div className="CategoryDisplay-card">
                                <img src={animals[category.image]} alt=""/> 
                            </div>
                            <h3>{category.category}</h3>
                        </Link>
                    )
                })}
            </Container>
        </div>
    )
}

export default CategoryDisplay
