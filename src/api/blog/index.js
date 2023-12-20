import { deepCopy } from '../../utils/deep-copy';
import { post, posts } from './data';

class BlogApi {
  getPosts(request) {
    return Promise.resolve(deepCopy(posts));
  }

  getPost(id) {
    const foundPost = id ? post.find(p => p.id === id) : deepCopy(post[0]);
    
    if (!foundPost) {
      return Promise.reject(new Error('Post not found'));
    }

    return Promise.resolve(deepCopy(foundPost));
  }
}

export const blogApi = new BlogApi();
