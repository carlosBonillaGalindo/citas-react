const Paciente = () => {
    return(
        <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
                <span className="font-normal normal-case">Hook</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
                <span className="font-normal normal-case">Carlos</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Emial: {''}
                <span className="font-normal normal-case">carlos@correo.com</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Alta: {''}
                <span className="font-normal normal-case">26 de Diciembre </span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas: {''}
                <span className="font-normal normal-case">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quaerat architecto numquam possimus officiis cupiditate minima, expedita qui distinctio magni rem minus delectus officia molestias sequi a quam ipsam voluptatum?</span>
            </p>
        </div>
    )
}

export default Paciente;