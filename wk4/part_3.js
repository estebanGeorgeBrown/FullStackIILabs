var start = process.hrtime();
setInterval(() => null, 1000);
process.on('exit', () => {
    var precision = 3;
    var elapsed = process.hrtime(start)[1] / 1000000;
    var uptime = process.uptime()
    console.log(`\nProcess uptime: ${uptime} s`);
    console.log(`Process uptime on exit: ${process.hrtime(start)[0]} s ${elapsed.toFixed(precision)} ms`);
});

process.on('SIGINT', () => {
    process.exit();
});