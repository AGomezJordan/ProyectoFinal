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
            case "consultarUsuarios":
                $this->consultarUsuarios();
                break;
            case "consultarUsuario":
                $this->consultarUsuario();
                break;
            case "editarUsuario":
                $this->editarUsuario();
                break;
            case "desactivarUsuario":
                $this->desactivarUsuario();
                break;
            case "activarUsuario":
                $this->activarUsuario();
                break;
            case "filtrarUsuarios":
                $this->filtrarUsuarios();
                break;
            case "consultarLogs":
                $this->consultarLogs();
                break;
            case "filtrarLogs":
                $this->filtrarLogs();
                break;
            case "crearArticulo":
                $this->crearArticulo();
                break;
            case "consultarArticulos":
                $this->consultarArticulos();
                break;
            case "consultarArticulo":
                $this->consultarArticulo();
                break;
            case "consultarArticuloPublicado":
                $this->consultarArticuloPublicado();
                break;
            case "consultarArticuloEditar":
                $this->consultarArticuloEditar();
                break;
            case "eliminarArticulo":
                $this->eliminarArticulo();
                break;
            case "publicarArticulo":
                $this->publicarArticulo();
                break;
            case "despublicarArticulo":
                $this->despublicarArticulo();
                break;
            case 'filtrarArticulos':
                $this->filtrarArticulos();
                break;
            case 'editarArticulo':
                $this->editarArticulo();
                break;
            case 'crearCategoria':
                $this->crearCategoria();
                break;
            case 'consultarCategorias':
                $this->consultarCategorias();
                break;
            case 'consultarCategoria':
                $this->consultarCategoria();
                break;
            case 'editarCategoria':
                $this->editarCategoria();
                break;
            case 'eliminarCategoria':
                $this->eliminarCategoria();
                break;
            case 'crearNota':
                $this->crearNota();
                break;
            case 'consultarNotas':
                $this->consultarNotas();
                break;
            case 'consultarNota':
                $this->consultarNota();
                break;
            case 'consultarNotaEditar':
                $this->consultarNotaEditar();
                break;
            case 'eliminarNota':
                $this->eliminarNota();
                break;
            case 'editarNota':
                $this->editarNota();
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
                'data' => array(
                    'usuarioID' => $result['id'],
                    'tipo' => $result['tipo'],
                    'usuario' => $result['usuario']
                )
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
            if (isset($this->data['usuario'], $this->data['clave'], $this->data['nombre'], $this->data['ap1'],
                $this->data['ap2'], $this->data['tipo'], $this->data['telefono'])) {

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
            }else{
                echo '{"status":false, "mensaje": "Algo ha ido mal, reintentelo mas tarde"}';
            }
        }else{
            echo '{"status":false, "mensaje": "No tienes permisos"}';
        }
       }

   //CONSULTAR USUARIOS
    private function consultarUsuarios(){
        $valido = $this->cnn->comprobarValido($this->data['id']);
        if ($valido) {
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
        $valido = $this->cnn->comprobarAdmin($this->data['id']);
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

    //DESACRIVAR USUARIO
    private function desactivarUsuario(){
        $valido = $this->cnn->comprobarAdmin($this->data['id']);
        if ($valido){
            $result = $this->cnn->desactivarUsuario($this->data['usuarioID'], $this->data['id']);
            if ($result) {
                $token = array(
                    'status' => true,
                    'desactivado' => $result,

                );
                $jwt = JWT::encode($token, $this->key); //Generamos JWT
                $json = '{"status": true, "token":"' . $jwt . '"}'; //Lo enviamos a traves de un JSON
                echo $json;
            } else {
                $token = array(
                    'status' => true,
                    'desactivado' => false,
                );
                $jwt = JWT::encode($token, $this->key); //Generamos JWT
                $json = '{"status": true, "token":"' . $jwt . '"}'; //Lo enviamos a traves de un JSON
                echo $json;
            }
        }else{
            echo '{"status":false, "mensaje": "No tienes permisos"}';
        }
    }

    //ACRIVAR USUARIO
    private function activarUsuario(){
        $valido = $this->cnn->comprobarAdmin($this->data['id']);
        if ($valido){
            $result = $this->cnn->activarUsuario($this->data['usuarioID']);
            if ($result) {
                $token = array(
                    'status' => true,
                    'activado' => $result,

                );
                $jwt = JWT::encode($token, $this->key); //Generamos JWT
                $json = '{"status": true, "token":"' . $jwt . '"}'; //Lo enviamos a traves de un JSON
                echo $json;
            } else {
                $token = array(
                    'status' => true,
                    'activadp' => false,
                );
                $jwt = JWT::encode($token, $this->key); //Generamos JWT
                $json = '{"status": true, "token":"' . $jwt . '"}'; //Lo enviamos a traves de un JSON
                echo $json;
            }
        }else{
            echo '{"status":false, "mensaje": "No tienes permisos"}';
        }
    }

    //FILTRAR USUARIOS
    private function filtrarUsuarios(){
        $admin = $this->cnn->comprobarAdmin($this->data['id']);
        if ($admin){
            $result = $this->cnn->filtrarUsuarios($this->data['tipo'], $this->data['estado'], $this->data['fecha']);
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




    //FUNCIONES LOGS

    //CONSULTAR LOGS
    private function consultarLogs(){
        $admin = $this->cnn->comprobarAdmin($this->data['id']);
        if ($admin) {
            $result = $this->cnn->consultarLogs();
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

    //FILTRAR LOGS
    private function filtrarLogs(){
        $admin = $this->cnn->comprobarAdmin($this->data['id']);
        if ($admin) {
            $result = $this->cnn->filtrarLogs($this->data['usuario'], $this->data['fecha']);
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





    //FUNCIONES ARTICULO

    //CREAR ARTICULO
    private function crearArticulo(){
        $valido = $this->cnn->comprobarValido($this->data['id']);
        if ($valido) {

            if (isset($this->data['titular'], $this->data['subtitular'], $this->data['articulo'],
                $this->data['categoria'], $this->data['id'], $this->data['portada'])) {

                $result = $this->cnn->crearArticulos($this->data['titular'], $this->data['subtitular'], $this->data['articulo'], $this->data['portada'],
                    $this->data['categoria'], $this->data['id']);

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
            }else{
                echo '{"status":false, "mensaje": "Algo ha ido mal, reintentelo mas tarde"}';
            }
        }else{
            echo '{"status":false, "mensaje": "No tienes permisos"}';
        }
    }

    //CONSULTAR ARTICULOS
    private function consultarArticulos(){
        $result = $this->cnn->consultarArticulos();
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
    }

    //CONSULTAR ARTICULO
    private function consultarArticulo(){
        $result = $this->cnn->consultarArticulo($this->data['articuloID']);
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
    }

    //CONSULTAR ARTICULO PUBLICADO
    private function consultarArticuloPublicado(){
        $result = $this->cnn->consultarArticuloPublicado($this->data['articuloID']);
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
    }

    //CONSULTAR ARTICULO EDITAR
    private function consultarArticuloEditar(){
        $result = $this->cnn->consultarArticuloEditar($this->data['articuloID']);
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
    }

    //ELIMINAR ARTICULO
    private function eliminarArticulo(){
    $valido = $this->cnn->comprobarAdmin($this->data['id']);
    if ($valido){
        $result = $this->cnn->eliminarArticulo($this->data['articuloID']);
        if ($result) {
            $token = array(
                'status' => true,
                'eliminado' => $result,

            );
            $jwt = JWT::encode($token, $this->key); //Generamos JWT
            $json = '{"status": true, "token":"' . $jwt . '"}'; //Lo enviamos a traves de un JSON
            echo $json;
        } else {
            $token = array(
                'status' => true,
                'eliminado' => false,
            );
            $jwt = JWT::encode($token, $this->key); //Generamos JWT
            $json = '{"status": true, "token":"' . $jwt . '"}'; //Lo enviamos a traves de un JSON
            echo $json;
        }
    }else{
        echo '{"status":false, "mensaje": "No tienes permisos"}';
    }
}

    //PUBLICAR ARTICULO
    private function publicarArticulo(){
        $admin = $this->cnn->comprobarAdmin($this->data['id']);
        if ($admin){
            $result = $this->cnn->publicarArticulo($this->data['id'], $this->data['articuloID']);
            if ($result) {
                $token = array(
                    'status' => true,
                    'publicado' => $result,

                );
                $jwt = JWT::encode($token, $this->key); //Generamos JWT
                $json = '{"status": true, "token":"' . $jwt . '"}'; //Lo enviamos a traves de un JSON
                echo $json;
            } else {
                $token = array(
                    'status' => true,
                    'publicado' => false,
                );
                $jwt = JWT::encode($token, $this->key); //Generamos JWT
                $json = '{"status": true, "token":"' . $jwt . '"}'; //Lo enviamos a traves de un JSON
                echo $json;
            }
        }else{
            echo '{"status":false, "mensaje": "No tienes permisos"}';
        }
    }

    //DESPUBLICAR ARTICULO
    private function despublicarArticulo(){
        $admin = $this->cnn->comprobarAdmin($this->data['id']);
        if ($admin){
            $result = $this->cnn->despublicarArticulo( $this->data['articuloID']);
            if ($result) {
                $token = array(
                    'status' => true,
                    'despublicado' => $result,

                );
                $jwt = JWT::encode($token, $this->key); //Generamos JWT
                $json = '{"status": true, "token":"' . $jwt . '"}'; //Lo enviamos a traves de un JSON
                echo $json;
            } else {
                $token = array(
                    'status' => true,
                    'despublicado' => false,
                );
                $jwt = JWT::encode($token, $this->key); //Generamos JWT
                $json = '{"status": true, "token":"' . $jwt . '"}'; //Lo enviamos a traves de un JSON
                echo $json;
            }
        }else{
            echo '{"status":false, "mensaje": "No tienes permisos"}';
        }
    }

    //FILTRAR ARTICULOS
    private function filtrarArticulos(){
        $result = $this->cnn->filtrarArticulos($this->data['autor'], $this->data['fecha'], $this->data['categoria'], $this->data['estado']);
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
    }

    //EDITAR ARTICULO
    private function editarArticulo(){
        $valido = $this->cnn->comprobarValido($this->data['id']);
        if ($valido){
            $result = $this->cnn->editarArticulo($this->data['articuloID'], $this->data['titular'], $this->data['subtitular'],
                $this->data['articulo'], $this->data['categoria'], $this->data['id']);
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




    //FUNCIONES CATEGORIA

    //CREAR CATEGORIA
    private function crearCategoria(){
        $admin = $this->cnn->comprobarAdmin($this->data['id']);
        if ($admin) {

            if (isset($this->data['nombre'], $this->data['descripcion'])) {

                $result = $this->cnn->crearCategoria($this->data['nombre'], $this->data['descripcion']);

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
            }else{
                echo '{"status":false, "mensaje": "Algo ha ido mal, reintentelo mas tarde"}';
            }
        }else{
            echo '{"status":false, "mensaje": "No tienes permisos"}';
        }
    }

    //CONSULTAR CATEGORIAS
    private function consultarCategorias(){
        $result = $this->cnn->consultarCategorias($this->data['admin']);
        if ($result) {
            $token = array(
                'status' => true,
                'data' => $result
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
    }

    //CONSULTAR CATEGORIA
    private function consultarCategoria(){
        $admin = $this->cnn->comprobarAdmin($this->data['id']);
        if ($admin) {
            $result = $this->cnn->consultarCategoria($this->data['nombreID']);
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

    //EDITAR CATEGORIA
    private function editarCategoria(){
        $admin = $this->cnn->comprobarAdmin($this->data['id']);
        if ($admin){
            $result = $this->cnn->editarCategoria($this->data['nombreID'], $this->data['nombre'], $this->data['descripcion']);
            if ($result) {
                $token = array(
                    'status' => true,
                    'editada' => $result,

                );
                $jwt = JWT::encode($token, $this->key); //Generamos JWT
                $json = '{"status": true, "token":"' . $jwt . '"}'; //Lo enviamos a traves de un JSON
                echo $json;
            } else {
                $token = array(
                    'status' => true,
                    'editada' => false,

                );
                $jwt = JWT::encode($token, $this->key); //Generamos JWT
                $json = '{"status": true, "token":"' . $jwt . '"}'; //Lo enviamos a traves de un JSON
                echo $json;
            }
        }else{
            echo '{"status":false, "mensaje": "No tienes permisos"}';
        }
    }

    //ELIMINAR CATEGORIA
    private function eliminarCategoria(){
        $admin = $this->cnn->comprobarAdmin($this->data['id']);
        if ($admin){
            $result = $this->cnn->eliminarCategoria($this->data['nombreID']);
            if ($result) {
                $token = array(
                    'status' => true,
                    'eliminado' => $result,

                );
                $jwt = JWT::encode($token, $this->key); //Generamos JWT
                $json = '{"status": true, "token":"' . $jwt . '"}'; //Lo enviamos a traves de un JSON
                echo $json;
            } else {
                $token = array(
                    'status' => true,
                    'eliminado' => false,
                );
                $jwt = JWT::encode($token, $this->key); //Generamos JWT
                $json = '{"status": true, "token":"' . $jwt . '"}'; //Lo enviamos a traves de un JSON
                echo $json;
            }
        }else{
            echo '{"status":false, "mensaje": "No tienes permisos"}';
        }
    }



    //FUNCIONES NOTAS

    //CREAR NOTA
    private function crearNota(){
        $valido = $this->cnn->comprobarValido($this->data['id']);
        if ($valido) {

            if (isset($this->data['nombre'], $this->data['descripcion'])) {

                $result = $this->cnn->crearNota($this->data['id'], $this->data['nombre'], $this->data['descripcion']);

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
            }else{
                echo '{"status":false, "mensaje": "Algo ha ido mal, reintentelo mas tarde"}';
            }
        }else{
            echo '{"status":false, "mensaje": "No tienes permisos"}';
        }
    }

    //CONSULTAR NOTAS
    private function consultarNotas(){
        $valido = $this->cnn->comprobarValido($this->data['id']);
        if ($valido) {
            $result = $this->cnn->consultarNotas($this->data['id']);
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

    //CONSULTAR NOTA
    private function consultarNota(){
        $valido = $this->cnn->comprobarValido($this->data['id']);
        if ($valido) {
            $result = $this->cnn->consultarNota($this->data['id'], $this->data['notaID']);
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

    //CONSULTAR NOTA EDITAR
    private function consultarNotaEditar(){
        $valido = $this->cnn->comprobarValido($this->data['id']);
        if ($valido) {
            $result = $this->cnn->consultarNotaEditar($this->data['id'], $this->data['notaID']);
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

    //ELIMINAR NOTA
    private function eliminarNota(){
        $valido = $this->cnn->comprobarValido($this->data['id']);
        if ($valido){
            $result = $this->cnn->eliminarNota($this->data['id'], $this->data['notaID']);
            if ($result) {
                $token = array(
                    'status' => true,
                    'eliminado' => $result,

                );
                $jwt = JWT::encode($token, $this->key); //Generamos JWT
                $json = '{"status": true, "token":"' . $jwt . '"}'; //Lo enviamos a traves de un JSON
                echo $json;
            } else {
                $token = array(
                    'status' => true,
                    'eliminado' => false,
                );
                $jwt = JWT::encode($token, $this->key); //Generamos JWT
                $json = '{"status": true, "token":"' . $jwt . '"}'; //Lo enviamos a traves de un JSON
                echo $json;
            }
        }else{
            echo '{"status":false, "mensaje": "No tienes permisos"}';
        }
    }

    //EDITAR NOTA
    private function editarNota(){
        $valido = $this->cnn->comprobarValido($this->data['id']);
        if ($valido){
            $result = $this->cnn->editarNota($this->data['id'], $this->data['titulo'], $this->data['nota'], $this->data['notaID']);
            if ($result) {
                $token = array(
                    'status' => true,
                    'editada' => $result,

                );
                $jwt = JWT::encode($token, $this->key); //Generamos JWT
                $json = '{"status": true, "token":"' . $jwt . '"}'; //Lo enviamos a traves de un JSON
                echo $json;
            } else {
                $token = array(
                    'status' => true,
                    'editada' => false,

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