function landMass(country, area) {
    //Implementación
    const totalarea = 148940000;
    const porcentaje = (area*100)/totalarea;
    const redondeado = Math.round(porcentaje*100)/100;
    const result = {
        "percent": '',
        "message": ''
    }
    result.percent=redondeado;
    result.message=`${country} representa el ${redondeado}% de la masa de la tierra`;
    return result;
}
module.exports = landMass;