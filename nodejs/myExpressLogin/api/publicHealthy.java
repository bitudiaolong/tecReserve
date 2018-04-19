
public class publicHealthy {      
     /**
     * @apiGroup Project
     * @api {POST} addProject 01、添加新项目
     * @apiVersion 1.0.0
     * @apiName addProject
     * @apiParam (功能请求参数) {String} shortName 项目简称，必填
     * @apiParam (功能请求参数) {String} fullName 项目全称，必填
     * @apiParam (功能请求参数) {String} projectManager  项目经理，必填
     * @apiParam (功能请求参数) {String} customer  项目客户，必填
     * @apiParam (功能请求参数) {String} version  项目版本，必填，v1.0.0
     * @apiParam (功能请求参数) {String} status  项目状态，必填
     * @apiParam (功能请求参数) {String} createTime  立项时间，必填，2017-12-12
     * @apiParam (功能请求参数) {String} endTime  结束时间，必填，2017-12-28
     * @apiParam (功能请求参数) {String} description  项目描述，必填
     * @apiParam (功能请求参数) {String} level  优先级，必填
     * @apiSuccessExample {JSON} 执行成功示例:
     *  {
     *      "errcode":0,
     *      "errmsg": "",
     *      "data":{}
     *  }
     */

     /**
     * @apiGroup Project
     * @api {POST} modifyProject 02、项目信息修改
     * @apiVersion 1.0.0
     * @apiName modifyProject
	* @apiParam (功能请求参数) {String} shortName 项目简称，必填
     * @apiParam (功能请求参数) {String} fullName 项目全称，必填
     * @apiParam (功能请求参数) {String} projectManager  项目经理，必填
     * @apiParam (功能请求参数) {String} customer  项目客户，必填
     * @apiParam (功能请求参数) {String} version  项目版本，必填
     * @apiParam (功能请求参数) {String} status  项目状态，必填
     * @apiParam (功能请求参数) {String} createTime  立项时间，必填
     * @apiParam (功能请求参数) {String} endTime  结束时间，必填
     * @apiParam (功能请求参数) {String} description  项目描述，必填
     * @apiParam (功能请求参数) {String} level  优先级，必填
     * @apiSuccessExample {JSON} 执行成功示例:
     *  {
     *      "errcode":0,
     *      "errmsg": "",
     *      "data":{}
     *  }
     */

     /**
     * @apiGroup Project
     * @api {POST} selectProjectDetail 03、获取项目详情
     * @apiVersion 1.0.0
     * @apiName selectProjectDetail
     * @apiParam (功能请求参数) {String} projectId 项目id，必填
     * @apiSuccess (返回元素对象属性) {String} shortName 项目简称
     * @apiSuccess (返回元素对象属性) {String} fullName 项目全称
     * @apiSuccess (返回元素对象属性) {String} projectManager  项目经理
     * @apiSuccess (返回元素对象属性) {String} customer  项目客户
     * @apiSuccess (返回元素对象属性) {String} version  项目版本
     * @apiSuccess (返回元素对象属性) {String} status  项目状态
     * @apiSuccess (返回元素对象属性) {String} createTime  立项时间
     * @apiSuccess (返回元素对象属性) {String} endTime  结束时间
     * @apiSuccess (返回元素对象属性) {String} description  项目描述
     * @apiSuccess (返回元素对象属性) {String} level  优先级
     * @apiSuccessExample {JSON} 执行成功示例:
     *  {
     *      "errcode":0,
     *      "errmsg": "",
     *      "data":{
     *        "shortName":"广传",
     *        "fullName":"北京广传",
     *        "projectManager":"玄苦",
     *        "customer":"央视",
     *        "version":"v1.1.0",
     *        "status":"测试",
     *        "devCycle":"3个月",
     *        "createTime":"2017-12-10",
     *        "endTime":"2017-12-27",
     *        "description":"广传是业内xxxx的xxx",
     *        "level":"1"
     *	  }
     *  }
     */

