import './style.css';
import svgIcon from './assets/programmingIllustration.svg';
import projectOneImg from './assets/tictactoe.png';
import projectTwoImg from './assets/todolist.png';
import projectThreeImg from './assets/calculator.png';
import projectFourImg from './assets/virtualLibrary.png';
import linkedInImg from './assets/linkedin.svg';
import githubImg from './assets/github.svg';
import mailImg from './assets/mail.png';


import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const illustration = document.querySelector('#programmingIllustration');
illustration.src = svgIcon;

const projectOne = document.getElementById("projectOneImg");
projectOne.src = projectOneImg;

const projectTwo = document.getElementById("projectTwoImg");
projectTwo.src = projectTwoImg;

const projectThree = document.getElementById("projectThreeImg");
projectThree.src = projectThreeImg;

const projectFour = document.getElementById("projectFourImg");
projectFour.src = projectFourImg;

const linkedIn = document.getElementById('linkedInImg');
linkedIn.src = linkedInImg;

const github = document.getElementById('githubImg');
github .src = githubImg;

const mail = document.getElementById('mailImg');
mail.src = mailImg;