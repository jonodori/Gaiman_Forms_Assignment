console.log('In script.js 🐒');

$(document).ready(onReady);

function onReady() {
    console.log('so ready! 🎈');

    // Event Listener
    // Event Handler
    // Subscription
    //$('#submit-btn').on('click', onSubmit);
    $(document).on('click', '#submit-btn', onSubmit);
    // <button>

    // Alt syntax:
    // $('#submit-btn').click(onSubmit)

    // Handle 🦖 delete button clicks
    //$('.delete-btn').on('click', doTheThing);

    // "Event delegation"
    // "Using a descendent selector"
    // Listen for clicks on the document
    // if we clicked on a .delete-btn inside
    // the document, call onDelete()
    $(document).on('click', '.delete-btn', onDelete)
}

/* function doTheThing() {
    if (the click happened inside a .delete-btn) {
        onDelete();
    }
    else {
        // do nothing
    }
} */

function onDelete() {
    // 'this' is the element that cause the event
    console.log('🦖 in onDelete()', $(this));

    let tr = $(this).parent().parent();
    //   👆 <button> 👆 <td>  👆 <tr>

    // $(this).parentsUntil('tr')

    let movieName = $(this)
        .parent()       // <td>
        .siblings()     // all the <td>'s
        .first()        // the first <td>
        .text();        // "The Princess Bride"
    alert(`You just deleted ${movieName}! 🦧`);

    tr.remove();
}

function onSubmit() {
    // Let's look at the movie name input 👁️ 🎁
    let movieName = $('#movie-name').val();
    // <input id="movie-name">
    console.log('movieName', movieName);

    let movieGenre = $('#movie-genre').val();   // 🎁
    console.log('movieGenre', movieGenre);

    let movieYear = $('#movie-year').val();   // 🎁
    console.log('movieYear', movieYear);


    // We just read some data from the DOM
    // Now it's time to write that data to the DOM
    $('#movie-table').append(`
        <tr>
            <td>${movieName}</td>
            <td>${movieGenre}</td>
            <td>${movieYear}</td>
            <td>
                <button class="delete-btn">
                    🦖 Delete Me
                </button>
            </td>
        </tr>  
    `);

    $('#movie-name').val('');
}