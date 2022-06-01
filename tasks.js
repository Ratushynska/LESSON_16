/*  Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. 
    Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
    Для кожного елементу свій блок div.post
    Всі характеристики повинні мати свої блоки всередені div.post
    https://jsonplaceholder.typicode.com/posts
*/
/*
fetch (`https://jsonplaceholder.typicode.com/posts`) 
    .then (posts => posts.json())
    .then (posts => {
        let globalDiv = document.createElement('div');
        globalDiv.setAttribute('class','gDiv');
        document.body.appendChild(globalDiv);

        for (let i of posts) {
            let divForEveryPost = document.createElement('div');
            divForEveryPost.setAttribute('class', 'everyPostDiv');
            divForEveryPost.innerHTML = 
                `<h2>UserId: ${i.userId}</h2>
                <h4>Id: ${i.id}</h4>
                <h4>Title: ${i.title}</h4>
                <h4>Body: ${i.body}</h4>`;

            globalDiv.appendChild(divForEveryPost)
        }
    })
*/

/*  Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
    Для кожного елементу свій блок div.comment
    Всі характеристики повинні мати свої блоки всередені div.comment
    https://jsonplaceholder.typicode.com/comments
*/
/*
fetch (`https://jsonplaceholder.typicode.com/comments`) 
    .then (comments => comments.json())
    .then (comments => {
        let divComment = document.createElement('div');
        divComment.setAttribute('class','comment');
        document.body.appendChild(divComment);

        for (let i of comments) {
            let divForEveryComment = document.createElement('div');
            divComment.appendChild(divForEveryComment);

            for (let j in i) {
                let divForEveryCommentElement = document.createElement('div');
                divForEveryCommentElement.innerText = `${j} ${i[j]}`;
                divComment.appendChild(divForEveryCommentElement);
            } 
        }
        
    })
*/
