<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Carter+One&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="css/styleAhorcado.css" />
    <script src="js/funciones.js"></script>
    <title>Ahorcado</title>
</head>
<body>
    <header>
        <h2>Ahorcado</h2>
        <?php
        session_start();
        echo "<h1>Usuario: <span>".$_SESSION['nombre']."</span></h1>";
        ?>
    </header>
    <main>
        <img id="imagen" src="img/img0.png" alt="Ahorcado" />
        <div class="relative">
            <p id="palabra_a_adivinar"></p>
            <p id="resultado"></p>
        </div>
        <div><button id="jugar">Obtener palabra</button> 
            <button id="pista">Obtener pista</button><p id="pista_texto" style="visibility: hidden;">Hola mundo</p></div>
        <div id="letras">
            <button>A</button>
            <button>B</button>
            <button>C</button>
            <button>D</button>
            <button>E</button>
            <button>F</button>
            <button>G</button>
            <button>H</button>
            <button>I</button>
            <button>J</button>
            <button>K</button>
            <button>L</button>
            <button>M</button>
            <button>N</button>
            <button>Ñ</button>
            <button>O</button>
            <button>P</button>
            <button>Q</button>
            <button>R</button>
            <button>S</button>
            <button>T</button>
            <button>U</button>
            <button>V</button>
            <button>W</button>
            <button>X</button>
            <button>Y</button>
            <button>Z</button>
        </div>
    </main>
    <script src="js/ahorcado.js"></script>
</body>
</html>