function navbar() {
    let hoz_navbar = document.querySelector('.hoz_navbar')
    hoz_navbar.innerHTML = `
       
       <div class="sitename-info">
            <span>chatbox</span>
            <i class="fas fa-up-right-and-down-left-from-center"></i>
        </div>
        <div class="search-bar">
            <i class="fas fa-search"></i>
            <input type="text" placeholder="hello world">
        </div>
        <div class="notification-holder">
            <div class="notification-bar">
                <i class="fas fa-bell"></i>
                <span>3</span>
            </div>
            <div class="notification-bar">
                <i class="fas fa-message"></i>
                <span>4</span>
            </div>
            <div class="notification-bar">
                <div class="person">
                    <i class="fas fa-user"></i>
                </div>
            </div>
        </div>
        <div class="navigator">
                <a href="/chatbox/login" class="active">Login</a>
            
               <a href="/chatbox/register">Register</a>
        </div>
        <div class="hidden-icon">
            <i class="fas fa-bars"></i>
        </div>
        
    
    `
}
navbar()