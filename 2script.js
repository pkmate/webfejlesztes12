
// Ez azért van külön, mert ha egybe rakom a többivel, akkor ez vagy a többi nem működik bruuuuh
  document.getElementById("gomb").addEventListener("click", function () {
    const input = document.getElementById("bankszam").value;
    const regex = /\d{4}-\d{4}-\d{4}-\d{4}$/; //regex ahhoz kell, hogy a test működjön

    if (regex.test(input)) {
        $("#bank_form").validate({
            rules: {
                cvc: {
                    required: true,
                    minlength: 3,
                    maxlength: 3
                },
                datum: {
                    required: true,
                    minlength: 5,
                    maxlength: 5
                },
                kartya_nev: {
                    required: true
                },
                sz_nev: {
                    required: true
                },
                mail: {
                    required: true,
                    email: true
                }
            },
            messages: {
                cvc: {
                    required: "Mező kitöltése kötelező!",
                    minlength: "Valós kódot adj meg!",
                    maxlength: "Valós kódot adj meg!"
                },
                datum: {
                    required: "Mező kitöltése kötelező!",
                    minlength: "Helyes formátumot adj meg!",
                    maxlength: "Helyes formátumot adj meg!"
                },
                kartya_nev: {
                    required: "Mező kitöltése kötelező!"
                },
                sz_nev: {
                    required: "Mező kitöltése kötelező!"
                },
                mail: {
                    required: "Mező kitöltése kötelező!",
                    email: "Valós e-mail címet adj meg!"
                }
            }
        });

        if ($("#bank_form").valid()) {
            $("#bank_form").submit();
        }
    } else {
        alert("Érvénytelen kártya szám!");
    }
});