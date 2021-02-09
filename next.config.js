const debug = process.env.NODE_ENV !== 'production';

module.exports = {
    exportPathMap: function() {
        return {
            "/adison_heathcott": { page: "/" },
            "/adison_heathcott/posts": { page: "/posts"}
        }
    },

    assetPrefix: !debug ? '/adison_heathcott/' : '',
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