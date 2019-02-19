// const getProfile = async () => {
//   $.ajax({
//     type: 'GET',
//     method: 'GET',
//     headers: {
//       'Content-Type': 'text/html'
//     },
//     url: 'https://api.instagram.com/v1/users/self/?access_token=5501209173.701ac5e.c244c7578f9848beb726cd16ca3bc114',
//     dataType: 'jsonp',
//     success: function (result) {
//       console.log('profile', result)
//       if (result.meta.code === 200) {
//         return result
//       }
//     }
//   })
// }
//
// const getMedia = async () => {
//   $.ajax({
//     type: 'GET',
//     method: 'GET',
//     headers: {
//       'Content-Type': 'text/html'
//     },
//     url: 'https://api.instagram.com/v1/users/self/media/recent/?access_token=5501209173.701ac5e.c244c7578f9848beb726cd16ca3bc114',
//     dataType: 'jsonp',
//     success: (result) => {
//       console.log('media', result)
//       if (result.meta.code === 200) {
//         return result
//       }
//     }
//   })
// }
// $(document).ready(async () => {
//   let profile = await getProfile()
//   let media = await getMedia()
//
//   profile = JSON.parse(profile)
//   media = JSON.parse(media)
//
//   console.log(profile, media)
// })
