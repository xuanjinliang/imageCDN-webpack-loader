### 安装

```javascript
   npm install imageCDN-webpack-loader --save-dev
```

### 使用

```
	webpack.config.js
       
    let env = process.env.NODE_ENV || 'production', //环境设置
    imageCDN = '';                              //图片的域名

	if(env === 'production'){
	    imageCDN = (function(){
	        let array = ['http://x1.xx.xxx','http://x2.xx.xxx','http://x3.xx.xxx'],
	            str = '';
	
	        array.forEach(function(o){
	            str += 'domain[]='+o+',';
	        });
	        return str;
	    })();
	}else if(env === 'test'){
	    imageCDN = 'domain=http://xxxxx';
	}
	....................
	module: {
        loaders: [
                        {
                test: /\.(jpe?g|png|gif|svg)$/,
                loaders:[
                    'imageCDN-webpack?'+imageCDN ,
                    'file-loader?name=[path][name][hash].[ext]',		//或者url-loader
                ]
            }
        ]
    }

```

跟据自己设定的环境变量，来替换css中或者import image form ',,/imags/xxx.jpg'中的域名；

(欢迎反馈BUG，方便提升插件的质量)

