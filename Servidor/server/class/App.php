<?php
require_once "BBDD.php";
use \Firebase\JWT\JWT;

//Incluir todos los .php necesarios de la libreria
foreach ( glob(  './php-jwt-master/src/*.php') as $filename)
{
    require_once $filename;
}

class App
{
    private $cnn;
    private $data;
    private $key ="Alvaro1234@asdfgh";

    function __construct($func, $data){
        $this->cnn= new BBDD();
        $this->data = $data;
        switch ($func){
            case "login":
                $this->login();
                break;

        }
    }

    //FUNCIONES USUARIO
    private function login(){
        $result = $this->cnn->validarUsuario($this->data['usuario'], $this->data['clave']);
        if ($result){
            $token = array(
                'status' => true,
                'login'=> true,
                'data' => [
                    'usuarioID' => $result['id'],
                    'tipo' => $result['tipo']
                ]
            );
            $jwt = JWT::encode($token, $this->key); //Generamos JWT
            $json = '{"status": true, "token":"'.$jwt.'"}'; //Lo enviamos a traves de un JSON
            echo $json;
        }else{
            $token = array(
                'status' => true,
                'login'=> false,
                'mensaje' => "Usuario o contraseña Incorrecto"
            );
            $jwt = JWT::encode($token, $this->key); //Generamos JWT
            $json = '{"status": true, "token":"'.$jwt.'"}'; //Lo enviamos a traves de un JSON
            echo $json;
        }
       }

}