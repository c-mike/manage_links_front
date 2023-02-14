// const SERVER = 'http://localhost:8888'; // development
const SERVER = 'https://manage-links-back.herokuapp.com'; //production

function saveLink(title, url){
    const data = {title, url}
    console.log('data ', data)

    axios.post(SERVER+'/add', data)
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

    axios.post(SERVER+'/edit', data)
    .then(()=> window.location.reload()) 
    .catch(errors => {
        document.getElementById("fail").removeAttribute("hidden");
    })
}

function del() {
    const id = parseInt(document.getElementById('id_del').value);
    const data = {id}
    console.log(data)

    axios.delete(SERVER+'/remove', {data})
    .then(()=> window.location.reload()) 
    .catch(() => 
        document.getElementById("fail").removeAttribute("hidden"))
}
