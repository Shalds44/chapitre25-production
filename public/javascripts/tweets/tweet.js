window.addEventListener('DOMContentLoaded', () => {
    bindTweet()
})

function bindTweet() {
    const elements = document.querySelectorAll('.btn-danger')
    const tweetContainer = document.querySelector('#tweet-list-container')
    elements.forEach(e => {
        e.addEventListener('click', ($event) => {
            console.log($event)
            const tweetid = $event.target.getAttribute("tweetid")
            axios.delete('/tweets/'+tweetid)
                .then( function(response) {
                    tweetContainer.innerHTML = response.data
                    bindTweet()
                })
                .catch( function(err){ console.log(err)})
        })
    })
}
