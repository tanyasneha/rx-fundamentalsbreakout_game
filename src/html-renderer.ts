import { gameSize } from './constants';
import { Player, Ball, GameObject } from './interfaces';

const empty = 0;
const plyer = 1;
const bll = 2;
const brick = 3;
const bgColor: string = 'background-color';
const borderRadius: string = "border-radius";
let value: string;
let value1: string;

const createElem = (col:number) => {
  const elem = document.createElement('div');
  elem.classList.add('board');
  elem.style.display = 'inline-block';
  elem.style.marginLeft = '10px';
  elem.style.height = '6px';
  elem.style.width = '6px';
  elem.style.setProperty(bgColor, value = 
    col === empty
      ? 'white'
      : col === plyer
      ? 'cornflowerblue'
      : col === bll
      ? 'gray'
      : 'silver'
    );
  elem.style.setProperty(borderRadius, value1 = col === bll ? '100%' : '0%');
  return elem;
};

export const render = ([player, ball, bricks]: [
  Player,
  Ball,
  GameObject[]
]) => {
  const game = Array(gameSize)
    .fill(0)
    .map(e => Array(gameSize).fill(0));
  game[player.x][player.y] = plyer;
  game[ball.x][ball.y] = bll;
  bricks.forEach(b => (game[b.x][b.y] = brick));

  document.body.innerHTML = `Score: ${player.score} Lives: ${player.lives} <br/>`;
  game.forEach(r => {
    const rowContainer = document.createElement('div');
    r.forEach(c => rowContainer.appendChild(createElem(c)));
    document.body.appendChild(rowContainer);
  });
};