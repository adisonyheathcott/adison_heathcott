const ghpages = process.env.DEPLOY_TARGET === 'gh-pages';

module.exports = {
    // exportPathMap: function() {
    //     return {
    //         "/": { page: "/" },
    //         "/posts": { page: "/posts"}
    //     }
    // },

    assetPrefix: ghpages ? '/adisonyheathcott.github.io/adison_heathcott/' : '',
    webpack: (config, {dev}) => {
        config.module.rules = config.module.rules.map(rule => {
            if (rule.loader === 'babel-loader') {
                rule.options.cacheDirectory = false
            }
            return rule
        })

        config.module.rules.push({
            test: /\.md$/,
            use: 'raw-loader',
        })

        return config
    }
}