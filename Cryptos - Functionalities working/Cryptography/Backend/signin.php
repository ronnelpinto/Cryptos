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
						$msg='Enter valid username and password';
						
						echo '<script type="text/javascript">alert("' . $msg . '"); </script>';
						
						header('Location:http://localhost/Crypto/#/signin');
						
					}
					else
					{
                        while($query_row=mysql_fetch_assoc($query_run))
                        {
                              $UserId=$query_row['UserId'];
                            echo $UserId;
							
                        }
							$msg='Sign In Successful';
							
							echo '<script type="text/javascript">alert("' . $msg . '"); </script>';
							header('Location:http://localhost/Crypto/#/aes?n='.$UserId);
							
					}
				  }
                  else
                  {
                      echo mysql_error();
                  }

?>