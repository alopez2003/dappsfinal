// Version de solidity del Smart Contract
// SPDX-License-Identifier: MIT

pragma solidity >=0.4.22 <0.9.0;

// Informacion del Smart Contract
// Nombre: Integridad
// Logica: Permite escribir inicialmente en la blockchain un nuevo hash cada que un archivo es subido/eliminado/modificado con el hash del activo

// Declaracion del Smart Contract - Auction
contract Integrity {

    // ----------- Variables (datos) -----------
    // Información del estado del archivo
    string private description;
    string public a_hash;
    address public a_updater;
    uint256 private createdTime;
    string public a_file;
    string public a_name;

    // ----------- Constructor -----------
    // Uso: Inicializa el Smart Contract - Archivo inicial de carga
    constructor() public {
        
        // Inicializo el valor a las variables (datos)
        description = "Por favor introduce el hash arrojado por el alta o modificacion del archivo que cargaste";
        createdTime = block.timestamp;
        a_name = "Alberto Lopez";
        a_file = "prueba1.txt";
        a_hash = "0x12121212";
        a_updater = msg.sender;
        
    }
    
    // ------------ Funciones que modifican datos (set) ------------

    // Funcion
    // Nombre: hash_update
    // Uso:    Permite colocar el valor del hash derivado de alguna modificación a algun archivo para validar su integridad y dejarlo como rastro dentro de la blockchain

    function hash_update(string memory newhash, string memory file, string memory name) public {

//                // Actualiza el hash
                a_updater = msg.sender;
                a_name = name;
                a_file = file;
                a_hash = newhash;
                
    }

   
    // ------------ Funciones que consultan datos (get) ------------

    // Funcion
    // Nombre: getIntegrityInfo
    // Logica: Consulta los generales del contrato
    function getIntegrityInfo() public view returns (string memory, uint){
        return (description, createdTime);
    }

    // Funcion
    // Nombre: hash_verify
    // Logica: Consulta el valor del hash
    function hash_verify() public view returns (string memory){
        return (a_hash);
    }

    // Funcion
    // Nombre: updater
    // Logica: Consulta quien fue quien actualizo el hash
    function updater() public view returns (address){
        return (a_updater);
    }
    

        // Funcion
    // Nombre: file
    // Logica: Consulta cual fue el archivo actualizado
    function filer() public view returns (string memory){
        return (a_file);
    }

        // Funcion
    // Nombre: name
    // Logica: Consulta quien fue quien actualizo el hash
    function namer() public view returns (string memory){
        return (a_name);
    }
}
