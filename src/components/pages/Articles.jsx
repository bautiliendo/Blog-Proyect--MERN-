// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState, useEffect } from "react";
import { Global } from "../../helpers/Global";
import { Peticion } from "../../helpers/Peticion";
import { List } from "./List";


export const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    getArticles();
  }, []);

  const getArticles = async () => {
    
    const {data, cargando} = await Peticion(Global.url+"articles", "GET");

    if (data.status === "success") {
      setArticles(data.articles);
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
