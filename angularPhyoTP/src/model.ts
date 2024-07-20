export interface Topic {
  id: string;
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
      id: 'swift',
      name: 'Swift',
      description: 'Swift is a general-purpose, multi-paradigm, compiled programming language developed by Apple.',
      img: 'https://raw.githubusercontent.com/Ender-Wiggin2019/ServiceLogos/main/Swift/Swift.png',
      type: TopicType.Language,
      link: '/swift',
    },
    children: [
      {
        id: 'swiftui',
        name: 'SwiftUI',
        description: 'SwiftUI is a declarative, Swift-based framework for building user interfaces.',
        img: 'https://developer.apple.com/news/images/og/xcode-12-og.jpg',
        type: TopicType.Technology,
        link: 'https://developer.apple.com/xcode/swiftui/'
      },
      {
        id: 'xcode',
        name: 'Xcode',
        description: 'Xcode is a free, open-source software development environment for Apple platforms.',
        img: 'https://d1.awsstatic.com/asset-repository/products/amazon-rds/1024px-MySQL.ff87215b43fd7292af172e2a5d9b844217262571.png',
        type: TopicType.Technology,
        link: 'https://developer.apple.com/xcode/'
      },
      {
        id: 'academ',
        name: 'Academ',
        description: 'An app that helps you record marks and calculate your target',
        img: '/assets/academ.png',
        type: TopicType.Project,
        link: '/Academ'
      },
      {
        id: 'sap',
        name: 'Swift Accelerator Programme Class of 2023',
        description: 'Swift Accelerator is an intensive talent development programme for secondary school students. Over 8 months, students learn to code in Swift using Apple developer technologies, and apply story-telling and design thinking principles to design and build an iOS app to release on the App Store.',
        img: '/assets/sapCertOnline.png',
        type: TopicType.Certificate,
        link: 'https://swiftin.sg'
      },
      {
        id: 'associate',
        name : 'App Development with Swift: Associate',
        description: 'The App Development with Swift Associate badge recognizes basic proficiency in the Swift programming language. Students who earn this badge have learned key computing concepts covered in the Develop in Swift Explorations course while developing a solid foundation in programming with Swift.',
        img: 'https://images.credly.com/size/400x400/images/d9598c1a-2f59-49b9-b7fc-a764bf23b4d5/image.png',
        type: TopicType.Certificate,
        link: 'https://www.credly.com/badges/761b6cda-aa50-4f21-b47a-49435d8da2c1/public_url',
      }
    ]
  },
  {
    topic: {
      id: 'python',
      name: 'Python',
      description: 'Python is a high-level, general-purpose programming language.',
      img: 'https://raw.githubusercontent.com/Ender-Wiggin2019/ServiceLogos/main/Python/Python.png',
      type: TopicType.Language,
      link: '/python',
    },
    children: [
      {
        id: 'tandhpython',
        name: 'T and H Python Online Class',
        description: 'Class that teaches Python',
        img: '/assets/pythontandh.jpg',
        type: TopicType.Certificate,
        link: ''
      },
      {
        id: 'pythonmysql',
        name: 'T and H Python-MySQL Class Project Certificate',
        description: 'Uses tkinter to connect Python to a MySQL database',
        img: '/assets/pythonmysql.jpg',
        type: TopicType.Certificate,
        link: 'https://gist.github.com/PhyoTP/897d02151e0e159f3462f3c971e54093'
      },
      {
        id: 'pythonintroduction',
        name: 'Sololearn Introduction to Python',
        description: 'Covers the basic concepts of Python, as well as building real-life projects and solving different coding challenges.',
        img: 'https://api2.sololearn.com/v2/certificates/CC-JJI0Y5RS/image/jpg',
        type: TopicType.Certificate,
        link: 'https://www.sololearn.com/en/certificates/CC-JJI0Y5RS'
      },
      {
        id: 'pythonintermediate',
        name: 'Sololearn Python Intermediate',
        description: 'Covers Python collection types, lambda functions, generators, decorators, object-oriented programming, and much more.',
        img: 'https://api2.sololearn.com/v2/certificates/CC-OQIMZJDA/image/jpg',
        type: TopicType.Certificate,
        link: 'https://www.sololearn.com/en/certificates/CC-OQIMZJDA'
      }
    ]
  },
  {
    topic: {
      id: 'sql',
      name: 'SQL',
      description: 'SQL is a domain-specific language used in programming and designed for managing data held in a relational database management system.',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Sql_data_base_with_logo.png/400px-Sql_data_base_with_logo.png',
      type: TopicType.Language,
      link: '/sql',
    },
    children: [
      {
        id: 'mysql',
        name: 'MySQL',
        description: 'MySQL is an open-source relational database management system.',
        img: 'https://d1.awsstatic.com/asset-repository/products/amazon-rds/1024px-MySQL.ff87215b43fd7292af172e2a5d9b844217262571.png',
        type: TopicType.Technology,
        link: 'https://www.mysql.com/'
      },
      {
        id: 'pythonmysql',
        name: 'T and H Python-MySQL Class Project Certificate',
        description: 'Uses tkinter to connect Python to a MySQL database',
        img: '/assets/pythonmysql.jpg',
        type: TopicType.Certificate,
        link: 'https://gist.github.com/PhyoTP/897d02151e0e159f3462f3c971e54093'
      },
    ]
  },
  {
    topic: {
      id: 'angular',
      name: 'Angular',
      description: 'Angular is a typescript-based open-source web application framework led by the Angular Team at Google and used by a community of individuals and corporations.',
      img: 'https://raw.githubusercontent.com/Ender-Wiggin2019/ServiceLogos/main/Angular/Angular.png',
      type: TopicType.Technology,
      link: '/angular',
    },
    children: [
      {
        id: 'html',
        name: 'HTML',
        description: 'HTML is the standard markup language for creating web pages.',
        img: 'https://raw.githubusercontent.com/Ender-Wiggin2019/ServiceLogos/main/HTML/HTML.png',
        type: TopicType.Language, 
        link: '',
      }
    ]
  }
]