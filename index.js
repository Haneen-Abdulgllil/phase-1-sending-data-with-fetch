// Add your code here
const submitData = (userName, userEmail) => {
    const section = document.getElementById('userDetails')
    const data = {
        name: userName,
        email: userEmail,
    }
    const configurationObject = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
    };
    return   fetch("http://localhost:3000/users", configurationObject)
                .then(response => {
                    return response.json();
                })
                .then(object => {
                    const span_id = document.createElement('span');
                    span_id.innerHTML = `id: ${object.id}`;
                    section.appendChild(span_id);
                }).catch(error => {
                    const error_msg_span = document.createElement('span');
                    error_msg_span.innerHTML = `${error.message}`;
                    section.appendChild(error_msg_span);
                });
}
submitData("Haneen", "haneenabdulglil2018@yahoo.com");

  
  

  
  
  
  
  
  