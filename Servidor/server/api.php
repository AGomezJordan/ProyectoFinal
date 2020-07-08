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
                    if (isset($decoded->usuario) && isset($decoded->clave) && isset($decoded->nombre) && isset($decoded->ap1)
                        && isset($decoded->ap2)&& isset($decoded->tipo)&& isset($decoded->telefono)){
                        $data['usuario']= $decoded->usuario;
                        $data['clave']= $decoded->clave;
                        $data['nombre']= $decoded->nombre;
                        $data['ap1']= $decoded->ap1;
                        $data['ap2']= $decoded->ap2;
                        $data['tipo']= $decoded->tipo;
                        $data['telefono']= $decoded->telefono;

                        new App($func, $data);
                    }else{
                        throw new Exception();
                    }
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