const form = document.querySelector('form')!;
const addressInput = document.getElementById('address')! as HTMLInputElement;

function searchAdressHandler(event: Event) {
    event.preventDefault();
    const enteredAdress = addressInput.value;

    //send this to google's API!
}

form.addEventListener('submit', searchAdressHandler);