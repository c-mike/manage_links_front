const URL = 'https://manage-links-back.herokuapp.com';

function edit() {
    const id = parseInt(document.getElementById('id_edit').value);
    const title = document.getElementById('title').value;
    const url = document.getElementById('url').value;

    const data = {id, title, url}

    axios.post(URL+'/edit', data)
    .then(()=> window.location.reload()) 
    .catch(errors => {
        console.log(errors)
        document.getElementById('url').hidden = false
    })
}

function del() {
    const id = parseInt(document.getElementById('id_edit').value);
    const data = {id}
    console.log(data)

    axios.delete(URL+'/remove', {data})
    .then(()=> window.location.reload()) 
    .catch(errors => console.log(errors))
}
