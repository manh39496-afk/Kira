export interface Region {
  id: string;
  name: string;
  type: string;
  summary: string;
  detail: string;
  image?: string;
  imageAlt?: string;
}

export const regions: Region[] = [
  {
    id: 'aethel',
    name: 'Old Aethel',
    type: 'Thủ đô sụp đổ',
    summary:
      'Trái tim của vương quốc cũ, nay là miệng vực tro tàn với những ngọn tháp gãy, nơi bầu trời vẫn rỉ màu mỗi lúc hoàng hôn.',
    detail:
      'Aethel là nơi đặt ngai vàng suốt chín thế kỷ. Khi sự sụp đổ xảy ra, thành phố không cháy mà chìm xuống. Miệng vực để lại được gọi là Hollow, và Giáo hội cấm vào với án tử hình. Những người vẫn bước vào kể về một ngai phòng còn ấm và một vương miện vẫn đang chờ đợi.',
  },
  {
    id: 'veranthor',
    name: 'Veranthor',
    type: 'Thành bang tự do',
    summary:
      'Một thành phố ven biển của học giả, nghề buôn muối và những tham vọng lặng thầm, nơi Accord được ký trong một căn phòng không cửa sổ.',
    detail:
      'Veranthor sống sót qua sự sụp đổ bằng cách từ chối đứng về phe nào. Nơi đây tiếp nhận những học giả bị Giáo hội trục xuất, những người lính bị Vương triều giải tán và tiền bạc mà cả hai bên cần. Thành phố do Hội đồng chín người cai quản, họ bỏ phiếu trong bí mật và không bao giờ cao giọng. Accord mang tên thành phố là thứ gần với hòa bình nhất mà cõi giới tan vỡ có được.',
  },
  {
    id: 'iron-vow',
    name: 'The Iron Marches',
    type: 'Vùng biên cương',
    summary:
      'Một dải pháo đài và đồng hoang băng giá, nơi Free Companies giữ phòng tuyến trước những thứ đã bước ra từ Hollow.',
    detail:
      'Marches được xây để giữ một thứ bên trong, không phải để ngăn quân đội bên ngoài. Free Companies đồn trú ở đó thề phục vụ cả đời và được trả bằng những mảnh đất họ sẽ không bao giờ canh tác. Cái lạnh nơi đây có răng. Cựu binh nói tiếng gió đổi khác khi đến gần Hollow, và sự im lặng sau khi gió ngừng còn tệ hơn.',
  },
  {
    id: 'saltwatch',
    name: 'Saltwatch',
    type: 'Lãnh địa Giáo hội',
    summary:
      'Vùng duyên hải thần quyền, nơi Church of Aethel thu cống bằng muối và im lặng, còn các Collector không bao giờ gõ cửa.',
    detail:
      'Saltwatch từng là một tỉnh đánh cá trước khi Giáo hội chiếm lấy. Nay các thánh đường được dựng từ xương tàu và tinh thể muối, còn các Collector đáng sợ chẳng kém bất kỳ đội quân nào. Giáo hội dạy rằng sự sụp đổ là một phán xét, dấu ấn là tội lỗi và Hollow không bao giờ được khuấy động. Mira of Saltwatch là công cụ xuất sắc nhất của họ.',
  },
];

export interface LoreEntry {
  id: string;
  title: string;
  body: string;
}

export const lore: LoreEntry[] = [
  {
    id: 'the-fall',
    title: 'Sự sụp đổ của Aethel',
    body: 'Không ai thống nhất được chuyện gì xảy ra vào đêm Aethel sụp đổ. Giáo hội gọi đó là phán xét. Các học giả Veranthor gọi đó là một sai lầm. Free Companies, những người ở gần nhất, không gọi nó bằng cái tên nào, họ chỉ không nói về nó. Điều được biết là bầu trời trên thành phố chuyển màu bầm tím, mặt đất mở ra và chín thế kỷ các vị vua chìm vào bóng tối. Dấu ấn Kael mang xuất hiện đêm đó trên cổ tay mọi người lính ngoài chiến trường. Anh là người duy nhất sống sót để mang nó.',
  },
  {
    id: 'the-sigil',
    title: 'Aethelmark',
    body: "Dấu ấn, Aethelmark, không phải hình xăm cũng không phải vết đóng dấu. Nó nổi lên dưới da mà không gây thương tích và không thể bị loại bỏ bởi lưỡi kiếm, lửa hay axit. Nó phản ứng với khoảng cách đến Hollow, càng ấm và sáng khi người mang đến gần. Giáo hội xem đó là dấu hiệu của tội lỗi. Nghiên cứu của Lyssara cho thấy nó cổ xưa hơn chính Vương triều, và các vị vua Aethel không tạo ra nó, họ thừa hưởng nó và sợ hãi nó.",
  },
  {
    id: 'the-accord',
    title: 'Veranthor Accord',
    body: 'Được ký ba năm sau sự sụp đổ, Accord là nền hòa bình mong manh giữa Free Companies, Giáo hội và các gia tộc quý tộc còn sống sót. Nó tồn tại vì không phe nào đủ mạnh để thắng một cuộc chiến, và phe nào cũng biết điều đó. Accord cũng âm thầm là một âm mưu: Lyssara góp phần soạn thảo, đồng thời chôn một điều khoản trong đoạn cuối trao cho những bên ký kết quyền bước vào Hollow. Chưa ai viện đến điều khoản ấy. Có thể Kael sẽ là lý do họ làm vậy.',
  },
];
