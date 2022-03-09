const { v4 } = require('uuid')

const Mutation = {
    addAnimal:(parentValue,args,{ animals }) => {
        animals.push({id:v4(),...args})
        return {id:v4(),...args}
    },
    deleteAnimal:(parentValue,{id},{animals}) => {
        let animalToBeDeleted = animals.findIndex(animal => animal.id === id);
        animals.splice(animalToBeDeleted,1);
        return true
    }
}

module.exports = Mutation