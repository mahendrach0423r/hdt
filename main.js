canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

canvas.addEventListener("mousedown" , my_mousedown);

function my_mousedown(e)
{
     radius_of_circle = document.getElementById("Radius_input").value;
     color_of_line = document.getElementById("color_input").value;
     width_of_line = document.getElementById("width_of_line_input").value;
    mouseEvent = "mousedown";

}

canvas.addEventListener("mousemove" , my_mousemove);

function my_mousemove(e)
{
    current_position_of_x = e.cleintX - canvas.offsetTop;
    current_position_of_y = e.clientY - canvas.offsetLeft;

    if(mouseEvent = "mousedown")
    {
        console.log("current_position_of_x_and_y_=");
        console.log("x=" + current_position_of_x + "y=" + current_position_of_y);
        ctx.beginPath();
        ctx.strokeStyle = color_of_line;
        ctx.lineWidth = width_of_line;
        ctx.arc(200, 200, current_position_of_x, current_position_of_y, radius_of_circle, 0, 2 * Math.PI);
        ctx.stroke();
    }

}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e)
{
    mouseEvent = "mouseup";
}