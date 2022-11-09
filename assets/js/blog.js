// Local Storage operations
commentsGetFromLocalStorage();

// add new comment
$("#submit-comment").click(function (e) {
    e.preventDefault();
    let name = jQuery.trim($("#f1").val())
    let comment = jQuery.trim($("#f3").val());

    // email is not important in this case
    if (name.length > 0 && comment.length > 0  && jQuery.trim($("#f3").val()).length > 0) {
        let d = new Date();
        let month = d.getMonth();
        let day = d.getDate();
        let year = d.getFullYear();
        let monthArr = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
        let monthStr = monthArr[month];
        let newComment = `
        <li>
            <div class="avatar">
                <img src="assets/images/photos/comment-avatar.png">
            </div>
            <div class="comment-content">
                <div class="comment-by">
                    <strong>${name}</strong>
                    <span>${day} ${monthStr} ${year} </span>
                    <a href="#" class="btn-reply"><i class="fa fa-reply"></i>
                        Reply</a>
                </div>
                <p>${comment}</p>
            </div>
        </li>
        `
        //change comments count
        document.getElementById("comments-parnet").innerHTML += newComment;
        let commentscount = document.querySelectorAll("#comments-parnet li").length;
        commentsCountText = `Comments (${commentscount})`;
        document.getElementById("comments-count").innerHTML = commentsCountText;
        commentsAddToLocalStorage()
        $("#f1").val("");
        $("#f2").val("");
        $("#f3").val("");
    }
    else
    alert("please fill the blanks")
});


// add comments to local st
function commentsAddToLocalStorage() {
    let text = document.getElementById("comments-parnet").innerHTML;
    window.localStorage.setItem("comments", text);
}

// get comments from local st
function commentsGetFromLocalStorage() {
    let text = window.localStorage.getItem("comments");
    if(text)
    document.getElementById("comments-parnet").innerHTML = text;
}








