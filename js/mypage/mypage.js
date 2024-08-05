document.addEventListener('DOMContentLoaded', async () => {
    try {
      const response = await axios.get('http://localhost:3000/users/profile',{
        withCredentials: true});
       // <USER_ID>를 실제 사용자 ID로 바꾸세요
      const user = response.data;

      document.querySelector('#user_img').src = user.uprofile || 'No profile';
      document.querySelector('#uid_content').textContent = user.uid;
      document.querySelector('#umessage_content').textContent = user.umessage || 'No message';
      document.querySelector('#nick_content').textContent = user.unickname;
      document.querySelector('#email_content').textContent = user.uemail;
      document.querySelector('#phone_content').textContent = user.uphone;
      
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
});