     /**
     * @apiGroup Project
     * @api {POST} getProjecAllList 04、获取项目列表
     * @apiVersion 1.0.0
     * @apiName getProjecAllList
     * @apiParam (功能请求参数) {String} userId 用户id，选填，不填获取全部，填获取个人
     * @apiSuccess (返回数据对象属性) {Array} list 项目列表
     * @apiSuccess (list内元素对象属性) {String} shortName 项目简称
     * @apiSuccess (list内元素对象属性) {String} fullName 项目全称
     * @apiSuccess (list内元素对象属性) {String} projectManager  项目经理
     * @apiSuccess (list内元素对象属性) {String} customer  项目客户
     * @apiSuccess (list内元素对象属性) {String} version  项目版本
     * @apiSuccess (list内元素对象属性) {String} status  项目状态
     * @apiSuccess (list内元素对象属性) {String} createTime  立项时间
     * @apiSuccess (list内元素对象属性) {String} endTime  结束时间
     * @apiSuccess (list内元素对象属性) {String} description  项目描述
     * @apiSuccess (list内元素对象属性) {String} level  优先级
     */

     /**
     * @apiGroup Project
     * @api {POST} deleteProject 05、删除项目
     * @apiVersion 1.0.0
     * @apiName deleteProject    
     * @apiParam (功能请求参数) {String}  id 项目id，必填
     * @apiSuccessExample {JSON} 执行成功示例:
     *  {
     *      "errcode":0,
     *      "errmsg": "",
     *      "data":{}
     *  }
     */

     /**
     * @apiGroup User
     * @api {POST} login 01、登录
     * @apiVersion 1.0.0
     * @apiName login
     * @apiParam (功能请求参数) {String} username 用户名，必填
     * @apiParam (功能请求参数) {String} password 密码，必填
     * @apiSuccess (返回数据对象属性) {String} userId 用户id
     * @apiSuccess (返回数据对象属性) {String} devGroup 用户组
     * @apiSuccessExample {JSON} 执行成功示例:
     * {
     *      "errcode":0,
     *      "errmsg": "success",
     *      "data":{
     *         "userId":"0",
     *         "devGroup":"100000000001"
     *      }
     * } 
     */

     /**
     * @apiGroup User
     * @api {post} regist 02、注册
     * @apiVersion 1.0.0
     * @apiName regist
     * @apiParam (功能请求参数) {String} name 姓名，必填
     * @apiParam (功能请求参数) {String} sex 性别，必填
     * @apiParam (功能请求参数) {String} password 密码，必填
     * @apiParam (功能请求参数) {String} username 账号，必填    
     * @apiSuccessExample {JSON} 执行成功示例:
     *  {
     *      "errcode":0,
     *      "errmsg": "success",
     *      "data":{}
     * }
     */

     /**
     * @apiGroup User
     * @api {post} getUserInfo 03、获取用户信息
     * @apiVersion 1.0.0
     * @apiName getUserInfo
     * @apiParam (功能请求参数) {String} userId 用户id，必填
     * @apiSuccess (返回数据对象属性) {String} sex 性别
     * @apiSuccess (返回数据对象属性) {String} account 用户名
     * @apiSuccess (返回数据对象属性) {String} role 角色
     * @apiSuccess (返回数据对象属性) {String} name 用户列表
     * @apiSuccess (返回数据对象属性) {String} devGroup 用户组
     * @apiSuccess (返回数据对象属性) {String} status 账号状态
     * @apiSuccess (返回数据对象属性) {String} jobPosition 职位
     * @apiSuccess (返回数据对象属性) {String} path 头像
     * @apiSuccess (返回数据对象属性) {String} email 邮件
     * @apiSuccess (返回数据对象属性) {String} address 地址
     * @apiSuccess (返回数据对象属性) {String} phone 电话
     * @apiSuccess (返回数据对象属性) {String} nickName 花名
     * @apiSuccess (返回数据对象属性) {String} addTime 入职时间
     * @apiSuccess (返回数据对象属性) {String} returnTime 转正时间
     * @apiSuccess (返回数据对象属性) {String} leader 汇报领导
     */

