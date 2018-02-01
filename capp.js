var num = 6;
var colors = genRandColor(num);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var message = document.querySelector("#msg");
var h1 = document.querySelector("h1");
var reset =  document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


	easyBtn.addEventListener("click", function()
	{
			easyBtn.classList.add("selected");
			hardBtn.classList.remove("selected");
			num=3;
			colors=genRandColor(num);
			pickedColor=pickColor();
			colorDisplay.textContent=pickedColor;
				for(var i=0;i<squares.length;i++)
				{
					if(colors[i])
					{
						squares[i].style.backgroundColor = colors[i];
					}
					else
					{
						squares[i].style.display = "none";
					}

				}

	});
	hardBtn.addEventListener("click", function()
	{
			easyBtn.classList.remove("selected");
			hardBtn.classList.add("selected");	
			num=6;
			colors=genRandColor(num);
			pickedColor=pickColor();
			colorDisplay.textContent=pickedColor;
				for(var i=0;i<squares.length;i++)
				{
						squares[i].style.backgroundColor = colors[i];
						squares[i].style.display = "block";
				}

	});

	reset.addEventListener("click", function()
	{
			//generate all new colors
			genRandColor(num);
			pickedColor=pickColor();
			colorDisplay.textContent=pickedColor;
			message.textContent=" ";
			this.textContent="NEW COLORS"
				for(var i = 0; i < squares.length; i++)
					{
						squares[i].style.backgroundColor = colors[i];
					}
			h1.style.backgroundColor="#c92014";

	});
						colorDisplay.textContent = pickedColor;

			for(var i = 0; i < squares.length; i++)
				{
					squares[i].style.backgroundColor = colors[i];
					squares[i].addEventListener("click", function()
					{
							var clickedColor = this.style.backgroundColor;
								//alert(this.style.background);
							if(clickedColor === pickedColor)
								{
									message.textContent="Correct !";
									change(pickedColor);
									h1.style.backgroundColor=clickedColor;
									reset.textContent="Play Again !";
								}
							else
								{
									this.style.background="#232323";
									message.textContent="Try Again !";
								}
					});
				}

						function change(color)
						{
								for( var i =0;i<colors.length;i++)
									{
										squares[i].style.backgroundColor = color;
									}
						}

						function pickColor()
						{
							var random=Math.floor(Math.random()*colors.length);
							return colors[random];
						}
						function genRandColor(num)
						{
							var arr = [];
								for(var i=0;i<num;i++)
									{
										arr.push(randColor());
									}
							return arr;
						}

						function randColor()
						{
							var r=Math.floor(Math.random()*256);
							var g=Math.floor(Math.random()*256);
							var b=Math.floor(Math.random()*256);
							return "rgb(" + r + ", " + g + ", " + b + ")";
						}