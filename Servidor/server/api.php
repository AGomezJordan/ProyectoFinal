<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

use \Firebase\JWT\JWT;
include_once "class/App.php";

//Incluir todos los .php necesarios de la libreria
foreach ( glob(  './php-jwt-master/src/*.php') as $filename)
{
    require_once $filename;
}

//tratar datos

if(isset($_REQUEST['jwt'])){
    $DATA = [];
    $key = "Alvaro1234@asdfgh"; //Clave privada

    try {//Manejamos errores

        //Decodificamos token, si la firma no fuera valida generaria una excepcion
        $decoded= JWT::decode($_REQUEST['jwt'], $key, array('HS256'));

        if (isset($decoded)){ //Si el token es valido
            $func = $decoded->func;
            switch ($func) {

                //INICIAR SESION
                case 'login':
                    if (isset($decoded->usuario) && isset($decoded->clave)){
                        $data['usuario']=$decoded->usuario;
                        $data['clave']=$decoded->clave;
                        new App($func, $data);
                    }else{
                        throw new Exception();
                    }
                    break;

                //OBTENER TWEETS
                case 'tweets':
                    include_once 'twitter/getTweets.php';
                    break;

                //CREAR USUARIO
                case 'crearUsuario':
                    if (isset($decoded->usuario, $decoded->clave, $decoded->nombre, $decoded->ap1, $decoded->ap2, $decoded->tipo, $decoded->telefono, $decoded->id)){
                        $data['usuario']= $decoded->usuario;
                        $data['clave']= $decoded->clave;
                        $data['nombre']= $decoded->nombre;
                        $data['ap1']= $decoded->ap1;
                        $data['ap2']= $decoded->ap2;
                        $data['tipo']= $decoded->tipo;
                        $data['telefono']= $decoded->telefono;
                        $data['id'] = $decoded->id;

                        new App($func, $data);
                    }else{
                        throw new Exception();
                    }
                    break;

                //CONSULTAR USUARIO
                case 'consultarLogs':
                case 'consultarUsuarios':
                    if (isset($decoded->id)){
                        $data['id'] = $decoded->id;
                        new App($func, $data);
                    }else{
                        throw new Exception();
                    }

                    break;


                case 'activarUsuario':
                case 'desactivarUsuario':
                case 'consultarUsuario':
                    if (isset($decoded->id, $decoded->usuarioID)){
                        $data['id'] = $decoded->id;
                        $data['usuarioID'] = $decoded->usuarioID;
                        new App($func, $data);
                    }else{
                        throw new Exception();
                    }

                    break;

                //EDITAR USURIO
                case 'editarUsuario':
                    if (isset($decoded->id) && isset($decoded->tipo) && isset($decoded->usuarioID) && isset($decoded->clave) && isset($decoded->telefono)){
                        $data['id'] = $decoded->id;
                        $data['usuarioID'] = $decoded->usuarioID;
                        $data['tipo'] = $decoded->tipo;
                        $data['clave'] = $decoded->clave;
                        $data['telefono'] = $decoded->telefono;
                        new App($func, $data);
                    }else{
                        throw new Exception();
                    }
                    break;

                case 'filtrarUsuarios':
                    if(isset($decoded->id, $decoded->tipo, $decoded->estado, $decoded->fecha)){
                        $data['id']=$decoded->id;
                        $data['tipo']=$decoded->tipo;
                        $data['estado']=$decoded->estado;
                        $data['fecha']=$decoded->fecha;
                        new App($func, $data);
                    }else{
                        throw new Exception();
                    }
                    break;
                case 'filtrarLogs':
                    if(isset($decoded->id, $decoded->usuario, $decoded->fecha)){
                        $data['id']=$decoded->id;
                        $data['usuario']=$decoded->usuario;
                        $data['fecha']=$decoded->fecha;
                        new App($func, $data);
                    }else{
                        throw new Exception();
                    }
                    break;
                case 'crearArticulo':
                    if(isset($decoded->titular, $decoded->subtitular, $decoded->articulo, $decoded->categoria, $decoded->id, $_FILES['portada'])){

                        $data['titular'] = $decoded->titular;
                        $data['subtitular'] = $decoded->subtitular;
                        $data['articulo'] = $decoded->articulo;
                        $data['categoria'] = $decoded->categoria;
                        $data['id'] = $decoded->id;
                        $data['portada'] = $_FILES['portada'];

                        new App($func, $data);
                        break;
                    }else{
                        throw new Exception();
                    }
                case 'consultarArticulos':
                    new App($func, null);
                    break;
                case 'consultarArticuloEditar':
                case 'consultarArticulo':
                    if(isset($decoded->articuloID)){
                        $data['articuloID'] = $decoded->articuloID;
                        new App($func, $data);
                    }else{
                        throw new Exception();
                    }
                    break;

                case 'despublicarArticulo':
                case 'publicarArticulo':
                case 'eliminarArticulo':
                    if(isset($decoded->id,$decoded->articuloID)){
                        $data['id'] = $decoded->id;
                        $data['articuloID'] = $decoded->articuloID;
                        new App($func, $data);
                    }else{
                        throw new Exception();
                    }
                    break;
                case 'filtrarArticulos':
                    if(isset($decoded->id, $decoded->autor, $decoded->fecha, $decoded->categoria, $decoded->estado)){
                        $data['id']=$decoded->id;
                        $data['autor']=$decoded->autor;
                        $data['fecha']=$decoded->fecha;
                        $data['categoria']=$decoded->categoria;
                        $data['estado']=$decoded->estado;
                        new App($func, $data);
                    }else{
                        throw new Exception();
                    }
                    break;
                case 'editarArticulo':
                    if(isset($decoded->id, $decoded->articuloID, $decoded->titular, $decoded->subtitular, $decoded->categoria, $decoded->articulo)){
                        $data['id']=$decoded->id;
                        $data['articuloID']=$decoded->articuloID;
                        $data['titular']=$decoded->titular;
                        $data['subtitular']=$decoded->subtitular;
                        $data['categoria']=$decoded->categoria;
                        $data['articulo']=$decoded->articulo;
                        new App($func, $data);
                    }else{
                        throw new Exception();
                    }
                    break;
            }
        }

    }catch (\Firebase\JWT\ExpiredException $e){
        $json = '{"status": false,"mensaje":"Token caducadoºº"}';
        echo $json;
    }catch (\Firebase\JWT\BeforeValidException $e){
        $json = '{"status": false,"mensaje":"Before Valid"}';
        echo $json;
    }catch (\Firebase\JWT\SignatureInvalidException $e) {
        $json = '{"status": false,"mensaje":"Datos posiblemente corruptos"}';
        echo $json;
    }catch (Exception $e){ //Si los datos estuvieran corruptos
        $json = '{"status": false,"mensaje":"Ha surguido un problema"}';
        echo $json;
    }
}else{
    echo '{"status": false, "mensaje": "JWT no recibido"}';
}