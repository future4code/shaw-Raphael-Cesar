export const goToLogin = (navigate) =>{
    navigate('/')
}

export const goToFeed = (navigate) =>{
    navigate('/Feed')
}

export const goToSignUp = (navigate) =>{
    navigate('/SignUp')
}

export const goToSignUpAdress = (navigate) =>{
    navigate('/SignUpAdress')
}

export const goToProfileEdit = (navigate,id) =>{
    navigate('/profile/${id}')
}