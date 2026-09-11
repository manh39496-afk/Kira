export interface Chapter {
  number: number;
  title: string;
  arc: string;
  excerpt: string;
  wordCount: number;
  status: 'published' | 'upcoming';
  date: string;
}

export const chapters: Chapter[] = [
  {
    number: 1,
    title: 'Người lính đã quên',
    arc: 'Hồi I — Tàn lửa Aethel',
    excerpt:
      'Kael tỉnh dậy giữa cánh đồng tro, không nhớ trận chiến đã kết thúc đơn vị của mình. Một dấu ấn cháy trên cổ tay, một dấu hiệu không người sống nào nên mang.',
    wordCount: 4200,
    status: 'published',
    date: '2026-03-12',
  },
  {
    number: 2,
    title: 'Con đường đến Veranthor',
    arc: 'Hồi I — Tàn lửa Aethel',
    excerpt:
      'Giữa những người tị nạn rời khỏi vùng biên cương, Kael gặp một học giả tuyên bố biết ý nghĩa của dấu ấn và lý do Giáo hội muốn chôn vùi nó.',
    wordCount: 5100,
    status: 'published',
    date: '2026-03-19',
  },
  {
    number: 3,
    title: 'Muối và sắt',
    arc: 'Hồi I — Tàn lửa Aethel',
    excerpt:
      'Một ngôi làng ven biển nộp cống bằng muối và im lặng. Khi Collector xuất hiện, Kael phải quyết định có can thiệp hay không, và mạo hiểm để lộ thứ mình đang mang.',
    wordCount: 4800,
    status: 'published',
    date: '2026-03-26',
  },
  {
    number: 4,
    title: 'Hollow Crown',
    arc: 'Hồi I — Tàn lửa Aethel',
    excerpt:
      'Trong tàn tích Old Aethel, sự thật về sự sụp đổ bắt đầu lộ diện. Vương miện chưa từng thất lạc, nó được giấu đi, và một thứ bên dưới vẫn còn thức tỉnh.',
    wordCount: 5600,
    status: 'published',
    date: '2026-04-02',
  },
  {
    number: 5,
    title: 'Điều cơn bão ghi nhớ',
    arc: 'Hồi II — Veranthor Accord',
    excerpt:
      'Lyssara đến thủ đô với một đề nghị Hội đồng không thể từ chối và một lưỡi dao họ không thể nhìn thấy. Kael được trao một tước hiệu anh không muốn.',
    wordCount: 6200,
    status: 'published',
    date: '2026-04-09',
  },
  {
    number: 6,
    title: 'Lời thề trong bóng tối',
    arc: 'Hồi II — Veranthor Accord',
    excerpt:
      'Một liên minh được rèn dưới ánh nến và tan vỡ lúc bình minh. Khi lưỡi dao đầu tiên rơi xuống, không ai chắc nó đến từ phe nào.',
    wordCount: 5900,
    status: 'upcoming',
    date: '2026-04-16',
  },
  {
    number: 7,
    title: 'Sức nặng của đôi cánh',
    arc: 'Hồi II — Veranthor Accord',
    excerpt:
      'Sắp ra mắt — Accord rạn nứt, và cái giá thật sự của dấu ấn phải được trả.',
    wordCount: 0,
    status: 'upcoming',
    date: '2026-04-23',
  },
];
