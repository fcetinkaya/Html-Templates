var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
var ctx2 = c.getContext("2d");
var ctx3 = c.getContext("2d");

ctx.lineWidth = 4;


var green = "#1C8F1B";
var red = "#8f0e04";
var white="#fff";
var xvalue = 60;
var yvalue = 0;

	


/**
 * Lines Position
 * @type {*[]}
 */
var lines = [
	// Move : x1 and y1
	// Line : x2 and y2
	// Line : x1 from x2 (Line Road)
  //  {"x1": 125 , "y1": 290 , "x2": 720 ,  "y2": 290 ,  "color": green }, //Middle Line (Long)
  
	// Rectangle Line
	{"x1": 170 , "y1": 292 , "x2": 170 ,  "y2": 145 ,  "color": green }, // Rectangle Line Up	-	1
	{"x1": 170 , "y1": 145 , "x2": 220 ,  "y2": 145 ,  "color": green }, // Rectangle Line Up-Right	-	2
	{"x1": 240 , "y1": 145 , "x2": 300 ,  "y2": 145 ,  "color": green }, // Rectangle Line Up-Right	-	3
	{"x1": 240 , "y1": 145 , "x2": 300 ,  "y2": 145 ,  "color": green }, // Rectangle Line Up-Right	-	4
	{"x1": 360 , "y1": 145 , "x2": 460 ,  "y2": 145 ,  "color": green }, // Rectangle Line Up-Right	-	5
	{"x1": 540 , "y1": 145 , "x2": 672 ,  "y2": 145 ,  "color": green }, // Rectangle Line Up-Right	-	6
	{"x1": 670 , "y1": 145 , "x2": 670 ,  "y2": 292 ,  "color": green }, // Rectangle Line Up-RightDown	-	7
	{"x1": 670 , "y1": 288 , "x2": 670 ,  "y2": 437 ,  "color": green }, // Rectangle Line Down-Right	-	8
	{"x1": 470 , "y1": 435 , "x2": 670 ,  "y2": 435 ,  "color": green }, // Rectangle Line Down-Left	-	9
    {"x1": 360 , "y1": 435 , "x2": 460 ,  "y2": 435 ,  "color": green }, // Rectangle Line Down-Left	-	10
    {"x1": 240 , "y1": 435 , "x2": 300 ,  "y2": 435 ,  "color": green }, // Rectangle Line Down-Left	-	11
	{"x1": 170 , "y1": 435 , "x2": 220 ,  "y2": 435 ,  "color": green }, // Rectangle Line Down-Left	-	12	
	{"x1": 170 , "y1": 437 , "x2": 170 ,  "y2": 290 ,  "color": green }, // Rectangle Line Down-Left	-	13	
	
	
	
	
	{"x1": 125 , "y1": 290 , "x2": 172 ,  "y2": 290 ,  "color": green }, // First Middle Line	-	14
	
	{"x1": 170 , "y1": 290 , "x2": 220 ,  "y2": 290 ,  "color": green }, // First Middle Line	-	15	
	
	{"x1": 250 , "y1": 290 , "x2": 350 ,  "y2": 290 ,  "color": green }, // Second Middle Line	-	16
	
	{"x1": 350 , "y1": 290 , "x2": 410 ,  "y2": 290 ,  "color": green }, // Third Middle Line	-	17
	
	{"x1": 410 , "y1": 290 , "x2": 470 ,  "y2": 290 ,  "color": green }, // Fourth Middle Line	-	18
	
	{"x1": 540 , "y1": 290 , "x2": 615 ,  "y2": 290 ,  "color": green }, // Fifth Middle Line	-	19
	
	{"x1": 617 , "y1": 290 , "x2": 670 ,  "y2": 290 ,  "color": green }, // Sixth Middle Line	-	20
	
	{"x1": 672 , "y1": 290 , "x2": 710 ,  "y2": 290 ,  "color": green }, // Seventh Middle Line	-	21
	
    {"x1": 360 , "y1": 143 , "x2": 460 , "y2": 290 ,   "color": green}, // First Share to Middle Sip	-	22
	
    {"x1": 360 ,  "y1": 143 , "x2": 410 , "y2": 290 ,  "color": green}, // First Share to Middle Line	-	23
  
    {"x1": 460 ,"y1": 144 ,"x2": 360 ,"y2": 290 , "color": green },  // First Sip to Middle Share	-	24
   
	{"x1": 460 , "y1": 144 , "x2": 410 , "y2": 290 , "color": green}, // First Sip to Middle Line	-	25
	
    {"x1": 355 , "y1": 285 , "x2": 460 , "y2": 435 , "color": green}, //Middle Share to Bottom Sip	-	26
	
	{"x1": 408 , "y1": 285 , "x2": 460 , "y2": 435 , "color": green}, // Middle Line to Bottom Sip	-	27
  
    {"x1": 465 , "y1": 285 , "x2": 360 , "y2": 435 , "color": green}, // Middle Sip to Bottom Share	-	28
	
    {"x1": 412 , "y1": 285 , "x2": 360 , "y2": 435 , "color": green} // Middle Line to Bottom Share	-	29
];

