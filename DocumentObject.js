<!DOCTYPE html>
<html>
<head>
    <style type="text/css">
        #square{
            height: 100px;
            width: 100px;
            background-color: green;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <div id="square" onclick="fun()"></div>
    <script type="text/javascript">
    function fun() {
        var x = document.getElementById('square');
        var div_width = x.offsetwidth + (0.1 * x.offsetwidth) + "px";
        var div_width = x.offsetHeight + (0.1 * x.offsetHeight) + "px";

        x.style.width = div_width;
        x.style.height = div_height;

    }
</script>
</body>
</html>