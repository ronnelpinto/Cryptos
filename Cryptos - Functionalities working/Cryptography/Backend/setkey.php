<?php
require'connect.php';

$userid=$_REQUEST['n'];
$algoid=$_REQUEST["algoid"];
$algoname=$_REQUEST["algoname"];
$keytext=$_REQUEST["key"];


    $data = file_get_contents("php://input");
    $postData = json_decode($data);

$query = "INSERT  INTO keytable VALUES(NULL,'{$userid}','{$algoid}','{$algoname}','{$keytext}',CURRENT_TIMESTAMP)";
                   if($query_run=mysql_query($query))
                  {
				              echo $algoname,$algoid,$userid,$keytext;
			//give the appropriate location to go to here	  
        //header('Location:web_change2.php?id='.$shop_id.'&model_no='.$model_no);
		
		
                  }
                  else
                  {
                      echo mysql_error();
                  }



?>