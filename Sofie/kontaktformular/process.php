<?php

if(empty($_POST['submit']))
{
	echo "Form is not submitted!";
	exit;
}
if(empty($_POST["fullname"]) ||
	empty($_POST["email"]))
	{
		echo "Please fill the form";
		exit;
	}
	
$name = $_POST["fullname"];
$email = $_POST["email"];
$comment = $_POST["comment"];

mail( 'sofhedemann@gmail.com' , 'New form submission' , 
"New form submission: Name: $name, Email: $email, Comment: $comment"  );

header('Location: thanks.html');

?>
