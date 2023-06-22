const commonColor = {
    white: '#FFFFFF',
    black: '#000000',
    active: '#2196F3',
    deActive: '#9E9E9E',
    lightShades: '#ECEFF1',
    darkShades: '#333333',
};

const light = {
    backgroundColor: '#FFFFFF',
    text: '#000000',
    ...commonColor,
};

const dark = {
    backgroundColor: '#000000',
    text: '#FFFFFF',
    ...commonColor,
};

export default { light, dark };
