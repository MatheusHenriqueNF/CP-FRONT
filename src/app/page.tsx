import Image from "next/image";
import CardQualidade from "./components/Card_Qualidade/cardqualidade";
import Botao from "./components/Botao/botao";
import Link from "next/link";
import { ThemeProvider } from "./ThemeProvider/ThemeProvider";
import ThemeButton from "./ThemeButton/ThemeButton";




export default function Home() {
  return (
    <>
      <section className="relative w-full">
        <Image
          src={"/image/carousel.jpg"}
          width={1200}
          height={200}
          alt="Moço comendo pão"
          className="w-full h-screen object-cover"
        />
        {/* Filtro escuro */}
        <div className="absolute inset-0 bg-black/30"></div>
        {/* Texto sobre a imagem */}
        <div className="w-200 absolute inset-0 flex items-center z-10 pl-12">
          <h1 className="text-6xl font-semibold text-white">Bem-vindo ao site de receitas do <span className="text-red-500">Fast</span> 4 <span className="text-[#E50C1C]">You.</span></h1>
        </div>
      </section>

      <section className="w-full h-[600] flex justify-center items-center">
        <div className="w-full flex justify-center items-center gap-30">
          <div className="p-10">
            <h2 className="text-5xl font-bold text-[#EB3939] mb-10">Faça as receitas mais deliciosas</h2>
            <p className="text-2xl font-light">Descubra sabores incríveis e transforme sua cozinha em um verdadeiro restaurante. Receitas fáceis, práticas e irresistíveis para todos os gostos!</p>
          </div>
          <div>
            <Image
              src={"/image/section2.webp"}
              width={600}
              height={600}
              alt="Moço comendo pão"
              className="w-full h-[500] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="w-full h-[600] flex justify-center items-center bg-amber-200 gap-10">
        <CardQualidade title="Realize cada receita e se torne um profissional na cozinha" imagem="/image/icon-chef.png"/>
        <CardQualidade title="Faça as melhores comidas em companhia" imagem="/image/icon-companhia.png"/>
        <CardQualidade title="Reserve um tempo para a diversão na cozinha" imagem="/image/icon-time.png"/>
      </section>

      <section className="w-full h-[600] flex justify-center items-center">
        <div className="w-full flex justify-center items-center gap-30">
          <div className="p-10">
            <h2 className="text-5xl font-bold text-[#EB3939] mb-10">Conheça as receitas</h2>
            <p className="text-2xl font-light">Explore uma seleção especial de pratos deliciosos, fáceis de fazer e perfeitos para qualquer ocasião. Do café da manhã ao jantar!</p>
            <Link href={"/pages/Cardapio"}><Botao titulo="Clique aqui"/></Link>
          </div>
          <div>
            <Image
              src={"/image/chefe.png"}
              width={600}
              height={600}
              alt="Moço comendo pão"
              className="w-full h-[500] object-cover"
            />
            <ThemeProvider>
              <ThemeButton/>
            </ThemeProvider>
          </div>
        </div>
      </section>
    </>
  );
}