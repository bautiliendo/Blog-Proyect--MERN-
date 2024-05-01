import React from "react";
import { useState, useEffect } from "react";
import { Global } from "../../helpers/Global";
import { Peticion } from "../../helpers/Peticion";
import { List } from "./List";
import { useParams } from "react-router-dom";

export const Search = () => {
  const params = useParams();  
  const [articles, setArticles] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    getArticles();
  }, []);

  useEffect(() => {
    getArticles();
  }, [params]);

  const getArticles = async () => {
    
    const {data, cargando} = await Peticion(Global.url+"search/" +params.busqueda, "GET");

    if (data.status === "success") {
      setArticles(data.articlesFound);
    }else {
      setArticles([]);
    }

    setCargando(false)
  };

  return (
    <>
    {cargando ? "Cargando..." :
      articles.length >= 1 ? 
      <List articles={articles} setArticles={setArticles}/> 
      : <h1>No hay articulos</h1>
    }
    </>
  );
};
