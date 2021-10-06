function create_menu_item(label_name) {
    const menu_item = $("<p></p>").text(`${label_name}`);
    menu_item.addClass("nav-item");

    return menu_item;
}

function build_menu(mode, data) {
    // mode is how we know if the menu is the main screen or
    // to be displayed as a navbar.
    // data is the actual stuff to go in the menu
    let menu_holder = $("#menu-div");
    console.log(data);
    for (item in data) {
        console.log(`item: ${data[item].type}`);
        let menu_item = create_menu_item(data[item].type);
        menu_holder.append(menu_item);
    }
}

function load_menu() {
    fetch(`${webroot}/get_entry_types`)
    .then(response => response.json())
    .then(function(data) {
        return data;
    });
    return outside_data;
}

function load_cv_entries(type) {
    fetch(`${webroot}/get_cv_entries?type=${type}`)
    .then(response => response.json())
    .then(function(data) {
        console.log(data);
    });
}

function update_menu_height() {
    // if ($("#menu").attr("class") == "row") {
    //     $("#menu").height(window.innerHeight);
    // } else {
    //     $("#menu").removeAttr("style");
    // }
}

$("document").ready(function() {
    update_menu_height();
})

$("window").change(function() {
    update_menu_height();
})

$("document").change(function() {
    update_menu_height();
})