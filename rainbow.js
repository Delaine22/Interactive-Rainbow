<script>
    red.addEventListener('click',first)
    function first(){
        var r = window.document.getElementById('red')
         red.innerHTML = 'Red'
        red.style.background='rgb(255,0,0)'
    }

    orange.addEventListener('click',second)
    function second(){
    var o = window.document.getElementById('orange')
    orange.innerHTML= 'Orange'
    orange.style.background='rgb(255,127,0)'
    }

    yellow.addEventListener('click',third)
    function third(){
        var y = window.document.getElementById('yellow')
        yellow.innerHTML='Yellow'
        yellow.style.background='rgb(255,255,0)'
    }

    green.addEventListener('click',fourth)
    function fourth(){
        var g = window.document.querySelector('div#green')
        green.innerHTML='Green'
        green.style.background='#005C29'
    }

    blue.addEventListener('click',fifth)
    function fifth(){
        var b = document.getElementById('blue')
        blue.innerHTML='Blue'
        blue.style.background='rgb(0,0,255)'
    }

    darkpurple.addEventListener('click',sixth)
    function sixth(){
        var dp= window.document.getElementById('darpurple')
        darkpurple.innerHTML='Dark purple'
        darkpurple.style.background= '#5c2091'
    }

    purple.addEventListener('click',seventh)
    function seventh(){
        var p =window.document.getElementById('purple')
        purple.innerHTML='Purple'
        purple.style.background='#AF69EE'
    }

</script>
