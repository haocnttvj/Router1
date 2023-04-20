import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Admin() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [countdown, setCountdown] = useState(3);
  const navigate = useNavigate();

  useEffect(() => {
    // Nếu người dùng không phải là admin, đếm ngược thời gian
    if (!isAdmin && countdown > 0) {
      const intervalId = setInterval(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [isAdmin, countdown]);

  useEffect(() => {
    // Nếu thời gian đếm ngược đạt tới 0, chuyển hướng người dùng về trang chủ
    if (countdown === 0) {
      navigate("/");
    }
  }, [countdown, navigate]);

  const handleLogin = () => {
    // Xác định quyền truy cập của người dùng ở đây
    setIsAdmin(true);
  };

  if (isAdmin) {
    return <h1>Trang Admin</h1>;
  } else {
    return (
      <div>
        <h1>Không có quyền truy cập vào trang Admin</h1>
        <p>Chuyển trang sau: {countdown} giây</p>
        <button onClick={handleLogin}>Đăng nhập</button>
      </div>
    );
  }
}

export default Admin;
