import Link from "next/link";

const Header = () => {
    return (
        <>
            <header className='w-full h-[113px] shadow-2xl'>
                <ul className='list-none flex justify-end items-center h-full font-semibold pr-12'>
                    <li className='px-4 hover:text-[#EB3939] transition duration-300'>
                        <Link href={'/'}>Home</Link>
                    </li>
                    <li className='px-4 hover:text-[#EB3939] transition duration-300'>
                        <Link href={'/pages/Cardapio'}>Cardápio</Link>
                    </li>
                    <li className='px-4 hover:text-[#EB3939] transition duration-300'>
                        <Link href={'/pages/Sobre'}>Sobre Nós</Link>
                    </li>
                </ul>
            </header>
        </>
    );
}

export default Header;