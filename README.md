## bin:项目的启动文件   
## node_modules:项目的依赖库    
## public:项目的静态文件（css,js,img等）    
## routes:项目的路由 
## src/controllers 项目相关控制器（里面写相关操作）
## src/model 项目相关的一些对象定义   
## views:试图目录文件（html）   
## app.js：项目的入口和程序启动文件 
## package.json:项目的基本信息（名称，版本等信息） 
---     
#### npm是javascript世界的包管理工具，并且是node.js平台的默认包管理工具。   
#### 全局安装和本地安装（局部安装） 
全局安装 ```npm install 'package_name' -g```    //-global    使用 ```npm root -g```查看全局包安装目录    
本地安装 ```npm install 'package_name' --save```  或者 ```npm install 'package_name' --save-dev```  
### 对于上述的两种本地安装的方式，涉及到‘开发依赖’和‘生产依赖’ （开发环境和生产环境）   
通俗的讲：所谓开发依赖就是在开发环境中用到的依赖，生产依赖就是在生产环境中用到的依赖。而开发环境就是我们还在编写代码阶段的时候，生产环境就是项目已经完成编码，并发布上线可供用户浏览的阶段。  

```npm install 'package_name' --save``` 保存在‘生产环境’	
```npm install 'package_name' --save-dev```  保存在‘开发环境’   

 区别在于： 某些包我只需要在编写代码的时候使用，有助于我编写开发代码，而我完成开发后，上线时不需要这些依赖包，这时候就保存在开发环境中。而有些依赖包，在开发的时候我需要，上线仍然需要，这时候就保存在生产环境，这样打包上线会自动将这些包打包上去。
 
## 认识HTTP请求  test-http.js
 - DNS(域名解析系统)解析，建立TCP连接，然后发起HTTP请求 
 - 服务端接收到HTTP请求，进行处理，返回数据 
 - 客户端接收到返回的数据，处理数据（例如渲染页面等）       
  
### 处理GET请求  客户端-》服务端 获取数据  test-get.js
### 处理post请求   客户端(桶)---流stream---》服务端(桶) 发送数据   test-post.js


### 箭头函数？
### 回调函数callback 到底是什么东西？


## 数据库操作   
-- show tables;

-- insert into blogs (title,content,author,createdAt) value ('','','','');

-- select * from blogs;

-- select id,author from blogs;

-- select * from blogs where author like '%张%' order by id desc;  //模糊查询排序降序

-- update blogs set title = '' where id = '';

-- delete from blogs where title = '';           //硬删除   
-- select * from where state = '1';    // 软删除，通过将state状态码改变实现删除  !=0 ==> <>0    
-- update blogs set state = '0' where author = 'zhangsan'
