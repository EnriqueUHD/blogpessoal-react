import { Link } from "react-router-dom"

function Navbar() {
    const linkStyle = "mr-4  text-gray-300 hover:text-white transition";

    return (
        <>
        <div className="w-full flex justify-center py-4
                        bg-indigo-900 text-white font-bold">
            <div className="container flex justify-between text-lg mx-8">
                <Link to="/">Generation Blog</Link>

                <div className="flex gap-4">
                    <ul className="flex">
                        <li className={linkStyle}><Link to="/login">Login</Link></li>
                        <li className={linkStyle}><Link to="/postagens">Postagens</Link></li>
                        <li className={linkStyle}><Link to="/temas">Temas</Link></li>
                        <li className={linkStyle}><Link to="/cadastrarTema">Cadastrar tema</Link></li>
                        <li className={linkStyle}><Link to="/perfil">Perfil</Link></li>
                        <li className={linkStyle}><Link to="/">Sair</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </>
    )
}

export default Navbar