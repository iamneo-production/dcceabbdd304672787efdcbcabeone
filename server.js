<!DOCTYPE html>
<html>
      
<head>
    <meta name="viewport" content=
        "width=device-width, initial-scale=1.0">
    <!-- CSS file Included -->
    <link rel="stylesheet" type="text/css" href="tic.css">
    <!-- JavaScript file included -->
    <script src="tic.js"></script>
</head>
  
<body>
    <div id="main">
        <h1>TIC TAC TOE</h1>
        <p id="ins">
              Game starts by just Tap on
            box<br><br>First Player starts as
            <b>Player X </b>And Second Player as 
            <b>Player 0</b>
        </p>
        <br><br>
        <div class = "ui">
            <div class="row">
                <input type="text" id= "b1" 
                       class="cell" onclick="myfunc_3(); myfunc();" 
                       readonly>
                <input type="text" id= "b2" 
                       class="cell" onclick="myfunc_4(); myfunc();" 
                       readonly>
                <input type="text" id= "b3" class="cell" 
                       onclick="myfunc_5(); myfunc();" 
                       readonly>
            </div>
            <div class="row">
                <input type="text" id= "b4" 
                       class="cell" onclick="myfunc_6(); myfunc();" 
                       readonly>
                <input type="text" id= "b5" 
                       class="cell" onclick="myfunc_7(); myfunc();" 
                       readonly>
                <input type="text" id= "b6" 
                       class="cell" onclick="myfunc_8(); myfunc();" 
                       readonly>
            </div>
            <div class="row">
                <input type="text" id= "b7" 
                       class="cell" onclick="myfunc_9(); myfunc();" 
                       readonly>
                <input type="text" id= "b8" 
                       class="cell" onclick="myfunc_10();myfunc();" 
                       readonly>
                <input type="text" id= "b9" 
                       class="cell" onclick="myfunc_11();myfunc();" 
                       readonly>
            </div>
        </div>
        <br><br><br>
        
        <button id="but" onclick="myfunc_2()">
            RESET
        </button>
        <br><br>
        <p id="print"></p>
    </div>
</body>
  
</html>