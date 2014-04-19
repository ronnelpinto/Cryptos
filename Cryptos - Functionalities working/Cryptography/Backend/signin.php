<?php
require'connect.php';
$username=$_POST["username"];
$password=(md5($_POST["password"]));
//$userid=$_REQUEST['n'];
//$algoid=$_REQUEST["algoid"];

$algoname=$_REQUEST["algoname"];
$keytext=$_REQUEST["key"];
echo $algoname,$algoid,$userid,$keytext;
$query = "SELECT UserId FROM users WHERE  username='{$username}' and password='{$password}'";

                   if($query_run=mysql_query($query))
                  {
						if(mysql_num_rows($query_run)==0)
					{
						echo"<h1>Enter valid username and password</h1>";
					}
					else
					{
                        while($query_row=mysql_fetch_assoc($query_run))
                        {
                              $UserId=$query_row['UserId'];
                            echo $UserId;
							//	echo'welcome'.$username;
							//	header('Location:shopkeeper_openning.php?n='.$shopId);
                        }
							//	echo'welcome'.$name;
							
							//  again give the link of the page to go to
							header('Location:http://localhost/Crypto/#/aes?n='.$UserId);
					}
				  }
                  else
                  {
                      echo mysql_error();
                  }

?>