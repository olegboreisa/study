import React, {Component} from 'react'
import axios from 'axios';

// [GET METHOD]

class PostListClassBased extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            error: []
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log(response)
                this.setState({posts: response.data})
            })
            .catch(error => {
                console.log.log(error)
                this.setState({error: 'Error retrieving data'})
            })
    }

    render () {
        const { posts, error } = this.state // NOT ASSIGNING BUT EXTRACTING FROM THIS.STATE INTO A SEPARATE VALUES!

        return (
            <div>
                List of posts
                {
                    posts.length ?
                        posts.map(post =>
                        <div key={post.id}>
                            {post.title}
                        </div>) : null

                }
                {
                    error ? <div>{error}</div> : null
                }
            </div>
        )
    }
}

export default PostListClassBased;