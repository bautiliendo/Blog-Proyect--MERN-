import { useState } from "react";

export const useForm = (initObjext = {}) => {
    const [form, setForm] = useState(initObjext);

    const serializarFormulario = (form) => {

        const formData = new FormData(form);

        const fullObject = {};

        for(let [name, value] of formData) {
            fullObject[name] = value
        }
        return fullObject
    }

    const sent = (e) => {
        e.preventDefault();

        let curso = serializarFormulario(e.target);

        setForm(curso);
        
        document.querySelector(".codigo").classList.add("enviado")
    }

    const changed = ({target}) => {
        const {name, value} = target;

        setForm({
            ...form,
            [name]: value
        });
    }
    return {
        form,
        sent,
        changed
    }
};