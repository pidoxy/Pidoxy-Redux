export const increment = (number) => ({
    type: 'INCREMENT',
    payload: number
});

export const decrement = () => ({
    type: 'DECREMENT',
});