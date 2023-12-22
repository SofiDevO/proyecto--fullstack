// apiConfig.js
export const apiUrl =
  "http://backendnc7-env.eba-gg9pmvqb.us-east-2.elasticbeanstalk.com";

export const apiAvatar = "https://api.multiavatar.com/";

export const getRandomAvatarId = () => {
  const characters = "abcdefghijklmnopqrstuvwxyz";
  let randomAvatarId = "";
  for (let i = 0; i < 5; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomAvatarId += characters.charAt(randomIndex);
  }
  return randomAvatarId;
};
