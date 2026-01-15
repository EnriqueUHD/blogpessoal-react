import React from "react";

const Login = () => {
  return (
    <div className="bg-indigo-900 flex justify-center items-center min-h-screen">
      <div className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-md mx-4">
        <h1 className="text-3xl font-bold text-center text-indigo-900 mb-6">
          Login
        </h1>
        
        <form className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
              Usuário
            </label>
            <input 
              id="username" 
              type="text" 
              className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition" 
              placeholder="Digite seu usuário"
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Senha
            </label>
            <input 
              id="password" 
              type="password" 
              className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition" 
              placeholder="Digite sua senha"
            />
          </div>
          
          <button 
            type="submit" 
            className="bg-indigo-900 hover:bg-indigo-800 text-white font-semibold px-4 py-3 rounded-lg w-full transition duration-200 mt-6"
          >
            Entrar
          </button>
        </form>
        
        <div className="mt-6 text-center">
          <a href="#" className="text-sm text-indigo-900 hover:underline">
            Esqueceu sua senha?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;