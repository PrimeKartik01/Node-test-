const form = document.getElementById("contactForm");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const employee = {
        name: document.getElementById("name").value,
        number: document.getElementById("email").value
    }
    try{
        const response = await fetch("");
    }catch(error){

    }
})