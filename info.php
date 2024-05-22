<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <script src="js/funciones.js"></script>
    <script src="js/glosario.js"></script>
    <title>Glosario</title>
</head>
<body>
<h1> GLOSARIO DE PROGRAMACIÓN </h1>
    <?php
        session_start();
        echo "<h1>Presta atencion <span>".$_SESSION['nombre']."!!</span></h1>";
    ?>
    <ul class="lista" id="lista">
    </ul>
<a href="ahorcado.php"><h1>Ir al Ahorcado...</h1></a>
<script src="js/info.js"></script>
</body>
</html>