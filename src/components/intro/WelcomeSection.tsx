import React from 'react';
import WelcomeSection1 from '../../assets/WelcomeSection1.jpg'; // ảnh cây vàng
import WelcomeSection2 from '../../assets/WelcomeSection2.jpg'; // ảnh minh hoạ cặp đôi
import WelcomeSection3 from '../../assets/WelcomeSection3.jpg'; // ảnh đội mũ vui
import { Button } from "@/components/ui/button"
const WelcomeSection = () => {
  return (
    <section className="Introsection max-w-8xl mx-auto flex justify-between lg:flex-row">
      {/* Left Text Section */}
      <div className="Introparagraph lg:w-1/2">
        <div className="flex flex-col items-center justify-center px-4 text-center">
          <h2 className="fasthand-regular">Welcome to Blog</h2>

          <p className="Introtext crimson-text-bold text-gray-800">
            Blog cá nhân của chúng tớ lưu giữ những khoảnh khắc của nhau.
          </p>

          <p className="crimson-text-regular-italic mx-auto mt-4 w-full max-w-[550px] text-center leading-relaxed text-gray-600">
            <i>
              Đây là bảo tàng thời gian của những kỷ niệm mà chúng tớ không thể quên. Từ những tin nhắn đầu tiên, những lần
              gặp gỡ cho đến những cột mốc lớn trong hành trình của cả hai. Mỗi blog là một câu
              chuyện của chúng tớ với những cảm xúc khác nhau.
            </i>
            <br />
            <br />
            Chúng tớ sẽ tiếp tục xây dựng câu chuyện của riêng mình.   
            Cảm ơn vì đã đồng hành, lắng nghe và trở thành một phần trong hành trình của chúng tớ.
          </p>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="RightImageSection flex justify-center lg:w-1/2 self-end">
        <div className="inline-grid grid-flow-col gap-6">
          {/* Ảnh lớn */}
          <div className="row-span-3 h-[480px] w-[350px] overflow-hidden rounded-2xl shadow-lg">
            <img src={WelcomeSection1} alt="Main" className="h-full w-full object-cover" />
          </div>

          {/* Ảnh nhỏ chồng bên phải */}
          <div className="col-span-2 h-[240px] w-[250px] overflow-hidden rounded-xl shadow">
            <img src={WelcomeSection2} alt="Couple Art" className="h-full w-full object-cover" />
          </div>
          <div className="col-span-2 row-span-2 h-[210px] w-[250px] overflow-hidden rounded-xl shadow">
            <img src={WelcomeSection3} alt="Selfie" className="h-full w-full object-cover" />
          </div>
        </div>
        <Button variant="outline">Button</Button>
      </div>
    </section>
  );
};

export default WelcomeSection;
