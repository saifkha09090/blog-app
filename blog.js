let postText = document.getElementById("postText");
let postBtn = document.getElementById("postBtn");
let UserName = document.getElementById("userName");
let background = document.querySelectorAll(".bg-color");
let post = document.getElementById("post");
let full = document.getElementById("full");
let getName = JSON.parse(localStorage.getItem("users"));

getName = getName.find(
  (user) => user.email === localStorage.getItem("email")
).name;
UserName.innerText = getName;

full.classList.add("h-100vh");

postText.addEventListener("input", function () {
  let inputValue = postText.value.trim();
  if (inputValue !== "") {
    postBtn.classList.add("active");
    postBtn.removeAttribute("disabled");
  } else {
    postBtn.classList.remove("active");
    postBtn.setAttribute("disabled", "true");
  }
});
let postBg;
background.forEach(function (bg) {
  bg.addEventListener("click", function () {
    let selectedBackground = bg.style.background;
    postText.style.background = selectedBackground;
    postBg = selectedBackground;
  });
});

let allPosts = [];

postBtn.addEventListener("click", function () {
  let postObj = {
    id: Date.now(),
    name: getName,
    content: postText.value,
    postBackground: postBg,
  };
  let storedPost = JSON.parse(localStorage.getItem("posts"));
  allPosts.push(postObj);
  localStorage.setItem("posts", JSON.stringify(allPosts));
  postText.value = "";

  if (postText.value == "") {
    postBtn.disabled = true;
  }

  if (post.innerHTML != "") {
    full.classList.remove("h-100vh");
  }
  renderPosts();

});
renderPosts();
function renderPosts() {
  let storedPost = JSON.parse(localStorage.getItem("posts")) || [];
  post.innerHTML = "";
   storedPost.forEach((pos) => {
    post.innerHTML += `<div class="post-box m-3" data-id="${pos.id}">
        <div class="d-flex justify-content-between mb-2">
        <div class="d-flex">
            <img
              src="https://cdn3.iconfinder.com/data/icons/login-7/512/LOGIN-10-512.png"
              class="rounded-circle me-2 img"
              alt="User"
            />
            <label class="align-self-center">
              <p class="mb-0 fw-bold">${pos.name}</p>
            </label>
          </div>
        <div class="">
        <button class="delete-post">🗑</button>
        </div>
        </div>
        <div class="post-content" style='
                    background: ${pos.postBackground || "#ededed"};
                  '>
        ${pos.content}
        </div>
        </div>`;
  });

  // Add event listener to all delete buttons after rendering
  document.querySelectorAll(".delete-post").forEach((btn) => {
    btn.addEventListener("click", deletePost);
  });

  if (storedPost.length === 0) {
    full.classList.add("h-100vh");
  } else {
    full.classList.remove("h-100vh");
  }

  allPosts = storedPost;
}

function deletePost(e) {
 let postBox = e.target.closest(".post-box");
  let postId = Number(postBox.getAttribute("data-id"));

  postBox.remove();

  let storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
  let updatedPosts = storedPosts.filter(post => post.id !== postId);

  localStorage.setItem("posts", JSON.stringify(updatedPosts));

  if (updatedPosts.length === 0) {
    full.classList.add("h-100vh");
  }
  
}
