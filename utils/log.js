const chalk = require('chalk');
module.exports = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.bold.hex("#FF006A").bold('[ Error ] » ') + data);
			break;
		case "error":
			console.log(chalk.bold.hex("#FF006A").bold('[ Error ] »') + data);
     break;
		default:			        
                        console.log(chalk.bold.hex("#00BFFF").bold(`${option} » `) + data);
			break;
	}
}

module.exports.loader = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.bold.hex("#BF00FF").bold('[ DAVE ] » ') + data);
			break;
		case "error":
			console.log(chalk.bold.hex("#BF00FF").bold('[ DAVE ] » ') + data);
			break;
		default:
			console.log(chalk.bold.hex("#BF00FF").bold(`[ DAVE ] » `) + data);
			break;
	}
	}