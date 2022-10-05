export const Formulario=(props)=>{
return(
    <div>
        {props.responda}
        
        <form>
            <label>Nombre</label>
            <input type="text"></input>
            <br />
                     <br />
            <label>Apellido</label>
            <input type="text"></input>
        </form>
    </div>
)
}
export default Formulario;
