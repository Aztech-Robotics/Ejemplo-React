import "./App.css";
import Mensaje from "./components/Mensaje";
import Formulario from "./components/Formulario";
import Imagen from "./components/Imagen";
import form from "./components/form";

function App() {
	return (
		
		<div className='App'>
			<header className='App-header'>
				<Imagen />
				<Mensaje nombre='Victoria'>
					<h2>¡¡¡Bienvenida!!!</h2>
				</Mensaje>
				<Formulario responda='Por favor responda el formulario'></Formulario>
				
		</header>
		</div>
	);
}

export default App;
