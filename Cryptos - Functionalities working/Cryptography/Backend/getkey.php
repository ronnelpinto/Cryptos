<?php
require'connect.php';
$algoname=$_GET["algoname"];
$algoid=$_GET["algoid"];
$userid=$_GET['n'];
$query = "SELECT  KeyText FROM keytable WHERE  userid='{$userid}' and algoid='{$algoid}'";

                   if($query_run=mysql_query($query))
                  {
						if(mysql_num_rows($query_run)==0)
					{
						echo"<h1>No such key present, please set the key first.</h1>";
					}
					else
					{
                        while($query_row=mysql_fetch_assoc($query_run))
                        {
                            $Key=$query_row['KeyText'];
                            echo $Key;
						}
						if($algoname == 'DES')
						{
							header('Location:http://localhost/Crypto/#/des?n='.$userid.'&key='.$Key);
						}
						else
						{
							header('Location:http://localhost/Crypto/#/aes?n='.$userid.'&key='.$Key);
						}
					}
				  }
                  else
                  {
                      echo mysql_error();
                  }




?>