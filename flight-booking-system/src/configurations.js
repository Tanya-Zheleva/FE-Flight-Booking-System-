export const emailFieldValidationRules = [
    {
        type: 'email',
        message: 'The input is not valid e-mail!'
    },
    {
        required: true,
        message: 'Please input your e-mail!'
    }
];

export const passwordValidationRules = [
    {
        required: true,
        message: 'Please input your password!'
    }
];

export const confirmPasswordValidationRules = [
    {
        required: true,
        message: 'Please confirm your password!'
    },
    (form) => {
        return {
            validator: (_, value) => {
            const { getFieldValue } = form;

            return !value || getFieldValue('password') === value
                ? Promise.resolve()
                : Promise.reject(new Error('The new password that you entered does not match!'));
            }
        }
    }
]

export const nameValidationRules = [
    {
        required: true,
        message: 'Please input your name!'
    }
]