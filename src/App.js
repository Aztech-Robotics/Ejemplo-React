import "./App.css";
import Mensaje from "./components/Mensaje";
import Formulario from "./components/Formulario";
import Imagen from "./components/Imagen";
function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Imagen />
				<Mensaje nombre="Victoria">
          <h2>¡¡¡Bienvenida!!!</h2>
        </Mensaje>
				<Formulario />
			</header>
		</div>
	);
}

export default App;
