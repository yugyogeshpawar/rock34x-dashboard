import { deepCopy } from '../../utils/deep-copy';
import { cryptoNews,cryptoNewsArticle } from './data';

class NewsApi {
  getNews(request) {
    return Promise.resolve(deepCopy(cryptoNews));
  }
  getNewsArticle(request) {
    return Promise.resolve(deepCopy(cryptoNewsArticle));
  }
}

export const newsApi = new NewsApi();


// import { deepCopy } from '../../utils/deep-copy';
// import { cryptoNews } from './data';

// class NewsApi {
//   getNews(request) {
//     return Promise.resolve(deepCopy(cryptoNews));
//   }

//   getNewsDetails(newsId) {
//     // Assume your newsId is the index of the news article in cryptoNews array
//     const newsDetails = cryptoNews[newsId];
//     return Promise.resolve(deepCopy(newsDetails));
//   }
// }

// export const newsApi = new NewsApi();
