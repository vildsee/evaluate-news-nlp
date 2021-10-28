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
        const res = await req.json();

        //Table
        let table = document.createElement('table')
        let thead = document.createElement('thead')
        let tbody = document.createElement('tbody')

        table.appendChild(thead)
        table.appendChild(tbody)
        document.getElementById('resultTable').appendChild(table)

        //Heading row
        let row_1 = document.createElement('tr')
        let heading_1 = document.createElement('th')
        heading_1.innerHTML = 'Form results:';

        row_1.appendChild(heading_1)
        thead.appendChild(row_1)

        //Row 2
        let row_2 = document.createElement('tr')
        let row_2_data_1 = document.createElement('td')
        row_2_data_1.innerHTML = 'Model: ';
        let row_2_data_2 = document.createElement('td')
        row_2_data_2.innerHTML = res.model

        row_2.appendChild(row_2_data_1)
        row_2.appendChild(row_2_data_2)
        tbody.appendChild(row_2)

        //Row 3
        let row_3 = document.createElement('tr')
        let row_3_data_1 = document.createElement('td')
        row_3_data_1.innerHTML = 'Score: ';                
        let row_3_data_2 = document.createElement('td')
        row_3_data_2.innerHTML = res.score_tag

        row_3.appendChild(row_3_data_1)
        row_3.appendChild(row_3_data_2)
        tbody.appendChild(row_3)

        //Row 4
        let row_4 = document.createElement('tr')
        let row_4_data_1 = document.createElement('td')
        row_4_data_1.innerHTML = 'Subjectivity: ';
        let row_4_data_2 = document.createElement('td')
        row_4_data_2.innerHTML = res.subjectivity

        row_4.appendChild(row_4_data_1)
        row_4.appendChild(row_4_data_2)
        tbody.appendChild(row_4)

        //Row 5
        let row_5 = document.createElement('tr')
        let row_5_data_1 = document.createElement('td')
        row_5_data_1.innerHTML = 'Confidence: ';
        let row_5_data_2 = document.createElement('td')
        row_5_data_2.innerHTML = res.confidence

        row_5.appendChild(row_5_data_1)
        row_5.appendChild(row_5_data_2)
        tbody.appendChild(row_5)

        //Row 6
        let row_6 = document.createElement('tr')
        let row_6_data_1 = document.createElement('td')
        row_6_data_1.innerHTML = 'Irony: ';
        let row_6_data_2 = document.createElement('td')
        row_6_data_2.innerHTML = res.irony

        row_6.appendChild(row_6_data_1)
        row_6.appendChild(row_6_data_2)
        tbody.appendChild(row_6)

        //Row 7
        let row_7 = document.createElement('tr')
        let row_7_data_1 = document.createElement('td')
        row_7_data_1.innerHTML = 'Agreement: ';
        let row_7_data_2 = document.createElement('td')
        row_7_data_2.innerHTML = res.agreement;

        row_7.appendChild(row_7_data_1)
        row_7.appendChild(row_7_data_2)
        tbody.appendChild(row_7)
    
        //Adding id's
        table.id = 'rTable'
        heading_1.id = 'formResults'
        heading_1.colSpan = '2'
        row_2_data_1.id = 'model'
        row_2_data_2.id = 'rModel'
        row_3_data_1.id = 'score'
        row_3_data_2.id = 'rScore'
        row_4_data_1.id = 'subjectivity'
        row_4_data_2.id = 'rSubjectivity'
        row_5_data_1.id = 'confidence'
        row_5_data_2.id = 'rConfidence'
        row_6_data_1.id = 'irony'
        row_6_data_2.id = 'rIrony'
        row_7_data_1.id = 'agreement'
        row_7_data_2.id = 'rAgreement'
        
      
    } catch (error) {
        console.log('UI error')
    }
}
export { handleSubmit }