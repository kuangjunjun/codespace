## 字节难度的sql知识
关系型数据库  行列
写一条mysql sql 创建一个表 avatar 用户头像
    索引, 要建 为了查询 但是也不能乱建
    思考以后的查询需求，先写出select语句
        主键 Primary
        普通索引 首页文章列表\个人主页都要根据用户id 查头像
        唯一索引
        联合索引
    CREATE TABLE `avatar`(
        `id` int(11) NOT NULL AUTO_INCREMENT,
        `minitype` varchar(255) NOT NULL,
        `filename` varchar(255) NOT NULL,
        `size` int(11) NOT NULL,
        `userId` int(11) NOT NULL,
        PRIMARY KEY (`id`),
        KEY `userId` (`userId`)，
        CONSTRAINT `avatar_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`id`)
    )ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

    
    CREATE TABLE `user` (
        `id` int(11) NOT NULL AUTO_INCREMENT,
        `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
        `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
        PRIMARY KEY (`id`),
        UNIQUE KEY `name` (`name`)
    ) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

    CREATE TABLE `comment`(
        `id` int(11) NOT NULL AUTO_INCREMENT,
        `content` longtext NOT NULL,
        `postId` int(11) NOT NULL,
        `userId` int(11) NOT NULL,
        `parentId` int(11) DEFAULT NULL,
        KEY `userId` (`userId`),
        KEY `postId` (`postId`),
        KEY `parentId` (`parentId`),
        CONSTRAINT `comment_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`id`),
    )


- 部署
    - 本地部署
        测试数据和服务端代码  blog.sql
    - 远程部署
        阿里云服务器 blog.sql
    - 分布式部署
        blog.sql mysql 运行一下
