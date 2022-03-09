const Category = {
    animals:(parentValue,args,{ animals }) => animals.filter(animal => animal.category === parentValue.id)
}

module.exports = Category