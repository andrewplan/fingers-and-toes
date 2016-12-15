$( document ).ready( () => {
    let numInput = $( '.number-input-form-number-input-box' );
    let numVal = $( '.number-input-form-number-input-box' ).val();
    let startCounterBtn = $( '.start-counter' );
    let resetCounter = $( '.reset-counter' );
    let restartCounter = $( '.restart-counter' );
    let fingersWordWrapper = $( '.fingers-and-toes-container-fingers-word-wrapper' );
    let toesWordWrapper = $( '.fingers-and-toes-container-toes-word-wrapper' );
    let counterText = $( '.counter-wrapper-counter-text' );
    let stopCounter = false;

    startCounterBtn.click( () => {
        return startCounter();
    } );

    resetCounter.click( () => {
        // reset counter to 0
        stopCounter = true;
        console.log( stopCounter );
        counterText.text( 0 );
        // remove highlights from both words
        fingersWordWrapper.removeClass( 'highlighted' );
        toesWordWrapper.removeClass( 'highlighted' );
        // clear input box
        numInput.val( '' );
    } );

    restartCounter.click( () => {
        // run resetCounter function
        // run runCounter function with the original user input
        // if no user input, run runCounter starting at 0
    } );

    function startCounter() {
        event.preventDefault();
        let counter = 0;
        numVal = $( '.number-input-form-number-input-box' ).val();
        // count up incrementally every second
        // stop once the given number is reached

        let timer = setInterval( () => {
            if ( counter > numVal || stopCounter ) {
                clearInterval( timer );
                stopCounter = false;
            }
            else if ( counter <= numVal ) {
                updateCounterDisplay( counter );
                updateHighlights( counter );
                counter++;
            }
        }, 1000 );
    }

    function updateCounterDisplay( savedReference ) {
        counterText.text( savedReference );
    }

    function updateHighlights( savedReference ) {
        if ( savedReference > 0 ) {
            if ( savedReference % 3 === 0 && savedReference % 5 === 0 ) {
                addHighlight( fingersWordWrapper );
                addHighlight( toesWordWrapper );
            }
            else if ( savedReference % 3 === 0 ) {
                addHighlight( fingersWordWrapper );
                removeHighlight( toesWordWrapper );
            }
            else if ( savedReference % 5 === 0 ) {
                addHighlight( toesWordWrapper );
                removeHighlight( fingersWordWrapper );
            }
            else {
                removeHighlight( fingersWordWrapper );
                removeHighlight( toesWordWrapper );
            }
        }
    }

    function addHighlight( wrapper ) {
        // add highlight to word
        wrapper.addClass( 'highlighted' );
    }

    function removeHighlight( wrapper ) {
        // remove highlight from word
        wrapper.removeClass( 'highlighted' );
    }

} );
