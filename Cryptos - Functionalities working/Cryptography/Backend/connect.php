<?php
  $conn_error ='Could not connect';
  $host='localhost';
  $user='root';
  $pass='hackmydb2015';
  $mysql_db='cryptos';
  mysql_connect($host,$user,$pass) or die(conn_error);
  mysql_select_db($mysql_db);

?>