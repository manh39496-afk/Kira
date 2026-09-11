export interface Character {
  id: string;
  name: string;
  title: string;
  faction: string;
  element: string;
  weapon: string;
  description: string;
  portrait?: string;
  portraitAlt?: string;
  accent: string;
}

export const characters: Character[] = [
  {
    id: 'kael',
    name: 'Kael Dunreth',
    title: 'Người lính bị lãng quên',
    faction: 'Không liên minh',
    element: 'Aether',
    weapon: 'Trường kiếm và dấu ấn',
    description:
      'Một người lính bình thường sống sót sau sự sụp đổ của Aethel mà không biết bằng cách nào. Dấu ấn cháy trên cổ tay khiến anh trở thành thứ mà Giáo hội, Vương triều và những thứ bên dưới thế giới đều muốn chiếm lấy. Anh chỉ muốn được yên, nhưng cõi giới không cho phép điều đó.',
    accent: '#b87333',
  },
  {
    id: 'lyssara',
    name: 'Lyssara Veyne',
    title: 'Học giả của Hollow Archive',
    faction: 'Veranthor Accord',
    element: 'Rune',
    weapon: 'Mực và ràng buộc',
    description:
      'Một học giả bị lưu đày vì đặt những câu hỏi mà Archive được dựng lên để chôn vùi. Lyssara đã dành một thập kỷ lần theo dấu ấn Kael mang. Cô kiên nhẫn, chuẩn xác và nguy hiểm hơn nhiều so với những ngón tay vấy mực gợi ra, Accord lắng nghe khi cô lên tiếng.',
    accent: '#2f6d8f',
  },
  {
    id: 'tharic',
    name: 'Tharic the Unbound',
    title: 'Kẻ phá vỡ Iron Vow',
    faction: 'Free Companies',
    element: 'Iron',
    weapon: 'Đại phủ',
    description:
      'Từng là huynh đệ tuyên thệ của Iron Vow, Tharic phá bỏ lời thề để thực hiện mệnh lệnh cuối cùng của một người bạn đã chết. Anh ồn ào nơi Kael im lặng, liều lĩnh nơi Lyssara thận trọng, và là người duy nhất trong ba người nói thẳng điều những người còn lại vẫn sợ phải thừa nhận.',
    accent: '#8c4a2f',
  },
  {
    id: 'sera',
    name: 'Sera Marenne',
    title: 'Áo choàng đỏ của Veranthor',
    faction: 'Veranthor Accord',
    element: 'Ember',
    weapon: 'Song phủ',
    description:
      'Một đấu sĩ xuất thân quý tộc chọn Accord thay vì gia tộc. Sera bảo vệ Lyssara bằng lòng trung thành trông như sự tận tụy, và chiến đấu như người đã quyết định mình sẵn sàng mất điều gì. Cô không tin Kael, nhưng đang bắt đầu cần anh.',
    accent: '#a8324a',
  },
  {
    id: 'vael',
    name: 'Vael the Hollow',
    title: 'Vương miện bên dưới',
    faction: 'Chưa rõ',
    element: 'Void',
    weapon: 'Hollow Crown',
    description:
      'Một thứ từng là vua. Vael không có thân thể để người sống tìm thấy cũng không có tiếng nói để họ nghe được, nhưng dấu ấn vẫn đáp lại hắn. Hắn là hy vọng cuối cùng của cõi giới hay sự diệt vong sau cùng, đó là câu hỏi mọi chương đều xoay quanh mà chưa trả lời.',
    accent: '#5a4a6a',
  },
  {
    id: 'mira',
    name: 'Mira of Saltwatch',
    title: 'Collector',
    faction: 'Church of Aethel',
    element: 'Ash',
    weapon: 'Xiềng xích và sắc lệnh',
    description:
      'Một thẩm tra viên của Giáo hội được phái đi thu hồi thứ Kael mang, hoặc hủy diệt nó cùng anh. Mira tin lòng thương xót là thứ xa xỉ cõi giới không thể có, và có lẽ cô đúng. Cô không tàn nhẫn. Cô chắc chắn, điều đó còn tệ hơn.',
    accent: '#4a5a4f',
  },
];