// Context Image Position Set
var context = [
    {type: 'dot', x1: 80 , x2: 260 , "color": white,"text":"phone"}, // First Point (Phone)
	
    {type: 'dot', x1: 200 , x2: 125 , "color": white,"text":"signal"}, // Top Signal
	
    {type: 'dot', x1: 200 , x2: 270 , "color": white,"text":"signal"}, // Middle Signal
	
    {type: 'dot', x1: 200 , x2: 415 , "color": white,"text":"signal"}, // Bottom Signal
	
    {type: 'kare', x1: 300 , x2: 115 ,"color": white,"text":"share"}, // Top Share
	
    {type: 'kare', x1: 300 , x2: 260 ,"color": white,"text":"share"}, // Middle Share
	
    {type: 'kare', x1: 300 , x2: 405 , "color": white,"text":"share"}, // Bottom Share
	
    {type: 'dot', x1: 460 , x2: 115 , "color": white,"text":"sip"}, // Top Sip
	
    {type: 'dot', x1: 460 , x2: 260 , "color": white,"text":"sip"}, // Middle Sip
	
    {type: 'dot', x1: 460 , x2: 405 , "color": white,"text":"sip"}, // Bottom Sip
	
    {type: 'dot', x1: 730 , x2: 260 , "color": white,"text":"people"}, // End Point (People)
];

