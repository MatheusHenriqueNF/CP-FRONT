import React from 'react';
import Image from 'next/image';

type CardQualidadeProps = {
    title: string;
    imagem : string;
}

const CardQualidade : React.FC<CardQualidadeProps> = (
    {
        title = 'Titilo',
        imagem = '/image/section2.webp'
    }
) => {
  return (
    <div className="w-100 h-120 rounded-2xl shadow-2xl bg-white flex flex-col justify-center items-center gap-5 p-5 hover:scale-105 transition-transform duration-300 ease-in-out">
      
      <Image src={imagem} width={300} height={300} alt='icon do card'/>
      <h2 className='text-2xl font-semibold'>{title}</h2>
    </div>
  );
}
export default CardQualidade;