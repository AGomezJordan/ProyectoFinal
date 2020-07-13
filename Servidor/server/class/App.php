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
            case "crearUsuario":
                $this->crearUsuario();
                break;
            case "consultarUsuarios";
                $this->consultarUsuarios();
                break;
            case "consultarUsuario";
                $this->consultarUsuario();
                break;
            case "editarUsuario";
                $this->editarUsuario();
                break;

        }
    }

    //FUNCIONES USUARIO

    //INICIAR SESION
    private function login(){
        $result = $this->cnn->validarUsuario($this->data['usuario'], $this->data['clave']);
        if ($result){
            $this->cnn->addLog($result['usuario']);
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

   //CREAR USUARIO
    private function crearUsuario(){
        $admin = $this->cnn->comprobarAdmin($this->data['id']);
        if ($admin) {
            if (isset($this->data['usuario']) && isset($this->data['clave']) && isset($this->data['nombre']) && isset($this->data['ap1'])
                && isset($this->data['ap2']) && isset($this->data['tipo']) && isset($this->data['telefono'])) {
                $result = $this->cnn->crearUsuario($this->data['usuario'], $this->data['clave'], $this->data['nombre'], $this->data['ap1'],
                    $this->data['ap2'], $this->data['tipo'], $this->data['telefono']);

                if ($result) {
                    $token = array(
                        'status' => true,
                        'creado' => true,

                    );
                    $jwt = JWT::encode($token, $this->key); //Generamos JWT
                    $json = '{"status": true, "token":"' . $jwt . '"}'; //Lo enviamos a traves de un JSON
                    echo $json;
                } else {
                    $token = array(
                        'status' => true,
                        'creado' => false,

                    );
                    $jwt = JWT::encode($token, $this->key); //Generamos JWT
                    $json = '{"status": true, "token":"' . $jwt . '"}'; //Lo enviamos a traves de un JSON
                    echo $json;
                }
            }
        }else{
            echo '{"status":false, "mensaje": "No tienes permisos"}';
        }
       }

   //CONSULTAR USUARIOS
    private function consultarUsuarios(){
        $admin = $this->cnn->comprobarAdmin($this->data['id']);
        if ($admin) {
            $result = $this->cnn->consultarUsuarios();
            if ($result) {
                $token = array(
                    'status' => true,
                    'data' => $result,

                );
                $jwt = JWT::encode($token, $this->key); //Generamos JWT
                $json = '{"status": true, "token":"' . $jwt . '"}'; //Lo enviamos a traves de un JSON
                echo $json;
            } else {
                $token = array(
                    'status' => true,
                    'data' => false,

                );
                $jwt = JWT::encode($token, $this->key); //Generamos JWT
                $json = '{"status": true, "token":"' . $jwt . '"}'; //Lo enviamos a traves de un JSON
                echo $json;
            }
        }else{
            echo '{"status":false, "mensaje": "No tienes permisos"}';
        }
    }

    //CONSULTAR USUARIO
    private function consultarUsuario(){
        $valido = $this->cnn->comprobarValido($this->data['id']);
        if ($valido){
            $result = $this->cnn->consultarUsuario($this->data['usuarioID']);
            if ($result) {
                $token = array(
                    'status' => true,
                    'data' => $result,

                );
                $jwt = JWT::encode($token, $this->key); //Generamos JWT
                $json = '{"status": true, "token":"' . $jwt . '"}'; //Lo enviamos a traves de un JSON
                echo $json;
            } else {
                $token = array(
                    'status' => true,
                    'data' => false,

                );
                $jwt = JWT::encode($token, $this->key); //Generamos JWT
                $json = '{"status": true, "token":"' . $jwt . '"}'; //Lo enviamos a traves de un JSON
                echo $json;
            }
        }else{
            echo '{"status":false, "mensaje": "No tienes permisos"}';
        }
    }

    //EDITAR USUARIO
    private function editarUsuario(){
        $valido = $this->cnn->comprobarValido($this->data['id']);
        if ($valido){
            $result = $this->cnn->editarUsuario($this->data['usuarioID'], $this->data['tipo'], $this->data['clave'], $this->data['telefono']);
            if ($result) {
                $token = array(
                    'status' => true,
                    'editado' => $result,

                );
                $jwt = JWT::encode($token, $this->key); //Generamos JWT
                $json = '{"status": true, "token":"' . $jwt . '"}'; //Lo enviamos a traves de un JSON
                echo $json;
            } else {
                $token = array(
                    'status' => true,
                    'editado' => false,

                );
                $jwt = JWT::encode($token, $this->key); //Generamos JWT
                $json = '{"status": true, "token":"' . $jwt . '"}'; //Lo enviamos a traves de un JSON
                echo $json;
            }
        }else{
            echo '{"status":false, "mensaje": "No tienes permisos"}';
        }
    }
}