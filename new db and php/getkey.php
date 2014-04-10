<?php
require'connect.php';
$algoname=$_POST["algoname"];
$algoid=$_POST["algoid"];
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
							
							//give the approprite location to go to 
							//header('Location:);
					}
				  }
                  else
                  {
                      echo mysql_error();
                  }




?>