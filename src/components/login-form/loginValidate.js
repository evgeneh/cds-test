export const validate = values => {
    const errors = {}
    const requiredFields = [
        'login',
        'password'
    ]
    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = 'Обязательное поле'
        }
    })
    return errors
}