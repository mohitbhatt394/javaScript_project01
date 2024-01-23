(function connection(){
    console.log('DB connected');
})(); //add semicolon to stop execution from there

((name)=>{
    console.log(`DB connected two to ${name}`);
})('mohit');