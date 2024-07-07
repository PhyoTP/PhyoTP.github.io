export interface ImageButton {
    src: string;
    name: string;
    route: string;
    id?: string;
}

function createImageButton(src: string, name: string, route: string, id?: string): ImageButton {
    return {
        src,
        name,
        route,
        id: id ?? name,
    };
}

export const codingLangs: ImageButton[] = [
    createImageButton('https://raw.githubusercontent.com/Ender-Wiggin2019/ServiceLogos/main/Swift/Swift.png', 'Swift', '/swift'),
    createImageButton('https://raw.githubusercontent.com/Ender-Wiggin2019/ServiceLogos/main/Python/Python.png', 'Python', '/python'),
    createImageButton('https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Sql_data_base_with_logo.png/400px-Sql_data_base_with_logo.png', 'SQL', '/sql'),
    createImageButton('https://raw.githubusercontent.com/Ender-Wiggin2019/ServiceLogos/main/Html/HTML.png', 'HTML', '/html'),
    createImageButton('https://raw.githubusercontent.com/Ender-Wiggin2019/ServiceLogos/main/CSS%E5%AE%8C%E5%85%A8%E3%81%AB%E7%90%86%E8%A7%A3%E3%81%97%E3%81%9F/CSS%E5%AE%8C%E5%85%A8%E3%81%AB%E7%90%86%E8%A7%A3%E3%81%97%E3%81%9F.png', 'CSS', '/css'),
    createImageButton('https://raw.githubusercontent.com/andregans/code_logotype/main/Javascript%20Logotype.png', 'JavaScript', '/js','JS'),
    createImageButton('https://raw.githubusercontent.com/Ender-Wiggin2019/ServiceLogos/main/TypeScript/TypeScript.png', 'TypeScript', '/typescript','TS'),
    createImageButton('https://devforum-uploads.s3.dualstack.us-east-2.amazonaws.com/uploads/optimized/5X/d/4/1/3/d413db5053563c9efdaa6d9c92c24a90110ed165_2_690x420.png', 'Luau', '/luau'),
    createImageButton('https://raw.githubusercontent.com/Ender-Wiggin2019/ServiceLogos/main/C%23/C%23.png', 'C#', '/csharp','CS')
];

export const technologies: ImageButton[] = [
    createImageButton('https://miro.medium.com/v2/resize:fit:1400/1*xYowXd50czavosQGQ5Ndng.png', 'SwiftUI', '/swift/#swiftui'),
    createImageButton('https://developer.apple.com/news/images/og/xcode-12-og.jpg', 'Xcode', '/swift/#xcode'),
    createImageButton('https://d1.awsstatic.com/asset-repository/products/amazon-rds/1024px-MySQL.ff87215b43fd7292af172e2a5d9b844217262571.png', 'MySQL', '/sql/#mysql'),
    createImageButton('https://www.fevaworks.com/portal/site/images/sparklogo.png', 'Meta Spark', '/metaspark','metaspark'),
    createImageButton('https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F87gdibqpr93vpfpqj7xm.png', 'Git', '/git'),
    createImageButton('https://raw.githubusercontent.com/Ender-Wiggin2019/ServiceLogos/main/GitHub/GitHub.png', 'GitHub', '/git/#github'),
    createImageButton('https://raw.githubusercontent.com/Ender-Wiggin2019/ServiceLogos/main/Figma/Figma.png', 'Figma', '/figma'),
    createImageButton('https://preview.redd.it/made-this-roblox-studio-logo-v0-iidroe6u835a1.png?width=640&crop=smart&auto=webp&s=ca902e12fbdd3718dfea23099c7b6abf22a2063f', 'Roblox Studio', '/luau/#robloxstudio','roblox-studio'),
    createImageButton('https://raw.githubusercontent.com/Ender-Wiggin2019/ServiceLogos/main/Angular/Angular.png', 'Angular', '/angular'),
    createImageButton('https://raw.githubusercontent.com/Ender-Wiggin2019/ServiceLogos/main/UnityBlender/UnityBlenderT.png', 'Unity', '/cs/#unity'),
    createImageButton('https://raw.githubusercontent.com/Ender-Wiggin2019/ServiceLogos/main/VisualStudio/VisualStudio.png', 'Visual Studio', '/visual-studio','VS'),
    createImageButton('https://raw.githubusercontent.com/Aikoyori/ProgrammingVTuberLogos/main/Docker/DockerLogo.png', 'Docker', '/docker')
];

export const projects: ImageButton[] = [
    createImageButton('/assets/academ.png', 'Academ', '/swift/#academ'),
    createImageButton('/assets/portfolio.png', 'My Portfolio', '/phyotp',"PhyoTP"),
    createImageButton('/assets/ftcl.png', 'Find The Code Langs', '/luau/#ftcl','FTCL'),
    createImageButton('/assets/bouncer.png', 'Bouncer', '/cs/#bouncer')
];

export const certificates: ImageButton[] = [
    createImageButton('/assets/sapCert.png', 'Swift Accelerator Programme Class of 2023', '/swift/#sap','SAP'),
    createImageButton('https://images.credly.com/size/400x400/images/d9598c1a-2f59-49b9-b7fc-a764bf23b4d5/image.png', 'App Development with Swift: Associate', '/swift/#associate','associate'),
    createImageButton('/assets/pythontandh.png','T and H Python Online Class','/python/#tandhpython','tandhpython'),
    createImageButton('/assets/pythonmysql.png','T and H Python-MySQL Class Project','/sql/#pythondb','pythonmysql'),
    createImageButton('/assets/metasparkreal.png','Meta Spark Bootcamp 2023','/metaspark/#cert','metasparkcert')
];