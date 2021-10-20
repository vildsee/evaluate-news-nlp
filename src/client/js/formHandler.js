function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formUrl = document.getElementById('url').value
    // Client.checkForName(formText)
    const data = { formUrl }

    if(Client.checkForName(formUrl)) {
        fetch('http://localhost:8081/meaningCloud', {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(function (res) {
                document.getElementById('model').innerHTML = 'Model: ' + res.model;
                document.getElementById('score').innerHTML = 'Score: ' + res.score_tag;
                document.getElementById('subjectivity').innerHTML = 'Subjectivity: ' + res.subjectivity;
                document.getElementById('confidence').innerHTML = 'Confidence: ' + res.confidence;
                document.getElementById('irony').innerHTML = 'Irony: ' + res.irony;
                document.getElementById('agreement').innerHTML = 'Agreement: ' + res.agreement;
            })
    }

    //Async POST
    // const postData = async (url, data) => {
    //     const res = await fetch ('http://localhost:8081/meaningcloud-api', {
    //         method: 'POST',
    //         credentials: 'same-origin',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({ "url": url })
    //     })
    //     console.log("::: Url Submitted :::")
    // }

    // //Async GET
    // const getData = async (url='') => {
    //     const req = await fetch('http://localhost:8081/meaningcloud-api')
    //     try {
    //         let allData = await req.json()
    //         console.log(allData)
    //         return allData
    //         .then(res => res.json())
    //         .then(function(res) {
    //             document.getElementById('results').innerHTML = res.message
            
    //         })
    //     } catch(error) {
    //         console.log('error')
    //     }        
    // }
}



export { handleSubmit }