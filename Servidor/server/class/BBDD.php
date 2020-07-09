<?php /** @noinspection ALL */


class BBDD
{
    //ATRIBUTOS
    private $HOST="localhost";
    private $US="root";
    private $PW="";
    private $NOMBRE="infored";
    private $cnn;

    //CONSTRUCTOR Y DESTRUCTOR
    function __construct(){
        @$this->cnn = new mysqli($this->HOST, $this->US, $this->PW, $this->NOMBRE);
        $this->cnn->query("SET NAMES 'utf8'");
    }

    function __destruct()
    {
        $this->cnn=null;
    }

    //FUNCIONES USUARIO

    //Validamos un usuario
    function validarUsuario($usuario, $clave){
        //Eliminar caracteres que puedan causar problema
        $usuario = addslashes(trim(strip_tags($usuario)));
        $clave = addslashes(trim(strip_tags($clave)));
        //

        $result = '';
        for($i=0; $i<strlen($clave); $i++) {
            $char = substr($clave, $i, 1);
            $keychar = substr('Alvaro@1234', ($i % strlen('Alvaro@1234'))-1, 1);
            $char = chr(ord($char)+ord($keychar));
            $result.=$char;
        }
        $clave = base64_encode($result);

        try {
            $rt = false;
            $sql = "SELECT usuario, id, tipo from usuarios where usuario='$usuario' and clave = '$clave' and valido = 1";
            $result = $this->cnn->query($sql);
            if ($result)
                $rt = $result->fetch_assoc();

        }
        catch(Exception $e){
            $rt = false;
        }
        return $rt;
    }

    //AÑADIR LOG
    function addLog($usuario){
        $rt = false;

        $sql = "select max(id) as id from logs";
        $result = $this->cnn->query($sql);
        if ($result->num_rows === 1){
            $id = $result->fetch_assoc()['id'];
        }else{
            $id = 0;
        }

        $id++;
        $sql = "insert into logs values ($id, '$usuario', now())";
        $this->cnn->query($sql);
    }

    //Creamos un usuario
    function crearUsuario($usuario, $clave, $nombre, $ap1, $ap2, $tipo, $telefono){
        //Eliminar caracteres que puedan causar problema
        $usuario = addslashes(trim(strip_tags($usuario)));
        $clave = addslashes(trim(strip_tags($clave)));
        $nombre = addslashes(trim(strip_tags($nombre)));
        $ap1 = addslashes(trim(strip_tags($ap1)));
        $ap2 = addslashes(trim(strip_tags($ap2)));
        $tipo = addslashes(trim(strip_tags($tipo)));
        $telefono = addslashes(trim(strip_tags($telefono)));
        //

        //Generar ID y encriptar clave
        $encriptar = $usuario.$clave.$nombre.$_SERVER['REMOTE_ADDR'];
        $id = hash("sha256", $encriptar);

        $result = '';
        for($i=0; $i<strlen($clave); $i++) {
            $char = substr($clave, $i, 1);
            $keychar = substr('Alvaro@1234', ($i % strlen('Alvaro@1234'))-1, 1);
            $char = chr(ord($char)+ord($keychar));
            $result.=$char;
        }
        $clave = base64_encode($result);



        //

        try{
            $rt = false;
            $sql = "INSERT INTO usuarios VALUES ('$usuario', '$id', '$clave', '$nombre',".
                "'$ap1', '$ap2', now(), '$tipo', $telefono, true)";
            $result = $this->cnn->query($sql);
            if ($result)
                $rt = true;

        }catch(Exception $e){
            $rt = false;
        }
        return $rt;
    }

    //Consultamos todos los usuarios
    function consultarUsuarios(){
        $rt = false;

        try{

            $sql = "SELECT usuario, nombre, apellido1, apellido2, fechaAlta, tipo, id from usuarios where valido = 1";
            $result = $this->cnn->query($sql);

            if ($result){

                $usuarios=[];
                $cont = 0;

                while (($row=$result->fetch_assoc())){
                    $usuarios[$cont]['usuario'] = $row['usuario'];
                    $usuarios[$cont]['nombre'] = $row['nombre'];
                    $usuarios[$cont]['ap1'] = $row['apellido1'];
                    $usuarios[$cont]['ap2'] = $row['apellido2'];
                    $usuarios[$cont]['fecha'] = $row['fechaAlta'];
                    $usuarios[$cont]['tipo'] = $row['tipo'];
                    $usuarios[$cont]['id'] = $row['id'];
                    $cont++;
                }

                $rt = $usuarios;
            }

        }catch(Exception $e){
            $rt = false;
        }

        return $rt;
    }

    //Consultar un usuario
    function consultarUsuario($id){
        $rt = false;
        try{
            $usuario = [];
            $id = addslashes(trim(strip_tags($id)));

            //Seleccionar datos de usuario
            $sql = "Select nombre, apellido1, apellido2, usuario, tipo, fechaAlta from usuarios where id = '$id'";
            $result = $this->cnn->query($sql);

            if ($result->num_rows === 1){
                $row = $result->fetch_assoc();
                $usuario['nombre'] = $row['nombre'];
                $usuario['apellido1'] = $row['apellido1'];
                $usuario['apellido2'] = $row['apellido2'];
                $usuario['usuario'] = $row['usuario'];
                $usuario['tipo'] = $row['tipo'];
                $usuario['fecha'] = $row['fechaAlta'];

                //Selecionar articulos creados
                $sql = "Select count(articulos) as creados from articulos where autor='{$usuario['usuario']}'";
                $result = $this->cnn->query($sql);
                if ($result){
                    $usuario['creado'] = $result->fetch_assoc()['creados'];
                }else{
                    $usuario['creado'] = 0;
                }

                //Selecionar articulos publicados
                $sql = "Select count(articulos) as creados from articulos where autor='{$usuario['usuario']}' and estado='publicado'";
                $result = $this->cnn->query($sql);
                if ($result){
                    $usuario['publicado'] = $result->num_rows;
                }else{
                    $usuario['publicado'] = 0;
                }

                $rt = $usuario;
            }

        }catch (Exception $e){
            $rt = false;
        }
        return $rt;
    }


    //Comprobar ADMIN
    function comprobarAdmin($id){
        $rt = false;
        $sql = "select tipo from usuarios where id = '$id'";
        $result = $this->cnn->query($sql);
        if ($result->num_rows === 1){
            if ($result->fetch_assoc()['tipo'] === 'administrador'){
                $rt = true;
            }
        }
        return $rt;
    }

    //Comprobar VALIDO
    function comprobarValido($id){
        $rt = false;
        $sql = "select id from usuarios where id = '$id' and valido = 1";
        $result = $this->cnn->query($sql);
        if ($result->num_rows === 1){
            $rt = true;
        }
        return $rt;
    }


}