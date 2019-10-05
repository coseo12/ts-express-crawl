import request from 'request';

export const crawl = () => {
  return new Promise<string>((resolve, rejects) => {
    request.get('https://naver.com', (err, res) => {
      if (err) rejects(err);
      resolve(res.body);
    });
  });
};