     /**
     * @apiGroup User
     * @api {POST} getUserList 04、获取用户列表
     * @apiVersion 1.0.0
     * @apiName getUserList
     * @apiParam (功能请求参数) {String} userId 用户id
     * @apiSuccess (返回数据对象属性) {Array} list 用户列表
     * @apiSuccess (list数据对象属性) {String} sex 性别
     * @apiSuccess (list数据对象属性) {String} account 用户名
     * @apiSuccess (list数据对象属性) {String} role 角色
     * @apiSuccess (list数据对象属性) {String} name 用户列表
     * @apiSuccess (list数据对象属性) {String} devGroup 用户组，1是java，2是h5，3是测试，4是设计，5是产品，6是运维，7是android，8是iOS
     * @apiSuccess (list数据对象属性) {String} status 账号状态
     * @apiSuccess (list数据对象属性) {String} jobPosition 职位
     * @apiSuccess (list数据对象属性) {String} path 头像
     * @apiSuccess (list数据对象属性) {String} email 邮件
     * @apiSuccess (list数据对象属性) {String} address 地址
     * @apiSuccess (list数据对象属性) {String} phone 电话
     * @apiSuccess (list数据对象属性) {String} nickName 花名
     * @apiSuccess (list数据对象属性) {String} addTime 入职时间
     * @apiSuccess (list数据对象属性) {String} returnTime 转正时间
     * @apiSuccess (list数据对象属性) {String} leader 汇报领导
     * @apiSuccessExample {JSON} 执行成功示例:
     *  {
     *      "errcode":0,
     *      "errmsg": "success",
     *      "data":{
     *         "list":[{
     *            "sex":"男",
     *            "account":"gc_xuanku",
     *            "role":"0",
     *            "name":"18",
     *            "devGroup":"1",
     *            "status":"0",
     *            "jobPosition":"13913900222",
     *            "path":"18",
     *            "email":"张三",
     *            "address":"0",
     *            "phone":"13913900222",
     *            "nickName":"18",
     *            "addTime":"18",
     *            "returnTime":"18",
     *            "leader":"18"
     *          }]
     *      }
     * } 
     */   

     /**
     * @apiGroup User
     * @api {POST} modifyStatus 05、禁用用户
     * @apiVersion 1.0.0
     * @apiName modifyStatus
     * @apiParam (功能请求参数) {String} userId  用户id，必填
     * @apiParam (功能请求参数) {String} status  状态，必填，1禁用、2启用
     * @apiSuccessExample {JSON} 执行成功示例:
     *  {
     *      "errcode":0,
     *      "errmsg": "",
     *      "data":{}
     *  }
     */

    /**
     * @apiGroup User
     * @api {POST} getProjectDevList 06、获取项目组开发人员列表
     * @apiVersion 1.0.0
     * @apiName getProjectDevList
     * @apiParam (功能请求参数) {String} projectId  项目id，必填
     * @apiSuccess (返回元素对象属性) {String} id 用户id
     * @apiSuccess (返回元素对象属性) {String} devGroup 用户组，1是java，2是h5，3是测试，4是设计，5是产品，6是运维，7是android，8是iOS
     * @apiSuccess (返回元素对象属性) {String} name 用户姓名
     * @apiSuccessExample {JSON} 执行成功示例:
     *  {
     *      "errcode":0,
     *      "errmsg": "",
     *      "data":{
     *         "list":[{
     *              "id":"60",
     *              "devGroup":"76",
     *              "name":"89"
     *          }]
     *      }
     * }
     */

     /**
     * @apiGroup User
     * @api {POST} roleModify 07、用户角色修改
     * @apiVersion 1.0.0
     * @apiName roleModify
     * @apiParam (功能请求参数) {String} userId 用户id，必填
     * @apiParam (功能请求参数) {String} role  角色，必填，1超级管理员，2管理员，3，普通用户
     * @apiSuccessExample {JSON} 执行成功示例:
     *  {
     *      "errcode":0,
     *      "errmsg": "",
     *      "data":{}
     *  }
     */

     /**
     * @apiGroup User
     * @api {POST} deleteUser 08、删除用户
     * @apiVersion 1.0.0
     * @apiName deleteUser
     * @apiParam (功能请求参数) {String} userId  用户id，必填
     * @apiParam (功能请求参数) {String} idDelete  逻辑删除，必填，0正常，1删除
     * @apiSuccessExample {JSON} 执行成功示例:
     *  {
     *      "errcode":0,
     *      "errmsg": "",
     *      "data":{}
     *  }
     */

