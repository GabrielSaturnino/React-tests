export const loadPosts = async () => {
  const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts');
  const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos');

  const [posts, photos] = await Promise.all([postsResponse, photosResponse]);

  const postsJson = await posts.json();
  const photosJson = await photos.json();
  postsJson[0].title = 'There';
  postsJson[1].title = 'She';
  postsJson[2].title = 'is';
  postsJson[3].title = '-----';
  postsJson[4].title = 'how';
  postsJson[5].title = 'you';
  postsJson[6].title = 'doing?';
  const postsAndPhotos = postsJson.map((post, index) => {
    return { ...post, cover: photosJson[index].url }
  });

  return postsAndPhotos
}