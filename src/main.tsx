import { ReactElement, StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import Login from './Login.tsx'
import './index.css'

// const RootComponent = () => {
//   const [AppFunction, setApp] = useState<ReactElement>(<App />);

//   // Obtener la cookie que contiene el JWT
//   const jwtCookie = getCookie('jwt');
//   console.log(jwtCookie);

//   // Cambiar el componente si se encuentra el JWT
//   if (jwtCookie) setApp(<Login />);

//   return <AppFunction />;
// };

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
