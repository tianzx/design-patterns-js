require.config({
    //By default load any module IDs from scripts/app
    baseUrl: '../../js',
    //except, if the module ID starts with "lib"
     paths: {
        lib: '../'
    },
})