
let res = fetch('https://jsonplaceholder.typicode.com/posts');
res
.then((value)=>value.json())
.then((value)=>document.querySelector('.table-container').innerHTML= generateTable(value));

let table = `<table>`
function generateTable(data){
        table += `<tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Body</th>
                    
                  </tr>`;

        // Iterating through array of objects
        data.forEach((i) => {
            table += `<tr>
                        <td>${i.id}</td>
                        <td>${i.title}</td>
                        <td>${i.body}</td>
                    </tr>`
        });
        table += `</table>`
        return table;
}


    