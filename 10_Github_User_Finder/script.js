const URL = "https://api.github.com/users/";
const userSearch = document.querySelector('#user-search');
const search = document.querySelector('.search-btn');

const githubSearch = async (username) => {
    const userdetails = await fetch(`${URL}${username}`);
    const fetchedData = await userdetails.json();
    embeddDetails(fetchedData)
}

const embeddDetails = (jsonData) => {
    const { avatar_url, login, name,
        created_at, public_repos,
        followers, following, email,
        twitter_username, location
        } = jsonData


    userCard(avatar_url, name, login, created_at, public_repos, followers, following, location, email, twitter_username);
}

const userCard = (avatar_url, name, login, created_at, public_repos, followers, following, location, email, twitter_username) => {
    const userdetails = document.querySelector('.user-details-holder');

    name == null ? name = login : name;
    email == null ? email = 'Not Available' : email;
    location == null ? location = 'Not Available' : location;
    twitter_username == null ? twitter_username = 'Not Available' : twitter_username;

    userdetails.innerHTML = `<div class="user-details">
                                <div class="user-personal-details">
                                    <div class="avatar-holder">
                                        <img src="${avatar_url}" alt="">
                                    </div>
                                    <div class="account-details">
                                        <span class="user-name">${name}</span>
                                        <span class="login">@${login}</span>
                                        <span class="joined-at">${created_at.slice(0, 10)}</span>
                                    </div>
                                </div>

                                <div class="connection-details">
                                    <div class="repository">
                                        <span>Repository</span>
                                        <span>${public_repos}</span>
                                    </div>
                                    <div class="followers">
                                        <span>Followers</span>
                                        <span>${followers}</span>
                                    </div>
                                    <div class="following">
                                        <span>Following</span>
                                        <span>${following}</span>
                                    </div>
                                </div>

                                <div class="other-details">
                                    <span class="location"><i class="fa-solid fa-location-dot"></i> : ${location}</span>
                                    <span class="email"><i class="fa-regular fa-envelope"></i> : ${email}</span>
                                    <span class="twitter"><i class="fa-brands fa-x-twitter"></i> : ${twitter_username}</span>
                                    <span class="github"><i class="fa-brands fa-github"></i> : github.com/${name}</span>
                                </div>
                            </div>`
}

search.addEventListener('click', (e) => {
    e.preventDefault();
    githubSearch(userSearch.value);
})





