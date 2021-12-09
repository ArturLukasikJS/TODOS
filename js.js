const button = document.getElementById('dodaj');
const poleTekstowe = document.getElementById("tekst");
const todosy = document.getElementById("todocon");

button.addEventListener("click", function() {

    const zmienna = document.getElementById("tekst")
    console.log(zmienna.value);
    if (zmienna.value === "") {
        zmienna.style.backgroundColor = "red"
    } else {

        zmienna.style.backgroundColor = "whitesmoke"
        const div = document.createElement("div");
        const paragraph = document.createElement("p");
        paragraph.innerHTML = zmienna.value;
        paragraph.classList.add('paragraph-styling');
        div.classList.add('flexbox-container')
        const btn = document.createElement("button");
        const check = document.createElement("button");


        btn.addEventListener("click", function(e) {
            console.log(e.target);
            const item = e.target;
            if (e.target.nodeName === "I") {
                e.target.parentElement.parentElement.remove();
                return;
            }
            e.target.parentElement.remove();

        });

        check.addEventListener("click", function(o) {
            const item = o.target;
            if (o.target.nodeName === "I") {
                o.target.parentElement.parentElement.style.textDecoration = "line-through";
                o.target.parentElement.parentElement.style.textDecorationColor = "red";
                return;
            }
            o.target.parentElement.style.textDecoration = "line-through";
            o.target.parentElement.style.textDecorationColor = "red";
        })


        check.classList.add('check-styling');
        check.innerHTML = '<i class="far fa-calendar-check"></i>'
        btn.classList.add('button-styling');
        btn.innerHTML = '<i class="fab fa-xbox"></i>';
        div.appendChild(paragraph);
        div.appendChild(btn);
        div.appendChild(check);
        todosy.prepend(div);
        zmienna.value = "";

    }

});

// const clickTrash = document.getElementsByClassName()
// addEventListener