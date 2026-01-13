// import accessories from "./dragonfable-accessories-stats.json" with {type: "json"};
// import weapons from "./dragonfable-weapons-stats.json" with {type: "json"};
fetch("./dragonfable-accessories-stats.json")
    .then(response => {
        return response.json();
    })
    .then(data => console.log(data));

fetch("./dragonfable-weapons-stats.json")
    .then(response => {
        return response.json();
    })
    .then(data => {
        data = data.slice(0, 20);
        console.log(data);
        for (item of data) {
            displayItem(item);
        }
    });

function displayItem(item) {
    let tr = document.createElement("tr");
    tr.setAttribute("onmouseover", "previewItem("+item.id+")");
    tr.setAttribute("onmouseout", "removePreivew("+item.id+")");
    for (field in item) {
        let td = document.createElement("td");
        td.innerText = item[field];
        tr.appendChild(td);
    }
    document.getElementsByTagName("table")[0].appendChild(tr);
}

function previewItem(id){
    preview = document.createElement("iframe");
    preview.setAttribute("src", "./items/weapons/" + id + ".html");
    preview.id = "preview-" + id;
    document.body.appendChild(preview);
}

function removePreivew(id) {
    document.getElementById("preview-"+id).remove();
}