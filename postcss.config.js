// CSS common variables
const commonVariables = require("./css/src/variables-common");
const themes = require("./css/src/variables-themes");

module.exports = ctx => {
    // select the proper set of theming varaiables from themes
    // the site css file name is used as the key to choose the proper theme
    const themeName = ctx.file.basename.split(".")[0];
    const themeVariables = themes[themeName];

    // we merge the common variables with the theme variables
    const variables = Object.assign({}, themeVariables, commonVariables);

    // just a console log to let you know which css file is being built
    // you can remove this if you don't want the feedback
    console.log(`>>> Building ${ctx.file.basename}`);

    // return the postcss config object
    return {
        map: ctx.env === "production" ? false : ctx.options.map,
        plugins: {
            "postcss-import": {
                root: ctx.file.dirname
            },
            "postcss-simple-vars": {
                variables: variables
            },
            cssnano: {
                preset: "default",
                calc: false
            }
        }
    };
};
