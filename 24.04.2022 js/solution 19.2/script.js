const users = [
        {
            id: 167464,
            firstName: "Jimmy",
            lastName: "Arnold",
            email: "jimmya@gmail.com",
        },
        {
            id: 578447,
            firstName: "Martha",
            lastName: "Goldman",
            email: "gold@hotmail.com",
        },
        {
            id: 864578,
            firstName: "Tim",
            lastName: "Burton",
            email: "timmy.hotmail.com",
        },
    ];

    const ol = document.createElement("ol");
    ol.style.listStyleType = "none";
    const body = document.querySelector("body");
    body.append(ol);
    users.forEach(user =>{
        const li = document.createElement("li");
        li.setAttribute("data-id",user.id);
        li.innerText = user.firstName+" "+user.lastName;
        ol.append(li); 
    })