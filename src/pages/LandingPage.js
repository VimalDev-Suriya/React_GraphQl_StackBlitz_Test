import React from 'react'
import MainHero from "../components/MainHero/MainHero"
import CategoryDisplay from "../components/CategoryDisplay/CategoryDisplay"
import CardDisplay from "../components/CardDisplay/CardDisplay"
import {useQuery, gql, useMutation} from '@apollo/client';

const FETCH_ANIMALS_QUERY = gql`
    query{
        animals{
            id,
            image,
            title,
            price,
            slug
        }
    }
`;

const ADD_ANIMAL_MUTATION = gql`
mutation(
    $image: String!,
    $category: String!,
    $title: String!,
    $stock: Int!,
    $price: String!,
    $description: [String!]!
    $rating: Float!
    $onSale:Boolean!
    $slug: String!
    ) {
        addAnimal(
            image: $image,
            category: $category,
            title: $title,
            stock: $stock,
            price: $price,
            description: $description,
            rating: $rating,
            onSale:$onSale,
            slug: $slug,
        ) {
            slug
        }
    }
`;
function LandingPage() {

    const { loading, error, data } = useQuery(FETCH_ANIMALS_QUERY);
    const [ addAnimal ] = useMutation(ADD_ANIMAL_MUTATION,{
        update:(cache, {data:addAnimal})=>{
            // TAKING THE PREVIOUS DATA FROM CACHE
            const {animals} = cache.readQuery({
                query:FETCH_ANIMALS_QUERY
            })

            // UPDATING THE CACHE WITH NEW DATA,
            cache.writeQuery({
                query: FETCH_ANIMALS_QUERY,
                data: { animals: animals.concat([addAnimal]) },
            });
        }
    })

    if(loading) { return <div>Loading.....</div> }

    if(error) { return <div>SOmething went worng</div> }
    
    return (
        <div>
            <MainHero />
            <CategoryDisplay />
            <CardDisplay animals={data.animals}/>
            <button onClick={() => {
              addAnimal({
                variables: {
                  image: "donkey",
                  category: "1",
                  title: "This is a really cool ostrich",
                  stock: 13,
                  price: "32,333",
                  description: ["das"],
                  rating:3.5,
                  onSale:true,
                  slug: "ostrich",
                },

              })
            }}> Add an Ostrich </button>
        </div>
    )
}

export default LandingPage
