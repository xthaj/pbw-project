<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php var_dump($_POST)?>
    <h2>Hey, <?php echo $_POST["name"]?></h2>
    <!-- isset for req -->
    <p>Your request:</p>
    <?php if(isset($_POST["additional-requests"])) echo $_POST["additional-requests"]?>
</body>
</html>