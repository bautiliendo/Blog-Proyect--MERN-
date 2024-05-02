// eslint-disable-next-line no-unused-vars
import React from "react";
import { useParams } from 'react-router-dom'
import { useState, useEffect } from "react";
import { Global } from "../../helpers/Global";
import { Peticion } from "../../helpers/Peticion";
import { List } from "./List";


export const Article = () => {
  const [article, setArticle] = useState({});
  const [cargando, setCargando] = useState(true);
  const params = useParams();

  useEffect(() => {
    getArticle();
  }, []);

  const getArticle = async () => {
    
    const {data, cargando} = await Peticion(Global.url+"article/" + params.id, "GET");

    if (data.status === "success") {
      setArticle(data.article);
    }

    setCargando(false)
  };

  return (
    <div className="jumbo">
    {cargando ? "Cargando..." : 
        <>
        <div className="mascara">
            {article.image && article.image !== "default.png" && <img src={Global.url + "imagen/" + article.image} alt={article.title}/>}
            {article.image == "default.png" && <img src="https://imgs.search.brave.com/nQFdkbBtRdnUMRLD2d-iV4y7HK1t3zxB6np9jevVV2Y/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9kZXNh/cnJvbGxvd2ViLmNv/bS9zdG9yYWdlL3Rh/Z19pbWFnZXMvYWN0/dWFsLzNCcFVEQnND/M29mQnk0dG9yVDFa/aVVGNmhkb25xcFJI/ODQxTWVNRE0ucG5n" alt="Default Image" />}
        </div>
        <h1>{article.title}</h1>
        <span>{article.date}</span>
        <p>{article.content}</p>
        </>
    }
    </div>
  );
};
