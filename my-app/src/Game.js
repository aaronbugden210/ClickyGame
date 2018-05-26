import React, {Component} from 'react';

const buttonArr = ["_images/bobafett.jpeg", "_images/chewie.jpeg", "_images/fin.jpeg",
                   "_images/han.jpeg", "_images/jyn.jpeg", "_images/k-2.jpeg",
                   "_images/leia.jpeg", "_images/luke.jpeg", "_images/monmothma.jpeg",
                   "_images/rey.jpeg", "_images/vader.jpeg", "_images/yoda.jpeg"];

var score = 0;

class Game extends Component
{
    render()
    {
        return(
            <div>
                <table>
                    <tr>
                        <td><button class = "tableButton" onClick = "buttonClick()"></button></td>
                        <td><button class = "tableButton" onClick = "buttonClick()"></button></td>
                        <td><button class = "tableButton" onClick = "buttonClick()"></button></td>
                        <td><button class = "tableButton" onClick = "buttonClick()"></button></td>
                    </tr>
                    <tr>
                        <td><button class = "tableButton" onClick = "buttonClick()"></button></td>
                        <td><button class = "tableButton" onClick = "buttonClick()"></button></td>
                        <td><button class = "tableButton" onClick = "buttonClick()"></button></td>
                        <td><button class = "tableButton" onClick = "buttonClick()"></button></td>
                    </tr>
                    <tr>
                        <td><button class = "tableButton" onClick = "buttonClick()"></button></td>
                        <td><button class = "tableButton" onClick = "buttonClick()"></button></td>
                        <td><button class = "tableButton" onClick = "buttonClick()"></button></td>
                        <td><button class = "tableButton" onClick = "buttonClick()"></button></td>
                    </tr>
                </table>
            </div>    
        );
    }
}

//I could not get these functions to work properly
//the intended goal was to have a function that would populate a table with a random image from the array created up top
//the button click function was meant to create
function fillTable()
{
    shuffleArray(buttonArr);
}

function shuffleArray(array) 
{
    for (var i = array.length - 1; i > 0; i--) 
    {
        var j = Math.floor(Math.random() * (i + 1));
        var tempArr = array[i];
        array[i] = array[j];
        array[j] = tempArr;
    }
}

function buttonClick()
{
    //if (button is clicked && was not already clicked)
    //{
    //  score++;
    //  fillTable();
    //}
    //
    //else if( button is clicked && was already clicked )
    //{
    //  gameOver();
    //}
    //
}

function gameOver()
{
    //Display You Lose;
    //score = 0;
    //fillTable();
}

export default Game;