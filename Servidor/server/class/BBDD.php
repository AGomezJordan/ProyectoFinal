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
            $sql = "SELECT usuario, id, tipo from usuarios where usuario='$usuario' and clave = '$clave'";
            $result = $this->cnn->query($sql);
            if ($result)
                $rt = $result->fetch_assoc();

        }
        catch(Exception $e){
            $rt = false;
        }
        return $rt;
    }

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
                "'$ap1', '$ap2', now(), '$tipo', $telefono)";
            $result = $this->cnn->query($sql);
            if ($result)
                $rt = true;

        }catch(Exception $e){
            $rt = false;
        }
        return $rt;
    }


}