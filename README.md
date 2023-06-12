## Typer
A simple JavaScript library that simulates typewriter effect on HTML elements.

## Installation

Include the typer.js file in your HTML:

   
    <script src="typer.js"></script>

## Usage

To use Typer, follow these steps:

 1. Add an HTML element (e.g., a span ) to your HTML file with a unique identifier:

        <span id="typer-element"></div>

 2. Call the typer function and pass the element's selector, an array of words, and an optional options object:

        typer('#typer-element', ['This is', 'TYPER', 'from', 'ahgsql@github'], options);
        or
        let target = document.getElementById("target");
		 target.typer(["Hello", "This is ", "Typer"], {
		 stopOnLast: true,
		});

**selector (string):** The CSS selector for the HTML element where you want to apply the typewriter effect.
**arr (array):** An array of words or phrases that will be displayed one by one with the typewriter effect.
options (object, optional): An object containing additional configuration options (described below).

## Options

The **options** object can include the following properties:

**typeDelay** (number, default: 150): The delay (in milliseconds) between typing each character.
**waitBetween** (number, default: 1000): The delay (in milliseconds) between displaying each word.
**stopOnLast** (boolean, default: false): Determines whether the typewriter effect stops after displaying the last word in the array.

Example usage with options:

    typer('#typer-element', ['Hello', 'World'], {
	     typeDelay: 100,
	     waitBetween: 500,
	     stopOnLast: true
     });


## Methods

The Typer library provides the following methods:

**stop():** Pauses the typewriter effect.
**start():** Resumes the typewriter effect.
**wait(ms):** Pauses the typewriter effect for the specified duration (in milliseconds).

License
This project is licensed under the MIT License.
