export interface Topic {
  id: number;
  name: string;
  description: string;
  img: string;
  type: TopicType;
  link: string;
}
export interface BaseTopic {
  topic: Topic;
  children: Topic[];
}
enum TopicType {
  Language,
  Technology,
  Project,
  Certificate
}
export const topics: BaseTopic[] = [
  {
    topic: {
      id: 1,
      name: 'Swift',
      description: 'Swift is a general-purpose, multi-paradigm, compiled programming language developed by Apple.',
      img: 'https://raw.githubusercontent.com/Ender-Wiggin2019/ServiceLogos/main/Swift/Swift.png',
      type: TopicType.Language,
      link: '/swift',
    },
    children: [
      {
        id: 2,
        name: 'SwiftUI',
        description: 'SwiftUI is a declarative, Swift-based framework for building user interfaces.',
        img: 'https://developer.apple.com/news/images/og/xcode-12-og.jpg',
        type: TopicType.Technology,
        link
      },
      {
        id: 3,
        name: 'Xcode',
        description: 'Xcode is a free, open-source software development environment for Apple platforms.',
        img: 'https://d1.awsstatic.com/asset-repository/products/amazon-rds/1024px-MySQL.ff87215b43fd7292af172e2a5d9b844217262571.png',
        type: TopicType.Technology
      },
      {
        id: 4,
        name: 'Academ',
        description: 'An app that helps you record marks and calculate your target'
      }
    ]
  }
]