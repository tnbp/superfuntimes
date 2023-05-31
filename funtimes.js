function funtimes_onload() {
    alert("Hello!");
    your_name = prompt("What's your name, sugar?", "Daddy-O");
    alert("Well, " + your_name + " is not a name I've ever heard of!");
    your_answer = confirm("Okay, sending your mother a nasty e-mail >:)");
    if (your_answer == true) {
        alert("Just kidding! :-)");
    }
    else {
        alert("Okay, okay, I won't... you big chicken!");
    }
    yellowBox = document.getElementById("yellowbox");
    greenBox = document.getElementById("greenbox");
    redBox = document.getElementById("redbox");
    blueBox = document.getElementById("bluebox");
    weirdBox = document.getElementById("weirdbox");
    
    yellowBox.onclick = yellow_magic;
    greenBox.onclick = green_magic;
    redBox.onclick = red_magic;
    blueBox.onclick = blue_magic;
    weirdBox.onclick = weird_magic;
}

function yellow_magic() {
    this.toggled = !this.toggled;
    if (this.toggled) {
        this.style.right = "0px";
        this.style.left = "";
    }
    else {
        this.style.left = "0px";
        this.style.right = "";
    }
}

function red_magic() {
    this.toggled = !this.toggled;
    if (this.toggled) {
        this.style.width = "400px";
        this.style.height = "400px";
        this.style.zIndex = "5";
    }
    else {
        this.style.width = "50px";
        this.style.height = "50px";
        this.style.zIndex = "-5";
    }
}

function blue_magic() {
    this.style.backgroundColor = "rgb(" + Math.random() * 255 + "," + Math.random() * 255 + "," + Math.random() * 255 + ")";
}

function green_magic() {
    this.toggled = !this.toggled;
    function green_move_forward() {
        greenBox.leftpx = parseInt(greenBox.style.left) || 0;
        greenBox.toppx = parseInt(greenBox.style.top) || 200;
        if (greenBox.leftpx < 50) {
            greenBox.leftpx += 1;
            greenBox.style.left = greenBox.leftpx + "px";
            setTimeout(green_move_forward, 16);
        }
        else if (greenBox.toppx < 450) {
            greenBox.toppx += 1;
            greenBox.style.top = greenBox.toppx + "px";
            setTimeout(green_move_forward, 16);
        }
    }
    function green_move_backward() {    // uh oh, this has an error somewhere :-(
        greenBox.leftpx = parseInt(greenBox.style.left) || 50;
        greenBox.toppx = parseInt(greenBox.style.top) || 450;
        if (greenBox.toppx > 200) {
            greenBox.toppx -= 1;
            greenBox.style.top = greenBox.toppx + "px";
            setTimeout(green_move_backward, 16);
        }
        else if (greenBox.leftpx > 0) {
            greenBox.leftpx -= 1;
            greenBox.style.left = greenBox.leftpx + "px";
            setTimeout(green_move_backward, 16);
        }
    }
    if (this.toggled) green_move_forward();
    else green_move_backward();
}



function weird_magic() {
    function weird_expand() {
        weirdBox.widthpx = parseInt(weirdBox.style.width) || 50;
        if (weirdBox.widthpx < 500) {
            weirdBox.widthpx += 10;
            weirdBox.style.width = weirdBox.widthpx + "px";
            setTimeout(weird_expand, 16);
        }
        else {
            touchButton = document.createElement("button");
            touchButton.innerHTML = "touch anyway";
            touchButton.style.position = "relative";
            touchButton.style.left = "40%";
            touchButton.style.top = "50%";
            touchButton.onclick = weird_hammertime;
            weirdBox.appendChild(touchButton);
            stopSound = new Audio("assets/a.opus");
            stopSound.play();
        }
    }
    
    function weird_hammertime() {
        weirdBox.removeChild(this);
        hammerSound = new Audio("assets/b.opus");
        hammerSound.play();
        hammerGIF = document.createElement("img");
        hammerGIF.src = "assets/hammer.gif";
        hammerGIF.style.position = "relative";
        hammerGIF.style.left = "150px";
        hammerGIF.style.top = "50px";
        weirdBox.appendChild(hammerGIF);
        setTimeout(weird_download, 3000);
    }
    
    if (redBox.toggled || greenBox.toggled) {
        alert("No way, man! Something is blocking me...!");
        return;
    }
    
    weird_expand();
    
    function weird_download() {
        window.location = "assets/superfuntimes.zip";
    }
}
