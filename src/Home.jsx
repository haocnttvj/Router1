import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    // Chuyển hướng người dùng đến trang chi tiết sản phẩm với ID là 1
    navigate("/product/1");
  };

  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleClick}>Chi tiết sản phẩm</button>
    </div>
  );
}

export default Home;
