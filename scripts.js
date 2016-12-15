$( document ).ready( () => {
    let numInput = $( '.number-input-form-number-input-box' );
    let startCounter = $( '.start-counter' );
    let resetCounter = $( '.reset-counter' );
    let restartCounter = $( '.restart-counter' );
    let fingersWordWrapper = $( '.fingers-and-toes-container-fingers-word-wrapper' );
    let toesWordWrapper = $( '.fingers-and-toes-container-toes-word-wrapper' );
    let counterText = $( '.counter-wrapper-counter-text' );

    startCounter.click( () => {
        event.preventDefault();
        let numVal = $( '.number-input-form-number-input-box' ).val();
        // count up incrementally every second
        // stop once the given number is reached
        for ( let i = 0; i <= numVal; i++ ) {
            setTimeout( incrementCounter( i ), i * 1000 );
        }

        function incrementCounter( savedReference ) {
            return function() {
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
                counterText.text( savedReference );
            }
        }

    } )

    function addHighlight( wrapper ) {
        // add highlight to word
        wrapper.addClass( 'highlighted' );
    }

    function removeHighlight( wrapper ) {
        // remove highlight from word
        wrapper.removeClass( 'highlighted' );
    }

    resetCounter.click( () => {
        // reset counter to 0
        counterText.val( 0 );
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


} );
