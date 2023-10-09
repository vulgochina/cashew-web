import { Link} from 'react-router-dom' 
export default function Login() {
  return (
    <div className="h-screen flex">
        <div className="w-1/2 h-full bg-cover bg-center flex justify-center items-center flex-col snap-none
        bg-[url('https://img.freepik.com/fotos-gratis/chef-masculino-cozinhando-na-cozinha_23-2148934695.jpg?w=740&t=st=1696822177~exp=1696822777~hmac=0a9813c5f10e8322dd1f8a94aee5cb621cc0a02583a66bf8219cd93be432b9ba')]">
            <h1></h1>
        </div>
        <div className="w-1/2 h-full flex justify-center items-center flex-col snap-y">
            <img src="https://cdn.pixabay.com/photo/2016/09/30/04/39/cashew-1704447_960_720.png" alt=""  className="h-20 rotate-45 mt-5 "/>
            <h1 className='font-bold text-5xl text-orange-500 mt-5'>Cashew</h1>
            <div className="bg-white rounded-lg p-5 flex flex-col justify-center  w-[32rem]">
                <h1 className="font-semibold text-3xl mt-10">Conecte-se agora</h1>
                <h2 className="font-medium text-md text-gray-400">Entre e comece a gerenciar sua cantina</h2>
                <h2 className="font-medium text-lg mt-7">E-mail</h2>
                <input type="email" name="email" id="email" className="border-2 border-gray-200 rounded-md focus:border-orange-500 focus:outline-none py-3 px-2 font-medium mt-1 w-full" />
                <h2 className="font-medium text-lg mt-7">Senha</h2>
                <input type="password" name="password" id="password" className="border-2 border-gray-200 rounded-md focus:border-orange-500 focus:outline-none py-3 px-2 font-medium mt-1 w-full" />
                <div className='flex items-end justify-end'>
                    <button className='text-end text-sm mt-1 font-medium text-black/50 hover:text-orange-400'>Esqueceu a senha?</button>
                </div>
                <button className="rounded-md bg-orange-500 w-full py-3 px-2 font-bold text-lg text-white mt-16 hover:bg-orange-400">Entrar</button>
                <p className="text-center w-full mt-2">Ja possui uma conta? <button className="text-orange-500 font-medium hover:text-orange-400"><Link to="/">Cadastre-se agora</Link></button></p>
            </div>
            
        </div>
    </div>
  )
}