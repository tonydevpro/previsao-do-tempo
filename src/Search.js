import "./Search.css";
import {useState} from 'react';

function Search(){

    const [cidade,setCidade] = useState('');

    function detectarPesquisa(e){
        e.preventDefault();
        let currentValue = document.querySelector('[name=pesquisa]').value;
        /*
        fazer a requisiçao API
        alert(currentValue);
        */
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${currentValue}&appid=4d8fb5b93d4af21d66a2948710284366&units=metric`;
       fetch(url)
       .then(response=> response.json())
       .then(data=>{
        const {main, name, sys, weather} = data;

        if(sys != undefined){

            

        if(weather != undefined){

            

            const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${

         weather[0]["icon"]}.svg`;

            setCidade(`

            <div class=containerCidade>

            <p>Temperatura: ${main.temp}°</p>

            <p>${sys.country}</p>

            <p>${name}</p>

            <p>${weather[0]['description']}</p>

            <img src="${icon}" />

            </div>

            `);



        }



        }else{

            setCidade("");

        }
       })
    }
    return(
        <div className="searchWraper">
            <div className='search'>
                <h1>digite a cidade que voce quer saber a previsao...</h1>
                <form onSubmit={(e)=>detectarPesquisa(e)}>
                    <input type='text' name='pesquisa' placeholder='digite a cidade' ></input>
                    <input type='submit' value='pesquisar Cidade!'/>
                </form>
            </div>

            {
                 (cidade!= "")?

                 <div dangerouslySetInnerHTML={{__html: cidade}} />:
     
                 <div style={{padding:'3%'}}>Pesquise por algo acima...</div>
            }
        </div>
    )
}

export default Search;