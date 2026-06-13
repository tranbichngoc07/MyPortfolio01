import { PortfolioData } from './types';

export const DEFAULT_PORTFOLIO_DATA: PortfolioData = {
  "personalInfo": {
    "name": "Trần Bích Ngọc",
    "avatarUrl": "",
    "studentId": "25023344",
    "major": "Hệ thống Thông tin ",
    "classCode": "K70I-IS3",
    "university": "Trường Đại học Công nghệ - ĐHQGHN ",
    "email": "tranbichngoc855@gmail.com",
    "linkedinUrl": "",
    "githubUrl": "https://github.com/tranbichngoc07",
    "phone": "0855.395.889",
    "bio": "Chào mọi người! Mình là sinh viên năm nhất chuyên ngành Hệ thống Thông tin tại Trường Đại học Công nghệ (UET) - ĐHQGHN. Bản thân là một người luôn hứng thú trước khả năng khai mở của dữ liệu và hệ thống thông tin quản lý đối với sự vận hành của doanh nghiệp. Mình đang tích cực học tập ngôn ngữ lập trình cơ bản, cơ sở dữ liệu và các kỹ năng phân tích nghiệp vụ để chuẩn bị hành trang vững vàng nhất cho tương lai ."
  },
  "learningGoals": [
    {
      "id": "g-2",
      "title": "Học sâu kiến thức về Cơ sở dữ liệu quan hệ (SQL)",
      "type": "short",
      "description": "Làm quen sớm với SQL Server / PostgreSQL. Học tối ưu hóa truy vấn và áp dụng vào dự án phân tích dữ liệu nhỏ.",
      "targetDate": "Tháng 03/2027",
      "completed": false
    },
    {
      "id": "g-4",
      "title": "Đạt chứng chỉ IELTS 7.5+",
      "type": "long",
      "description": "Rèn luyện ngoại ngữ để học tập các giáo trình tiếng Anh chuyên ngành và chuẩn bị cho việc viết báo cáo khoa học quốc tế.",
      "targetDate": "Năm 2028 (Năm 3)",
      "completed": false
    },
    {
      "id": "g-1781338039067",
      "title": "Đạt GPA học kỳ II trên 3.6/4.0 ",
      "type": "short",
      "description": "",
      "targetDate": "Kỳ II năm nhất",
      "completed": false
    }
  ],
  "portfolioGoals": [
    {
      "id": "p-1",
      "title": "Nhật ký học thuật thực tiễn",
      "description": "Ghi chép và lưu trữ mọi bài tập lớn, dự án nhỏ từ năm nhất để theo dõi trực quan hành trình tiến bộ trong học tập.",
      "iconName": "BookOpen"
    },
    {
      "id": "p-2",
      "title": "Xây dựng Hồ sơ năng lực sớm",
      "description": "Chuẩn bị một trang giới thiệu bản thân trực tuyến chỉn chu nhất để gửi tới các Thầy/Cô cố vấn học tập, lab nghiên cứu hoặc nhà tuyển dụng tiềm năng.",
      "iconName": "Award"
    },
    {
      "id": "p-3",
      "title": "Kết nối và Tìm kiếm định hướng",
      "description": "Làm cầu nối giao tiếp, thảo luận dự án với các anh chị khóa trên (K68/K69) và cộng đồng sinh viên công nghệ thông tin ĐHQGHN.",
      "iconName": "Share2"
    }
  ],
  "projects": [
    {
      "id": "proj-1781338115372",
      "title": "Thao tác cơ bản với tệp tin và thư mục",
      "course": "CNS-AI",
      "description": "Trình bày cấu trúc thư mục tối ưu và quy tắc đặt tên tệp đã thiết lập, kèm ảnh chụp minh họa.",
      "techTags": [],
      "githubUrl": "#",
      "demoUrl": "https://ap.wps.com/cms/docs/d/cbTaqbjc5ancqBKg",
      "timeString": "Kỳ học hiện tại"
    },
    {
      "id": "proj-1781338147280",
      "title": "Tìm kiếm và đánh giá thông tin học thuật",
      "course": "CNS-AI",
      "description": "Trình bày kết quả tìm kiếm học thuật bằng các toán tử nâng cao và bảng đánh giá nguồn tin đã thực hiện.",
      "techTags": [],
      "githubUrl": "#",
      "demoUrl": "https://ap.wps.com/cms/docs/d/cbTaqq8LV9gAAIKV",
      "timeString": "Kỳ học hiện tại"
    },
    {
      "id": "proj-1781338175507",
      "title": "Viết prompt hiệu quả cho các tác vụ học tập",
      "course": "CNS-AI",
      "description": "Trình bày sự so sánh giữa Prompt ban đầu và Prompt cải tiến cùng kết quả đầu ra từ AI. ",
      "techTags": [],
      "githubUrl": "#",
      "demoUrl": "https://ap.wps.com/cms/docs/d/cbTaqv8glfhMBcUh",
      "timeString": "Kỳ học hiện tại"
    },
    {
      "id": "proj-1781338221369",
      "title": "Sử dụng công cục hợp tác trực tuyến cho dự án nhóm",
      "course": "CNS-AI",
      "description": "Trình bày minh chứng về việc sử dụng công cụ quản lý dự án nhóm và cách thức phối hợp trực tuyến.",
      "techTags": [],
      "githubUrl": "#",
      "demoUrl": "https://ap.wps.com/cms/docs/d/cbTaqq4k9b1gHvF5",
      "timeString": "Kỳ học hiện tại"
    },
    {
      "id": "proj-1781338250429",
      "title": "Sử dụng AI tạo sinh để hỗ trợ sáng tạo nội dung",
      "course": "CNS-AI",
      "description": "Trưng bày sản phẩm nội dung số hoàn thiện được hỗ trợ bởi AI",
      "techTags": [],
      "githubUrl": "#",
      "demoUrl": "https://ap.wps.com/cms/docs/d/cbTaqsyoYcfziBNi",
      "timeString": "Kỳ học hiện tại"
    },
    {
      "id": "proj-1781338284539",
      "title": "Sử dụng AI có trách nhiệm trong học tập và nghiên cứu",
      "course": "CNS-AI",
      "description": "Trình bày bộ nguyên tắc cá nhân về sử dụng AI có trách nhiệm dựa trên các nghiên cứu đã thực hiện",
      "techTags": [],
      "githubUrl": "#",
      "demoUrl": "https://ap.wps.com/cms/docs/d/cbTaqjPPqXqPqYby",
      "timeString": "Kỳ học hiện tại"
    }
  ],
  "reflections": [
    {
      "id": "ref-1781338612968",
      "title": "Hoàn thiện dự án tạo Portfolio cá nhân",
      "category": "softskill",
      "date": "6/6/2026",
      "content": "Sau khi hoàn thiện dự án này, em đã học được rất nhiều các kỹ năng và biết cách sử dụng các công cụ để hỗ trợ công việc sau này. \nNhững kĩ năng đã học được: \n1. Sử dụng Canva để tạo một blog, thiết kế ảnh\n2. Sử dụng một số công cụ AI như DALL-E, Midjourney để tạo hình ảnh\n3. Sử dụng Google Scholar để tìm kiếm thông tin, các bài báo học thuật\n4. Biết cách viết prompt để tìm kiếm thông tin bằng Gemini, ChatGPT"
    }
  ]
};
