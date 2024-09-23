import axios from "axios";

const api = 'https://servidor1.store:8080/api/auth';

const setCookie = (name: string, value: string, days: number) => {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
};

const login = (username: string, password: string) => {
    axios.post(api, { username, password })
        .then((response) => {

            console.log(response);
            if (response.data == 'user') alert('usuario no encontrado');
            else if (response.data == 'password') alert('contraseña invalida');
            else setCookie("jwt", response.data, 100);

        })
        .catch((error) => {
            alert("Error")
            console.log(error);
        });
}

function Login() {

    return (
        <div className="flex h-screen w-screen bg-gray-100 flex-row justify-center items-center">
            <form className="flex flex-col bg-white p-5 rounded-2xl shadow w-11/12 py-12 sm:w-1/3">
                <h3 className="text-center font-medium text-2xl mb-5">Iniciar sesión</h3>
                <span className="text-xl font-semibold">Usuario:</span>
                <input id="username" className="border border-zinc-700 rounded-md px-1 py-[2px] mt-2 mb-6" type="text" />
                <span className="text-xl font-semibold">Contraseña</span>
                <input id="password" className="border border-zinc-700 rounded-md px-1 py-[2px] mt-2 mb-6" type="password" />

                <div
                    onClick={() => {
                        const usernameInput = document.getElementById('username') as HTMLInputElement | null;
                        const passwordInput = document.getElementById('password') as HTMLInputElement | null;

                        if (usernameInput && passwordInput) {
                            login(usernameInput.value, passwordInput.value);
                        } else {
                            console.error('No se encontraron los elementos de entrada');
                        }
                    }}
                    className="bg-zinc-950 rounded-md text-white text-center py-1.5"
                >
                    Enviar
                </div>

            </form>
        </div>
    )
}

export default Login