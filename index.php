<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <!-- FONT: LATO -->
    <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700" rel="stylesheet">
    <!-- FONT: FONTAWESOME -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css">
    <!-- JS: JQUERY -->
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <!-- JS: MOMENT -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment-with-locales.min.js"></script>
    <!-- JS: CHART-JS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.bundle.js"></script>
    <!-- BOOTSTRAP -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <!-- CSS: MY STYLE -->
    <link rel="stylesheet" href="style.css">
    <!-- JS: MY SCRIPT -->
    <script src="script.js" charset="utf-8"></script>
</head>
    <?php 
    
    ?>
<body>
    <div class="container-fluid pad">
        <div id='box' class="row justify-content-center">
            <div class="col d-flex justify-content-end">
                <input type="text" id="access">
                <button id="cerca">cerca</button>
            </div>
            
        </div>
        <div id='box' class="row justify-content-center">
            <div class="col-10">
                <canvas id="fatturato">
                </canvas>
            
            </div>
            
        </div>
        <div id='box' class="row justify-content-center">
            <div class="col-10">
                <canvas id="fatturato_by_agent">
                </canvas>
            
            </div>
            
        </div>
        
        <div id='box' class="row justify-content-center">
            <div class="col-10">
                <canvas id="team_efficiency">
                </canvas>
            
            </div>
            
        </div>
        
    </div>




</body>
</html>