function line_print(liste, context,aksiyon_secim) {

    /**
     * Aksiyonlar
     * @type {*[]}
     */
    var aksiyonlar = [
		[true, true, true, true, true, true, true, true, true, true, true, true, true, true, true,true, true, true, true, true, true, true, true, true, true, true, true, true, true],	
		
        [true, true, true, true, true, true, true, false, false, false, false, false, false, true, true,true, true, true, true, true, true, true, true, true, true, false, false, false, false],	
		
        [false, false, false, false, false, false, false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, false, false, false, false, true, true, true, true],
		
        // [true, true, true, true, true, true, true, true, false, true, false, false, true, true, true, true, true, true, true, true, true, true, true, false, false, true, true, true, true],
		
        // [true, true, true, true, true, true, true, false, false, true, true, true, true, true, true, true, true, true, true, true, true, false, false, true, true, true, true, true, true],
		
        // [true, true, true, true, true, true, true, false, false, false, true, true, true, true, true, true, true, true, true, true, true, false, false, false, true, true, true, true, true],
		
        // [true, true, true, true, true, true, true, true, false, false, false, false, true, false, false, true, false, true, true, true, true, true, true, true, false, false, true, true, false],
		
        // [true, true, true, true, true, true, false, false, false, false, true, true, true, true, true, true, true, true, true, true, true, false, true, false, true, true, false, false, true],
		
        // [true, true, true, true, true, true, true, false, true, true, false, true, false, true, true, true, true, true, true, true, true, false, true, true, false, true, false, false, true],
		
        // [true, true, true, true, true, true, true, true, false, true, true, false, false, false, true, true, true, true, true, true, true, true, false, true, true, false, false, false, true]

    ];

	// Lines Start and Colors
    liste.forEach(function (entry, key) {	
        ctx.beginPath();		
		// Middle Rectangle	
			// ctx3.lineJoin = "round";
			// ctx3.strokeStyle = orange;
			// ctx3.setLineDash([20, 0]);			
			// ctx3.strokeRect(230,145,500,290);		
				
        ctx.moveTo(entry.x1+xvalue, entry.y1+yvalue);
        ctx.lineTo(entry.x2+xvalue, entry.y2+yvalue);
			
        if (aksiyonlar[aksiyon_secim][key] == true)
        {
            ctx.strokeStyle = green;
            ctx.setLineDash([10, 5]);
            ctx.lineDashOffset = -offset;	
        }
        else if (aksiyonlar[aksiyon_secim][key] == false)
        {
            ctx.strokeStyle = red;
            ctx.setLineDash([20, 0]);
            ctx.lineDashOffset = 0;
        }			
			ctx.stroke();		
		
		// Blue Rectangle
			ctx2.lineJoin = "round";
			ctx2.strokeStyle = "#002d47";
			ctx2.setLineDash([]);
			ctx2.strokeRect(285, 50, 390, 490);  
    });

	//Images Location
    context.forEach(function (contx,key) { 
     
            if (contx.text=="phone")
            {
                const image = document.getElementById('phone');
                ctx.drawImage(image, (contx.x1+xvalue), (contx.x2+yvalue), image.width/3, image.height/3);
            }
			else if(contx.text=="signal")
            {
                const image = document.getElementById('signal');
                ctx.drawImage(image, (contx.x1+xvalue), (contx.x2+yvalue), image.width/3, image.height/3);
            }
			else if (contx.text=="share")
            {
                const image = document.getElementById('share');
                ctx.drawImage(image, (contx.x1+xvalue), (contx.x2+yvalue), image.width/3, image.height/3);
            }
			else if(contx.text=="sip")
			{
				 const image = document.getElementById('sip');
                ctx.drawImage(image, (contx.x1+xvalue), (contx.x2+yvalue), image.width/3, image.height/3);				
			}
			else if(contx.text=="people")
			{
				 const image = document.getElementById('people');
                ctx.drawImage(image, (contx.x1+xvalue), (contx.x2+yvalue), image.width/3, image.height/3);				
			}			
    });
}



let offset = 0;
let say = 0;
let aksiyon_secim = 1;
function draw()
{
    var d = document.getElementById("canvas");
    var ctx2 = d.getContext("2d");
    ctx2.clearRect(0,20, c.width, c.height);
}
function march()
{
    offset++;
    say = (say + 50);
    if (say==6000)
    {
        aksiyon_secim =  Math.floor(Math.random() * 3);
        console.log(aksiyon_secim);
        say =0;
    }
    draw();
   line_print(lines, context,aksiyon_secim);
   setTimeout(march, 25);
}
march();



// Mouse Click Event...
// Move : x1 and y1
	// Line : x2 and y2
function mouseClickEvent(canvas, event) {
    const rect = canvas.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    console.log("x: " + x + " y: " + y)
	if (x>=360 && x<=420)
	{       console.log("Lalala");
			ctx.beginPath();			
			ctx.moveTo(0+xvalue, 290+yvalue);
			ctx.lineTo(20+xvalue, 290+yvalue);
			ctx.strokeStyle = red;
			ctx.stroke();
		
			// ctx.moveTo(360+xvalue, 143+yvalue);
			// ctx.lineTo(460+xvalue, 290+yvalue);		

	}	
}

const canvas = document.querySelector('canvas')
canvas.addEventListener('mousedown', function(e) {
    mouseClickEvent(canvas, e)
})