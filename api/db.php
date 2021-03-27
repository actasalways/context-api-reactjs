<?php 

$db = new PDO('mysql:host=localhost;dbname=react-php','root',''); 
$users = $db->query('SELECT * FROM table_users')->fetchAll(PDO::FETCH_ASSOC);

#print_r(json_encode($users)); 

?>