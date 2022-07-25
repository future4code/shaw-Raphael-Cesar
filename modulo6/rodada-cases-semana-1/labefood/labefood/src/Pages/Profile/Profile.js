import  React  from 'react';
import { useRequestData } from './../../Hooks/useRequestData';
import { BASE_URL } from './../../constants/Url';
import useProtectedPage from './../../Hooks/useProtectedPage';
import { goToProfileEdit } from './../../Routes/coordinator';
import { useNavigate } from 'react-router-dom';

const Profile = () =>{

    useProtectedPage()

    const person = useRequestData({},`${BASE_URL}/profile`)
    const navigate = useNavigate()

    return(
        <Main>
            <Perfil>Meu Perfil</Perfil>
            <Informacoes>
                <PerfilPessoa>
                    <div>
                        <p>{person[0].user && person[0].user.name}</p>
                        <p>{person[0].user && person[0].user.email}</p>
                        <p>{person[0].user && person[0].user.cpf}</p>
                    </div>
                    <div onClick={() => goToProfileEdit(navigate,person[0].user.id)}>Editar</div>
                </PerfilPessoa>
                <EnderecoPessoa>
                    <div>
                        <h4>Endereço cadastrado</h4>
                        <p>{person[0].user && person[0].user.addres}</p>
                    </div>
                    <div>Editar</div>
                </EnderecoPessoa>
                <HistoricoCompras>HistoricoCompras</HistoricoCompras>
            </Informacoes>
        </Main>
}

export default Profile