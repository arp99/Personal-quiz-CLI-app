const readLineSync = require('readline-sync');
const chalk = require('chalk');

const questions = [
    {
        question: 'Where does Arpan Live?',
        options: {
            a: 'Haldia',
            b: 'Bankura',
            c: 'Durgapur',
            d: 'Kolkata'
        },
        correctAns: 'a'
    },
    {
        question: 'What is Arpan\'s dream job?',
        options: {
            a: 'Astronaut',
            b: 'Actor',
            c: 'Programmer',
            d: 'Scientist/Researcher'
        },
        correctAns: 'c'
    },
    {
        question: 'What is Arpan\'s favorite sport?',
        options: {
            a: 'Badminton',
            b: 'Footbal',
            c: 'Cricket',
            d: 'Volleyball'
        },
        correctAns: 'd'
    },
    {
        question: 'If Arpan could be a cartoon character for a day, who would it be?',
        options: { 
            a: 'Tom',
            b: 'Dekisugi',
            c: 'Sinchan',
            d: 'Donuld duck'
        },
        correctAns: 'b'
    },
    {
        question: 'How many siblings does Arpan have?',
        options: {
            a: '0',
            b: '5',
            c: '2',
            d: '1'
        },
        correctAns: 'd'
    },
    {
        question: 'Where does Arpan want to travel?',
        options: {
            a: 'Hill Station',
            b: 'Beach',
            c: 'Historical Sites',
            d: 'Jungle Safari'
        },
        correctAns: 'c'
    },
    {
        question: 'What drink does Arpan like?',
        options: { 
            a: 'Black Tea',
            b: 'Black coffee',
            c: 'Milk',
            d: 'Fruit Juice'
        },
        correctAns: 'a'
    },
    {
        question: 'If Arpan could instantly speak fluently any other language, what would that language be?',
        options: {
            a: 'French',
            b: 'German',
            c: 'Japanese',
            d: 'Spanish'
        },
        correctAns: 'b'
    },
    {
        question: 'Is Arpan single or taken?',
        options: {
            a: 'Single-Marega',
            b: 'Taken',
            c: 'Complicated',
            d: 'Apun Bhagwan hai'
        },
        correctAns: 'b'
    },
    {
        question: 'How many kids will Arpan have?',
        options: {
            a: '10',
            b: '3',
            c: '2',
            d: '-1'
        },
        correctAns: 'c'
    }
]

function quizPlay(){
    let currScore = 0,ans,Qno = 1;
    
    const name = readLineSync.question(chalk.redBright.bold('What is your name? '));
    console.log(chalk.green.bold(chalk`Welcome {red ${name}}! Come let's see how much you know Arpan...`));

    for(let i = 0;i<questions.length;i++){
        console.log(chalk.bold`\n${Qno++}.{blue ${questions[i].question}}\n`);

        let bgR = chalk.bgRedBright.bold,colYel = chalk.yellowBright;
        console.log(`${bgR('a:')} ${colYel(questions[i].options.a)}\n${bgR('b:')} ${colYel(questions[i].options.b)}\n${bgR('c:')} ${colYel(questions[i].options.c)}\n${bgR('d:')} ${colYel(questions[i].options.d)}`);
        ans = readLineSync.question('Enter your choice: ');
        if(ans.toLowerCase() === questions[i].correctAns){
            console.log(chalk.greenBright('\nCorrect Answer!'));
            console.log(chalk.greenBright('--------------------'));
            currScore+=1;
            console.log(`Current Score: ${currScore}`);
        }else{
            console.log(chalk.redBright('\nWrong Answer!'));
            console.log(chalk.redBright('--------------------'));
            console.log(chalk.cyanBright`Correct answer: ${questions[i].correctAns}`);
            console.log(`Current Score: ${currScore}`);
        }
    }
    console.log(`Yayy!! Your total Score: ${currScore}`);    
}

quizPlay();