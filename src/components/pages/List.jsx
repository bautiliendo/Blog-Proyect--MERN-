// eslint-disable-next-line no-unused-vars
import React from "react";
import { Global } from "../../helpers/Global";
import { Peticion } from "../../helpers/Peticion";

export const List = ({articles, setArticles}) => {

  const deleteArticle = async(id) => {
    let { data } = await Peticion(Global.url+"article/"+id, "DELETE"); 
    
    if(data.status === "success"){
      let newArticles = articles.filter(article => article._id !== id);
      setArticles(newArticles);
    }
  }

  return (
    articles.map((article) => {
        return (
          <article key={article._id} className="articulo-item">
            <div className="mascara">
            {article.image && article.image !== "default.png" && <img src={Global.url + "imagen/" + article.image} alt={article.title}/>}
            {!article.image && <img src="https://imgs.search.brave.com/nQFdkbBtRdnUMRLD2d-iV4y7HK1t3zxB6np9jevVV2Y/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9kZXNh/cnJvbGxvd2ViLmNv/bS9zdG9yYWdlL3Rh/Z19pbWFnZXMvYWN0/dWFsLzNCcFVEQnND/M29mQnk0dG9yVDFa/aVVGNmhkb25xcFJI/ODQxTWVNRE0ucG5n" alt="Default Image" />}
            </div>
            <div className="datos"></div>
            <h3 className="title">{article.title}</h3>
            <p className="description">{article.content}</p>
            <button className="edit">Editar</button>
            <button className="delete" onClick={() => {
              deleteArticle(article._id)
            }}>Borrar</button>
          </article>
        );
      })
  )
}
