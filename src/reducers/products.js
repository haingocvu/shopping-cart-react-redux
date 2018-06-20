let initialState = [
    {
        id: 1,
        name: 'apple iphone x',
        image: 'data:image/jpeg;base64,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',
        description: 'san pham cua apple',
        price: 400,
        inventory: 10,
        rating: 5
    },
    {
        id: 2,
        name: 'sam sung galaxy s9',
        image: 'data:image/jpeg;base64,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',
        description: 'san pham cua samsung',
        price: 390,
        inventory: 20,
        rating: 4
    },
    {
        id: 1,
        name: 'sony z10',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA5g5QZbc5Wfrenters1N5Y8thARjUyucq-zBrtsjzuQD0qy4nFA',
        description: 'san pham cua sony',
        price: 450,
        inventory: 12,
        rating: 3
    }
];

const products = (state = initialState, action) => {
    switch (action.type) {
        default:
            return [...state]
    }
}

export default products;
