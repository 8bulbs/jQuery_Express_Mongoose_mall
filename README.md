
#仿某商场官网

#[项目线上演示（阿里云）](http://47.100.199.139:8000)：  http://47.100.199.139:8000

#项目技术栈

- FrontEnd:jQuery
- ServerEnd: nodejs(express、mongoose)
- database: mongodb

#核心功能：
商品分类检索条件的单选和多选

#页面组成

- 首页
- 商品列表页
- 商品详情页
- 购物车页

#header功能:
- 弹出模态框实现登录和注册
- 显示购物车商品数量
- 搜索帮助
- 纯CSS下拉菜单

#首页功能:
- 带缩略图的轮播图
- 楼层滚动与点亮

#商品列表功能：
- banner图的纯CSS动画
- 商品的分类检索,可实现单选和多选
- 销量与价格的排序
- 分页
- 添加到购物车

#购物车功能:
- 全选,单选
- 单项删除,批量删除,清空购物车



# start server
$ pm2 start bin/www


# database file
sennhaiser_mongodb.js
