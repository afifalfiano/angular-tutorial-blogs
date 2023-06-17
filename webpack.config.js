const CompressionPlugin = require(`compression-webpack-plugin`);
const BrotliPlugin = require(`brotli-webpack-plugin`);
module.exports = {
    plugins:[
        new BrotliPlugin({
            asset: '[fileWithoutExt].[ext].br',
            test: /\.(js|css|html|svg|txt|eot|otf|ttf|gif)$/
        }),
        new CompressionPlugin({
            test: /\.(js|css|html|svg|txt|eot|otf|ttf|gif)$/,
            filename(info){
                let opFile= info?.filename?.split('.'),
                opFileType =  opFile?.pop(),
                opFileName = opFile?.join('.');
                return `${opFileName}.${opFileType}.gzip`;
            }
        })
    ],
}
