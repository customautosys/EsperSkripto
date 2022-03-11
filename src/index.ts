import module from 'module';
import {Command} from 'commander';
import * as fs from 'fs';
const require=module.createRequire(import.meta.url);
const packageJson=require('../package.json');

const program=new Command();

program
	.version(packageJson.version)
	.name('esperscript')
	.option('-d, --debug','enables verbose logging',false)
	.option('-v, --verbose','enables verbose logging',false)
	.option('-t, --typescript','the file to be translated is in TypeScript',false)
	.option('-l, --language <language>','translate from the language specified, currently supported languages are: zh-cmn-Hans (Simplified Chinese - Mandarin), eo (Esperanto)')
	.argument('<input-filename>','the input filename in the language to be translated from')
	.argument('[output-filename]','the output filename for JavaScript / TypeScript code')
	.parse(process.argv);

let dictionary:any=null;
try{
	dictionary=require(`./languages/${program.opts().language}.json`);
}catch(error){
	if(program.opts().verbose)console.log(error);
}
if(!dictionary){
	console.log(`Unable to retrieve dictionary for language ${program.opts().language}`);
	process.exit(1);
}

let text:string;
try{
	text=(await fs.promises.readFile(program.args[0],{encoding:'utf8'}));
}catch(error){
	if(program.opts().verbose)console.log(error);
	console.log(`Unable to read ${program.args[0]}`);
	process.exit(1);
}

for(let original in dictionary)text=text.replace(new RegExp(`(^|[\\s\\p{P}])(${original})($|[\\s\\p{P}])`,'ug'),`$1${dictionary[original]??original}$3`);

let outputFilename=program.args[1]??program.args[0];
try{
	await fs.promises.writeFile(outputFilename,text,{encoding:'utf8'});
}catch(error){
	if(program.opts().verbose)console.log(error);
	console.log(`Unable to write ${outputFilename}`);
	process.exit(1);
}