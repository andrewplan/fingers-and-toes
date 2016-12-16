$( document ).ready( () => {
    let numVal;
    let numInputForm = $( '.number-input-form' );
    let numInput = $( '.number-input-form-number-input-box' );
    let startCounterBtn = $( '.start-counter' );
    let counterWrapper = $( '.counter-wrapper' );
    let counterLimit = $( '.counter-wrapper-counter-limit' );
    let counterText = $( '.counter-wrapper-counter-text' );
    let resetCounterBtn = $( '.reset-counter' );
    let restartCounterBtn = $( '.restart-counter' );
    let fingerAndToesWrapper = $( '.fingers-and-toes-wrapper' );
    let fingersWordWrapper = $( '.fingers-and-toes-wrapper-fingers-word-wrapper' );
    let toesWordWrapper = $( '.fingers-and-toes-wrapper-toes-word-wrapper' );
    let stopCounter = false;

    numInputForm.submit( () => {
        event.preventDefault();
        numVal = Number( $( '.number-input-form-number-input-box' ).val() );

        if ( numVal <= 0 || !Number.isInteger( numVal ) ) {
            alert( 'Invalid entry!' );
            return numInput.val( '' );
        }

        startCounter();

        numInputForm.hide();
        counterWrapper.show();
        fingerAndToesWrapper.show();
    } );

    resetCounterBtn.click( () => {
        resetCounter();

        // remove highlights from both words
        fingersWordWrapper.removeClass( 'highlighted' );
        toesWordWrapper.removeClass( 'highlighted' );

        // clear input box
        numInput.val( '' );

        counterWrapper.hide();
        fingerAndToesWrapper.hide();
        numInputForm.show();
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
        let counter = 0;

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

        counterLimit.text( numVal );
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
