const path=require("path");
module.exports={
    mode:"development",
    //enrty point
    entry:"./src/index.js",
    //output point
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "main.js",
      },
      //loader
      module:{
      rules:[
        {
          test:/\.css$/,
          use:[
            'style-loader',
            'css-loader'
          ]
        }
      ]
      },
      //server 
      devServer:{
        open:path.join(__dirname,'dist'),
        compress:true,
        port:4700
      }
}