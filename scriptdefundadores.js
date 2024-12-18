function openFounderModal(name, description, socials) {
    document.getElementById("founder-name").innerText = name;
    document.getElementById("founder-description").innerText = description;

    const socialIcons = {
        instagram: "<a href='#'><i class='fab fa-instagram'></i></a>",
        facebook: "<a href='#'><i class='fab fa-facebook'></i></a>",
        tiktok: "<a href='#'><i class='fab fa-tiktok'></i></a>",
        twitter: "<a href='#'><i class='fab fa-twitter'></i></a>",
        linkedin: "<a href='#'><i class='fab fa-linkedin'></i></a>",
        youtube: "<a href='#'><i class='fab fa-youtube'></i></a>"
    };

    const iconosContainer = document.getElementById("iconos2");
    iconosContainer.innerHTML = socials.map(social => socialIcons[social] || "").join("");

    document.getElementById("founder-modal").style.display = "flex";
}

function closeFounderModal() {
    document.getElementById("founder-modal").style.display = "none";
}
