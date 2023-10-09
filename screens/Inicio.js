import { IoAccessibility, IoPhonePortrait, IoWallet, IoLogoYoutube } from "react-icons/io5";
import { LuMonitorCheck, LuInstagram } from "react-icons/lu";
import { Link} from 'react-router-dom' 

export default function Inicio() {
  return (
    <div className="h-screen ">
      <div className="bg-[url('https://img.band.uol.com.br/image/2023/09/06/como-flambar-alimentos-com-seguranca-191253.jpg')] h-[45rem] bg-cover bg-center flex">
        <div className="flex w-1/2 justify-center items-center h-full">
          <div>
            <h1 className="text-white font-bold text-6xl text-start">Gerencie agora seu</h1>
            <h1 className="text-white font-bold text-6xl text-start">negocio atraves do</h1>
            <h1 className="text-orange-500 font-bold text-8xl text-start">Cashew</h1>
            <h2 className="text-white text-xl mt-2">Conheça o novo jeito de facilitar suas vendas. Faça parte</h2>
            <h2 className="text-white text-xl">de uma nova era.</h2>
          </div>
        </div> 
        <div className="flex w-1/2 justify-start items-center h-full" >
          <div className="bg-white rounded-lg p-5 flex flex-col justify-center items-start w-[32rem]">
            <h1 className="font-semibold text-3xl">Cadastre-se agora</h1>
            <h2 className="font-medium text-md text-gray-400">Entre e experimente</h2>
            <h2 className="font-medium text-lg mt-10 ">Nome completo</h2>
            <input type="name" name="name" id="name" className="border-2 border-gray-200 rounded-md focus:border-orange-500 focus:outline-none py-3 px-2 font-medium mt-1 w-full" />
            <h2 className="font-medium text-lg mt-7">E-mail</h2>
            <input type="email" name="email" id="email" className="border-2 border-gray-200 rounded-md focus:border-orange-500 focus:outline-none py-3 px-2 font-medium mt-1 w-full" />
            <h2 className="font-medium text-lg mt-7">Senha</h2>
            <input type="password" name="password" id="password" className="border-2 border-gray-200 rounded-md focus:border-orange-500 focus:outline-none py-3 px-2 font-medium mt-1 w-full" />
            <button className="rounded-md bg-orange-500 w-full py-3 px-2 font-bold text-lg text-white mt-16 hover:bg-orange-400">Cadastrar agora</button>
            <p className="text-center w-full mt-2">Ja possui uma conta? <button className="text-orange-500 font-medium hover:text-orange-400"><Link to="/Login">Entre agora</Link></button></p>
          </div>
        </div>
      </div>
      <div className=" h-[25rem] mt-20">
        <h1 className="font-semibold text-3xl text-center">Vantagens de usar a Cashew</h1>
          <div className="flex mt-12">
            <div className="w-1/6"/>
            <div className="w-1/6 justify-center items-center flex flex-col">
              <div className="bg-orange-500 p-4 rounded-full">
                <IoAccessibility color="white" font-size="2.5rem"/>  
              </div>
              <div className="">
                <h1 className="font-medium mt-2 text-lg text-center">Diminuicao de filas</h1>
                <h2 className="text-center mt-2">Ajude a diminuir as<br/>filas da sua cantina <br /> com o nosso sistema. </h2>
              </div>
            </div>
            <div className="w-1/6 justify-center items-center flex flex-col">
              <div className="bg-orange-500 p-4 rounded-full">
                <IoPhonePortrait color="white" font-size="2.5rem"/>  
              </div>
              <div className="">
                <h1 className="font-medium mt-2 text-lg text-center">Cardapio Digital</h1>
                <h2 className="text-center mt-2">Facilite a escolha do <br /> consumidor com o cardapio <br /> atraves do App. </h2>
              </div>
            </div>
            <div className="w-1/6 justify-center items-center flex flex-col">
              <div className="bg-orange-500 p-4 rounded-full">
                <LuMonitorCheck color="white" font-size="2.5rem"/>  
              </div>
              <div className="">
                <h1 className="font-medium mt-2 text-lg text-center">Gestao Simples</h1>
                <h2 className="text-center mt-2">Simplicidade e facilidade <br /> para gerenciar seus <br /> pedidos e sua cantina. </h2>
              </div>
            </div>
            <div className="w-1/6 justify-center items-center flex flex-col">
              <div className="bg-orange-500 p-4 rounded-full">
                <IoWallet color="white" font-size="2.5rem"/>  
              </div>
              <div className="">
                <h1 className="font-medium mt-2 text-lg text-center">Controle Financeiro</h1>
                <h2 className="text-center mt-2">Maior controle financeiro <br /> sobre os gastos e as <br /> entradas de dinheiro.</h2>
              </div>
            </div>
            <div className="w-1/6"/>
          </div>    
      </div>
      <footer className="bg-slate-200 h-[15rem]">
        <div className="flex  justify-center pt-12">
          <div className="w-1/5">
            <h1 className="font-semibold text-md text-start">Cashew</h1>
            <div className="mt-5">
              <a href="#" className="font-medium text-md text-start text-black/50 ">Quem somos?</a>
            </div>
            <div className="mt-5">
              <a href="#" className="font-medium text-md text-start text-black/50 ">Pagina do Parceiro</a>
            </div>
          </div>
          <div className="w-1/5">
            <h1 className="font-semibold text-md text-start">Descubra</h1>
            <div className="mt-5">
              <a href="#" className="font-medium text-md text-start text-black/50 ">Cadastre sua cantina</a>
            </div>
            <div className="mt-5">
              <a href="/Login" className="font-medium text-md text-start text-black/50 ">Conheca nosso app mobile</a>
            </div>
          </div>
          <div className="w-1/5 ">
            <h1 className="font-semibold text-md text-start">Social</h1>
            <div className="flex mt-5">
              <div className="mr-3">
                <IoLogoYoutube color="gray" font-size="1.5rem"/>
              </div>
              <div>
                <a href="/"><LuInstagram color="gray" font-size="1.5rem"/></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}