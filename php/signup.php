        <?php
               require'connect.php';
                $username = mysql_real_escape_string($_POST['username']);
				$password=(md5($_POST["password"]));
                $fname= mysql_real_escape_string($_POST['firstname']);
                $lname= mysql_real_escape_string($_POST['lastname']);
				$query = "INSERT INTO `users` VALUES (NULL, '{$username}', '{$password}','{$fname}','{$lname}',CURRENT_TIMESTAMP)";
              
			  
			  if($query_run=mysql_query($query))
                {
                  $query1="SELECT UserId FROM users WHERE username = '{$username}'";
                  if($query_run1=mysql_query($query1))
                  {
                        while($query_row1=mysql_fetch_assoc($query_run1))
                        {
                              $UserId=$query_row1['UserId'];
                              
                        }
						// here give the link of the page to go to - in our case the home page 
					//	header('Location:register2.php?n='.$UserId);
                  }
                  else
                  {
                      echo mysql_error();
                  }
				  
                }
