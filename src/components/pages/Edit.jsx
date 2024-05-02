// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState, useEffect } from "react";
import { useForm } from "../../hooks/useForm";
import { Peticion } from "../../helpers/Peticion";
import { Global } from "../../helpers/Global";
import { useParams } from "react-router-dom";

export const Edit = () => {
  const { form, sent, changed } = useForm({});
  const [result, setResult] = useState("notSend");
  const [article, setArticle] = useState({});
  const params = useParams();

  useEffect(() => {
    getArticle();
  }, []);

  const getArticle = async () => {
    
    const { data } = await Peticion(Global.url+"article/" + params.id, "GET");
 
    if (data.status === "success") {
      setArticle(data.article);
    }

  };

  const editArticle = async (e) => {
    e.preventDefault();
    //Recoger datos form
    let newArticle = form;
    //Guardar article en el backend
    const { data } = await Peticion(Global.url + "article/"+params.id, "PUT", newArticle);
    if (data.status === "success") {
      setResult("saved");
    } else {
      setResult("error");
    }
    
    //Subir imagen
    const fileInput = document.querySelector("#file");
    
    if (data.status === "success" && fileInput.files[0]) {
      setResult("saved");
  
      const formData = new FormData();
      formData.append("file0", fileInput.files[0]);

      const uploadResponse = await Peticion(Global.url + "upload-img/" + data.article._id,"POST",formData,true);
      if (uploadResponse.data.status === "success") {
        setResult("saved");
      } else {
        setResult("error");
      }
      console.log(uploadResponse) 
    }
  };

  return (
    <div className="jumbo">
      <h1>Editar articulo</h1>
      <p>Formulario para editar {article.title}</p>

      <strong>
        {result == "saved" ? "Articulo guardado con exito !!" : ""}
      </strong>
      <strong>
        {result == "error" ? "Los datos proporcionados son incorrectos" : ""}
      </strong>

      {/*Montar form */}
      <form className="formulario" onSubmit={editArticle}>
        <div className="form-group">
          <label>Titulo</label>
          <input type="text" name="title" onChange={changed} defaultValue={article.title}/>
        </div>

        <div className="form-group">
          <label>Contenido</label>
          <input type="text" name="content" onChange={changed} defaultValue={article.content}/>
        </div>

        <div className="form-group">
          <label>Imagen</label>
          <div className="mascara">
            {article.image && article.image !== "default.png" && <img src={Global.url + "imagen/" + article.image} alt={article.title}/>}
            {article.image == "default.png" && <img src="https://imgs.search.brave.com/nQFdkbBtRdnUMRLD2d-iV4y7HK1t3zxB6np9jevVV2Y/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9kZXNh/cnJvbGxvd2ViLmNv/bS9zdG9yYWdlL3Rh/Z19pbWFnZXMvYWN0/dWFsLzNCcFVEQnND/M29mQnk0dG9yVDFa/aVVGNmhkb25xcFJI/ODQxTWVNRE0ucG5n" alt="Default Image" />}
        </div>
          <input type="file" name="file0" id="file" />
        </div>

        <input type="submit" value="Guardar" className="btn btn-success" />
      </form>
    </div>
  );
};