     /**
     * @apiGroup User
     * @api {POST} modifyUser 09、修改用户信息
     * @apiVersion 1.0.0
     * @apiName modifyUser
     * @apiParam (功能请求参数) {String} userId  用户id，必填
     * @apiParam (功能请求参数) {String} nickName 花名，必填
     * @apiParam (功能请求参数) {String} name  姓名，必填
     * @apiParam (功能请求参数) {String} sex  性别，必填
     * @apiParam (功能请求参数) {String} jobPosition  职位，必填
     * @apiParam (功能请求参数) {String} path  头像，必填，公网地址
     * @apiParam (功能请求参数) {String} email  邮箱，必填，企业邮箱
     * @apiParam (功能请求参数) {String} address  地址，必填
     * @apiParam (功能请求参数) {String} phone  手机号，必填
     * @apiSuccessExample {JSON} 执行成功示例:
     *  {
     *      "errcode":0,
     *      "errmsg": "",
     *      "data":{}
     *  }
     */

     /**
     * @apiGroup User
     * @api {POST} modifyDevGroup 10、修改用户组
     * @apiVersion 1.0.0
     * @apiName modifyDevGroup
     * @apiParam (功能请求参数) {String} userId  用户id，必填
     * @apiParam (功能请求参数) {String} devGroup  用户组，1是java，2是h5，3是测试，4是设计，5是产品，6是运维，7是android，8是iOS
     * @apiSuccessExample {JSON} 执行成功示例:
     *  {
     *      "errcode":0,
     *      "errmsg": "",
     *      "data":{}
     *  }
     */

     /**
     * @apiGroup UploadImg
     * @api {POST} getUtoken 01、七牛js上传获取token 不可跨域
     * @apiVersion 1.0.0
     * @apiName getUtoken
     * @apiSuccessExample {JSON} 执行成功示例:
     *  {
     *      "errcode":0,
     *      "errmsg": "",
     *      "data":{
     *         "token":""
     *      }
     *  }
     */

     /**
     * @apiGroup Weekly
     * @api {POST} fweeklyAdd 01、写周报
     * @apiVersion 1.0.0
     * @apiName fweeklyAdd
     * @apiParam (功能请求参数) {String} userId 用户id，必填
     * @apiParam (功能请求参数) {String} title  标题，必填
     * @apiParam (功能请求参数) {String} content  内容，必填，富文本
     * @apiParam (功能请求参数) {String} devGroup  用户组，必填，1是java，2是h5，3是测试，4是设计，5是产品，6是运维，7是android，8是iOS
     * @apiSuccessExample {JSON} 执行成功示例:
     *  {
     *      "errcode":0,
     *      "errmsg": "",
     *      "data":{}
     *  }
     */   
     
     /**
     * @apiGroup Weekly
     * @api {POST} fweeklyUpdate 02、更新周报
     * @apiVersion 1.0.0
     * @apiName fweeklyUpdate
     * @apiParam (功能请求参数) {String} id 周报id，必填
     * @apiParam (功能请求参数) {String} title  标题，必填
     * @apiParam (功能请求参数) {String} content  内容，必填，富文本
     * @apiSuccessExample {JSON} 执行成功示例:
     *  {
     *      "errcode":0,
     *      "errmsg": "",
     *      "data":{}
     *  }
     */

     /**
     * @apiGroup Weekly
     * @api {POST} fweeklyUpdateCallback 03、更新回显
     * @apiVersion 1.0.0
     * @apiName fweeklyUpdateCallback
     * @apiParam (功能请求参数) {String} id 周报id，必填
     * @apiSuccessExample {JSON} 执行成功示例:
     *  {
     *      "errcode":0,
     *      "errmsg": "",
     *      "data":{}
     *  }
     */

     /**
     * @apiGroup Weekly
     * @api {POST} fweeklySelect 04、获取周报列表
     * @apiVersion 1.0.0
     * @apiName fweeklySelect
     * @apiParam (功能请求参数) {String} userId 用户id，必填
     * @apiParam (功能请求参数) {String} devGroup 用户组，必填，1是java，2是h5，3是测试，4是设计，5是产品，6是运维，7是android，8是iOS
     * @apiSuccess (返回数据对象属性) {String} id 周报id
     * @apiSuccess (返回数据对象属性) {String} userId 用户id
     * @apiSuccess (返回数据对象属性) {String} content 内容
     * @apiSuccess (返回数据对象属性) {String} title 标题
     * @apiSuccess (返回数据对象属性) {String} date 日期
     * @apiSuccess (返回数据对象属性) {String} devGroup 用户组
     * @apiSuccessExample {JSON} 执行成功示例:
     *  {
     *      "errcode":0,
     *      "errmsg": "",
     *      "data":{
     *         "id":"",
     *         "userId":"",
     *         "content":"",
     *         "title":"",
     *         "date":"",
     *         "devGroup":""
     *      }
     *  }
     */

