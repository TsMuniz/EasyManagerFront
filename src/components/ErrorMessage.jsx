import React from 'react'

export default function ErrorMessage({error, inputName}) {
    switch (error[inputName]?.type) {
        case 'required': return 'Este campo é obrigatório!'
        case 'email': return 'Insira um email válido'            
        case 'min': return 'Sua senha deve conter ao menos 6 caracteres'            
        default: break;
    }
}
