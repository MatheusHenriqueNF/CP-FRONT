import React from "react";

type BotaoProps = {
    titulo : string;
}

const Botao: React.FC<BotaoProps> = (
    {
        titulo = 'Tiutlo'
    }
) =>{
    return(
        <button className="bg-[#EB3939] hover:bg-[#D32323] text-white font-bold py-2 px-4 rounded mt-10">
            {titulo}
        </button>
    )
}

export default Botao