
function data() {
    return {
        upvoted: false,
        downvoted: false
    }

}
       function upvote() {
            this.upvoted = !this.upvoted;
            this.downvoted = false;
        }
           function downvote() {
            this.downvoted = !this.downvoted;
            this.upvoted = false;
        }
 
  
        function votes() {
            if (this.upvoted) {
                return this.article.votes + 1;
                } 
              else if (this.downvoted) {
                return this.article.votes - 1;
            }
            else {
                return this.article.votes;
            }
        }
    
