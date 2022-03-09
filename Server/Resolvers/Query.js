const Query = {
    mainCards:(parentValue, args, { mainCards }) => mainCards,
    animals:(parentValue, args, { animals }) => animals,
    animal:(parentValue, args, { animals }) => animals.find(animal => animal.slug === args.slug),
    categories:(parentValue, args, { categories }) => categories,
    category: (parentValue, args, { categories }) => categories.find(category => category.slug === args.slug),
}

module.exports = Query