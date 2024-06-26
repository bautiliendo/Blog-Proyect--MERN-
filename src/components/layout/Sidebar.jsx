// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const Sidebar = () => {
    const navigate = useNavigate();
    const [search, setSearch] = useState("");

    const startSearch = (e) => {
        e.preventDefault();
        let mySearch = e.target.search_field.value;
        navigate("/search/" + mySearch, {replace: true})
    };

  return (
    <aside className="lateral">
            <div className="search">
                <h3 className="title">Buscador</h3>
                <form onSubmit={startSearch}>
                    <input type="text" name="search_field" />
                    <input type="submit" id="search" value="Buscar"/>
                </form>
            </div>
            {/* <div className="add">
                <h3 className="title">Añadir Pelicula</h3>
                <form>
                    <input type="text" placeholder="Titulo" />
                    <textarea placeholder="Descripcion"></textarea>
                    <input type="submit" value="Guardar" />
                </form>
            </div> */}
        </aside>
  )
}
