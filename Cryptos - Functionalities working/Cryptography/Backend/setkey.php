<?php
require'connect.php';

$userid=$_REQUEST['n'];
$algoid=$_REQUEST["algoid"];
$algoname=$_REQUEST["algoname"];
$keytext=$_REQUEST["key"];


    $data = file_get_contents("php://input");
    $postData = json_decode($data);
    /*
    $checkQuery = "SELECT  UserId,AlgoId,AlgoName FROM keytable WHERE  UserId='{$userid}' and AlgoId='{$algoid}'";

    if($query=mysql_query($checkquery))
    {
          if(mysql_num_rows($query)>1)
          {
            echo mysql_error();
          }
          else
          {
    */

            $query = "INSERT  INTO keytable VALUES(NULL,'{$userid}','{$algoid}','{$algoname}','{$keytext}',CURRENT_TIMESTAMP)";
                   if($query_run=mysql_query($query))
                  {
				              echo $algoname,$algoid,$userid,$keytext;
		
                  }
                  else
                  {
                      echo mysql_error();
                  }
          


?>