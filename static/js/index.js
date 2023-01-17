const URL = 'https://manage-links-back.herokuapp.com';

function saveLink(title, url){
    const data = {title, url}
    console.log('data ', data)

    axios.post(URL+'/add', data)
    .then(()=> {
        document.getElementById("successAlert").removeAttribute("hidden");
    }) 
    .catch(errors => {
        document.getElementById("successAlert").removeAttribute("hidden");
    })
}

function edit() {
    const id = parseInt(document.getElementById('id_edit').value);
    const title = document.getElementById('title').value;
    const url = document.getElementById('url').value;

    const data = {id, title, url}

    axios.post(URL+'/edit', data)
    .then(()=> window.location.reload()) 
    .catch(errors => {
        document.getElementById("fail").removeAttribute("hidden");
    })
}

function del() {
    const id = parseInt(document.getElementById('id_del').value);
    const data = {id}
    console.log(data)

    axios.delete(URL+'/remove', {data})
    .then(()=> window.location.reload()) 
    .catch(() => 
        document.getElementById("fail").removeAttribute("hidden"))
}
