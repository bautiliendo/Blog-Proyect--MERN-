// eslint-disable-next-line no-unused-vars
import React from "react";
import {useState} from "react";
import { useForm } from "../../hooks/useForm";
import { Peticion } from "../../helpers/Peticion";
import { Global } from "../../helpers/Global";

export const Create = () => {

  const {form, sent , changed} = useForm({});
  const [result, setResult] = useState("notSend")

  const saveArticle = async (e) => {
    e.preventDefault();

    //Recoger datos form
    let newArticle = form;

    //Guardar article en el backend
    const {data} = await Peticion(Global.url+"create", "POST", newArticle);
    console.log(data)
    if (data.status === "success") {
      setResult("saved")
      //Subir img
      const fileInput = document.querySelector("#file");

      const formData = new FormData();
      formData.append('file0', fileInput.files[0]);

      const {upload} = await Peticion(Global.url+"upload-img/"+data.article._id, "POST", formData, true);
      console.log(upload)
      if(upload.status === "success"){
        setResult("saved")
      } else{
        setResult("error");
      }
    } 
    else {
      setResult("error")

    }
    console.log(data)
  }
  


  return (
    <div className="jumbo">
      <h1>Crear articulo</h1>
      <p>Formulario para crear articulo</p>
      
      <strong>{result == "saved" ? "Articulo guardado con exito !!" : ""}</strong>
      <strong>{result == "error" ? "Los datos proporcionados son incorrectos" : ""}</strong>

      {/*Montar form */}
      <form className="formulario" onSubmit={saveArticle}>

        <div className="form-group">
          <label>Titulo</label>
          <input type="text" name="title" onChange={changed}/>
        </div>

        <div className="form-group">
          <label>Contenido</label>
          <input type="text" name="content" onChange={changed}/>
        </div>

        <div className="form-group">
          <label>Imagen</label>
          <input type="file" name="file0" id="file" />
        </div>

        <input type="submit" value="Guardar" className="btn btn-success" />
      </form>
    </div>
  );
};
