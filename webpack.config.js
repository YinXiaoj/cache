module.exports={
    entry:'./src/index.js', //输入文件
    output:{ //输出文件
        path:__dirname,
        filename:'./release/bunble.js'
    },
    module:{
        rules:[{
            test:/\.js?$/,
            exclude:/(node_modeules)/,
            loader:'babel-loader'
        }]
    },
    mode:'development'
}