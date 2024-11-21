import React from "react";

const Aside = () => {
    return (
        <div className="aside">
            <form>
                <input type="text" placeholder="Añadir tarea" />
                <textarea placeholder="Descripción de la tarea"></textarea>
                <input type="submit" value="Guardar" />
            </form>
        </div>
    );
};

export default Aside;