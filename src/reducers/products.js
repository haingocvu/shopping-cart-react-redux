let initialState = [
    {
        id: 1,
        name: 'apple iphone x',
        image: '',
        description: 'san pham cua apple',
        price: 400,
        inventory: 10
    },
    {
        id: 2,
        name: 'sam sung galaxy s9',
        image: '',
        description: 'san pham cua samsung',
        price: 390,
        inventory: 20
    },
    {
        id: 1,
        name: 'sony z10',
        image: '',
        description: 'san pham cua sony',
        price: 450,
        inventory: 12
    }
];

const products = (state = initialState, action) => {
    switch (action.type) {
        default:
            return [...state]
    }
}

export default products;
