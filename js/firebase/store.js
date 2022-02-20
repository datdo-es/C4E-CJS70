import db from "./index.js";
import * as _noti from "../common/notify.js";

async function createTour() {
  try {
    const response = await db.collection("tour").add({
      title: "Du lịch Miền Trung - Đà Nẵng - Hội An - Huế từ Sài Gòn",
      desc: "<p>Du lịch Miền Trung - Đ&agrave; Nẵng - Hội An - Huế từ S&agrave;i G&ograve;n gi&aacute; tốt 2022. Được mệnh danh l&agrave; &lsquo;&rsquo;th&agrave;nh phố đ&aacute;ng đến&rsquo;&rsquo; với d&ograve;ng s&ocirc;ng H&agrave;n thơ mộng với c&acirc;y cầu Rồng biểu tượng của Th&agrave;nh phố biển du lịch Đ&agrave; Nẵng - nơi m&agrave; qu&yacute; kh&aacute;ch c&oacute; thể cảm nhận được sự pha trộn giữa kh&iacute; hậu miền Bắc, miền Nam.Ngo&agrave;i ra Đ&agrave; Nẵng c&ograve;n sở hữu nhiều danh lam thắng cảnh l&agrave;m say l&ograve;ng người như: B&agrave; N&agrave; Hills, B&aacute;n Đảo Sơn Tr&agrave;, Ngũ H&agrave;nh Sơn, Đ&agrave; Nẵng, phố cổ Hội An&hellip;. Tour du lịch Đ&agrave; Nẵng sẽ đưa qu&yacute; kh&aacute;ch kh&aacute;m ph&aacute; b&atilde;i biển được Forbes lựa chọn l&agrave; b&atilde;i biển quyến rũ nhất h&agrave;nh tinh với bờ biển d&agrave;i,l&agrave;n nước trong xanh, kh&ocirc;ng kh&iacute; m&aacute;t mẻ &hellip;Tham khảo kinh nghiệm du lịch Đ&agrave; Nẵng v&agrave; Đặt ngay tour Đ&agrave; Nẵng của Du Lịch Việt để kh&aacute;m ph&aacute; Đ&agrave; Nẵng c&oacute; g&igrave; m&agrave; lại lu&ocirc;n l&agrave; điểm đến hấp dẫn như vậy.</p>",
      content: "<p><strong>NG&Agrave;Y 1 | TP.HCM &ndash; Đ&Agrave; NẴNG &ndash; HỘI AN (ăn trưa, chiều)</strong></p><p style=>S&aacute;ng: &nbsp; &nbsp;Qu&yacute; kh&aacute;ch c&oacute; mặt tại ga quốc nội, s&acirc;n bay T&acirc;n Sơn Nhất trước giờ bay &iacute;t nhất ba tiếng.</p><ul><li style=>Đại diện c&ocirc;ng ty Du Lịch Việt đ&oacute;n v&agrave; hỗ trợ Qu&yacute; Kh&aacute;ch l&agrave;m thủ tục đ&oacute;n chuyến bay đi Đ&agrave; Nẵng.</li><li style=>Đến s&acirc;n bay Đ&agrave; Nẵng Hướng dẫn vi&ecirc;n đ&oacute;n đo&agrave;n tham quan Ngũ H&agrave;nh Sơn - được v&iacute; như h&ograve;n non bộ khổng lồ giữa l&ograve;ng th&agrave;nh phố Đ&agrave; Nẵng với Động Huyền Kh&ocirc;ng, Ch&ugrave;a Linh Ứng, Ch&ugrave;a Tam Thai, Vọng Hải Đ&agrave;i,&hellip;mua sắm qu&agrave; lưu niệm tại l&agrave;ng nghề đi&ecirc;u khắc đ&aacute; Non Nước.</li></ul><p style=>Trưa: &nbsp; D&ugrave;ng cơm trưa.</p><ul><li style=>Khởi h&agrave;nh đến Hội An, tham quan Phố Cổ Hội An - di sản văn ho&aacute; thế giới với Ch&ugrave;a Cầu Nhật Bản, Hội Qu&aacute;n Ph&uacute;c Kiến, Nh&agrave; Cổ Ph&ugrave;ng Hưng&hellip;</li></ul><p style=>Chiều: &nbsp;D&ugrave;ng cơm chiều. Nghỉ đ&ecirc;m tại Đ&agrave; Nẵng. &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</p><ul><li style=>Qu&yacute; kh&aacute;ch tự do dạo phố, ngắm c&aacute;c c&acirc;y cầu nổi tiếng của th&agrave;nh phố Đ&agrave; Nẵng: cầu Rồng, cầu S&ocirc;ng H&agrave;n, cầu Trần Thị L&yacute;, cầu Thuận Phước...</li></ul><p><strong>NG&Agrave;Y 2 | Đ&Agrave; NẴNG &ndash; VINPEARL NAM HỘI AN (ăn s&aacute;ng, chiều) (ăn trưa tự t&uacute;c)</strong></p><p style=>S&aacute;ng: &nbsp; &nbsp;D&ugrave;ng buffet s&aacute;ng tại kh&aacute;ch sạn.</p>",
      image: "https://img.nhandan.com.vn/Files/Images/2021/03/23/40692162_9381807_image_a_23_1616-1616460198504.jpg",
      date: new Date().getTime(),
      price: "4399000",
      createdBy: "dotiendat123@gmail.com",
      updatedAt: new Date().getTime(),
    });
    console.log(response);
  } catch (error) {
    let errorCode = error.code;
    let errorMessage = error.message;
    console.log(errorCode, errorMessage);
    _noti.error(errorCode, errorMessage);
    throw error;
  }
}
async function getDataTour() {
  try {
    const querySnapshot = await db
      .collection("tour")
      .get();
      console.log (querySnapshot)
    if (querySnapshot.docs.length === 0) {
      console.log (querySnapshot)
      return null;
    }

    return {
      id: querySnapshot.docs[0].id,
      ...querySnapshot.docs[0].data(),
    }
  } catch (error) {
    let errorCode = error.code;
    let errorMessage = error.message;
    console.log(errorCode, errorMessage);
    throw error
  }
}
export {
  createTour,
  getDataTour
}
