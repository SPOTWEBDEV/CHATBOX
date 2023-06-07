function sidenavbar() {
    let sidenavbar = document.querySelector('.sidenavbar');
    sidenavbar.innerHTML = `

       <div class="menu-d">
                <div class="menu-info">
                    <i style="color: var(--primary);" class="fa-solid fa-house-chimney"></i>
                    <small>Home</small>
                </div>
                <div class="menu-info">
                    <i style="color: #fdd124;" class="fa-solid fa-video"></i>
                    <small>video</small>
                </div>
                <div class="menu-info">
                    <i style="color:rgb(236, 27, 27)" class="fas fa-square-poll-vertical"></i>
                    <small>feed</small>
                </div>
                <div  class="menu-info">
                    <i style="color:aqua" class="fas fa-pager"></i>
                    <small>page</small>
                </div>
                <div class="menu-info">
                    <i style="color:rgb(27, 207, 114);" class="fas fa-users"></i>
                    <small>group</small>
                </div>
                <div class="menu-info">
                    <i style="color:rgb(235, 45, 127);" class="fa-solid fa-newspaper"></i>
                    <small>blog</small>
                </div>
                <div class="menu-info">
                    <i style="color:rgb(107, 107, 107);" class="fas fa-cog"></i>
                    <small>setting</small>
                </div>
                
                <div class="menu-info">
                    <a href="/chatbox/logout">
                    <i style="color:rgb(107, 107, 107);" class="fas fa-light fa-right-from-bracket"></i>
                    <small>logout</small>
                    </a>
                </div>
                
            </div>
    
    
    `
}
sidenavbar()