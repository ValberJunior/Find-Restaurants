import { Container, Search } from "./style";
import logo from '../../assets/logo.svg'
import TextField, { Input } from "@material/react-text-field";
import { useState } from "react";

const Home = ()=>{

    const [inputValue, setInputValue] = useState('');
    

    return(
        <Container>
            <Search><img src={logo} alt='Logo da Página'/>

            <TextField
            label='Pesquisar'
            outlined
            // onTrailingIconSelect={() => this.setState({value: ''})}
            // trailingIcon={<MaterialIcon role="button" icon="delete"/>}
            ><Input
            value={inputValue}
            onChange={(e)=>{setInputValue(e.target.value)}} />
        </TextField>


            </Search>
        </Container>
    )
}

export default Home;