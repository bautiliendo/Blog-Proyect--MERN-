// eslint-disable-next-line no-unused-vars
import React from 'react'

export const Sidebar = () => {
  return (
    <aside className="lateral">
            <div className="search">
                <h3 className="title">Buscador</h3>
                <form>
                    <input type="text" />
                    <button>Buscar</button>
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
