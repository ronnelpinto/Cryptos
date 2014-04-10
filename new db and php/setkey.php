<?php
require'connect.php';
$algoname=$_POST["algoname"];
$algoid=$_POST["algoid"];
$userid=$_GET['n'];
$query = "INSERT  INTO keytable values  (NULL,'{$userid}','{$algoid}','{$algoname}','{$keytext}',CURRENT_TIMESTAMP)";


                   if($query_run=mysql_query($query))
                  {
				  
			//give the appropriate location to go to here	  
        //header('Location:web_change2.php?id='.$shop_id.'&model_no='.$model_no);
		
		
  }
  else
  {
  echo mysql_error();
  }



?>