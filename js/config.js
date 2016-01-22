require.config({
    //By default load any module IDs from scripts/app
    baseUrl: 'js/lib',
    //except, if the module ID starts with "lib"
    paths: {
        app: '../app'
    },
})
// Start the main app logic.
//requirejs(['jquery','app/composite/composite'],
//function   ($,composite) {
//});