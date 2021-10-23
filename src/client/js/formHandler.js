function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formUrl = document.getElementById('url').value
    // Client.checkForName(formText)
    const data = { formUrl }

    //POST
    if (Client.checkForName(formUrl)) {
        fetch('http://localhost:8080/meaningCloud', {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({url: formUrl}),
        })
        .then(res => res.json())
        .then(() => updateUI())
    }   else {
        alert ('This is not a valid url. Please enter correct url.')
    }

}

//Update UI
const updateUI = async () => {
    const req = await fetch('/meaningCloud');
    try {
        const allData = await req.json();

        document.getElementById('model').innerHTML = 'Model: ' + res.model;
        document.getElementById('score').innerHTML = 'Score: ' + res.score_tag;
        document.getElementById('subjectivity').innerHTML = 'Subjectivity: ' + res.subjectivity;
        document.getElementById('confidence').innerHTML = 'Confidence: ' + res.confidence;
        document.getElementById('irony').innerHTML = 'Irony: ' + res.irony;
        document.getElementById('agreement').innerHTML = 'Agreement: ' + res.agreement;
    } catch (error) {
        console.log('UI error')
    }
}
export { handleSubmit }
//     if(Client.checkForName(formUrl)) {
//         fetch('http://localhost:8081/meaningCloud', {
//             method: 'POST',
//             credentials: 'same-origin',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(data),
//         })
//             .then(res => res.json())
//             .then(function (res) {
//                 document.getElementById('model').innerHTML = 'Model: ' + res.model;
//                 document.getElementById('score').innerHTML = 'Score: ' + res.score_tag;
//                 document.getElementById('subjectivity').innerHTML = 'Subjectivity: ' + res.subjectivity;
//                 document.getElementById('confidence').innerHTML = 'Confidence: ' + res.confidence;
//                 document.getElementById('irony').innerHTML = 'Irony: ' + res.irony;
//                 document.getElementById('agreement').innerHTML = 'Agreement: ' + res.agreement;
//             })
//     }   else {
//         alert ('Incorrect address, please enter a valid URL!')
//     }

    
// }



