function submitData(name, email) {
    const formData = {
        name: name,
        email: email
    };

    const requestOptions = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(formData)

    };
    
    return fetch("http://localhost:3000/users", requestOptions)
       .then(response => {
        if (!response.ok) {
            throw new Error('Network issue!');
        }
        return response.json();
       })
       .then(data => {
        const id = data.id;
        document.body.append(id);
       })
       .catch(error => {
        document.body.append(error.message);
       });
    
}