     /**
     * @apiGroup Calendar
     * @api {POST} fcalendarAdd  01、创建日程
     * @apiVersion 1.0.0
     * @apiName fcalendarAdd
     * @apiSuccess (data元素对象属性) {Int} id 日程id
     * @apiSuccess (data元素对象属性) {Int} title 标题
     * @apiSuccess (data元素对象属性) {Int} start 开始时间
     * @apiSuccess (data元素对象属性) {Int} end 结束时间
     * @apiSuccess (data元素对象属性) {Int} userId 用户id
     * @apiSuccess (data元素对象属性) {Int} status 状态
     * @apiSuccess (data元素对象属性) {Int} url 日程链接
     * @apiSuccess (data元素对象属性) {Int} allDay 是否全天
     * @apiSuccess (data元素对象属性) {Int} backgroundColor 全屏颜色
     * @apiSuccess (data元素对象属性) {Int} textColor 字体颜色
     * @apiSuccessExample {JSON} 执行成功示例:
     *  {
     *      "errcode":0,
     *      "errmsg": "",
     *      "data":{}
     *  }
     */
    
     /**
     * @apiGroup Calendar
     * @api {POST} fcalendarDelete 02、删除日程
     * @apiVersion 1.0.0
     * @apiName fcalendarDelete
     * @apiParam (功能请求参数) {String} id 日程id，必填
     * @apiParam (功能请求参数) {String} status  日程状态（逻辑删除）
     * @apiSuccessExample {JSON} 执行成功示例:
     *  {
     *      "errcode":0,
     *      "errmsg": "",
     *      "data":{}
     *  }
     */

     /**
     * @apiGroup Calendar
     * @api {POST} fcalendarUpdate  03、更新日程
     * @apiVersion 1.0.0
     * @apiName fcalendarUpdate
     * @apiSuccess (data元素对象属性) {Int} id 日程id
     * @apiSuccess (data元素对象属性) {Int} title 标题
     * @apiSuccess (data元素对象属性) {Int} start 开始时间
     * @apiSuccess (data元素对象属性) {Int} end 结束时间
     * @apiSuccess (data元素对象属性) {Int} userId 用户id
     * @apiSuccess (data元素对象属性) {Int} status 状态
     * @apiSuccess (data元素对象属性) {Int} url 日程链接
     * @apiSuccess (data元素对象属性) {Int} allDay 是否全天
     * @apiSuccess (data元素对象属性) {Int} backgroundColor 全屏颜色
     * @apiSuccess (data元素对象属性) {Int} textColor 字体颜色
     * @apiSuccessExample {JSON} 执行成功示例:
     *  {
     *      "errcode":0,
     *      "errmsg": "",
     *      "data":{}
     *  }
     */
  
     /**
     * @apiGroup Calendar
     * @api {POST} fcalendarSelect 04、查看日程
     * @apiVersion 1.0.0
     * @apiName fcalendarSelect
     * @apiSuccess (data元素对象属性) {Int} id 日程id
     * @apiSuccess (data元素对象属性) {Int} title 标题
     * @apiSuccess (data元素对象属性) {Int} start 开始时间
     * @apiSuccess (data元素对象属性) {Int} end 结束时间
     * @apiSuccess (data元素对象属性) {Int} userId 用户id
     * @apiSuccess (data元素对象属性) {Int} status 状态
     * @apiSuccess (data元素对象属性) {Int} url 日程链接
     * @apiSuccess (data元素对象属性) {Int} allDay 是否全天
     * @apiSuccess (data元素对象属性) {Int} backgroundColor 全屏颜色
     * @apiSuccess (data元素对象属性) {Int} textColor 字体颜色
     * @apiSuccessExample {JSON} 执行成功示例:
     *  {
     *      "errcode":0,
     *      "errmsg": "",
     *      "data":{
     *         "id":"",
     *         "title":"",
     *         "start":"",
     *         "end":"",
     *         "userId":"",
     *         "status":"",
     *         "url":"",
     *         "allDay":"",
     *         "backgroundColor":"",
     *         "textColor":""
     *	   }
     *  }
     */    
}
