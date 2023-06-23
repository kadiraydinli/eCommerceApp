export const currencyFormat = (amount: string) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(parseInt(amount));
};