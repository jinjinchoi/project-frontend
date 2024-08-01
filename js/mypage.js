document.addEventListener('DOMContentLoaded', async () => {
    try {
      const response = await axios.get('http://localhost:3000/users/hwongje'); // <USER_ID>를 실제 사용자 ID로 바꾸세요
    const user = response.data;
    
    document.getElementById('uid').textContent = user.uid;
    document.getElementById('unickname').textContent = user.unickname;
    document.getElementById('uemail').textContent = user.uemail;
    document.getElementById('uphone').textContent = user.uphone;
    // 프로필 사진이 있는 경우
    if (user.uprofile) {
        document.getElementById('profileImage').src = user.uprofile;
    }
    } catch (error) {
        console.error('Error fetching user data:', error);
      // 오류 처리 (예: 오류 메시지 표시)
    }
});