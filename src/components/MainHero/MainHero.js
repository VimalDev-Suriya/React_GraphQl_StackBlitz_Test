import React from 'react'
import { useQuery, gql } from '@apollo/client'
import "./MainHero.css"
import animals from "../../assets/images"
import {Container} from "reactstrap";

const FETCH_MAIN_HEADERS = gql`
    query{
        mainCards{
            title,
            image
        }
    }       
`;

function MainHero() {

    const {loading, error, data} = useQuery(FETCH_MAIN_HEADERS)

    if(loading) { return <div>Loading.....</div> }

    if(error) { return <div>SOmething went worng</div> }

    return (
        <div className="MainHero">
            <Container>
                    <div className="header-container">
                        <h2>Find your <br/> new four-legged <br/> best friend</h2>
                        <img src={animals.rhino} />
                    </div>
                    <div className="cards-container">
                        {data.mainCards.map(card => {
                            return (
                                <div className="card" key={`${card.title}-${card.image}`}>
                                    <h3>{card.title}</h3>
                                    <img src={animals[card.image]} style={{width: "100%"}}/>
                                </div>
                            )
                        })}
                    </div>
            </Container>
        </div>
    )
}

export default MainHero
