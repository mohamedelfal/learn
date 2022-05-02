* {
    margin: 0;
    padding: 0;
}

#wrapper {
    position: relative;
    overflow: hidden;
    background: #182431;
}

#wrapper.active {
    background: url("https://user-images.githubusercontent.com/26748614/112761228-a18e8500-8ffa-11eb-87dd-208abf3dea49.jpg");
    background-size: cover;
    background-position: center;
}

/* === Text & Button === */
footer {
    position: absolute;
    z-index: 1;
    bottom: 0;
    width: 100%;
    height: 80px;
    background: #2c3e50;
    display: block;
}

footer.active {
    display: none;
}

footer h2 {
    color: #fff;
    font-family: 'Special Elite', cursive;
    font-size: 2em;
    width: 100%;
    text-align: center;
    letter-spacing: 2px;
    margin-top: 25px;
}

footer .ie {
    color: #7897fd;
}

#ieImg {
    width: 130px;
    opacity: .5;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -40%);
    user-select: none;
}

#ieImg.active {
    opacity:0;
}

/* I took the button design from: https://codepen.io/kennethweber/pen/loHtG */
.btn {
    height: 130px;
    width: 300px;
    transform: translateX(-50%) scale(.7);
    position: absolute;
    bottom: 46px;
    left: 50%;
}

.btn div {
    position: absolute;
    transition: all .2s;
}

.btn #floor {
    height: 50px;
    width: 300px;
    background: #506e8d;
    border-radius: 50%;
    margin-top: 80px;
}

.btn #top {
    background: #e74c3c;
    height: 40px;
    width: 250px;
    border-radius: 50%;
    z-index: 3;
    margin-left: 25px;
}

.btn #bottom {
    background: #c0392b;
    height: 40px;
    width: 250px;
    border-radius: 50%;
    margin-top: 80px;
    margin-left: 25px;
    z-index: 2;
}

.btn #body {
    background: #c0392b;
    width: 250px;
    border-radius: 0;
    margin-left: 25px;
    height: 80px;
    margin-top: 20px;
    z-index: 2;
}

.btn:hover {
    cursor: pointer;
}

.btn:hover #floor {
    background: #95a5a6;
}

.btn:hover #top {
    background: #e35e50;
}

.btn .top-click {
    margin-top: 40px;
}

.btn .body-click {
    height: 40px !important;
    margin-top: 60px !important;
}


/* === Red and Blue Light === */
.alertRed,
.alertBlue  {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: background .5s;
}

.alertRed.active {
    z-index: 4;
    animation: pulse-bg-red 1.5s .2s;
}

@keyframes pulse-bg-red {
    0% { background-color: #ff2d2d; }
    50% { background-color: #c93e3e; }
    100% { background-color: transparent; }
}

.alertBlue.active {
    z-index: 4;
    animation: pulse-bg-blue 2s forwards;
}

@keyframes pulse-bg-blue {
    0% { background-color: #3b5672;}
    50% { background-color: #182431;}
    100% { background-color: transparent; z-index: -1}
}


/* === Handwriting effect === */
#svg {
    width: 100%;
    height: 100vh;
    display: block;
    transform: scale(.8);
    pointer-events: none;
}

#thank,
#y,
#ou {
    fill: none;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 14px;
    opacity: 0;
}

#thank {
    stroke: #182838;
    stroke-dasharray: 2244;
    stroke-dashoffset: 2244;
}

#thank.active {
    animation: handwritingAnimation 3s 1.2s linear forwards;
}

#y {
    stroke: #ff2d2d;
    stroke-dasharray: 767;
    stroke-dashoffset: 767;
}

#y.active {
    animation: handwritingAnimation .5s 4.2s linear forwards;
}

#ou {
    stroke: #182838;
    stroke-dasharray: 504;
    stroke-dashoffset: 504;
}

#ou.active {
    animation: handwritingAnimation 1s 4.7s linear forwards;
}

@keyframes handwritingAnimation {
    0% { opacity: 1;}
    100% {
        stroke-dashoffset: 0;
        opacity: 1;
    }
}
