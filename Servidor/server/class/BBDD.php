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
        try {
            $rt = false;
            $sql = "SELECT usuario, clave, id, tipo from usuarios where usuario='$usuario' and clave='$clave'";
            $result = $this->cnn->query($sql);
            if ($result)
                $rt = $result->fetch_assoc();

        }
        catch(Exception $e){
            $rt = false;
        }
            return $rt;
    }


}