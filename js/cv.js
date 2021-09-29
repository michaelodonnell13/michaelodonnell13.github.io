function load_menu() {
    fetch(`http://www.ochenos.com/get_entry_types`)
    .then(response => response.json())
    .then(function(data) {
        console.log(data);

    });
}

function load_cv_entries(type) {
    fetch(`http://www.ochenos.com/get_cv_entries?type=${type}`)
    .then(response => response.json())
    .then(function(data) {
        console.log(data);

    });
}

$("document").ready(function() {

    load_menu();

})