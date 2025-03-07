let postText = document.getElementById("postText");
let postBtn = document.getElementById("postBtn");
let UserName = document.getElementById("userName");
let background = document.querySelectorAll(".bg-color");
let post = document.getElementById("post");
let getName = localStorage.getItem("name");
let full = document.getElementById("full");
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

postBtn.addEventListener("click", function () {
  post.innerHTML += `<div class="post-box m-3">
        <div class="user-info px-2">
        <img src="https://scontent.fkhi2-3.fna.fbcdn.net/v/t39.30808-1/271807667_896762127668625_7208443774824397038_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=104&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeFh3mniuFm8ETNOsWULXC3LT6esr3fsu6xPp6yvd-y7rFLbuJBuChhlqysFtwaDCWy2kZ2rjuvHMKNw2zyNxTFw&_nc_ohc=wuklhQNY4jIQ7kNvgGguQ_Q&_nc_oc=Adit6QqEGx9ZUyKu-0Dq2GtaSM_ZUmoPeVts_dCEh9GgjjDgMgP3waferCXh4eqwlg0&_nc_zt=24&_nc_ht=scontent.fkhi2-3.fna&_nc_gid=AVfa8urZxPVpoW8vsThkbxh&oh=00_AYC9UiTqG11kkkGWLrXiwtBJN3n4wGjYFAOYDU55xWTx_A&oe=67C3D547" alt="User Image">
        <div class="user-name">${getName}</div>
        <div class="user-name text-end w-100"><button class="delete-post" onclick="deletePost()">🗑</button></div>
        </div>
        <div class="post-content" style='
                    background: ${postBg};
                  '>
        ${postText.value}
        </div>
        </div>`;
  postText.value = "";
  full.classList.remove("h-100vh");
  if (postText.value == '') {
    postBtn.disabled = true;
  }
});

function deletePost() {
  let post = event.target.parentNode.parentNode.parentNode;
  post.remove();
}
