$( document ).ready( () => {
    let numInput = $( '.number-input-form-number-input-box' );
    let numVal = $( '.number-input-form-number-input-box' ).val();
    let startCounterBtn = $( '.start-counter' );
    let resetCounterBtn = $( '.reset-counter' );
    let restartCounterBtn = $( '.restart-counter' );
    let fingersWordWrapper = $( '.fingers-and-toes-container-fingers-word-wrapper' );
    let toesWordWrapper = $( '.fingers-and-toes-container-toes-word-wrapper' );
    let counterText = $( '.counter-wrapper-counter-text' );
    let stopCounter = false;

    startCounterBtn.click( () => {
        return startCounter();
    } );

    resetCounterBtn.click( () => {
        resetCounter();

        // remove highlights from both words
        fingersWordWrapper.removeClass( 'highlighted' );
        toesWordWrapper.removeClass( 'highlighted' );

        // clear input box
        numInput.val( '' );
    } );

    restartCounterBtn.click( () => {
        // run resetCounter function
        resetCounter();

        // remove highlights from both words
        fingersWordWrapper.removeClass( 'highlighted' );
        toesWordWrapper.removeClass( 'highlighted' );

        // run startCounter function with the original user input
        startCounter();
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

    function resetCounter() {
        // reset counter to 0
        stopCounter = true;
        counterText.text( 0 );
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
